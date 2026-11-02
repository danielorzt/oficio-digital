import { getAdapter } from "./adapters";
import { forms, isFormKey, toFieldErrors, type FormKey } from "./schemas";
import { rateLimit } from "./rate-limit";

export async function handleFormPost(request: Request, form: string): Promise<Response> {
  if (!isFormKey(form)) {
    return Response.json({ ok: false, error: "Formulario no encontrado" }, { status: 404 });
  }
  const key: FormKey = form;

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`${key}:${ip}`)) {
    return Response.json({ ok: false, error: "Demasiados envíos" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Solicitud inválida" }, { status: 400 });
  }

  const parsed = forms[key].safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, fieldErrors: toFieldErrors(parsed.error) }, { status: 422 });
  }

  const data = { ...(parsed.data as Record<string, unknown>) };
  if (data.website) return Response.json({ ok: true });
  delete data.website;

  try {
    const { id } = await getAdapter().submit(key, data, { createdAt: new Date().toISOString() });
    return Response.json({ ok: true, id });
  } catch (error) {
    console.error("[forms] error al guardar", key, error);
    return Response.json(
      { ok: false, error: "No pudimos guardar tus respuestas. Intenta de nuevo." },
      { status: 502 },
    );
  }
}

export async function handleIndicators(): Promise<Response> {
  try {
    return Response.json(await getAdapter().indicators());
  } catch (error) {
    console.error("[forms] error al contar", error);
    return Response.json({ ok: false, error: "No se pudieron leer los indicadores" }, { status: 502 });
  }
}

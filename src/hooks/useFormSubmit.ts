import { useCallback, useRef, useState } from "react";
import { forms, toFieldErrors, type FormKey } from "@/lib/forms/schemas";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(formKey: FormKey) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const inFlight = useRef(false);

  const reset = useCallback(() => {
    setStatus("idle");
    setFieldErrors({});
    setMessage(null);
  }, []);

  const submit = useCallback(
    async (raw: Record<string, unknown>): Promise<boolean> => {
      if (inFlight.current) return false;

      const parsed = forms[formKey].safeParse(raw);
      if (!parsed.success) {
        setFieldErrors(toFieldErrors(parsed.error));
        setMessage("Revisa los campos marcados.");
        setStatus("error");
        return false;
      }

      inFlight.current = true;
      setStatus("submitting");
      setFieldErrors({});
      setMessage(null);

      try {
        const response = await fetch(`/api/forms/${formKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });
        const json = (await response.json().catch(() => ({}))) as {
          ok?: boolean;
          error?: string;
          fieldErrors?: Record<string, string>;
        };

        if (response.ok && json.ok) {
          setStatus("success");
          return true;
        }
        if (response.status === 422 && json.fieldErrors) setFieldErrors(json.fieldErrors);
        setMessage(
          response.status === 429
            ? "Demasiados envíos seguidos. Espera unos minutos."
            : (json.error ?? "No pudimos guardar tus respuestas. Intenta de nuevo."),
        );
        setStatus("error");
        return false;
      } catch {
        setMessage("Sin conexión. Revisa tu internet e intenta de nuevo.");
        setStatus("error");
        return false;
      } finally {
        inFlight.current = false;
      }
    },
    [formKey],
  );

  return { status, fieldErrors, message, submit, reset };
}

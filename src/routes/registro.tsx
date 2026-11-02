import { createFileRoute, Link } from "@tanstack/react-router";
import { FormRenderer } from "@/components/forms/FormRenderer";
import { Shell } from "@/components/shell";
import { registroSections } from "@/lib/forms/fields";

export const Route = createFileRoute("/registro")({
  component: RegistroPage,
  head: () => ({ meta: [{ title: "Inscripción a talleres · Oficio Digital" }] }),
});

function RegistroPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Semanas 4 a 6</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Inscríbete a una sesión</h1>
        <p className="mt-4 text-muted">
          Elige el taller de inglés técnico o una de las sesiones de IA. El cupo de referencia es de 10 a 15 personas.
          Consulta el{" "}
          <Link to="/privacidad" className="font-bold text-accent-ink underline underline-offset-4">
            aviso de privacidad
          </Link>
          .
        </p>
        <div className="mt-10">
          <FormRenderer
            formKey="registro_taller"
            sections={registroSections}
            submitLabel="Confirmar inscripción"
            successMessage="Quedaste inscrito. Te escribimos con el enlace de la sesión."
          />
        </div>
      </div>
    </Shell>
  );
}

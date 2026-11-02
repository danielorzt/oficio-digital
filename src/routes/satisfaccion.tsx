import { createFileRoute } from "@tanstack/react-router";
import { FormRenderer } from "@/components/forms/FormRenderer";
import { Shell } from "@/components/shell";
import { satisfaccionSections } from "@/lib/forms/fields";

export const Route = createFileRoute("/satisfaccion")({
  component: SatisfaccionPage,
  head: () => ({ meta: [{ title: "Satisfacción · Oficio Digital" }] }),
});

function SatisfaccionPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Al cerrar el taller</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">¿Te sirvió la sesión?</h1>
        <p className="mt-4 text-muted">
          Tres calificaciones y si la recomendarías. El promedio se publica en la página de impacto, sin comentarios
          con nombre.
        </p>
        <div className="mt-10">
          <FormRenderer
            formKey="satisfaccion"
            sections={satisfaccionSections}
            submitLabel="Enviar calificación"
            successMessage="Gracias. Tu calificación ya entra al promedio."
          />
        </div>
      </div>
    </Shell>
  );
}

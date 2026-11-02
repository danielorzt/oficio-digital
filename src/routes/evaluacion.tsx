import { createFileRoute } from "@tanstack/react-router";
import { FormRenderer } from "@/components/forms/FormRenderer";
import { Shell } from "@/components/shell";
import { evaluacionSections } from "@/lib/forms/fields";

export const Route = createFileRoute("/evaluacion")({
  component: EvaluacionPage,
  head: () => ({ meta: [{ title: "Evaluación · Oficio Digital" }] }),
});

function EvaluacionPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Antes y después</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Evaluación de la sesión</h1>
        <p className="mt-4 text-muted">
          Responde una vez antes del taller y otra al terminarlo, con el mismo contacto. Así se puede ver la diferencia
          sin publicar nombres.
        </p>
        <div className="mt-10">
          <FormRenderer
            formKey="evaluacion"
            sections={evaluacionSections}
            submitLabel="Guardar evaluación"
            successMessage="Evaluación guardada. Si falta la del otro momento, envía otra respuesta."
          />
        </div>
      </div>
    </Shell>
  );
}

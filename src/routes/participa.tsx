import { createFileRoute, Link } from "@tanstack/react-router";
import { FormRenderer } from "@/components/forms/FormRenderer";
import { Shell } from "@/components/shell";
import { diagnosticoSections } from "@/lib/forms/fields";

export const Route = createFileRoute("/participa")({
  component: ParticipaPage,
  head: () => ({
    meta: [
      { title: "Participa en el diagnóstico · Oficio Digital" },
      {
        name: "description",
        content: "Encuesta corta para talleres diésel y profesionales de Duitama. Dura 3 a 4 minutos.",
      },
    ],
  }),
});

function ParticipaPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Semana 3 · Sesión 1</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Cuéntanos qué necesitas</h1>
        <p className="mt-4 text-muted">
          Son 3 a 4 minutos. Tus respuestas definen el contenido de los talleres gratuitos de inglés técnico e IA.
          El formulario es solo para mayores de 18 años. Antes de enviar, lee el{" "}
          <Link to="/privacidad" className="font-bold text-accent-ink underline underline-offset-4">
            aviso de privacidad
          </Link>
          .
        </p>
        <div className="mt-10">
          <FormRenderer
            formKey="diagnostico"
            sections={diagnosticoSections}
            submitLabel="Enviar diagnóstico"
            successMessage="Gracias por participar. Te contactaremos para invitarte al taller."
          />
        </div>
      </div>
    </Shell>
  );
}

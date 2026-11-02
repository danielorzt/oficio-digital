import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/privacidad")({
  component: PrivacidadPage,
  head: () => ({ meta: [{ title: "Aviso de privacidad · Oficio Digital" }] }),
});

function PrivacidadPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Ley 1581 de 2012</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Aviso de privacidad</h1>
        <div className="mt-8 space-y-5 text-muted">
          <p>
            <span className="font-bold text-ink">Quién recoge los datos. </span>
            Daniel Esteban Ortiz Pinzón, estudiante de Ingeniería de Software en UNIMINUTO, dentro de la Práctica en
            Responsabilidad Social (NRC 69825). No es una empresa ni un tratamiento comercial.
          </p>
          <p>
            <span className="font-bold text-ink">Para qué. </span>
            Diagnosticar necesidades de inglés técnico y de uso de IA, invitar a los talleres y medir, en cifras
            agregadas, si la práctica sirvió. No se usan para vender nada ni se ceden a terceros.
          </p>
          <p>
            <span className="font-bold text-ink">Qué se pide. </span>
            Nombre, un WhatsApp o correo, municipio, perfil de trabajo y las respuestas de la encuesta. No se pide
            cédula, dirección exacta ni datos de salud.
          </p>
          <p>
            <span className="font-bold text-ink">Cuánto tiempo. </span>
            Hasta cerrar el proyecto, al terminar la práctica. Después se borran las respuestas individuales. En el
            sitio público solo quedan conteos, nunca nombres ni contactos.
          </p>
          <p>
            <span className="font-bold text-ink">Imágenes. </span>
            Una foto o el nombre de un taller solo se publican con autorización aparte. La casilla del formulario no
            reemplaza ese permiso.
          </p>
          <p>
            <span className="font-bold text-ink">Tus derechos. </span>
            Puedes conocer, actualizar, corregir o pedir que se borren tus datos. Escríbele a Daniel por el mismo
            WhatsApp con el que te contactó e indica el nombre y el contacto que registraste.
          </p>
        </div>
        <p className="mt-10">
          <Link to="/participa" className="font-bold text-accent-ink underline underline-offset-4">
            Volver al diagnóstico
          </Link>
        </p>
      </article>
    </Shell>
  );
}

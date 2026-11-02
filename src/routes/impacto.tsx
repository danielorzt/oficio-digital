import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import type { TopicStat } from "@/lib/forms/aggregate";
import { emptyIndicators } from "@/lib/forms/aggregate";
import { loadIndicators } from "@/lib/forms/indicators";

export const Route = createFileRoute("/impacto")({
  loader: async () => {
    try {
      return await loadIndicators();
    } catch {
      return emptyIndicators();
    }
  },
  component: ImpactoPage,
  head: () => ({ meta: [{ title: "Impacto · Oficio Digital" }] }),
});

const chain = [
  {
    label: "Insumos",
    text: "Un estudiante, sesiones por Meet, este formulario y el enlace con talleres de Duitama a través de Yeferon Estiven Aragón Ortiz.",
  },
  {
    label: "Actividades",
    text: "Diagnóstico, taller de inglés técnico y dos sesiones de IA aplicada a un caso del oficio.",
  },
  {
    label: "Productos",
    text: "Encuestas, listas de asistencia, ejercicios resueltos y una guía corta para el taller.",
  },
  {
    label: "Resultados",
    text: "Leer un manual o un código de falla con menos intermediarios, y contrastar lo que responde una IA.",
  },
  {
    label: "Impacto",
    text: "Un taller que no se detiene porque el procedimiento está en inglés. Eso se podrá afirmar solo cuando las cifras de abajo dejen de estar en cero.",
  },
];

const ods = [
  {
    code: "ODS 4",
    text: "La sesión de inglés cabe en la jornada: un ejercicio real, no un curso largo que el taller no puede sostener.",
  },
  {
    code: "ODS 8",
    text: "Leer la ficha más rápido cambia el tiempo de diagnóstico. Esa es la productividad que se quiere mover.",
  },
  {
    code: "ODS 9",
    text: "La IA entra como herramienta de consulta, al lado del manual, no como un reemplazo del mecánico.",
  },
  {
    code: "ODS 17",
    text: "El plan se arma con el sector. El interlocutor y las tres necesidades más votadas definen el contenido.",
  },
];

function ImpactoPage() {
  const data = Route.useLoaderData();

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Semana 7</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Lo que se puede contar, y lo que todavía no.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Las cifras salen de los formularios. Si un recuadro dice “sin datos”, es porque aún no hay respuestas. La meta
          del plan sigue siendo contactar de 10 a 15 personas y completar al menos 8 diagnósticos.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Count label="Diagnósticos" value={data.counts.diagnostico} />
          <Count label="Inscripciones" value={data.counts.registro_taller} />
          <Count label="Evaluaciones" value={data.counts.evaluacion} />
          <Count label="Satisfacción" value={data.counts.satisfaccion} />
        </dl>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Compare title="Inglés técnico" stat={data.english} />
          <Compare title="Uso de IA" stat={data.ai} />
        </div>

        <section className="mt-6 rounded-3xl border border-line bg-paper p-6">
          <h2 className="text-2xl font-extrabold tracking-tight">Satisfacción</h2>
          {data.satisfaction.n === 0 ? (
            <p className="mt-3 text-muted">Sin datos. El promedio se publica cuando alguien califique un taller.</p>
          ) : (
            <p className="mt-3 text-lg">
              Promedio {data.satisfaction.average} de 5, con {data.satisfaction.n} respuestas.{" "}
              {data.satisfaction.recommendPercent}% lo recomendaría.
            </p>
          )}
          <p className="mt-4 text-sm">
            <Link to="/satisfaccion" className="font-bold text-accent-ink underline underline-offset-4">
              Calificar una sesión
            </Link>
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-extrabold tracking-tight">Cadena de resultados</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Sigue la lógica de una teoría del cambio, como la trabajan Pacheco Duarte y Archila Quiñones (2020), y de
            medición de impacto, como la presentan Pérez Carvajal et al. (2022, pp. 21-47). No hay un cálculo de retorno
            social: todavía no hay resultados que lo sostengan.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {chain.map((step, index) => (
              <li key={step.label} className="rounded-3xl border border-line bg-paper p-5">
                <p className="text-xs font-bold tracking-widest text-faint uppercase">
                  0{index + 1} {step.label}
                </p>
                <p className="mt-3 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-extrabold tracking-tight">Los ODS, con un ejemplo cada uno</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ods.map((item) => (
              <article key={item.code} className="rounded-3xl border border-line bg-paper-2 p-6">
                <h3 className="text-lg font-extrabold">{item.code}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-12 text-sm text-muted">
          Los videos de las semanas 6 y 7 se incrustan aquí cuando estén en YouTube, con enlace público. Hasta entonces
          no hay un reproductor vacío. El informe final del tutor se entrega en Canvas, no en esta página.
        </p>
      </div>
    </Shell>
  );
}

function Count({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl border border-line bg-paper p-5">
      <dt className="text-xs font-bold tracking-widest text-faint uppercase">{label}</dt>
      <dd className="dato mt-2 text-4xl font-extrabold">{value}</dd>
    </div>
  );
}

function Compare({ title, stat }: { title: string; stat: TopicStat }) {
  const ready = stat.pre != null && stat.post != null;
  const delta = ready ? Math.round((stat.post! - stat.pre!) * 10) / 10 : null;
  return (
    <section className="rounded-3xl border border-line bg-paper p-6">
      <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted">
        Antes: {stat.pre == null ? "sin datos" : `${stat.pre} (${stat.preN})`}. Después:{" "}
        {stat.post == null ? "sin datos" : `${stat.post} (${stat.postN})`}.
      </p>
      <p className="mt-2 font-semibold">
        {delta == null ? "La diferencia se calcula cuando existan las dos mediciones." : `Diferencia: ${delta} puntos.`}
      </p>
      <p className="mt-4 text-sm">
        <Link to="/evaluacion" className="font-bold text-accent-ink underline underline-offset-4">
          Registrar evaluación
        </Link>
      </p>
    </section>
  );
}

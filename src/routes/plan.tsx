import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { sessions } from "@/lib/content";

export const Route = createFileRoute("/plan")({
  component: PlanPage,
  head: () => ({ meta: [{ title: "Plan de trabajo · Oficio Digital" }] }),
});

function PlanPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Semanas 3 a 8</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight">El plan, en el orden en que ocurre.</h1>
        <p className="mt-4 text-muted">
          Primero se escucha. Después se practica inglés. Luego la IA, con un caso real. Al final se mide y se deja el grupo andando.
        </p>
        <ol className="mt-12 space-y-0">
          {sessions.map((session, index) => (
            <li key={session.week} className="relative border-l-2 border-line pb-10 pl-8">
              <span className="btn-accent absolute top-0 -left-[15px] flex size-7 items-center justify-center rounded-full text-xs font-extrabold">
                {index + 1}
              </span>
              <p className="text-xs font-bold tracking-widest text-faint uppercase">Semana {session.week}</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight">{session.title}</h2>
              <p className="mt-2 text-sm text-muted">
                <span className="font-bold text-ink">Canal. </span>
                {session.channel}
              </p>
              <p className="mt-1 text-sm text-muted">
                <span className="font-bold text-ink">Indicador. </span>
                {session.indicator}
              </p>
            </li>
          ))}
        </ol>
        <p className="text-sm text-faint">
          El seguimiento usa lista de asistencia, evaluación antes y después, encuesta de satisfacción y un reporte de impacto. Si una sesión no sirve, se ajusta con lo que diga el grupo.
        </p>
      </div>
    </Shell>
  );
}

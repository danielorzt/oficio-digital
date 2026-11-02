import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Cover, Shell } from "@/components/shell";
import { formatDate, posts, sessions } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Oficio Digital · Inglés técnico e IA para talleres de Duitama" }],
  }),
});

const ideas = [
  {
    n: "01",
    title: "El manual está en inglés",
    text: "El taller ya sabe del motor. Lo que alarga el diagnóstico es el código de falla y el procedimiento que nadie traduce.",
  },
  {
    n: "02",
    title: "La IA sin criterio estorba",
    text: "Una respuesta rápida no sirve si no se verifica. Privacidad de datos del cliente y contraste con el manual van en la misma sesión.",
  },
  {
    n: "03",
    title: "La clase tiene que caber",
    text: "Sesiones cortas, virtuales y con un ejercicio real. Si no cabe en la jornada del taller, no es el formato.",
  },
];

function Home() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-12 pb-8 md:grid-cols-[1.15fr_0.85fr] md:pt-20">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">
            Práctica en responsabilidad social · UNIMINUTO
          </p>
          <h1 className="mt-4 max-w-xl text-5xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
            Usas el oficio. El manual sigue en inglés.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Capacitación virtual para talleres diésel de Duitama y para profesionales que quieren usar la IA sin perder el día de trabajo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/blog/$slug"
              params={{ slug: posts[0].slug }}
              className="btn-accent inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-bold"
            >
              Leer la primera entrada
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/plan"
              className="inline-flex h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-bold"
            >
              Ver el plan
            </Link>
          </div>
        </div>
        <Cover
          src="/images/taller.jpg"
          alt="Mecánico revisando un motor diésel con una tableta"
          className="aspect-[16/10] shadow-lg"
        />
      </section>

      <section className="border-y border-line bg-paper">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-6 md:grid-cols-3 md:gap-0">
          {[
            ["10–15", "participantes"],
            ["4", "sesiones del plan"],
            ["74,3 %", "trabajo informal en Boyacá"],
          ].map(([dato, etiqueta], index) => (
            <li
              key={etiqueta}
              className={`flex items-baseline gap-3 md:px-6 ${index > 0 ? "md:border-l md:border-line" : "md:pl-0"}`}
            >
              <span className="dato text-3xl font-extrabold tracking-tight">{dato}</span>
              <span className="text-sm text-faint">{etiqueta}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Tres ideas, y basta</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ideas.map((idea) => (
            <article key={idea.n} className="rounded-card border border-line bg-paper p-6">
              <p className="text-sm font-bold text-accent-ink">{idea.n}</p>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight">{idea.title}</h3>
              <p className="mt-2 text-sm text-muted">{idea.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Entradas</h2>
          <Link to="/blog" className="text-sm font-bold text-accent-ink">
            Ver todas
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
                <Cover src={post.cover} alt={post.coverAlt} className="aspect-[4/3]" />
                <p className="mt-4 text-xs font-bold tracking-wide text-faint uppercase">
                  {post.category} · {formatDate(post.date)} · {post.minutes} min
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight group-hover:text-accent-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Así avanza el plan</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {sessions.map((session, index) => (
            <li key={session.week} className="rounded-card border border-line p-5">
              <p className="text-sm font-bold text-accent-ink">
                {index + 1}) Semana {session.week}
              </p>
              <p className="mt-2 font-extrabold tracking-tight">{session.title}</p>
              <p className="mt-2 text-sm text-muted">{session.channel}</p>
            </li>
          ))}
        </ol>
      </section>
    </Shell>
  );
}

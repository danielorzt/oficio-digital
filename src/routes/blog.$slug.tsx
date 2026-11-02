import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Cover, Shell } from "@/components/shell";
import { formatDate, getPost, posts } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    const index = posts.findIndex((item) => item.slug === params.slug);
    return {
      post,
      prev: index > 0 ? posts[index - 1] : null,
      next: index < posts.length - 1 ? posts[index + 1] : null,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.post.title} · Oficio Digital` : "Entrada" },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
    ],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <Shell>
      <div className="mx-auto max-w-xl px-5 py-24">
        <h1 className="text-4xl font-extrabold">Esa entrada no está.</h1>
        <Link to="/blog" className="mt-6 inline-block font-bold text-accent-ink">
          Volver al blog
        </Link>
      </div>
    </Shell>
  ),
});

function PostPage() {
  const { post, prev, next } = Route.useLoaderData();

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-xs font-bold tracking-wide text-faint uppercase">
          {post.category} · {formatDate(post.date)} · {post.minutes} min de lectura
        </p>
        <h1 className="mt-3 text-4xl leading-[1.08] font-extrabold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
        <Cover src={post.cover} alt={post.coverAlt} className="mt-8 aspect-[16/9]" />
        <div className="mt-10 max-w-[68ch] space-y-5 text-[1.05rem] text-ink">
          {post.blocks.map((block, index) => {
            if (block.kind === "h2") {
              return (
                <h2 key={index} className="pt-4 text-2xl font-extrabold tracking-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-2 border-accent py-1 pl-5 text-2xl leading-snug font-extrabold tracking-tight"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.kind === "list") {
              return (
                <ol key={index} className="list-decimal space-y-2 pl-5 text-muted marker:font-bold marker:text-accent-ink">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              );
            }
            if (block.kind === "figure") {
              return (
                <figure key={index} className="py-2">
                  <Cover src={block.src} alt={block.alt} className="aspect-[16/9]" />
                  <figcaption className="mt-2 text-sm text-faint">{block.caption}</figcaption>
                </figure>
              );
            }
            return (
              <p key={index} className="text-muted">
                {block.text}
              </p>
            );
          })}
        </div>
        <section className="mt-12 rounded-card border border-line bg-paper-2 p-6">
          <h2 className="text-sm font-bold tracking-widest text-faint uppercase">Referencias</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>DANE. (2024). Índice Multidimensional de Informalidad Empresarial (IMIE) 2024.</li>
            <li>DANE. (2025). Encuesta de Tecnologías de la Información y las Comunicaciones en Hogares (ENTIC Hogares) 2024.</li>
            <li>DANE. (2025). Índice de Pobreza Multidimensional.</li>
            <li>Cámara de Comercio de Duitama. (2024). Caracterización socioeconómica y empresarial.</li>
            <li>Pacheco Duarte, J. F., et al. (2022). Ruta de Innovación Social. UNIMINUTO.</li>
          </ul>
        </section>
        <nav className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="Entre entradas">
          {prev ? (
            <Link to="/blog/$slug" params={{ slug: prev.slug }} className="rounded-card border border-line p-4">
              <span className="text-xs font-bold text-faint uppercase">Anterior</span>
              <span className="mt-1 block font-extrabold">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to="/blog/$slug" params={{ slug: next.slug }} className="rounded-card border border-line p-4 sm:text-right">
              <span className="text-xs font-bold text-faint uppercase">Siguiente</span>
              <span className="mt-1 block font-extrabold">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </article>
    </Shell>
  );
}

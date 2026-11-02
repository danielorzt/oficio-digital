import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cover, Shell } from "@/components/shell";
import { categories, formatDate, posts, type Category } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [{ title: "Blog · Oficio Digital" }],
  }),
});

function BlogIndex() {
  const [cat, setCat] = useState<"Todas" | Category>("Todas");
  const visible = cat === "Todas" ? posts : posts.filter((post) => post.category === cat);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Bitácora</p>
        <h1 className="mt-3 max-w-2xl text-5xl font-extrabold tracking-tight">
          El proyecto, contado por partes.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Tres entradas para empezar. El sitio crece cuando hay una sesión nueva, no cuando hay que
          reescribir la página.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoría">
          {categories.map((item) => {
            const active = item === cat;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCat(item)}
                className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-bold ${
                  active ? "btn-accent" : "border border-line bg-paper text-ink"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {visible.map((post) => (
            <article key={post.slug}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
                <Cover src={post.cover} alt={post.coverAlt} className="aspect-[16/9]" />
                <p className="mt-4 text-xs font-bold tracking-wide text-faint uppercase">
                  {post.category} · {formatDate(post.date)} · {post.minutes} min
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight group-hover:text-accent-ink">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-prose text-muted">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}

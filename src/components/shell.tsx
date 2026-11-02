import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/blog", label: "Blog" },
  { to: "/sobre", label: "El proyecto" },
  { to: "/plan", label: "Plan" },
  { to: "/ubicacion", label: "Duitama" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight">Oficio Digital</span>
            <span className="hidden text-xs font-semibold tracking-wide text-faint sm:inline">
              Duitama
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex" aria-label="Principal">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-ink"
                activeProps={{ className: "text-accent-ink" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/participa"
            className="btn-accent hidden h-10 items-center rounded-full px-4 text-sm font-bold md:inline-flex"
          >
            Participa
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar el menú" : "Abrir el menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-line px-5 py-3 md:hidden" aria-label="Principal, móvil">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex h-12 items-center text-base font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/participa" className="flex h-12 items-center text-base font-bold text-accent-ink" onClick={() => setOpen(false)}>
                  Participa
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <footer className="mt-8 border-t border-line bg-paper-3">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold">Oficio Digital</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              No reemplazamos el oficio. Enseñamos a leer el manual y a contrastar lo que dice una IA.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-faint uppercase">Proyecto</p>
            <ul className="mt-3 space-y-2 text-sm font-semibold">
              <li>
                <Link to="/participa">Diagnóstico</Link>
              </li>
              <li>
                <Link to="/impacto">Impacto</Link>
              </li>
              <li>
                <Link to="/privacidad">Privacidad</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-faint uppercase">Quién lo hace</p>
            <p className="mt-3 text-sm text-muted">
              Daniel Esteban Ortiz Pinzón · ID 1117741
              <br />
              Práctica en Responsabilidad Social · UNIMINUTO
              <br />
              Interlocutor: Yeferon Estiven Aragón Ortiz
            </p>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-xs text-faint">
          Duitama, Boyacá · Noviembre 2026 · PRAC1010
        </p>
      </footer>
    </div>
  );
}

export function Cover({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-card border border-line object-cover ${className}`}
    />
  );
}

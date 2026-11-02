import { createFileRoute } from "@tanstack/react-router";
import { Cover, Shell } from "@/components/shell";
import { asset } from "@/lib/content";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [{ title: "El proyecto · Oficio Digital" }],
  }),
});

const objetivos = [
  "Diagnosticar, con la comunidad, qué competencias digitales faltan y en qué horario se pueden trabajar.",
  "Entrenar inglés técnico aplicado a códigos de falla, manuales y herramientas del taller.",
  "Practicar el uso responsable de IA: un caso real, verificación de la respuesta y cuidado de los datos.",
  "Dejar una comunidad de práctica y una evaluación que compare el antes y el después.",
];

function SobrePage() {
  return (
    <Shell>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Comunidad</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">Talleres diésel de Duitama, y quien trabaja al lado.</h1>
          <p className="mt-4 text-lg text-muted">
            Negocios pequeños que atienden transporte pesado y maquinaria, más profesionales de otras áreas que quieren usar inglés e IA en lo que ya hacen.
          </p>
        </div>
        <Cover
          src={asset("/images/duitama.jpg")}
          alt="Taller con las puertas abiertas en un pueblo andino"
          className="aspect-[4/3]"
        />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">La problemática</h2>
          <p className="mt-3 text-muted">
            La brecha no es “no tener internet”. Es no poder leer un código de falla, no saber contrastar lo que responde una IA y no encontrar una formación que quepa en una jornada de taller. En Boyacá, el 74,3 % de los hogares tenía privación por trabajo informal en 2024, y en la zona rural el 87,3 %. En la jurisdicción de la Cámara de Comercio de Duitama, el 97,8 % de las empresas activas eran microempresas.
          </p>
          <p className="mt-3 text-muted">
            En el país, el DANE midió un 90,2 % de informalidad empresarial multidimensional en micronegocios (2024) y un 18,0 % de usuarios de internet que usaron herramientas de IA. La adopción avanza más rápido en las ciudades grandes. Duitama se queda en el medio.
          </p>
        </div>
        <div className="rounded-card border border-line bg-paper-2 p-6">
          <h2 className="text-2xl font-extrabold tracking-tight">Por qué este proyecto</h2>
          <p className="mt-3 text-muted">
            Desde la ingeniería de software puedo diseñar sesiones cortas, no un pénsum. Desde la responsabilidad social de UNIMINUTO, el punto no es dictar clase: es construirla con quien va a usarla. El aporte académico es aplicar la teoría del cambio y la Ruta de Innovación Social a un sector productivo concreto. El aporte social es tiempo recuperado en el diagnóstico y una red que sigue después de la nota.
          </p>
        </div>
      </section>

      <section id="objetivos" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Objetivo general</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted">
          Fortalecer las competencias digitales de dueños, jefes de taller y mecánicos de Duitama, y de profesionales de otras áreas, con sesiones virtuales de inglés técnico y uso responsable de IA.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {objetivos.map((item, index) => (
            <li key={item} className="rounded-card border border-line p-5">
              <span className="dato text-2xl font-extrabold">{index + 1}</span>
              <p className="mt-2 font-semibold">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-sm font-bold tracking-widest text-faint uppercase">Aporta a</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {["ODS 4 · Educación", "ODS 8 · Trabajo decente", "ODS 9 · Innovación", "ODS 17 · Alianzas"].map(
            (item) => (
              <li key={item} className="rounded-full bg-accent-soft px-4 py-2 text-sm font-bold text-accent-ink">
                {item}
              </li>
            ),
          )}
        </ul>
      </section>
    </Shell>
  );
}

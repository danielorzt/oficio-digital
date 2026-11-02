import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/ubicacion")({
  component: UbicacionPage,
  head: () => ({ meta: [{ title: "Duitama · Oficio Digital" }] }),
});

function UbicacionPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-bold tracking-[0.16em] text-accent-ink uppercase">Territorio</p>
        <h1 className="mt-3 max-w-2xl text-5xl font-extrabold tracking-tight">Duitama, Boyacá.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Aproximadamente 5°49′ N, 73°02′ O. Las sesiones son virtuales, por Google Meet, con gente de Duitama y de otros municipios. El punto de acompañamiento presencial es la Carrera 42 # 8-62.
        </p>
        <div className="mt-8 overflow-hidden rounded-card border border-line">
          <iframe
            title="Mapa de Duitama, Boyacá"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-73.08%2C5.79%2C-72.98%2C5.86&layer=mapnik&marker=5.824%2C-73.033"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-sm text-faint">
          Mapa de OpenStreetMap. El marcador señala el casco de Duitama, no una dirección catastral exacta.
        </p>
      </div>
    </Shell>
  );
}

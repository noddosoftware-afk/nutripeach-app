import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { listarConsultas } from "@/data/consultas";
import { EstadoVacio } from "@/components/campo";

export default async function ConsultasPage({ params }: PageProps<"/pacientes/[id]/consultas">) {
  const { id } = await params;
  const consultas = await listarConsultas(id);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink">Historial de consultas</h2>
        <Link href={`/pacientes/${id}/consultas/nueva`} className="rounded-md bg-brand-700 px-3 py-1.5 text-sm text-white hover:bg-brand-800">
          + Nueva consulta
        </Link>
      </div>

      {consultas.length === 0 ? (
        <EstadoVacio icon={Stethoscope} titulo="Sin consultas registradas todavía." />
      ) : (
        <div className="space-y-3">
          {consultas.map((c) => {
            const medicion = c.mediciones?.[0];
            const imc = c.calculos?.find((k) => k.tipo === "imc")?.resultado as
              | { valor: { imc: number; categoria: string } | null }
              | undefined;
            return (
              <div key={c.id} className="rounded-2xl border border-cream-200 bg-white shadow-soft p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{new Date(c.fecha).toLocaleDateString("es-MX", { dateStyle: "long" })}</span>
                  <span className="text-xs text-ink-soft">{c.motivo ?? ""}</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-ink-soft">
                  <span>Peso: {medicion?.peso_kg ?? "—"} kg</span>
                  <span>IMC: {imc?.valor?.imc ?? "—"}</span>
                  <span>Próx. revisión: {c.proxima_revision ? new Date(c.proxima_revision).toLocaleDateString("es-MX") : "—"}</span>
                </div>
                {c.evaluacion && <p className="mt-2 text-sm text-ink">{c.evaluacion}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { Users, Stethoscope, ClipboardList } from "lucide-react";
import { requireStaff } from "@/data/auth";
import { createClient } from "@/lib/supabase/server";
import { Tarjeta } from "@/components/campo";

export default async function ReportesPage() {
  await requireStaff();
  const supabase = await createClient();
  const [{ count: totalPacientes }, { count: totalConsultas }, { count: totalPlanesPublicados }] = await Promise.all([
    supabase.from("pacientes").select("id", { count: "exact", head: true }).eq("estado", "activo"),
    supabase.from("consultas").select("id", { count: "exact", head: true }),
    supabase.from("planes").select("id", { count: "exact", head: true }).eq("estado", "publicado"),
  ]);

  const metricas = [
    { icon: Users, titulo: "Pacientes activos", valor: totalPacientes ?? 0 },
    { icon: Stethoscope, titulo: "Consultas registradas", valor: totalConsultas ?? 0 },
    { icon: ClipboardList, titulo: "Planes publicados", valor: totalPlanesPublicados ?? 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-brand-900">Reportes</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Reportes avanzados (adherencia, resultados por periodo, exportación consolidada) están planeados para la
          Fase 3. Estos son los conteos básicos disponibles hoy.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {metricas.map((m) => (
          <Tarjeta key={m.titulo} className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <m.icon size={20} />
              </div>
              <div>
                <p className="text-sm text-ink-soft">{m.titulo}</p>
                <p className="text-2xl font-semibold text-ink">{m.valor}</p>
              </div>
            </div>
          </Tarjeta>
        ))}
      </div>
    </div>
  );
}

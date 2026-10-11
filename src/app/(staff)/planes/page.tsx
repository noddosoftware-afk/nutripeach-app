import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { requireStaff } from "@/data/auth";
import { createClient } from "@/lib/supabase/server";
import { EstadoVacio } from "@/components/campo";

export default async function PlanesGlobalPage() {
  await requireStaff();
  const supabase = await createClient();
  const { data: planes, error } = await supabase
    .from("planes")
    .select("id, nombre, estado, version, creado_en, paciente:pacientes(nombre_completo)")
    .order("creado_en", { ascending: false })
    .limit(50);
  if (error) throw error;

  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl text-brand-900">Planes</h1>
      {!planes || planes.length === 0 ? (
        <EstadoVacio
          icon={ClipboardList}
          imagen="/stock/planes.jpg"
          titulo="Aún no hay planes creados."
          descripcion="Empieza desde el expediente de un paciente."
        />
      ) : (
        <ul className="divide-y divide-cream-200 rounded-2xl border border-cream-200 bg-white shadow-soft">
          {planes.map((p) => (
            <li key={p.id}>
              <Link href={`/planes/${p.id}`} className="flex items-center justify-between px-4 py-3 hover:bg-cream-100">
                <div>
                  <p className="text-sm font-medium">{p.nombre}</p>
                  <p className="text-xs text-ink-soft">
                    {(p.paciente as unknown as { nombre_completo: string } | null)?.nombre_completo ?? "—"} · v{p.version}
                  </p>
                </div>
                <span className="text-xs font-medium text-brand-800">{p.estado}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

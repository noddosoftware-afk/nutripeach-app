import { Camera } from "lucide-react";
import { listarFotografias, urlFirmadaFoto } from "@/data/fotografias";
import { subirFotografiaAction } from "./actions";
import { ComparadorFotos } from "./comparador";
import { Boton, EstadoVacio, Input, Select, Tarjeta } from "@/components/campo";

export default async function FotografiasPage({ params }: PageProps<"/pacientes/[id]/fotografias">) {
  const { id } = await params;
  const fotos = await listarFotografias(id);
  const fotosConUrl = await Promise.all(
    fotos.map(async (f) => ({ ...f, url: await urlFirmadaFoto(f.storage_path) }))
  );

  const accion = subirFotografiaAction.bind(null, id);

  return (
    <div className="space-y-6">
      <Tarjeta className="p-4">
        <form action={accion} className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <input
            type="file"
            name="archivo"
            accept="image/*"
            required
            className="col-span-2 text-sm text-ink-soft file:mr-3 file:rounded-xl file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand-800 sm:col-span-1"
          />
          <Select name="vista">
            <option value="frente">Frente</option>
            <option value="perfil">Perfil</option>
            <option value="espalda">Espalda</option>
            <option value="otra">Otra</option>
          </Select>
          <Input type="date" name="fecha_captura" required />
          <Input type="text" name="observaciones" placeholder="Observaciones" />
          <label className="flex items-center gap-2 text-xs text-ink-soft">
            <input type="checkbox" name="compartir" className="h-4 w-4 accent-brand-700" /> Compartir con el paciente
          </label>
          <Boton type="submit" className="col-span-2 sm:col-span-5">
            Subir fotografía
          </Boton>
        </form>
      </Tarjeta>

      {fotosConUrl.length === 0 ? (
        <EstadoVacio icon={Camera} titulo="Sin fotografías de progreso todavía." />
      ) : (
        <ComparadorFotos fotos={fotosConUrl} />
      )}
    </div>
  );
}

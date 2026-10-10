import { FileText } from "lucide-react";
import { listarDocumentos, urlFirmadaDocumento } from "@/data/documentos";
import { subirDocumentoAction, subirVersionAction } from "./actions";
import { Boton, EstadoVacio, Input, Select, Tarjeta } from "@/components/campo";

const CATEGORIAS = [
  ["laboratorio", "Laboratorio"],
  ["estudio", "Estudio"],
  ["consentimiento", "Consentimiento"],
  ["plan", "Plan"],
  ["material_educativo", "Material educativo"],
  ["otro", "Otro"],
] as const;

export default async function DocumentosPage({ params }: PageProps<"/pacientes/[id]/documentos">) {
  const { id } = await params;
  const documentos = await listarDocumentos(id);
  const subir = subirDocumentoAction.bind(null, id);

  return (
    <div className="space-y-6">
      <Tarjeta className="p-4">
        <form action={subir} className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <input
            type="file"
            name="archivo"
            required
            className="col-span-2 text-sm text-ink-soft file:mr-3 file:rounded-xl file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand-800 sm:col-span-1"
          />
          <Input type="text" name="nombre" placeholder="Nombre del documento" />
          <Select name="categoria">
            {CATEGORIAS.map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </Select>
          <label className="flex items-center gap-2 text-xs text-ink-soft">
            <input type="checkbox" name="compartir" className="h-4 w-4 accent-brand-700" /> Compartir con el paciente
          </label>
          <Boton type="submit" className="col-span-2 sm:col-span-5">
            Subir documento
          </Boton>
        </form>
      </Tarjeta>

      {documentos.length === 0 ? (
        <EstadoVacio icon={FileText} titulo="Sin documentos todavía." />
      ) : (
        <ul className="divide-y divide-cream-200 overflow-hidden rounded-2xl border border-cream-200 bg-white">
          {await Promise.all(
            documentos.map(async (d) => {
              const ultima = d.documento_versiones.sort((a, b) => b.numero_version - a.numero_version)[0];
              const url = ultima ? await urlFirmadaDocumento(ultima.storage_path) : null;
              const subirVersion = subirVersionAction.bind(null, id, d.id);
              return (
                <li key={d.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{d.nombre}</p>
                    <p className="text-xs text-ink-soft">
                      {d.categoria} · v{ultima?.numero_version ?? 1} ·{" "}
                      {d.visibilidad === "compartida_paciente" ? "compartido" : "privado"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {url && (
                      <a href={url} target="_blank" rel="noreferrer" className="text-sm text-brand-800 hover:underline">
                        Descargar
                      </a>
                    )}
                    <form action={subirVersion} className="flex items-center gap-2">
                      <input type="file" name="archivo" className="text-xs" />
                      <button className="text-xs text-ink-soft hover:underline">Nueva versión</button>
                    </form>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

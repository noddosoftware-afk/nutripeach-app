import Image from "next/image";

const MARCAS = [
  { nombre: "Panther Gym", src: "/brand/panther-gym.png" },
  { nombre: "Peak Nutrition", src: "/brand/peak-nutrition.png" },
];

/** Franja discreta de marcas aliadas — usada en la landing y en el pie del panel. */
export function MarcasAliadas({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 ${className ?? ""}`}>
      {MARCAS.map((m) => (
        <div key={m.nombre} className="group flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100">
          <Image
            src={m.src}
            alt={m.nombre}
            width={28}
            height={28}
            className="rounded-full grayscale transition-[filter] duration-200 group-hover:grayscale-0"
          />
          <span className="text-xs font-medium text-ink-soft">{m.nombre}</span>
        </div>
      ))}
    </div>
  );
}

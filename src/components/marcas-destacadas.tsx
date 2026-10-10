import Image from "next/image";

const MARCAS = [
  {
    nombre: "Nutripeach",
    descripcion: "Tu plataforma de nutrición personalizada.",
    src: "/brand/nutripeach-icon.png",
  },
  {
    nombre: "Panther Gym",
    descripcion: "Entrena en el gimnasio que acompaña tu progreso.",
    src: "/brand/panther-gym.png",
  },
  {
    nombre: "Peak Nutrition",
    descripcion: "Suplementación para llevar tus resultados más lejos.",
    src: "/brand/peak-nutrition.png",
  },
];

/** Showcase grande a color de las marcas del ecosistema — usado en la landing. */
export function MarcasDestacadas() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {MARCAS.map((m) => (
        <div
          key={m.nombre}
          className="shadow-soft flex flex-col items-center rounded-2xl border border-cream-200 bg-white p-7 text-center transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Image
            src={m.src}
            alt={m.nombre}
            width={88}
            height={88}
            className="rounded-full object-cover"
          />
          <p className="mt-4 font-display text-lg text-brand-900">{m.nombre}</p>
          <p className="mt-1.5 text-sm text-ink-soft">{m.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

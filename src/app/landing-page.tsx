import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ClipboardList,
  Dumbbell,
  MessageCircle,
  Camera,
  CalendarDays,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { MarcasAliadas } from "@/components/marcas-aliadas";

const FUNCIONALIDADES = [
  {
    icon: Users,
    titulo: "Seguimiento personalizado",
    descripcion: "Historial, mediciones y evolución de cada paciente en un solo lugar, siempre a la mano.",
  },
  {
    icon: ClipboardList,
    titulo: "Planes nutricionales a tu medida",
    descripcion: "Planes de alimentación diseñados y publicados por tu nutrióloga según tus objetivos y necesidades.",
  },
  {
    icon: Dumbbell,
    titulo: "Entrenamientos personalizados",
    descripcion: "Rutinas de ejercicio adaptadas a tu nivel, pensadas para complementar tu plan nutricional.",
  },
  {
    icon: Camera,
    titulo: "Fotos de progreso",
    descripcion: "Documenta tu avance visualmente y compártelo de forma privada con tu nutrióloga.",
  },
  {
    icon: CalendarDays,
    titulo: "Agenda de consultas",
    descripcion: "Consulta tus citas y mantente al tanto de cada próxima sesión sin complicaciones.",
  },
  {
    icon: MessageCircle,
    titulo: "Comunicación directa",
    descripcion: "Un canal de mensajes privado para resolver dudas entre consulta y consulta.",
  },
];

const botonPrimario =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-medium text-white shadow-soft transition-colors duration-200 hover:bg-brand-800";
const botonSecundario =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-brand-400/60 bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-brand-50";
const botonSecundarioOscuro =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10";

export function LandingPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-cream-200/80 bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <span className="font-display text-lg font-semibold text-brand-900">Nutripeach</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#funcionalidades" className="transition-colors hover:text-ink">
              Funcionalidades
            </a>
            <a href="#enfoque" className="transition-colors hover:text-ink">
              Nuestro enfoque
            </a>
          </nav>
          <Link href="/login" className={botonPrimario}>
            Iniciar sesión
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="relative z-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand-700">
                Consultorio privado de nutrición
              </p>
              <h1 className="font-display text-4xl italic leading-[1.15] text-brand-900 sm:text-5xl lg:text-6xl">
                Nutrición con calma,
                <br />
                resultados con cuidado.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
                Tu nutrióloga te acompaña con un enfoque cercano y personalizado: planes de
                alimentación, entrenamientos y seguimiento, todo desde un solo lugar.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/login" className={botonPrimario}>
                  Iniciar sesión
                </Link>
                <a href="#funcionalidades" className={botonSecundario}>
                  Conoce la plataforma
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="shadow-soft relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-cream-200 lg:aspect-[16/11]">
                <Image
                  src="/landing/hero.png"
                  alt="Mesa cálida con duraznos frescos, una servilleta de lino y un vaso de agua"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="shadow-soft absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-cream-200 bg-white p-4 sm:block">
                <p className="font-display text-sm italic text-brand-900">
                  &ldquo;Cada cuerpo tiene su propio ritmo. Aquí lo respetamos.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section id="funcionalidades" className="bg-cream-100/60 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-700">Qué incluye</p>
              <h2 className="mt-3 font-display text-3xl italic text-brand-900 sm:text-4xl">
                Todo tu acompañamiento, en un solo lugar
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FUNCIONALIDADES.map((f) => (
                <div
                  key={f.titulo}
                  className="shadow-soft group rounded-2xl border border-cream-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <f.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{f.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestro enfoque */}
        <section id="enfoque" className="py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="shadow-soft relative order-2 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-cream-200 lg:order-1">
              <Image
                src="/landing/wellness.png"
                alt="Rincón minimalista de bienestar con sillón de lino y un tazón de duraznos"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-700">Nuestro enfoque</p>
              <h2 className="mt-3 font-display text-3xl italic text-brand-900 sm:text-4xl">
                Un acompañamiento cercano, no una dieta genérica
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Tu nutrióloga trabaja de cerca con cada paciente, entendiendo su historia, su ritmo
                de vida y sus objetivos antes de proponer cualquier plan. La plataforma Nutripeach es
                el puente entre cada consulta: aquí vives el seguimiento, revisas tu plan y mantienes
                la comunicación con tu nutrióloga.
              </p>
              <div className="mt-8">
                <Link href="/login" className={botonPrimario}>
                  Acceder a mi portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Banner visual */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <Image
            src="/landing/peach-closeup.png"
            alt="Durazno partido a la mitad sobre una superficie color crema"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/55" />
          <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-8">
            <p className="font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              &ldquo;No se trata de reglas estrictas, sino de construir un hábito que puedas sostener.&rdquo;
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-brand-900 py-20 text-white sm:py-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
            <h2 className="font-display text-3xl italic sm:text-4xl">¿Ya eres paciente del consultorio?</h2>
            <p className="max-w-md text-brand-100/80">
              Accede a tu portal para revisar tu plan, tu progreso y tus próximas consultas.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link href="/login" className={botonPrimario}>
                Iniciar sesión
              </Link>
              <a href="#funcionalidades" className={botonSecundarioOscuro}>
                Ver funcionalidades
              </a>
            </div>
          </div>
        </section>
        {/* Marcas aliadas */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-ink-soft">
              En colaboración con
            </p>
            <MarcasAliadas />
          </div>
        </section>
      </main>

      <footer className="border-t border-cream-200 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-ink-soft sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <Logo size={20} />
            <span className="font-display text-sm font-semibold text-brand-900">Nutripeach</span>
          </div>
          <p>Consultorio privado de nutrición</p>
        </div>
      </footer>
    </div>
  );
}

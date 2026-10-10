import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Next.js 16 renombró `middleware.ts` a `proxy.ts` (misma funcionalidad, nuevo nombre).
// Esto SOLO refresca la sesión y hace un redirect "amable" cuando no hay sesión.
// La autorización real (quién puede ver/editar qué) se re-verifica siempre en el
// servidor dentro de cada Data Access Layer (src/data/*) y en RLS — nunca solo aquí.

// /icon, /apple-icon y /opengraph-image son rutas generadas por código (next/og,
// sin extensión en la URL) — el matcher de abajo solo excluye por extensión de
// archivo, así que sin esto quedarían bloqueadas para visitantes sin sesión
// (justo quienes las necesitan: el navegador en la landing, crawlers de redes).
const RUTAS_PUBLICAS = ["/login", "/auth", "/robots.txt", "/icon", "/apple-icon", "/opengraph-image"];

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const esRutaPublica =
    request.nextUrl.pathname === "/" || RUTAS_PUBLICAS.some((r) => request.nextUrl.pathname.startsWith(r));

  if (!user && !esRutaPublica) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|mp4)$).*)"],
};

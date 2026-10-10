import type { MetadataRoute } from "next";

// La landing pública en "/" sí debe indexarse; todo lo demás es la app
// clínica privada (login, panel, portal) y no debe aparecer en buscadores.
// "/$" ancla el permiso a la home exacta, "/" en disallow bloquea el resto.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/$",
      disallow: "/",
    },
  };
}

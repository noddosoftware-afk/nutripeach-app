import { redirect } from "next/navigation";
import { getSesionActual } from "@/data/auth";
import { LandingPage } from "./landing-page";

export default async function RootPage() {
  const sesion = await getSesionActual();
  if (sesion) redirect(sesion.rol === "paciente" ? "/portal" : "/dashboard");
  return <LandingPage />;
}

import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrinani-app.vercel.app"),
  title: "Nutripeach",
  description: "Plataforma clínica para consultorios de nutrición",
  openGraph: {
    title: "Nutripeach — Consultorio privado de nutrición",
    description:
      "Tu nutrióloga te acompaña con planes de alimentación, entrenamientos y seguimiento personalizados, todo desde un solo lugar.",
    siteName: "Nutripeach",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutripeach — Consultorio privado de nutrición",
    description:
      "Tu nutrióloga te acompaña con planes de alimentación, entrenamientos y seguimiento personalizados.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}

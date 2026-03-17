import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balestra Automotores | Concesionaria en Tandil",
  description:
    "Concesionaria en Tandil, Buenos Aires. Vehículos usados garantizados, 0km Nissan, financiación, gestoría automotor y maquinaria vial Taurus Vialen.",
  keywords:
    "concesionaria tandil, autos usados tandil, 0km nissan tandil, balestra automotores, financiación autos, gestoría automotor, maquinaria vial",
  openGraph: {
    title: "Balestra Automotores | Concesionaria en Tandil",
    description:
      "Vehículos usados garantizados, 0km Nissan, financiación y gestoría automotor en Tandil.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

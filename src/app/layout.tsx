import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quimey Morando | Arquitectura de Autonomía Digital y High-Ticket Strategy",
  description:
    "Orquesta agentes de IA y sistemas agénticos para escalar a High-Ticket sin sacrificar tu propósito ni tu tiempo. Instala tu Ecosistema Digital Autónomo.",
  keywords: [
    "autonomía digital",
    "high-ticket",
    "agentes de IA",
    "sistemas agénticos",
    "Quimey Morando",
    "ecosistema digital",
    "automatización IA",
    "consultoría premium",
    "tecnosustancialismo",
  ],
  authors: [{ name: "Quimey Morando" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://quimeymorando.com",
    siteName: "Quimey Morando",
    title: "Quimey Morando | Arquitectura de Autonomía Digital",
    description:
      "Instala tu Ecosistema de Autonomía y convierte tu conocimiento en un motor de ingresos de élite con agentes de IA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quimey Morando — Arquitectura de Autonomía Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quimey Morando | Arquitectura de Autonomía Digital",
    description:
      "Instala tu Ecosistema de Autonomía y convierte tu conocimiento en un motor de ingresos de élite con agentes de IA.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${robotoSlab.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

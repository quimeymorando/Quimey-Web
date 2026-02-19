import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roadmap de Instalación | Quimey Morando",
    description:
        "El framework exacto para transformar negocios estancados en activos digitales auto-escalables. 4 fases de Diagnóstico, Identidad, Labor Digital Autónoma y Prime Mover.",
    openGraph: {
        title: "Roadmap | Quimey Morando",
        description: "La arquitectura de la nueva era. Framework de Autonomía Digital en 4 fases.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

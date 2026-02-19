import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cursos de Autonomía Digital | Quimey Morando — Próximamente",
    description:
        "Los cursos de Arquitectura de Autonomía Digital están en desarrollo. Metodologías para escalar a High-Ticket con sistemas agénticos de IA y propósito.",
    openGraph: {
        title: "Cursos | Quimey Morando — Próximamente",
        description: "Formación de élite en Autonomía Digital y sistemas agénticos. En proceso.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function CursosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

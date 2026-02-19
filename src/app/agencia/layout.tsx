import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "La Agencia de Autonomía Digital | Quimey Morando",
    description:
        "Infraestructura de crecimiento con agentes de IA. Arquitectura web, automatización agéntica, setters y closers para escalar sin perder tu libertad.",
    openGraph: {
        title: "La Agencia | Quimey Morando",
        description: "Tu infraestructura de crecimiento. Que el crecimiento de tu visión no te cueste tu libertad.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function AgenciaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

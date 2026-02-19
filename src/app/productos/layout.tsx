import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Productos Digitales | Quimey Morando — Próximamente",
    description:
        "Las herramientas y productos de Autonomía Digital están en proceso de creación. Recursos para instalar tu ecosistema de ingresos autónomo con IA.",
    openGraph: {
        title: "Productos | Quimey Morando — Próximamente",
        description: "Herramientas y activos digitales para escalar sin sacrificar tu libertad. En proceso.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

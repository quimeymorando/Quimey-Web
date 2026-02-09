"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Sparkles, Zap, Map } from "lucide-react";

const ecosystemItems = [
    {
        title: "El Secreto de la \"Labor Digital\"",
        description: "Cómo delegar procesos críticos de tu negocio a agentes de IA que no solo automatizan, sino que razonan y toman decisiones para liberar el 80% de tu tiempo operativo.",
        icon: Bot,
        gradient: "from-brand-cyan to-brand-blue"
    },
    {
        title: "Arquitectura de Conversión \"Invisible\"",
        description: "Por qué las webs tradicionales son \"folletos muertos\" y cómo un sistema de embudos agénticos puede filtrar y cerrar clientes de High-Ticket sin que tú tengas que perseguirlos.",
        icon: Workflow,
        gradient: "from-brand-purple to-brand-violet"
    },
    {
        title: "Branding Ciber-Espiritual",
        description: "El método para construir una identidad de marca que fusione la frialdad de la tecnología punta con una narrativa humana profunda, logrando que tu cliente ideal se sienta magnéticamente atraído por tu propósito.",
        icon: Sparkles,
        gradient: "from-brand-cyan to-brand-purple"
    },
    {
        title: "El Switch de la Nueva Oportunidad",
        description: "La estrategia exacta para dejar de competir por precio y convertirte en el único referente de tu categoría mediante la orquestación de sistemas autónomos.",
        icon: Zap,
        gradient: "from-brand-purple to-brand-cyan"
    },
    {
        title: "El Mapa del \"Prime Mover\"",
        description: "Mi sistema de implementación radical de 30 días para pasar de una operación manual caótica a un Ecosistema de Autonomía totalmente funcional.",
        icon: Map,
        gradient: "from-brand-purple to-brand-violet"
    }
];

export default function EcosystemInstallation() {
    return (
        <section className="relative w-full py-32 bg-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-display tracking-tighter text-white mb-6"
                    >
                        Lo que vamos a instalar en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                            tu Ecosistema
                        </span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-cyan/50 mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {ecosystemItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative glass-card p-10 rounded-3xl border border-white/5 hover:border-brand-cyan/50 transition-all duration-500 hover:-translate-y-2 ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                                <item.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-6 font-display tracking-tight group-hover:text-brand-cyan transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/60 text-base leading-loose font-light">
                                {item.description}
                            </p>

                            {/* Hover Glow - Inner */}
                            <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            {/* Hover Glow - Outer (The Neon Effect) */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-cyan/0 via-brand-cyan/0 to-brand-purple/0 group-hover:from-brand-cyan/20 group-hover:via-brand-purple/10 group-hover:to-brand-cyan/5 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-3xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

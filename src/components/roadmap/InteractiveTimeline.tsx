"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scan, BrainCircuit, Cpu, TrendingUp } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const phases = [
    {
        id: "01",
        title: "Diagnóstico de Fugas y Alineación",
        description: "Análisis profundo de la estructura actual para identificar ineficiencias operativas y alinear la visión del fundador con la capacidad tecnológica.",
        icon: Scan,
    },
    {
        id: "02",
        title: "Identidad Ciber-Espiritual",
        description: "Construcción de una narrativa de marca magnética que fusiona autoridad técnica con profundidad humana, diferenciándote radicalmente del mercado.",
        icon: BrainCircuit,
    },
    {
        id: "03",
        title: "Despliegue de Labor Digital Autónoma",
        description: "Implementación técnica de agentes de IA y automatizaciones complejas (El 'Switch') que ejecutan tareas críticas 24/7 sin supervisión.",
        icon: Cpu,
        highlight: true,
    },
    {
        id: "04",
        title: "Estatus 'Prime Mover' & High-Ticket",
        description: "Ascensión al liderazgo de categoría, permitiendo cobrar precios premium y operar desde la estrategia mientras el sistema gestiona la entrega.",
        icon: TrendingUp,
    },
];

export default function InteractiveTimeline() {
    const isMobile = useMobile();
    const containerRef = useRef<HTMLDivElement>(null);

    // Solo activamos useScroll en desktop — en mobile es innecesario y drena batería
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="relative w-full py-20 pb-40 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative">

                {/* Central Energy Beam (Background) */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0" />

                {/* Active Energy Beam — scroll animated on desktop, static faded on mobile */}
                {isMobile ? (
                    <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent -translate-x-1/2 z-10 opacity-40" />
                ) : (
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-white to-brand-purple -translate-x-1/2 origin-top z-10 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                    />
                )}

                <div className="space-y-16 md:space-y-32">
                    {phases.map((phase, index) => (
                        <RoadmapItem key={index} phase={phase} index={index} isMobile={isMobile} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RoadmapItem({ phase, index, isMobile }: { phase: any; index: number; isMobile: boolean }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            // En mobile: animación simple de fade-in, sin translate (más liviana)
            initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: isMobile ? 0.4 : 0.8 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Center Node (Icon) — sin backdrop-blur en mobile */}
            <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 z-20">
                <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center border-2 transition-all duration-500
                    ${phase.highlight
                        ? "bg-brand-cyan/20 border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                        : "bg-[#0a0a12] border-brand-purple/50"}
                `}>
                    <phase.icon className={`w-6 h-6 md:w-8 md:h-8 ${phase.highlight ? "text-white" : "text-brand-purple"}`} />
                </div>
            </div>

            {/* SPACER for Desktop Grid Logic */}
            <div className="hidden md:block w-1/2" />

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                <div className="relative group">
                    <h3 className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-2">
                        {phase.id}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold font-display text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-300">
                        {phase.title}
                    </h4>
                    <p className="text-white/60 font-sans text-base leading-relaxed">
                        {phase.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bot, Activity, Brain, Globe, Cpu, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";

// ─── Desktop-only: 3D Spotlight Card ─────────────────────────────────────────
const SpotlightCard = ({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);

    function handleSpotlightMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        spotlightX.set(clientX - left);
        spotlightY.set(clientY - top);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
        spotlightX.set(-1000);
        spotlightY.set(-1000);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleSpotlightMove}
            onMouseLeave={onMouseLeave}
            style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
            className={cn("relative group/card cursor-pointer", containerClassName)}
        >
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className={cn("glass-card rounded-2xl h-full relative overflow-hidden border border-white/10 group-hover/card:border-brand-purple/50 transition-colors duration-500", className)}
            >
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                        background: useMotionTemplate`radial-gradient(650px circle at ${spotlightX}px ${spotlightY}px, rgba(208,0,255,0.1), transparent 80%)`,
                    }}
                />
                <div className="relative z-20 h-full">{children}</div>
            </div>
        </motion.div>
    );
};

// ─── Mobile-only: Static simple card (no 3D, no JS tracking) ─────────────────
const SimpleCard = ({ children, className, containerClassName }: { children: React.ReactNode; className?: string; containerClassName?: string }) => (
    <div className={cn("relative", containerClassName)}>
        <div className={cn("rounded-2xl h-full relative overflow-hidden border border-white/10 bg-white/5", className)}>
            {children}
        </div>
    </div>
);

// ─── Adaptive wrapper —selects card type based on device ─────────────────────
const AdaptiveCard = ({ children, className, containerClassName }: { children: React.ReactNode; className?: string; containerClassName?: string }) => {
    const isMobile = useMobile();
    if (isMobile) {
        return <SimpleCard className={className} containerClassName={containerClassName}>{children}</SimpleCard>;
    }
    return <SpotlightCard className={className} containerClassName={containerClassName}>{children}</SpotlightCard>;
};

export default function PowerCore() {
    const isMobile = useMobile();

    return (
        <section className={cn("relative w-full py-24 overflow-hidden font-sans", !isMobile && "cyber-grid")}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Title */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-cyan text-sm font-bold tracking-[0.3em] uppercase block font-display"
                    >
                        Arquitectura de Excelencia
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white tracking-tight text-4xl md:text-6xl font-bold leading-tight font-display"
                    >
                        Capacidades del <span className="text-brand-purple">Sistema Central</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        Fusionando intuición espiritual con precisión cibernética para construir la próxima generación de imperios digitales.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:gap-8 h-auto md:h-[600px]"
                    style={isMobile ? {} : { perspective: "1000px" }}
                >
                    {/* Autonomous Bot Systems */}
                    <AdaptiveCard containerClassName="md:col-span-4 md:row-span-2" className="p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="size-14 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shadow-[0_0_15px_rgba(208,0,255,0.2)]">
                                <Bot className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">Sistemas de Bots Autónomos</h3>
                                <p className="text-white/60 leading-relaxed">Flujos de trabajo agénticos de autoaprendizaje que manejan la complejidad con cero latencia.</p>
                            </div>
                        </div>
                        {/* Static icon on mobile, animated on desktop */}
                        <div className="mt-8 overflow-hidden rounded-lg relative h-32 border border-brand-purple/20 bg-brand-purple/5">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu className={cn("text-brand-purple/40 w-24 h-24", !isMobile && "animate-pulse")} />
                            </div>
                        </div>
                    </AdaptiveCard>

                    {/* Real-time Analytics */}
                    <AdaptiveCard containerClassName="md:col-span-8 md:row-span-1" className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="max-w-md w-full">
                            <div className="size-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-4">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-display">Analítica en Tiempo Real</h3>
                            <p className="text-white/60">Modelado predictivo que visualiza el futuro de tu mercado antes de que suceda.</p>
                        </div>
                        {/* Chart — animated on desktop, static on mobile */}
                        <div className="w-full md:w-1/3 h-20 md:h-24 bg-brand-cyan/5 rounded-lg border border-brand-cyan/10 flex items-end p-2 gap-1 overflow-hidden">
                            {isMobile ? (
                                // Static bars on mobile
                                <>
                                    <div className="flex-1 bg-brand-cyan/20 rounded-sm" style={{ height: "40%" }} />
                                    <div className="flex-1 bg-brand-cyan/40 rounded-sm" style={{ height: "65%" }} />
                                    <div className="flex-1 bg-brand-cyan/60 rounded-sm" style={{ height: "85%" }} />
                                    <div className="flex-1 bg-brand-cyan/30 rounded-sm" style={{ height: "55%" }} />
                                </>
                            ) : (
                                // Animated bars on desktop
                                <>
                                    <motion.div className="flex-1 bg-brand-cyan/20 rounded-sm" initial={{ height: "20%" }} whileInView={{ height: "50%" }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
                                    <motion.div className="flex-1 bg-brand-cyan/40 rounded-sm" initial={{ height: "40%" }} whileInView={{ height: "75%" }} transition={{ duration: 1.2, delay: 0.1, repeat: Infinity, repeatType: "reverse" }} />
                                    <motion.div className="flex-1 bg-brand-cyan/60 rounded-sm" initial={{ height: "60%" }} whileInView={{ height: "100%" }} transition={{ duration: 1.8, delay: 0.2, repeat: Infinity, repeatType: "reverse" }} />
                                    <motion.div className="flex-1 bg-brand-cyan/30 rounded-sm" initial={{ height: "30%" }} whileInView={{ height: "65%" }} transition={{ duration: 1.4, delay: 0.3, repeat: Infinity, repeatType: "reverse" }} />
                                </>
                            )}
                        </div>
                    </AdaptiveCard>

                    {/* Neural Brain */}
                    <AdaptiveCard containerClassName="md:col-span-4 md:row-span-1" className="p-8">
                        <div className="size-12 rounded-xl bg-brand-lilac/10 flex items-center justify-center text-brand-lilac mb-4">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 font-display">Cerebros Neuronales</h3>
                        <p className="text-white/60 text-sm">Frameworks de aprendizaje profundo que imitan la lógica cognitiva humana.</p>
                    </AdaptiveCard>

                    {/* Global Network */}
                    <AdaptiveCard containerClassName="md:col-span-4 md:row-span-1" className="p-8 overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="size-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-display">Red Global</h3>
                            <p className="text-white/60 text-sm">Sincronización descentralizada a través de todos los nodos globales.</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 text-brand-purple/10">
                            <Network className="w-32 h-32 opacity-50" />
                        </div>
                    </AdaptiveCard>
                </div>
            </div>
        </section>
    );
}

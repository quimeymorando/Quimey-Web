"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function RoadmapHero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden z-10">
            {/* Tech Grid Background (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="glass-card p-8 md:p-16 rounded-xl border border-brand-cyan/20 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Glowing Borders */}
                    <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-brand-cyan to-transparent rounded-full opacity-70" />
                    <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-brand-purple to-transparent rounded-full opacity-70" />

                    {/* Header Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                            <Sparkles className="w-8 h-8 text-brand-cyan" />
                        </div>
                    </div>

                    <div className="text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-lilac/50">
                            LA ARQUITECTURA DE <br className="hidden md:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple filter drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                LA NUEVA ERA
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/80 font-light font-sans max-w-3xl mx-auto leading-relaxed">
                            "Olvida el crecimiento lineal y la operación manual. El futuro pertenece a los <span className="text-white font-medium">ecosistemas autónomos</span>. Este mapa no es una lista de tareas; es el <span className="text-brand-purple font-bold">Framework exacto</span> que utilizo para transformar negocios estancados en activos digitales auto-escalables, fusionando Inteligencia Artificial Agéntica con Propósito Humano."
                        </p>
                    </div>

                    {/* Decorative Data Points */}
                    <div className="absolute top-10 left-10 hidden md:flex flex-col gap-1 opacity-30">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-mono">System Online</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Refined) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-3 z-10"
            >
                <span className="text-[10px] text-brand-purple/60 tracking-[0.3em] uppercase">Iniciar Secuencia</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-purple/0 via-brand-purple to-brand-purple/0" />
            </motion.div>
        </section>
    );
}

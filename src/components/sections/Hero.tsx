"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32">

            {/* ===== DESKTOP ONLY: Sacred Geometry (pesada, se oculta en mobile) ===== */}
            <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px]"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full relative flex items-center justify-center will-change-transform"
                        >
                            {/* ENCLOSING CIRCLE 1 */}
                            <motion.div
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                    boxShadow: ["0 0 40px rgba(0,240,255,0.6), inset 0 0 20px rgba(0,240,255,0.3)", "0 0 100px rgba(0,240,255,1), inset 0 0 40px rgba(0,240,255,0.5)", "0 0 40px rgba(0,240,255,0.6), inset 0 0 20px rgba(0,240,255,0.3)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-[800px] h-[800px] border-[3px] border-brand-cyan/80 rounded-full"
                            />
                            {/* ENCLOSING CIRCLE 2 */}
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    opacity: [0.5, 0.9, 0.5],
                                    boxShadow: ["0 0 40px rgba(208,0,255,0.5), inset 0 0 20px rgba(208,0,255,0.2)", "0 0 120px rgba(208,0,255,0.9), inset 0 0 50px rgba(208,0,255,0.4)", "0 0 40px rgba(208,0,255,0.5), inset 0 0 20px rgba(208,0,255,0.2)"]
                                }}
                                transition={{
                                    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute w-[1100px] h-[1100px] border-[2px] border-brand-purple/70 rounded-full border-dashed"
                            />
                            {/* ENCLOSING CIRCLE 3 */}
                            <motion.div
                                animate={{
                                    rotate: 180,
                                    opacity: [0.4, 0.7, 0.4],
                                    boxShadow: ["0 0 50px rgba(139,92,246,0.3)", "0 0 150px rgba(139,92,246,0.6)", "0 0 50px rgba(139,92,246,0.3)"]
                                }}
                                transition={{
                                    rotate: { duration: 180, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute w-[1500px] h-[1500px] border-[1px] border-brand-lilac/60 rounded-full opacity-60"
                            />
                            {/* Sacred Geometry SVG */}
                            <svg viewBox="0 0 200 200" className="w-[600px] h-[600px] overflow-visible z-10">
                                <defs>
                                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#D000FF" stopOpacity="1" />
                                    </linearGradient>
                                    <filter id="max-glow" x="-100%" y="-100%" width="300%" height="300%">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <motion.g
                                    stroke="url(#neonGradient)"
                                    strokeWidth="3"
                                    fill="none"
                                    filter="url(#max-glow)"
                                    animate={{ opacity: [0.7, 1, 0.7], strokeWidth: ["2px", "4px", "2px"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                >
                                    <path d="M100 20 L170 140 L30 140 Z" />
                                    <path d="M100 180 L170 60 L30 60 Z" />
                                    <motion.g stroke="#D000FF" strokeOpacity="0.9" strokeWidth="2">
                                        <circle cx="100" cy="100" r="20" />
                                        <circle cx="100" cy="40" r="10" />
                                        <circle cx="100" cy="160" r="10" />
                                        <circle cx="48" cy="70" r="10" />
                                        <circle cx="152" cy="70" r="10" />
                                        <circle cx="48" cy="130" r="10" />
                                        <circle cx="152" cy="130" r="10" />
                                    </motion.g>
                                    <path d="M100 20 L100 180" opacity="0.8" strokeWidth="1.5" />
                                    <path d="M30 60 L170 140" opacity="0.8" strokeWidth="1.5" />
                                    <path d="M170 60 L30 140" opacity="0.8" strokeWidth="1.5" />
                                </motion.g>
                            </svg>
                        </motion.div>
                        {/* Counter-Rotating Inner Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[25%] border border-dashed border-brand-purple/20 rounded-full will-change-transform"
                        />
                    </motion.div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-violet/10 via-transparent to-transparent blur-3xl" />
            </div>

            {/* ===== MOBILE ONLY: Fondo ambiental ligero ===== */}
            <div className="md:hidden absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-brand-cyan/8 rounded-full blur-[80px]" />
                <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-brand-purple/10 rounded-full blur-[60px]" />
            </div>

            {/* Ambient glow (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] mix-blend-screen animate-pulse" />

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lilac text-xs font-bold tracking-[0.2em] uppercase">
                        Sistema En Línea: v3.0
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-[1.2] text-balance max-w-4xl mx-auto"
                >
                    El Fin de la Operación Manual:{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-purple md:animate-shimmer bg-[length:200%_auto]">
                        Instala tu Ecosistema de Autonomía y Convierte tu Conocimiento en un Motor de Ingresos de Élite.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-sans text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mt-4 text-pretty"
                >
                    Cómo orquestar agentes de IA y sistemas agénticos para escalar a <span className="text-white font-medium">High-Ticket</span> sin sacrificar tu propósito humano ni tu tiempo.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center pt-2"
                >
                    <a
                        href="https://wa.me/5492804819907"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-xl font-bold text-sm md:text-base uppercase tracking-widest overflow-hidden text-white transition-all duration-300"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Shimmer overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-md transition-opacity duration-300" />
                            {/* Border glow */}
                            <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-shadow duration-300" />
                            <span className="relative z-10 flex items-center gap-3">
                                Quiero Instalar mi Ecosistema
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </motion.button>
                    </a>
                </motion.div>

            </div>

        </section>
    );
}

"use client";

import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32">
            {/* Sacred Geometry Background (Metatron's Cube abstract representation) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                {/* Geometric Overlay - Sacred Geometry (Merkaba / Metatron) */}
                <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px]"
                    >
                        {/* Main Rotating Structure */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full relative flex items-center justify-center"
                        >
                            {/* ENCLOSING CIRCLE 1: Immediate Surround (Double Line) */}
                            <motion.div
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                    boxShadow: ["0 0 40px rgba(0,240,255,0.6), inset 0 0 20px rgba(0,240,255,0.3)", "0 0 100px rgba(0,240,255,1), inset 0 0 40px rgba(0,240,255,0.5)", "0 0 40px rgba(0,240,255,0.6), inset 0 0 20px rgba(0,240,255,0.3)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-[800px] h-[800px] border-[3px] border-brand-cyan/80 rounded-full"
                            />

                            {/* ENCLOSING CIRCLE 2: Middle Ring (Dashed/Complex) */}
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

                            {/* ENCLOSING CIRCLE 3: Massive Outer Ring (Orbital) */}
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

                            {/* Sacred Geometry SVG (MAX INTENSITY) */}
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

                                {/* Merkaba / Star Tetrahedron projected in 2D */}
                                <motion.g
                                    stroke="url(#neonGradient)"
                                    strokeWidth="3"
                                    fill="none"
                                    filter="url(#max-glow)"
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                        strokeWidth: ["2px", "4px", "2px"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                >
                                    {/* Triangle 1 (Up) */}
                                    <path d="M100 20 L170 140 L30 140 Z" />
                                    {/* Triangle 2 (Down) */}
                                    <path d="M100 180 L170 60 L30 60 Z" />

                                    {/* Inner Connections for Metatron Complexity */}
                                    <motion.g stroke="#D000FF" strokeOpacity="0.9" strokeWidth="2">
                                        <circle cx="100" cy="100" r="20" />
                                        <circle cx="100" cy="40" r="10" />
                                        <circle cx="100" cy="160" r="10" />
                                        <circle cx="48" cy="70" r="10" />
                                        <circle cx="152" cy="70" r="10" />
                                        <circle cx="48" cy="130" r="10" />
                                        <circle cx="152" cy="130" r="10" />
                                    </motion.g>

                                    {/* Connecting Lines */}
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
                            className="absolute inset-[25%] border border-dashed border-brand-purple/20 rounded-full"
                        />
                    </motion.div>
                </div>     {/* Floating Particles */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-violet/10 via-transparent to-transparent blur-3xl" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] mix-blend-screen animate-pulse" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lilac text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-purple animate-shimmer bg-[length:200%_auto]">
                        Instala tu Ecosistema de Autonomía y Convierte tu Conocimiento en un Motor de Ingresos de Élite.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-sans text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mt-6 text-pretty"
                >
                    Cómo orquestar agentes de IA y sistemas agénticos para escalar a <span className="text-white font-medium">High-Ticket</span> sin sacrificar tu propósito humano ni tu tiempo.
                </motion.p>


            </div>

            {/* Scroll Indicator */}

        </section>
    );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Scissors, Monitor } from "lucide-react";

export default function TheEditingPrism() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax / Assembly Transforms
    // Layer 1 (Back) - Script/Strategy (Top Left)
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity1 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    // Layer 2 (Middle) - Rhythm/Editing (Center Right)
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -30]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    // Layer 3 (Front) - Result (Center Bottom)
    const y3 = useTransform(scrollYProgress, [0, 1], [100, 30]);
    const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]);


    return (
        <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center perspective-1000 overflow-visible">

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-brand-cyan/5 blur-[100px] rounded-full z-0" />

            {/* PANEL 1: THE ORIGIN (Script) - Moved Top Left (Less extreme) */}
            <motion.div
                style={{ y: y1, x: x1, scale: scale1, opacity: opacity1 }}
                className="absolute w-64 h-80 bg-[#0F1629]/90 border border-white/10 rounded-2xl backdrop-blur-sm z-10 flex flex-col items-center justify-center shadow-2xl transform-style-3d -translate-x-20 -translate-y-16 rotate-z-[-10deg]"
            >
                <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                    <FileText className="w-8 h-8 text-white/40" />
                </div>
                <span className="text-white/20 text-xs uppercase tracking-widest font-bold">Guion & Estrategia</span>

                {/* Visualizing Lines of Text */}
                <div className="w-32 space-y-2 mt-6">
                    <div className="h-1 w-full bg-white/10 rounded-full" />
                    <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-1 w-5/6 bg-white/10 rounded-full" />
                    <div className="h-1 w-full bg-white/10 rounded-full" />
                </div>
            </motion.div>


            {/* PANEL 2: THE STRUCTURE (Rhythm) - Moved Top Right (Less extreme) */}
            <motion.div
                style={{ y: y2, x: x2, scale: scale2, opacity: opacity2 }}
                className="absolute w-64 h-80 bg-brand-cyan/10 border border-brand-cyan/30 rounded-2xl backdrop-blur-md z-20 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)] transform-style-3d translate-x-20 -translate-y-8 rotate-z-[5deg]"
            >
                <div className="p-4 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 mb-4 animate-pulse">
                    <Scissors className="w-8 h-8 text-brand-cyan" />
                </div>
                <span className="text-brand-cyan/60 text-xs uppercase tracking-widest font-bold">Ritmo & Corte</span>

                {/* Visualizing Audio/Timeline */}
                <div className="w-40 flex items-center justify-center gap-1 mt-6 h-12">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [10, 30, 10] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                            className="w-1 bg-brand-cyan/40 rounded-full"
                        />
                    ))}
                </div>
            </motion.div>


            {/* PANEL 3: THE RESULT (Impact) - Center Bottom (Less extreme) */}
            <motion.div
                style={{ y: y3, scale: scale3, opacity: opacity3 }}
                className="absolute w-72 h-44 bg-brand-purple/10 border border-brand-purple/50 rounded-2xl backdrop-blur-xl z-30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(120,0,255,0.2)] transform-style-3d translate-y-20"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent opacity-50" />

                <div className="relative z-10 flex items-center gap-4">
                    <Monitor className="w-10 h-10 text-brand-purple drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    <div>
                        <span className="block text-brand-purple text-lg font-bold uppercase tracking-widest">Impacto</span>
                        <span className="block text-white/50 text-xs uppercase tracking-wider">Final Render</span>
                    </div>
                </div>

                {/* Glowing Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-purple rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-purple rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-purple rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-purple rounded-br-lg" />
            </motion.div>

        </div>
    );
}

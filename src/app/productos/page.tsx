"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FloatingNav from "@/components/ui/magic/FloatingNav";
import dynamic from "next/dynamic";

// Loader pesado solo en desktop para no castigar el mobile
const SacredGeometryLoader = dynamic(() => import("@/components/ui/SacredGeometryLoader"), { ssr: false });

export default function ProductosPage() {
    return (
        <main className="relative w-full min-h-screen bg-[#050A14] overflow-hidden flex flex-col">
            <FloatingNav />

            {/* Geometric loader — desktop only */}
            <div className="hidden md:block">
                <SacredGeometryLoader />
            </div>

            {/* Mobile ambient background */}
            <div className="md:hidden absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-cyan/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-brand-purple/8 blur-[60px] rounded-full" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 py-24">

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-[0.2em]"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                    Herramientas de Autonomía
                </motion.div>

                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="relative mb-6"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-widest uppercase drop-shadow-[0_0_30px_rgba(0,255,255,0.6)] px-4 text-balance break-words">
                        PRÓXIMAMENTE
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-base md:text-xl text-white/50 tracking-[0.2em] font-light uppercase mb-6 max-w-md"
                >
                    Las herramientas se están forjando...
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-sm text-white/30 font-light max-w-sm mb-16 leading-relaxed"
                >
                    Recursos y activos digitales para instalar tu ecosistema de ingresos autónomo están siendo desarrollados.
                </motion.p>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-brand-cyan/50 bg-transparent overflow-hidden transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <ArrowLeft className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors relative z-10" />
                        <span className="text-sm font-bold text-white tracking-widest uppercase relative z-10">
                            Volver al Inicio
                        </span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}

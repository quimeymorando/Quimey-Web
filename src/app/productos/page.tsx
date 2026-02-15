"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SacredGeometryLoader from "@/components/ui/SacredGeometryLoader";

export default function ProductsPage() {
    return (
        <main className="relative w-full min-h-screen bg-[#050A14] overflow-hidden flex flex-col items-center justify-center">

            {/* 1. ATMOSPHERE: SACRED GEOMETRY */}
            <SacredGeometryLoader />

            {/* Content Container - Centered */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6">

                {/* 2. TYPOGRAPHY: IMPACT MESSAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-widest uppercase drop-shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                        PRÓXIMAMENTE
                    </h1>

                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl text-white/60 tracking-[0.3em] font-light uppercase mb-20"
                >
                    "La alquimia digital está en proceso..."
                </motion.p>


                {/* 3. NAVIGATION: RETURN TO BASE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-brand-purple/50 bg-transparent overflow-hidden transition-all duration-300 hover:border-brand-purple hover:shadow-[0_0_20px_rgba(120,0,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-brand-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                        <ArrowLeft className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors relative z-10" />
                        <span className="text-sm font-bold text-white tracking-widest uppercase relative z-10 group-hover:text-white transition-colors">
                            Volver a la Base
                        </span>
                    </Link>
                </motion.div>

            </div>



        </main>
    );
}

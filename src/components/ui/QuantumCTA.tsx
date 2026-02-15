"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CircuitBackground from "@/components/ui/CircuitBackground";

const QuantumCTA = () => {
    return (
        <section className="relative w-full min-h-screen py-32 px-6 z-10 bg-[#050A14] overflow-hidden flex flex-col items-center justify-center">

            {/* 1. ATMOSPHERE: CIRCUIT BACKGROUND (REPLACED WARP SPEED) */}
            <div className="absolute inset-0 z-0">
                <CircuitBackground />
            </div>

            {/* Digital Fog */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050A14] via-[#050A14]/80 to-transparent z-0 pointer-events-none" />


            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* 2. TYPOGRAPHY: CHROME TEXT */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase relative px-2 text-balance"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        ¿Listo para diseñar
                    </span>
                    <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-white to-brand-cyan drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] block md:inline mt-2 md:mt-0">
                        tu Infraestructura?
                    </span>
                </motion.h2>

                {/* NEW CLOSING PHRASE */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-white font-serif italic font-light mb-16 tracking-wide drop-shadow-lg px-4"
                >
                    "Tu activo más valioso es tu tiempo. Deja de gastarlo y empieza a invertirlo."
                </motion.p>


                {/* 3. SERVICE STACK BAR (Glassmorphism) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ boxShadow: "0 0 30px rgba(6,182,212,0.2)", borderColor: "rgba(255,255,255,0.3)" }}
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-8 px-4 md:px-8 py-3 md:py-4 rounded-3xl md:rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-20 transition-all duration-300 group max-w-[90vw]"
                >
                    {[
                        "Arquitectura Web",
                        "Inteligencia Agéntica",
                        "Closers de Élite",
                        "Narrativa Visual",
                        "Alma y Alcance"
                    ].map((service, i) => (
                        <React.Fragment key={i}>
                            <span className="text-white/70 text-xs md:text-sm uppercase tracking-widest font-medium group-hover:text-white transition-colors cursor-default whitespace-nowrap">
                                {service}
                            </span>
                            {i < 4 && (
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_5px_#00FFFF] animate-pulse" />
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>


                {/* 4. QUANTUM BUTTON */}
                <div className="relative group">
                    <motion.a
                        href="https://wa.me/5492804819907"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 inline-flex items-center gap-3 md:gap-4 px-8 py-5 md:px-16 md:py-8 bg-[#0A0F1E] border border-brand-cyan/50 rounded-full overflow-hidden transition-all duration-300 w-full md:w-auto justification-center"
                        style={{
                            boxShadow: "0 0 50px rgba(6,182,212,0.3), inset 0 0 20px rgba(120,0,255,0.2)"
                        }}
                    >
                        {/* Button Pulse Animation */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-purple/20 to-brand-cyan/20"
                        />

                        {/* Button Shine Sweep */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                        <span className="relative z-10 text-white font-black tracking-[0.2em] uppercase text-lg md:text-2xl drop-shadow-md whitespace-nowrap">
                            APLICAR AHORA
                        </span>
                        <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-brand-cyan group-hover:translate-x-2 transition-transform drop-shadow-[0_0_5px_#00FFFF]" />
                    </motion.a>

                    {/* 5. REFLECTION (Floor Effect) */}
                    <div
                        className="absolute top-full left-0 w-full h-full opacity-30 pointer-events-none transform scale-y-[-1] origin-top blur-sm mt-4 hidden md:block"
                        style={{
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)"
                        }}
                    >
                        <div className="inline-flex items-center gap-4 px-16 py-8 bg-[#0A0F1E] border border-brand-cyan/30 rounded-full">
                            <span className="text-white/50 font-black tracking-[0.2em] uppercase text-xl md:text-2xl">
                                APLICAR AHORA
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuantumCTA;

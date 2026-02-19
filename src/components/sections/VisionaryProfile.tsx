"use client";

import { motion } from "framer-motion";
import { Sparkles, Box } from "lucide-react";
import Image from "next/image";

export default function VisionaryProfile() {
    return (
        <section className="relative w-full py-32 overflow-hidden bg-background">
            {/* Background Accents */}

            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-cyan/10 rounded-full blur-[40px] md:blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">

                    {/* Mobile Title (Visible only on mobile) */}
                    <div className="lg:hidden w-full text-center mb-8 order-1">
                        <div className="space-y-4">
                            <span className="text-brand-cyan font-medium tracking-[0.3em] uppercase text-xs">Liderazgo Visionario</span>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter neon-text-gradient font-display">
                                Quimey Morando — El Visionario
                            </h2>
                        </div>
                    </div>

                    {/* Left Side: Typography & Philosophy */}
                    <div className="flex flex-col gap-8 order-3 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 hidden lg:block"
                        >
                            <span className="text-brand-cyan font-medium tracking-[0.3em] uppercase text-xs">Liderazgo Visionario</span>
                            <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter neon-text-gradient font-display">
                                Quimey Morando — El Visionario
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-8 rounded-xl space-y-6 relative"
                        >
                            <div className="absolute -left-1 top-8 w-1 h-12 bg-brand-cyan" />
                            <h3 className="text-2xl font-bold text-white font-display">Tecnosustancialismo</h3>
                            <p className="text-white/80 leading-relaxed text-lg font-light font-sans">
                                Una filosofía de esencia digital y manifestación física, uniendo la evolución tecnológica con la consultoría premium. No solo construimos sistemas; arquitectamos conciencia digital hacia una dominancia tangible.
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-brand-lilac/80">
                                    <Box className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Fusión Ciber-Espiritual</span>
                                </div>
                                <div className="flex items-center gap-4 text-brand-lilac/80">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Alquimia de Alto Nivel</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Roadmap Button Removed per User Request */}
                    </div>

                    {/* Right Side: High-Tech Portrait Frame */}
                    <div className="order-2 lg:order-2 flex justify-center lg:justify-end w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl p-2 md:p-4 portrait-frame border border-white/10 glass-card"
                        >
                            {/* Frame UI Elements */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-cyan rounded-tl-xl" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500 rounded-br-xl" />

                            <div className="absolute top-10 right-10 flex flex-col gap-2 items-end z-20">
                                <div className="w-24 h-1 bg-cyan-400/20" />
                                <div className="w-16 h-1 bg-cyan-400/60" />
                                <div className="w-32 h-1 bg-cyan-400/10" />
                            </div>

                            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full border border-brand-cyan/30 z-20">
                                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-brand-cyan">Identidad Biométrica Verificada</span>
                            </div>

                            {/* Portrait Image */}
                            <div className="w-full h-full rounded-xl bg-neutral-900 overflow-hidden relative group">
                                <Image
                                    src="/quimey-profile.png"
                                    alt="Quimey Morando - El Visionario"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Timeline Section */}
                {/* Timeline Section Removed per User Request */}
                <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
            </div>
        </section>
    );
}

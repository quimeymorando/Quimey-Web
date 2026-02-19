"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import FuturistButton from "@/components/ui/FuturistButton";

const stackItems = [
    "Diagnóstico estratégico inicial",
    "Arquitectura de sistema autónomo",
    "Identidad visual ciber-espiritual",
    "Agentes de IA implementados 24/7",
    "Soporte de ingeniería dedicado"
];

export default function RoadmapCTA() {
    return (
        <section className="relative w-full py-24 px-6 flex justify-center z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl glass-card rounded-xl p-10 md:p-20 text-center border border-brand-cyan/20 bg-gradient-to-b from-brand-purple/5 to-[#0a0a12] relative overflow-hidden"
            >
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-cyan/5 blur-[40px] md:blur-[100px] pointer-events-none" />

                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter text-white mb-8 relative z-10">
                    TU ECOSISTEMA ESTÁ <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                        ESPERANDO
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 relative z-10">
                    {stackItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/10">
                            <Check className="w-4 h-4 text-brand-cyan" />
                            <span className="text-sm md:text-base text-white/80">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 flex justify-center">
                    <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                        <FuturistButton
                            className="!py-6 !px-10 !text-lg !rounded-lg"
                            variant="primary"
                            icon={<Zap className="w-6 h-6 animate-pulse" />}
                        >
                            INICIAR MI INSTALACIÓN AHORA
                        </FuturistButton>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

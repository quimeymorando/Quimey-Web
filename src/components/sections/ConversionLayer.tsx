"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Key } from "lucide-react";
import FuturistButton from "@/components/ui/FuturistButton";

export default function ConversionLayer() {
    return (
        <section className="relative w-full py-32 px-4 overflow-hidden flex flex-col items-center text-center z-10 bg-background">
            {/* Background Energy */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-brand-violet/5 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl relative z-10 p-12 rounded-3xl border border-brand-purple/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.15)]"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand-purple/50">
                    <Lock className="w-3 h-3" /> Solo Por Invitación
                </div>

                <div className="mb-6 flex justify-center">
                    <span className="text-brand-lilac font-mono text-sm tracking-[0.2em] uppercase">El Interruptor de Oportunidad</span>
                </div>

                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    ¿ESTÁS LISTO PARA EL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-lilac animate-pulse">
                        NUEVO VEHÍCULO?
                    </span>
                </h2>

                <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                    Si pudieras automatizar tu libertad sin las cadenas de la gestión operativa tradicional...
                    <span className="text-white font-medium"> ¿Te gustaría ver si eres el candidato correcto?</span>
                </p>

                <p className="text-base text-foreground/60 mb-10 max-w-lg mx-auto italic">
                    "No buscamos clientes. Buscamos nuestros próximos casos de éxito masivo. Este sistema no es para todos."
                </p>

                <div className="flex flex-col gap-6 justify-center items-center">
                    <FuturistButton icon={<Key className="w-5 h-5" />} className="!bg-brand-purple hover:!bg-brand-violet !text-white !border-none !px-10 !py-4 !text-lg shadow-[0_0_30px_rgba(208,0,255,0.4)]">
                        QUIERO VER SI CALIFICO
                    </FuturistButton>
                    <p className="text-xs text-brand-cyan/60 font-mono tracking-widest uppercase">
                        Auditoría de Estatus: Requerida
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

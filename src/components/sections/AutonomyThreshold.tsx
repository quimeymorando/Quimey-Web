"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FuturistButton from "@/components/ui/FuturistButton";

const valueStack = [
    {
        title: "Diagnóstico de Ecosistema",
        description: "Identificamos las fugas de tiempo y dinero en tu operación actual."
    },
    {
        title: "Diseño de Identidad Ciber-Espiritual",
        description: "Creamos la capa visual y narrativa que te posiciona como autoridad."
    },
    {
        title: "Instalación de Agentes Autónomos",
        description: "Desplegamos tu fuerza de trabajo digital 24/7."
    },
    {
        title: "Acceso al Ecosistema de Élite",
        description: "Soporte directo en la optimización de tu motor de ingresos."
    }
];

export default function AutonomyThreshold() {
    return (
        <section className="relative w-full py-32 bg-background flex justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-background to-background pointer-events-none" />

            <div className="max-w-4xl w-full px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-12 md:p-16 rounded-3xl border border-brand-purple/30 shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden"
                >
                    {/* Header: Authority Statement */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
                            Tu negocio debería darte libertad, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple animate-pulse">
                                no quitártela.
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-brand-purple mx-auto rounded-full mb-8" />

                        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
                            <p>
                                Mi sistema de <span className="text-white font-medium">Arquitectura de Autonomía</span> no es para quienes buscan soluciones temporales o simples automatizaciones de chat. Es para líderes, expertos y dueños de negocios multidisciplinarios que están listos para dejar atrás la era de la <span className="italic text-brand-cyan">'operación manual'</span> y tomar su lugar como los directores de su propio ecosistema tecnológico.
                            </p>
                            <p className="font-medium text-white/90">
                                Debido a la naturaleza personalizada y de alta fidelidad de estas instalaciones, solo acepto a un número limitado de profesionales cada mes para asegurar que cada sistema sea una obra maestra de eficiencia y propósito.
                            </p>
                        </div>
                    </div>

                    {/* The Value Stack */}
                    <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
                        <h3 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-6 text-center">
                            El Stack de Valor (Lo que recibes)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {valueStack.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-brand-purple shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA: Radical Action */}
                    <div className="flex flex-col items-center gap-6">
                        <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ boxShadow: ["0 0 20px rgba(208,0,255,0.3)", "0 0 40px rgba(208,0,255,0.6)", "0 0 20px rgba(208,0,255,0.3)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative bg-brand-purple text-white font-bold text-xl px-12 py-5 rounded-xl uppercase tracking-wider overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Aplicar al Sistema de Autonomía <ArrowRight className="w-5 h-5" />
                                </span>
                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>
                        </a>
                        <p className="text-brand-lilac/60 text-xs font-mono tracking-widest uppercase">
                            Solo para profesionales decididos a escalar al High-Ticket
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-16 flex justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                        <div className="font-display font-bold text-4xl text-white tracking-widest border-2 border-white p-2 rounded-lg">
                            QM
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AutonomyBridge() {
    return (
        <section className="relative w-full py-32 bg-background-dark overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 rounded-2xl border border-brand-purple/20 relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 text-brand-purple/20">
                        <Quote className="w-20 h-20 fill-current" />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
                            El Puente de la <span className="text-brand-cyan">Autonomía</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent mx-auto" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light text-center max-w-4xl mx-auto">
                        <p>
                            "Durante años, nos dijeron que para escalar un negocio digital necesitábamos más herramientas, equipos masivos y una presencia agotadora en cada red social. Yo mismo estuve atrapado en esa <span className="text-white font-medium italic">'operación manual'</span>, construyendo sistemas que, en lugar de darme libertad, me convertían en un esclavo de la tecnología.
                        </p>

                        <p className="py-4">
                            Todo cambió cuando dejé de ver a la Inteligencia Artificial como una simple herramienta y entendí su verdadera naturaleza: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-bold tracking-wide">LABOR DIGITAL AUTÓNOMA</span>.
                        </p>

                        <p>
                            Me di cuenta de que el futuro no pertenece a quienes mejor automatizan, sino a quienes saben <span className="text-white font-semibold">orquestar ecosistemas que razonan, aprenden y ejecutan</span> procesos de alto impacto por sí mismos. Hoy, mi misión es instalar esa misma arquitectura de autonomía en tu marca, fusionando tecnología agéntica de vanguardia con un propósito humano profundo, para convertir tu conocimiento en un activo que genera riqueza sin demandar tu presencia constante."
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-12 flex flex-col items-center gap-2 opacity-80">
                        <span className="font-display font-bold text-white tracking-widest uppercase text-sm">Quimey Morando</span>
                        <span className="text-brand-cyan text-xs tracking-[0.2em] uppercase">Arquitecto de Sistemas</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

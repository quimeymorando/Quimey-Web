"use client";

import { motion } from "framer-motion";
import { Monitor, MessageSquare, Phone, Briefcase, Video, Users, MousePointerClick, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Sistemas Web",
        description: "De Landings de alta conversión a Ecosistemas PRO.",
        icon: Monitor,
        gradient: "from-brand-cyan via-brand-cyan/50 to-transparent"
    },
    {
        title: "Inteligencia ManyChat",
        description: "Automatización agéntica y bots de flujo inteligente.",
        icon: MessageSquare,
        gradient: "from-brand-purple via-brand-purple/50 to-transparent"
    },
    {
        title: "Appointment Setting",
        description: "El puente humano o bot entre el lead y la venta.",
        icon: Phone,
        gradient: "from-brand-cyan via-brand-blue/50 to-transparent"
    },
    {
        title: "Cierre de Élite (Closer)",
        description: "Exclusivo para operaciones de +10k (Takeaway Selling).",
        icon: Briefcase,
        gradient: "from-brand-purple via-pink-500/50 to-transparent"
    },
    {
        title: "Producción de Contenido",
        description: "Estrategia, guion y edición de alto impacto.",
        icon: Video,
        gradient: "from-brand-cyan via-brand-green/50 to-transparent"
    },
    {
        title: "Gestión de Ecosistemas",
        description: "Community Manager y Branding Ciber-Espiritual.",
        icon: Users,
        gradient: "from-brand-purple via-indigo-500/50 to-transparent"
    },
    {
        title: "Tráfico Inteligente",
        description: "Meta Ads (Básico y PRO).",
        icon: MousePointerClick,
        gradient: "from-brand-cyan via-teal-500/50 to-transparent"
    }
];

export default function AgencyTeaser() {
    return (
        <section className="relative w-full py-32 bg-background overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,240,255,0.05)]">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display tracking-tighter text-white mb-6 uppercase"
                    >
                        Arquitectura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Implementación</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        No buscamos clientes, instalamos autonomía. <br />
                        <span className="text-brand-cyan font-medium">La Agencia</span> es el brazo ejecutor que construye la infraestructura mientras tú mantienes la visión.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-cyan/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 rounded-2xl`} />

                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-brand-cyan/50">
                                <service.icon className="w-6 h-6 text-brand-cyan" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-brand-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link href="/agencia">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300"
                        >
                            <div className="absolute inset-0 border border-brand-cyan/50 rounded-full group-hover:border-brand-cyan transition-colors duration-300" />
                            <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                            <span className="relative z-10 flex items-center gap-3 text-brand-cyan font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors">
                                Agencia Tierra Dorada
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

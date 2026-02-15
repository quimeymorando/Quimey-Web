"use client";

import { motion } from "framer-motion";
import FloatingNav from "@/components/ui/magic/FloatingNav";
import { Monitor, Users, Video, Zap, Check, Lock, ArrowRight, MessageSquare, Globe, Sparkles } from "lucide-react";
import AgencyCard from "@/components/ui/AgencyCard";
import DigitalNerveCard from "@/components/ui/DigitalNerveCard";
import TheEditingPrism from "@/components/ui/TheEditingPrism";
import SoulReachSection from "@/components/ui/SoulReachSection";
import QuantumCTA from "@/components/ui/QuantumCTA";

import CircuitBackground from "@/components/ui/CircuitBackground";

export default function AgencyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-[#0A0F1E] font-display selection:bg-brand-cyan/20 selection:text-brand-cyan text-white">
            <FloatingNav />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#0A0F1E] z-0" />
            <CircuitBackground />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[150px] animate-pulse z-0 rounded-full" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] z-0 rounded-full" />

            {/* SECTION 0: THE MANIFESTO (HERO) */}
            <section className="relative w-full pt-48 pb-32 px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-sm mb-8 inline-block px-4 py-2 rounded-full border border-brand-cyan/10 bg-brand-cyan/5">
                            La Agencia
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                            Que el crecimiento de tu visión <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                                no te cueste tu libertad.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                            Tu infraestructura de crecimiento
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 1: WEB ARCHITECTURE */}
            <section className="relative w-full py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-4 mb-20"
                    >
                        <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                            <Monitor className="w-8 h-8 text-brand-cyan" />
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Arquitectura <span className="text-brand-cyan">Web</span></h3>
                            <p className="text-white/40 text-sm tracking-wide uppercase mt-1">Sistemas de Expansión Digital</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <DigitalNerveCard
                            level={1}
                            index={0}
                            subtitle="Nivel 01"
                            title="Ingeniería de Conversión"
                            description="El primer paso hacia tu libertad operativa. No es una página; es un sistema de filtrado y captación que trabaja mientras tú descansas."
                            features={[
                                "Diseño Hook-Story-Offer",
                                "Velocidad Instantánea",
                                "Integración de Agenda"
                            ]}
                        />
                        <DigitalNerveCard
                            level={2}
                            index={1}
                            subtitle="Nivel 02"
                            title="Arquitectura de Autoridad"
                            description="Tu cuartel general en la frontera digital. Construimos la infraestructura para que dejes de buscar clientes y ellos empiecen a encontrarte a ti."
                            features={[
                                "Optimización AEO (IA)",
                                "Centro de Nutrición",
                                "Estatus de Élite"
                            ]}
                        />
                        <DigitalNerveCard
                            level={3}
                            index={2}
                            subtitle="Nivel 03"
                            title="Ecosistema Agéntico PRO"
                            description="Tu clon digital 24/7. La unión definitiva entre software de lujo y autonomía total. Un activo que razona, califica y cierra por ti."
                            features={[
                                "Labor Digital Autónoma",
                                "Cualificación Inteligente",
                                "Sincronización Total"
                            ]}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <p className="text-white/50 text-lg font-light italic">
                            "No solo creamos sitios; instalamos los cimientos de tu expansión. <br />
                            <span className="text-brand-cyan not-italic font-normal">Elige el nivel de autonomía que tu visión requiere hoy.</span>"
                        </p>
                    </motion.div>
                </div>

            </section>

            {/* SECTION 2: CONVERSATION INTELLIGENCE */}
            <section className="relative w-full py-32 px-6 z-10 bg-gradient-to-b from-transparent to-[#0A0F1E]">
                <div className="absolute inset-0 bg-brand-purple/5 skew-y-3 z-0 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                                <MessageSquare className="w-8 h-8 text-brand-purple" />
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Inteligencia en <span className="text-brand-purple">Conversación</span></h3>
                                <p className="text-white/40 text-sm tracking-wide uppercase mt-1">ManyChat & IA</p>
                            </div>
                        </div>
                        <p className="text-white/50 text-right md:max-w-md font-light">
                            El alivio de dejar de responder lo mismo una y otra vez.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 22, 41, 0.9)" }}
                            className="p-10 rounded-[2rem] border border-white/10 bg-[#0F1629]/80 backdrop-blur-sm cursor-pointer transition-colors duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
                        >
                            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors">Automatización Básica</h4>
                            <p className="text-white/60 leading-relaxed mb-6 font-light group-hover:text-white/80 transition-colors">
                                Organización de flujos de respuesta para que nada se pierda. Mensajes de bienvenida, entrega de recursos y FAQs automatizadas.
                            </p>
                            <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent rounded-full group-hover:from-brand-cyan/50 transition-all" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.08)" }}
                            className="p-10 rounded-[2rem] border border-brand-purple/40 bg-brand-purple/5 backdrop-blur-sm relative overflow-hidden cursor-pointer transition-colors duration-300 hover:border-brand-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500"><Sparkles className="w-20 h-20 text-brand-purple" /></div>
                            <h4 className="text-2xl font-bold mb-4 text-brand-purple group-hover:text-white transition-colors">Automatización Agéntica (IA)</h4>
                            <p className="text-white/80 leading-relaxed mb-6 font-light group-hover:text-white transition-colors">
                                IA que comprende, razona y guía a tu comunidad con <strong className="text-white font-medium group-hover:text-brand-purple transition-colors">tu propia voz y tono</strong>. Sin intervención manual, 24/7.
                            </p>
                            <div className="h-1 w-full bg-gradient-to-r from-brand-purple to-transparent rounded-full group-hover:from-brand-purple group-hover:to-brand-cyan/50 transition-all" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CONNECTION & CLOSING */}
            <section className="relative w-full py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-20"
                    >
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Conexión y <span className="text-white/70">Cierre</span></h3>
                            <p className="text-white/40 text-sm tracking-wide uppercase mt-1">Setters & Closers</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                            className="p-12 rounded-[2.5rem] border border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/5 to-transparent relative group cursor-pointer transition-colors duration-300 hover:border-brand-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <h4 className="text-3xl font-bold mb-6 text-brand-cyan group-hover:text-white transition-colors">Setter Híbrido</h4>
                            <p className="text-white/70 mb-8 font-light leading-relaxed group-hover:text-white transition-colors">
                                Ingeniería de agendamiento para calificar leads y conectar solo con los que realmente están listos.
                                <br /><br />
                                <span className="text-white border-l-2 border-brand-cyan pl-4 block group-hover:border-white transition-colors">Persona o Bot, según la etapa de tu negocio.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                            className="p-12 rounded-[2.5rem] border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent relative group overflow-hidden cursor-pointer transition-colors duration-300 hover:border-brand-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                        >
                            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 group-hover:bg-brand-purple/20 group-hover:border-brand-purple transition-colors">
                                <Lock className="w-3 h-3 text-brand-purple group-hover:text-white transition-colors" />
                                <span className="text-[10px] uppercase font-bold text-brand-purple tracking-wider group-hover:text-white transition-colors">Exclusivo +10k/mes</span>
                            </div>

                            <h4 className="text-3xl font-bold mb-6 text-brand-purple group-hover:text-white transition-colors">Closer de Élite</h4>
                            <p className="text-white/70 mb-8 font-light leading-relaxed group-hover:text-white transition-colors">
                                El toque final para ventas de alto valor. Profesionales entrenados para cerrar, no para vender.
                            </p>

                            <p className="text-xs text-brand-purple/60 uppercase tracking-widest mt-auto group-hover:text-brand-purple transition-colors">
                                * Servicio bajo estricta calificación
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: VISUAL NARRATIVE (REDISEÑADO) */}
            <section className="relative w-full py-40 px-6 z-10 bg-[#0A0F1E] overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4"
                        >
                            Narrativa <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Visual</span>
                        </motion.h3>
                        <p className="text-white/40 uppercase tracking-widest text-sm">Mensajes que trascienden la pantalla</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: THE PRISM (Visual Anchor) */}
                        <div className="relative h-[600px] w-full flex items-center justify-center">
                            <TheEditingPrism />
                        </div>

                        {/* RIGHT: THE SERVICES (Content) */}
                        <div className="space-y-8">

                            {/* Phase 1: Psychology */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                                        <MessageSquare className="w-6 h-6" /> {/* Icono Cerebro/Psicología (simulado con MessageSquare por ahora, o Brain si está disponible) */}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">Fase 1: Psicología & Guionado</h4>
                                        <p className="text-white/60 font-light leading-relaxed text-sm">
                                            "No escribimos textos, diseñamos retención. Creamos estructuras narrativas basadas en psicología del consumidor para que tu mensaje conecte con la identidad profunda de tu cliente."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phase 2: Production */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-purple/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-6 h-6" /> {/* Icono Ritmo (Zap) */}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">Fase 2: Producción & Ritmo</h4>
                                        <p className="text-white/60 font-light leading-relaxed text-sm">
                                            "Transformamos lo estático en dinámico. Edición de corte preciso diseñada para mantener la atención en un mundo de distracciones infinitas."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phase 3: Aesthetic */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-3 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                                        <Sparkles className="w-6 h-6" /> {/* Icono Ojo/Estética (Sparkles) */}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-shadow-glow transition-all">Fase 3: Estética Ciber-Espiritual</h4>
                                        <p className="text-white/60 font-light leading-relaxed text-sm">
                                            "El envase importa. Post-producción, colorización y efectos visuales alineados a tu identidad de marca para generar autoridad instantánea."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: SOUL & REACH (REDISEÑADO - ZIG ZAG) */}
            <SoulReachSection />

            {/* CTA SECTION: THE QUANTUM CORE (REDISEÑADO) */}
            <QuantumCTA />

        </main >
    );
}

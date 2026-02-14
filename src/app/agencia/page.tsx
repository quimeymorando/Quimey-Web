"use client";

import { motion } from "framer-motion";
import FloatingNav from "@/components/ui/magic/FloatingNav";
import { Monitor, Users, Video, Zap, Check, Lock, ArrowRight, MessageSquare, Globe, Sparkles } from "lucide-react";
import AgencyCard from "@/components/ui/AgencyCard";

export default function AgencyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-[#0A0F1E] font-display selection:bg-brand-cyan/20 selection:text-brand-cyan text-white">
            <FloatingNav />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#0A0F1E] z-0" />
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
                            <h3 className="text-3xl font-bold uppercase tracking-tight">Arquitectura <span className="text-brand-cyan">Web</span></h3>
                            <p className="text-white/40 text-sm tracking-wide uppercase mt-1">Niveles de Presencia</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                subtitle: "Nivel 1",
                                title: "Landing Page",
                                desc: "Captación rápida y conversión directa. Diseñada para transformar tráfico frío en leads cualificados sin fricción.",
                                features: ["Diseño Minimalista", "Copywriting Persuasivo", "Velocidad Extrema"],
                                gradient: "from-brand-cyan/20 to-transparent",
                                border: "border-brand-cyan/30",
                                spotlightColor: "rgba(6, 182, 212, 0.15)" // cyan
                            },
                            {
                                subtitle: "Nivel 2",
                                title: "Web Intermedia",
                                desc: "Construcción de autoridad. Un espacio dinámico donde tu contenido fluye y tu marca se posiciona en el mercado.",
                                features: ["Blog / Contenido", "Casos de Éxito", "Estructura SEO"],
                                gradient: "from-brand-purple/20 to-transparent",
                                border: "border-brand-purple/30",
                                spotlightColor: "rgba(168, 85, 247, 0.15)" // purple
                            },
                            {
                                subtitle: "Nivel 3",
                                title: "Ecosistema PRO",
                                desc: "La integración total. Web, Academias, Funnels y Automatizaciones operando al unísono. Tu imperio digital.",
                                features: ["Área de Miembros", "Funnels Complejos", "Integración CRM Total"],
                                gradient: "from-white/10 to-transparent",
                                border: "border-white/20",
                                spotlightColor: "rgba(255, 255, 255, 0.1)" // white
                            }
                        ].map((item, i) => (
                            <AgencyCard key={i} item={item} index={i} />
                        ))}
                    </div>
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
                                <h3 className="text-3xl font-bold uppercase tracking-tight">Inteligencia en <span className="text-brand-purple">Conversación</span></h3>
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
                            className="p-10 rounded-[2rem] border border-white/10 bg-[#0F1629]/80 backdrop-blur-sm"
                        >
                            <h4 className="text-2xl font-bold mb-4 text-white">Automatización Básica</h4>
                            <p className="text-white/60 leading-relaxed mb-6 font-light">
                                Organización de flujos de respuesta para que nada se pierda. Mensajes de bienvenida, entrega de recursos y FAQs automatizadas.
                            </p>
                            <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2rem] border border-brand-purple/40 bg-brand-purple/5 backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Sparkles className="w-20 h-20 text-brand-purple" /></div>
                            <h4 className="text-2xl font-bold mb-4 text-brand-purple">Automatización Agéntica (IA)</h4>
                            <p className="text-white/80 leading-relaxed mb-6 font-light">
                                IA que comprende, razona y guía a tu comunidad con <strong className="text-white font-medium">tu propia voz y tono</strong>. Sin intervención manual, 24/7.
                            </p>
                            <div className="h-1 w-full bg-gradient-to-r from-brand-purple to-transparent rounded-full" />
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
                            <h3 className="text-3xl font-bold uppercase tracking-tight">Conexión y <span className="text-white/70">Cierre</span></h3>
                            <p className="text-white/40 text-sm tracking-wide uppercase mt-1">Setters & Closers</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[2.5rem] border border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/5 to-transparent relative group"
                        >
                            <h4 className="text-3xl font-bold mb-6 text-brand-cyan">Setter Híbrido</h4>
                            <p className="text-white/70 mb-8 font-light leading-relaxed">
                                Ingeniería de agendamiento para calificar leads y conectar solo con los que realmente están listos.
                                <br /><br />
                                <span className="text-white border-l-2 border-brand-cyan pl-4 block">Persona o Bot, según la etapa de tu negocio.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-12 rounded-[2.5rem] border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent relative group overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10">
                                <Lock className="w-3 h-3 text-brand-purple" />
                                <span className="text-[10px] uppercase font-bold text-brand-purple tracking-wider">Exclusivo +10k/mes</span>
                            </div>

                            <h4 className="text-3xl font-bold mb-6 text-brand-purple">Closer de Élite</h4>
                            <p className="text-white/70 mb-8 font-light leading-relaxed">
                                El toque final para ventas de alto valor. Profesionales entrenados para cerrar, no para vender.
                            </p>

                            <p className="text-xs text-brand-purple/60 uppercase tracking-widest mt-auto">
                                * Servicio bajo estricta calificación
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: VISUAL NARRATIVE */}
            <section className="relative w-full py-32 px-6 z-10 bg-[#0F1629]/30">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                                <Video className="w-8 h-8 text-brand-cyan" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold uppercase tracking-tight">Narrativa <span className="text-brand-cyan">Visual</span></h3>
                                <p className="text-white/40 text-sm tracking-wide uppercase mt-1">Producción de Alto Impacto</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Estrategia & Guionado</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    No grabamos videos, diseñamos mensajes. Estructuras psicológicas que conectan con la esencia profunda de tu cliente ideal.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Edición Pack Futurista</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    Post-producción cinematográfica alineada a tu identidad visual. Retención, dinamismo y estética impecable.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-3xl bg-brand-cyan/5 border border-brand-cyan/20 flex items-center justify-center overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <span className="relative z-10 text-white/20 font-display font-bold text-5xl uppercase tracking-widest">Storytelling</span>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: SOUL & REACH */}
            <section className="relative w-full py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold uppercase tracking-tight mb-4"
                    >
                        Alma y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Alcance</span>
                    </motion.h3>
                    <p className="text-white/40 uppercase tracking-widest text-sm">Marketing & Marca</p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-[#0F1629]/50 border border-white/5 hover:border-brand-purple/30 transition-all duration-300"
                    >
                        <Sparkles className="w-8 h-8 text-brand-purple mb-6" />
                        <h4 className="text-xl font-bold mb-4">Branding Ciber-Espiritual</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">Identidad visual que une tecnología y propósito. Tu marca como un símbolo.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-[#0F1629]/50 border border-white/5 hover:border-brand-cyan/30 transition-all duration-300"
                    >
                        <Globe className="w-8 h-8 text-brand-cyan mb-6" />
                        <h4 className="text-xl font-bold mb-4">Meta Ads (Básico & PRO)</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">Pauta inteligente diseñada para atraer, no para perseguir. El combustible de tu sistema.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-[#0F1629]/50 border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                        <Users className="w-8 h-8 text-white mb-6" />
                        <h4 className="text-xl font-bold mb-4">Community Manager</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">Gestión y protección de tu tribu digital. Nutrición constante de tu audiencia.</p>
                    </motion.div>
                </div>
            </section>

            {/* CTA SECTION: THE STACK */}
            <section className="relative w-full py-40 px-6 z-10 text-center bg-gradient-to-t from-brand-cyan/5 to-transparent">
                <div className="absolute inset-0 bg-[#0A0F1E] z-[-1]" />
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-10 uppercase tracking-tighter">
                        ¿Listo para diseñar tu <br /> <span className="text-brand-cyan">Infraestructura?</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-60 text-sm uppercase tracking-widest font-light">
                        <span>Web Architecture</span>
                        <span>Agentic AI</span>
                        <span>Elite Closers</span>
                        <span>Visual Narrative</span>
                    </div>

                    <a
                        href="https://wa.me/5492804819907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex group relative px-12 py-6 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-black/20" /> {/* Darken text contrast */}
                        <span className="relative z-10 flex items-center gap-4 text-white font-bold tracking-widest uppercase text-base shadow-lg">
                            APLICAR AHORA
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </section>

        </main >
    );
}

"use client";

import { motion } from "framer-motion";
import FloatingNav from "@/components/ui/magic/FloatingNav";
import { Monitor, Users, Video, Zap, Check, Lock, ArrowRight } from "lucide-react";

export default function AgencyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-background font-display selection:bg-brand-cyan selection:text-background text-white">
            <FloatingNav />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute top-0 left-0 w-full h-[800px] bg-brand-cyan/5 blur-[150px] animate-pulse z-0" />

            {/* HERO SECTION */}
            <section className="relative w-full pt-40 pb-20 px-6 z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-sm mb-6">
                            <span className="italic relative z-10 text-xl font-light text-white/80">Nuestros Servicios</span> <br /> AGENCIA TIERRA DORADA
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                            Tu Infraestructura de Crecimiento, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                                Diseñada para la Libertad.
                            </span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                            Construimos los sistemas que te permiten escalar sin sacrificar tu vida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* OPPORTUNITY SWITCH */}
            <section className="relative w-full py-20 px-6 z-10 glass-card border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">
                            El <span className="text-brand-purple">Cambio de Paradigma</span>
                        </h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                                <h4 className="text-red-400 font-bold mb-2 uppercase text-sm">El Viejo Modelo (Gasto)</h4>
                                <p className="text-white/60 text-sm">
                                    Contratar agencias fragmentadas. Unos hacen la web, otros los ads, otros el mail. Nadie se habla. Tú eres el gerente de proyecto estresado.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/20 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h4 className="text-brand-cyan font-bold mb-2 uppercase text-sm">El Modelo Tierra Dorada (Inversión)</h4>
                                <p className="text-white/80 text-sm">
                                    Construimos <strong>Activos Digitales Propios</strong>. Un ecosistema unificado donde cada pieza (Web, Tráfico, Ventas) alimenta a la siguiente. Tú lideras la visión, nosotros ejecutamos la ingeniería.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple blur-[100px] opacity-20" />
                        <div className="relative glass-card p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                            <Zap className="w-16 h-16 text-brand-cyan mb-6" />
                            <p className="text-2xl font-bold text-white italic">
                                "No compres servicios. Invierte en una máquina que funcione sin ti."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE STACK: WEB SYSTEMS */}
            <section className="relative w-full py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Monitor className="w-10 h-10 text-brand-cyan" />
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Sistemas <span className="text-brand-cyan">Web</span></h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Landing de Captación",
                                desc: "Diseñada para una sola cosa: convertir tráfico frío en leads cualificados. Sin distracciones. Sin menú.",
                                features: ["Copywriting Persuasivo", "Diseño Minimalista", "Carga en <1s"],
                                color: "border-white/10"
                            },
                            {
                                title: "Web de Autoridad",
                                desc: "Tu cuartel general digital. Posicionamiento, filosofía y validación social para elevar tu estatus.",
                                features: ["Blog / Newsletter", "Casos de Éxito", "Storytelling Visual"],
                                color: "border-brand-cyan/30 bg-brand-cyan/5"
                            },
                            {
                                title: "Ecosistema PRO",
                                desc: "La integración total. Web + Academias + Funnels + Automatizaciones. Todo conectado.",
                                features: ["Área de Miembros", "Funnels Complejos", "Integración CRM"],
                                color: "border-brand-purple/30 bg-brand-purple/5"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-3xl border ${item.color} backdrop-blur-sm relative hover:translate-y-[-5px] transition-transform duration-300`}>
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-white/60 text-sm mb-6 leading-relaxed">{item.desc}</p>
                                <ul className="space-y-3">
                                    {item.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                                            <Check className="w-4 h-4 text-brand-cyan" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE STACK: SETTER & CLOSER */}
            <section className="relative w-full py-32 px-6 z-10 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Users className="w-10 h-10 text-brand-purple" />
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Setter & <span className="text-brand-purple">Closer</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="glass-card p-10 rounded-3xl border border-white/5">
                            <h4 className="text-2xl font-bold mb-6 text-brand-cyan">Appointment Setting Híbrido</h4>
                            <p className="text-white/60 leading-relaxed mb-8">
                                La combinación letal. Usamos <strong>Inteligencia Artificial</strong> para la respuesta inmediata y filtrado inicial, y <strong>Setters Humanos</strong> entrenados para generar relaciones y agendar llamadas calificadas.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <span className="block text-brand-cyan font-bold mb-1">Bot</span>
                                    <span className="text-xs text-white/50">Velocidad & Disponibilidad 24/7</span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <span className="block text-brand-cyan font-bold mb-1">Humano</span>
                                    <span className="text-xs text-white/50">Empatía & Contexto</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-10 rounded-3xl border border-brand-purple/20 relative overflow-hidden group">
                            <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-brand-purple border border-brand-purple/30 px-3 py-1 rounded-full flex items-center gap-2">
                                <Lock className="w-3 h-3" /> Exclusivo
                            </div>
                            <h4 className="text-2xl font-bold mb-6 text-brand-purple">Cierre de Ventas (Closer)</h4>
                            <p className="text-white/60 leading-relaxed mb-8">
                                Implementamos cerradores de élite en tu equipo. Profesionales formados en venta consultiva y <em>Takeaway Selling</em>. No persiguen, evalúan si el prospecto califica para trabajar contigo.
                            </p>

                            <div className="mt-8 p-4 bg-brand-purple/10 border border-brand-purple/30 rounded-xl">
                                <p className="text-sm text-brand-purple font-medium text-center">
                                    ⚠️ SERVICIO HABILITADO ÚNICAMENTE PARA CUENTAS CON FACTURACIÓN SUPERIOR A 10K/MES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE STACK: VIDEO & ADS */}
            <section className="relative w-full py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Video className="w-10 h-10 text-brand-cyan" />
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Contenido & <span className="text-brand-cyan">Tráfico</span></h3>
                    </div>

                    <div className="relative glass-card p-12 rounded-3xl border border-white/10 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none" />

                        <h4 className="text-3xl font-bold mb-6 relative z-10">Combustible para tu Motor de Ingresos</h4>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10 relative z-10 leading-relaxed">
                            No hacemos "videos bonitos". Diseñamos piezas de contenido estratégicas y campañas de publicidad (Ads) con un único objetivo: <strong>Alimentar al sistema con tráfico cualificado al menor coste posible.</strong>
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            {[
                                "Guiones Psicológicos", "Edición Dinámica", "Estrategia de Ads", "Retargeting Omnicanal"
                            ].map((tag, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-brand-cyan/50 hover:text-brand-cyan transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative w-full py-32 px-6 z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
                        ¿Listo para Instalar tu <span className="text-brand-cyan">Infraestructura?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                        Agenda una sesión de diagnóstico para evaluar si tu negocio está listo para este nivel de implementación.
                    </p>

                    <a
                        href="https://wa.me/5492804819907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex group relative px-12 py-5 bg-transparent overflow-hidden rounded-full transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/10 opacity-100 group-hover:opacity-80 transition-opacity duration-300 blur-sm" />
                        <div className="absolute inset-0 border border-brand-cyan rounded-full group-hover:scale-105 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center gap-4 text-white font-bold tracking-widest uppercase text-base">
                            APLICAR PARA CONSULTA DE INFRAESTRUCTURA
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </section>

        </main>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
    {
        question: "¿Esto es solo otra forma sofisticada de automatización?",
        answer: "No. La automatización tradicional es lineal y \"tonta\": si pasa A, haz B. Lo que yo instalo es Autonomía Agéntica. Son sistemas que razonan, aprenden de tu cliente y toman decisiones para cerrar ventas de alto ticket. No es una regla de software, es Labor Digital que trabaja 24/7 con tu misma lógica."
    },
    {
        question: "¿Necesito un equipo técnico masivo para mantener este ecosistema?",
        answer: "Mi objetivo es exactamente el opuesto. El modelo tradicional te obliga a escalar contratando más gente y aumentando tu estrés. Mi arquitectura de autonomía permite que seas un \"Prime Mover\": un equipo ultra-magro potenciado por agentes de IA. Yo construyo la infraestructura; tú solo diriges la visión."
    },
    {
        question: "¿Por qué no simplemente contratar una agencia de marketing tradicional?",
        answer: "Las agencias venden servicios; yo instalo Activos. Una agencia es un gasto mensual que se lleva el conocimiento contigo cuando se van. Un Ecosistema de Autonomía es una propiedad digital que tú posees, que genera ROI predecible y que se vuelve más inteligente cada día. No es marketing, es ingeniería de ingresos."
    },
    {
        question: "¿Perderá mi marca el 'toque humano' al usar tanta IA?",
        answer: "Esta es la creencia más peligrosa. La IA mal usada es fría. Mi enfoque Ciber-Espiritual utiliza la tecnología para eliminar las tareas robóticas (emails manuales, agendas, seguimiento) y darte espacio para lo que realmente importa: tu presencia, tu propósito y tu conexión humana de élite. La IA hace el trabajo sucio para que tú seas más humano que nunca."
    },
    {
        question: "¿Es este el momento adecuado o debería esperar a que la IA madure?",
        answer: "El mercado se divide hoy entre los Mesmerizados (los que miran la tecnología) y los Manipuladores (los que la orquestan). Esperar un año en la frontera tecnológica actual equivale a una década de retraso competitivo. Instalar autonomía hoy es la mayor ventaja injusta que puedes tener frente a quienes siguen operando de forma manual."
    },
    {
        question: "¿Cómo es el proceso de onboarding y cuánto tiempo hasta ver resultados?",
        answer: "El proceso comienza con un Diagnóstico de Ecosistema donde identificamos las fugas de tiempo y dinero en tu operación actual. En los primeros 30 días instalamos la infraestructura base: identidad ciber-espiritual, agentes autónomos y sistema de conversión. Los primeros resultados medibles suelen aparecer en el primer mes. No hay un proceso de meses de espera; construimos activos que empiezan a operar desde el primer ciclo."
    }
];

export default function ParadigmShifter() {
    return (
        <section className="relative w-full py-32 bg-background flex justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-7xl w-full px-6 relative z-10">
                {/* Header: Massive Typography */}
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 uppercase leading-[0.9]"
                    >
                        Desmantelando el <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Viejo Paradigma</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-8 text-lg font-light text-foreground/60 max-w-2xl mx-auto"
                    >
                        "La mayoría de los líderes fracasan no por falta de esfuerzo, sino por operar con herramientas del pasado. Aquí respondo lo que tu competencia aún no quiere entender."
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {faqItems.map((item, index) => (
                        <ParadigmCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ParadigmCard({ item, index }: { item: { question: string, answer: string }, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer ${isOpen ? 'bg-white/5 border-brand-purple/30' : 'hover:border-brand-purple/50'}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-8 relative z-10">
                <div className="flex justify-between items-start gap-4">
                    <h3 className={`text-xl font-bold font-display tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-cyan' : 'text-white group-hover:text-brand-purple'}`}>
                        {item.question}
                    </h3>
                    <div className={`mt-1 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'border-brand-cyan text-brand-cyan rotate-180' : 'border-white/20 text-white/40 group-hover:border-brand-purple group-hover:text-brand-purple'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent mb-6" />
                            <p className="text-white/70 font-light leading-relaxed">
                                <span className="text-brand-cyan font-semibold text-xs uppercase tracking-widest block mb-2">La Realidad</span>
                                {item.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles, Globe, Users, Target, Shield, Heart } from "lucide-react";

const SoulReachSection = () => {
    return (
        <section className="relative w-full py-32 px-6 z-10 bg-[#050A14] overflow-hidden">
            {/* Subtle Circuit Dividers Background - Abstracted */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
                <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto space-y-32">

                {/* SECTION HEADER */}
                <div className="text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4"
                    >
                        Alma y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Alcance</span>
                    </motion.h3>
                    <p className="text-white/40 uppercase tracking-widest text-sm">Marketing & Marca</p>
                </div>


                {/* BLOCK 01: BRANDING (Text Left | Visual Right) */}
                <BlockBranding />


                {/* BLOCK 02: META ADS (Visual Left | Text Right) */}
                <BlockAds />


                {/* BLOCK 03: COMMUNITY (Text Left | Visual Right) */}
                <BlockCommunity />

            </div>
        </section>
    );
};

// --- SUB-COMPONENTS FOR BLOCKS ---

// BLOCK 1: BRANDING
const BlockBranding = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                        <Sparkles className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-white uppercase tracking-wide">Ingeniería de Identidad</h4>
                        <span className="text-brand-purple text-sm uppercase tracking-widest font-bold">Branding Ciber-Espiritual</span>
                    </div>
                </div>

                <p className="text-xl text-white/80 leading-relaxed mb-8 font-light">
                    "Tu marca no es un logo; es la huella energética que dejas en el mercado. En Agencia Tierra Dorada, no 'diseñamos'; decodificamos tu propósito y lo traducimos en un lenguaje visual de alto impacto."
                </p>

                <ul className="space-y-4">
                    {[
                        { title: "Extracción de ADN", desc: "Análisis profundo de tu arquetipo y voz." },
                        { title: "Universo Visual", desc: "Sistemas gráficos que unen tecnología y espiritualidad." },
                        { title: "Autoridad Instantánea", desc: "Estética que te posiciona como líder antes de hablar." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_10px_#7800FF]" />
                            <div>
                                <strong className="text-white block">{item.title}</strong>
                                <span className="text-white/50 text-sm font-light">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Visual: Holographic Moodboard */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 h-[400px] relative pointer-events-none"
            >
                {/* Layer 1: Back Panel (Color Palettes) */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-64 h-80 bg-brand-purple/5 border border-brand-purple/20 rounded-2xl backdrop-blur-sm z-0 rotate-6"
                />

                {/* Layer 2: Middle Panel (Typography/Structure) */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-24 w-64 h-80 bg-brand-cyan/5 border border-brand-cyan/20 rounded-2xl backdrop-blur-md z-10 -rotate-3 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-cyan/10" />
                    <div className="p-6 space-y-4 opacity-50">
                        <div className="w-full h-2 bg-brand-cyan/30 rounded" />
                        <div className="w-3/4 h-2 bg-brand-cyan/30 rounded" />
                        <div className="w-1/2 h-2 bg-brand-cyan/30 rounded" />
                    </div>
                </motion.div>

                {/* Layer 3: Front Panel (The Star/Logo) */}
                <motion.div
                    animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-36 w-48 h-48 bg-[#0F1629]/90 border border-white/20 rounded-2xl backdrop-blur-xl z-20 shadow-2xl flex items-center justify-center"
                >
                    <div className="relative">
                        <Sparkles className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        <div className="absolute inset-0 bg-brand-purple/20 blur-xl rounded-full" />
                    </div>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-30">
                    <motion.line
                        x1="60%" y1="40%" x2="50%" y2="50%"
                        stroke="url(#grad1)" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7800FF" />
                            <stop offset="100%" stopColor="#00FFFF" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
};


// BLOCK 2: META ADS
const BlockAds = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Visual: Precision Radar */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 h-[400px] flex items-center justify-center relative"
            >
                {/* Radar Circles */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-brand-cyan/10" />
                <div className="absolute w-[200px] h-[200px] rounded-full border border-brand-cyan/20" />
                <div className="absolute w-[100px] h-[100px] rounded-full border border-brand-cyan/50 bg-brand-cyan/5" />

                {/* Scanning Hand */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] rounded-full overflow-hidden opacity-30"
                >
                    <div className="w-1/2 h-1/2 bg-gradient-to-tl from-brand-cyan/50 to-transparent absolute top-0 left-0 origin-bottom-right" />
                </motion.div>

                {/* Targets/Leads */}
                {[
                    { x: -50, y: -80, delay: 0 },
                    { x: 60, y: 40, delay: 1 },
                    { x: -70, y: 60, delay: 2 }
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: pos.delay }}
                        style={{ x: pos.x, y: pos.y }}
                        className="absolute w-4 h-4"
                    >
                        <Target className="w-full h-full text-brand-cyan" />
                    </motion.div>
                ))}

                {/* Central Core */}
                <div className="absolute z-10 w-12 h-12 bg-[#0A0F1E] rounded-full border border-brand-cyan flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <Globe className="w-6 h-6 text-brand-cyan" />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                        <Target className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-white uppercase tracking-wide">Sistemas de Atracción</h4>
                        <span className="text-brand-cyan text-sm uppercase tracking-widest font-bold">Meta Ads Básico & PRO</span>
                    </div>
                </div>

                <p className="text-xl text-white/80 leading-relaxed mb-8 font-light">
                    "Deja de gastar en publicidad y empieza a invertir en datos. Convertimos el tráfico frío en una corriente predecible de clientes potenciales."
                </p>

                <ul className="space-y-4">
                    {[
                        { title: "Segmentación Algorítmica", desc: "Encontramos a tu cliente ideal usando inteligencia, no suerte." },
                        { title: "Retargeting Omnipresente", desc: "Acompañamos al usuario hasta su decisión." },
                        { title: "El Combustible", desc: "Inyectamos velocidad para escalar resultados." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#06b6d4]" />
                            <div>
                                <strong className="text-white block">{item.title}</strong>
                                <span className="text-white/50 text-sm font-light">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};


// BLOCK 3: COMMUNITY
const BlockCommunity = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-white uppercase tracking-wide">Protección de la Tribu</h4>
                        <span className="text-white/70 text-sm uppercase tracking-widest font-bold">Community Management</span>
                    </div>
                </div>

                <p className="text-xl text-white/80 leading-relaxed mb-8 font-light">
                    "Construir una audiencia es fácil; liderar un movimiento requiere estrategia. No solo publicamos contenido, nutrimos y protegemos el vínculo con tu comunidad."
                </p>

                <ul className="space-y-4">
                    {[
                        { title: "Curaduría de Interacción", desc: "Respuestas que mantienen la conversación viva." },
                        { title: "Escudo de Marca", desc: "Gestión de crisis y moderación proactiva." },
                        { title: "Fidelización", desc: "Transformamos seguidores pasivos en embajadores." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            <div>
                                <strong className="text-white block">{item.title}</strong>
                                <span className="text-white/50 text-sm font-light">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Visual: Constellation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 h-[400px] relative flex items-center justify-center p-8 bg-[#0F1629]/30 rounded-[3rem] border border-white/5"
            >
                {/* Nodes */}
                <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                            }}
                            transition={{ duration: 10 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"
                        />
                    ))}
                </div>

                {/* Central Heart/Shield */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="relative">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-brand-purple/20 blur-xl rounded-full"
                        />
                        <Shield className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#050A14] flex items-center justify-center text-xs font-bold text-white/50">
                                U{i}
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default SoulReachSection;

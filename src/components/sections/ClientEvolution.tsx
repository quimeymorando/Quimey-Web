"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, Rocket, Layout, Gem, Infinity as LucideInfinity, Triangle, Shield } from "lucide-react";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Sistema Desplegado",
        quote: "El marco ciber-espiritual que provee Quimey es único en el espacio high-ticket. Mi arquitectura fue reconstruida desde cero, alineando mi frecuencia con mis objetivos de ingresos.",
        metric: "ROI 10x",
        label: "Métrica de Rendimiento",
        level: "III",
        icon: LucideInfinity,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFxolmJIksDeHqvd_K-WAjfXpWdW3uz8o8cOqw6GqIEMqnZbWN3SPf3gs6RBdnJRRtgaBPSUdKDXQ0rvV-o_IVHaBg0o_7NVpuZNCqrizQnxFT9Fg2IUPoYlQmlMRPdpOzBf61Svm0QxPAfTQMNqJufwX1siodNAphTpo4ejxXwLHryfCoFTV3HVnYRk1oC21JvPB0rM7HDGrq4SRIx-Wnuod1Se4-pJZ-mcDaBMchuTngHPpGwz2KNQXI-PcEHRnjfSaG_cTjN7w"
    },
    {
        name: "Sarah Chen",
        role: "Frecuencia Sintonizada",
        quote: "Integrar geometría sagrada en mi lógica de negocio sonaba salvaje, pero los resultados son innegables. Mis operaciones son finalmente fluidas y de alta vibración. Llegamos a $50k/mes en 45 días.",
        metric: "$50k/mes",
        label: "Velocidad de Escalado",
        level: "IV",
        icon: Triangle,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQrtulWpW_xj0NUI76ZHLGERC8kQL9PPK3fDqiSl_76y9Ev8DkikZblph97dKyURA9J_NFHGp9w7X_mzsIrEShxyh0IUc-oWAbt7OS3WqrRa_2aOYW_ObhFxYeyGRBhH1APYatRW-NGLVpUQV1pEVRyf500oHUB92Z6MdGdH6AZzWm5-AG8_fPP3D0exLYI6_C-DcTH4534U_SkAK8-rwHDyPEeTnfgaAaePk0OBWdzv2SPg2gFZuE4crMZx6fxvHfk-ozk7Fue4"
    },
    {
        name: "Marcus Thorne",
        role: "Arquitectura Reconstruida",
        quote: "El proceso de evolución es riguroso pero premium. La interfaz glassmorphism y la experiencia del portal hacen que la consultoría se sienta como entrar en el futuro del comercio humano.",
        metric: "Arquitecto",
        label: "Estado del Sistema",
        level: "V",
        icon: Layout,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-yuotYg_DFF9UGOIY5nqbK_cx7BNCbfYHjacUUUTXhg4I6AOZdjTb5K3m8ES7ZUeL96I0UL2Mk09iAkDyjtuZfVBfNSPhAHVKT5964Eqk_bwE4XXvpE4TZuEVijuWjZaKpskZcob-jrZWTMN1t5wdSJFzfRz9t4xHu3sUrMsc83JnzBepB-UpG8bvGshm8ngylYDawxAyob2Znb545UlVyNAScX82_snBb4Lm3cXaM5Kz3rCjwppyBCxHT8OD2fBS0enoDfNmHzM"
    },
    {
        name: "Elena Vance",
        role: "Ascensión Alcanzada",
        quote: "Quimey unió la brecha entre mi práctica espiritual y mi infraestructura técnica. Nunca me he sentido más en control de mi destino digital. Una transformación completa.",
        metric: "100%",
        label: "Alineación",
        level: "VI",
        icon: Gem,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTS7SGP-XmA9pkd11wJr2HjcNiSSE-AjJWETW7zuvj1fQ1bqL8FlMXyvArEobkvmt-XG4bVqsxuLXupT1kd_UzwceDQH55R7Ryv98297h8px62zydjZEC_06X5VOu_0lJyIt4Eb97UK5sCWxBNImj4TSD6I6412DoGTIMXS_gGunephSpRUNmx1Kg-XAuuG_sePruXpnGo5zwBXs_hZ7pGfORj2GeRIl1aQKekRMazLavkjAtFnwAO1krIqWvZFToDASYnhTK4FGE"
    }
];

export default function ClientEvolution() {
    return (
        <section className="relative w-full py-32 bg-background-dark overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl w-full px-6 text-center mb-16 mx-auto relative z-10">
                <p className="text-brand-cyan text-xs font-bold tracking-[0.4em] uppercase mb-4">Transformación Ciber-Espiritual</p>
                <h2 className="text-white tracking-tighter text-5xl md:text-7xl font-bold leading-none mb-6 font-display">EVOLUCIÓN DE CLIENTES</h2>
                <div className="w-24 h-px bg-brand-cyan/40 mx-auto"></div>
            </div>

            {/* Marquee */}
            <div className="w-full relative py-10 overflow-x-auto no-scrollbar">
                <div className="flex gap-8 px-10 pb-10 min-w-max">
                    {testimonials.map((t, i) => (
                        <div key={i} className="w-[400px] glass-panel rounded-none p-8 flex flex-col gap-6 relative group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-none bg-brand-violet/10 border border-brand-violet/30 p-1">
                                    <img src={t.image} alt={t.name} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
                                </div>
                                <div className="text-right">
                                    <p className="text-brand-cyan text-2xl font-bold tracking-tighter">{t.metric}</p>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{t.label}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold tracking-tight mb-2 font-display">{t.name}</h3>
                                <p className="text-brand-gold/80 text-xs font-medium uppercase tracking-widest mb-4">{t.role}</p>
                                <p className="text-white/60 text-sm leading-relaxed font-light italic">"{t.quote}"</p>
                            </div>
                            <div className="pt-4 border-t border-brand-violet/10 flex items-center justify-between">
                                <t.icon className="text-brand-violet/40 w-5 h-5" />
                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Nivel de Ascensión: {t.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

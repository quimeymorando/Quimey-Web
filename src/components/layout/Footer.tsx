"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

const navLinks = [
    { name: "Cursos", href: "/cursos" },
    { name: "Productos", href: "/productos" },
    { name: "Agencia", href: "/agencia" },
    { name: "Roadmap", href: "/roadmap" },
];

const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/quimeymorando", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/in/quimeymorando", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/@quimeymorando", icon: Youtube },
];

const Footer = () => {
    return (
        <footer className="relative w-full bg-background border-t border-white/5 overflow-hidden">
            {/* Ambient glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Col 1: Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                <div
                                    className="w-6 h-6 bg-brand-cyan"
                                    style={{
                                        maskImage: "url('/logoquimi.svg')",
                                        maskSize: "contain",
                                        maskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        WebkitMaskImage: "url('/logoquimi.svg')",
                                        WebkitMaskSize: "contain",
                                        WebkitMaskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                    }}
                                />
                            </div>
                            <span className="font-display text-xl font-bold tracking-tighter text-white group-hover:text-brand-cyan transition-colors">
                                QUIMEY
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm font-sans leading-relaxed max-w-xs">
                            Arquitectura de Autonomía Digital. Instalamos ecosistemas que generan resultados sin depender de tu presencia constante.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:border-brand-cyan/40 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Navegación */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 font-display">
                            Navegación
                        </span>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/50 hover:text-brand-cyan text-sm font-sans tracking-wide transition-colors duration-200 w-fit"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: CTA */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 font-display">
                            Contacto Directo
                        </span>
                        <p className="text-white/40 text-sm font-sans leading-relaxed">
                            ¿Listo para instalar tu ecosistema? Hablemos directamente.
                        </p>
                        <a
                            href="https://wa.me/5492804819907"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/60 text-brand-cyan text-sm font-bold uppercase tracking-widest transition-all duration-300 w-fit"
                        >
                            WhatsApp
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/20 text-xs tracking-widest font-sans">
                        © {new Date().getFullYear()} QUIMEY MORANDO — Todos los derechos reservados.
                    </p>
                    <p className="text-white/10 text-xs tracking-wider font-sans">
                        Sistema de Autonomía Digital · v3.0
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

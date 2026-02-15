"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, ArrowLeft, House, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import FuturistButton from "@/components/ui/FuturistButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);



    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="glass-nav flex items-center justify-between rounded-xl px-4 py-3 md:px-8 md:py-4 w-full max-w-[1200px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    {!isHome ? (
                        <Link
                            href="/"
                            className="relative z-50 flex items-center gap-2 text-sm font-medium text-brand-cyan transition-colors hover:text-white uppercase tracking-widest bg-brand-cyan/5 px-4 py-2 rounded-lg border border-brand-cyan/20 hover:bg-brand-cyan/10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden md:inline">Volver al Inicio</span>
                        </Link>
                    ) : (
                        <Link href="/" className="hidden md:flex items-center gap-3 group relative z-50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                <div className="w-9 h-9 bg-brand-cyan" style={{ maskImage: "url('/logoquimi%20copy.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi%20copy.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white font-display group-hover:text-brand-cyan transition-colors">
                                QUIMEY MORANDO
                            </span>
                        </Link>
                    )}
                </div>

                {/* Mobile Centered Logo (Absolute) */}
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 backdrop-blur-md">
                        <div className="w-10 h-10 bg-brand-cyan" style={{ maskImage: "url('/logoquimi%20copy.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi%20copy.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                    </div>
                </div>

                {/* Center Section */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
                    {!isHome ? (
                        <span className="text-xl font-bold tracking-tighter text-white font-display uppercase">
                            QUIMEY MORANDO
                        </span>
                    ) : (
                        <>
                            {/* CURSOS & PRODUCTOS (Violet Glow) */}
                            {[
                                { name: "Cursos", href: "/cursos" },
                                { name: "Productos", href: "/productos" }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-5 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-lg group overflow-hidden"
                                >
                                    <div className="absolute inset-0 border border-brand-purple/30 rounded-lg group-hover:border-brand-purple group-hover:shadow-[0_0_15px_rgba(120,0,255,0.5)] transition-all duration-300" />
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            ))}

                            {/* AGENCIA (Cyan - Existing) */}
                            <Link
                                href="/agencia"
                                className="relative px-5 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-lg group overflow-hidden"
                            >
                                <div className="absolute inset-0 border border-brand-cyan/30 rounded-lg group-hover:border-brand-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300" />
                                <span className="relative z-10">AGENCIA</span>
                            </Link>

                            {/* ROADMAP (White - Simple/Fixed) */}
                            <Link
                                href="/roadmap"
                                className="relative px-5 py-2 text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 rounded-lg group hover:text-white"
                            >
                                <div className="absolute inset-0 border border-white/20 rounded-lg transition-colors duration-300 group-hover:border-white/40" />
                                <span className="relative z-10">ROADMAP</span>
                            </Link>
                        </>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                        <FuturistButton className="!py-2 !px-6 text-sm hidden md:flex" icon={<ArrowRight className="w-4 h-4" />}>
                            Contactar
                        </FuturistButton>
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar/Drawer (Pure CSS/Tailwind) */}

            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/80 z-[60] md:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-[#020617] border-l border-brand-cyan/20 z-[70] md:hidden flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-out will-change-transform",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col gap-8">
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4">
                        {[
                            { name: "Cursos", href: "/cursos", color: "purple" },
                            { name: "Productos", href: "/productos", color: "purple" },
                            { name: "Agencia", href: "/agencia", color: "cyan" },
                            { name: "Roadmap", href: "/roadmap", color: "white" }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="group relative px-6 py-4 text-lg font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30"
                            >
                                <div className={`absolute inset-0 bg-${item.color === 'cyan' ? 'brand-cyan' : item.color === 'purple' ? 'brand-purple' : 'brand-lilac'}/0 group-hover:bg-${item.color === 'cyan' ? 'brand-cyan' : item.color === 'purple' ? 'brand-purple' : 'brand-lilac'}/10 transition-colors duration-300`} />
                                <span className="relative z-10 flex items-center justify-between">
                                    {item.name}
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/10" />

                    {/* CTA */}
                    <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        <FuturistButton className="w-full justify-center !py-4 text-base" icon={<ArrowRight className="w-5 h-5" />}>
                            Contactar
                        </FuturistButton>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}

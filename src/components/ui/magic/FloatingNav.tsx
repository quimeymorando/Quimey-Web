"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, ArrowLeft, House } from "lucide-react";
import FuturistButton from "@/components/ui/FuturistButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
    const pathname = usePathname();
    const isHome = pathname === "/";



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
                            className="flex items-center gap-2 text-sm font-medium text-brand-cyan transition-colors hover:text-white uppercase tracking-widest bg-brand-cyan/5 px-4 py-2 rounded-lg border border-brand-cyan/20 hover:bg-brand-cyan/10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden md:inline">Volver al Inicio</span>
                        </Link>
                    ) : (
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                <div className="w-9 h-9 bg-brand-cyan" style={{ maskImage: "url('/logoquimi%20copy.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi%20copy.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                            </div>
                            <span className="hidden md:inline text-xl font-bold tracking-tighter text-white font-display group-hover:text-brand-cyan transition-colors">
                                QUIMEY MORANDO
                            </span>
                        </Link>
                    )}
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
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden hover:bg-white/10 transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}

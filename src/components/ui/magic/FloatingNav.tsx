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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Cursos", href: "/cursos", color: "purple" },
        { name: "Productos", href: "/productos", color: "purple" },
        { name: "Agencia", href: "/agencia", color: "cyan" },
        { name: "Roadmap", href: "/roadmap", color: "white" }
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={cn(
                "fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300",
                scrolled ? "top-2" : "top-6"
            )}
        >
            <div className={cn(
                "glass-nav flex flex-col md:flex-row items-center justify-between rounded-2xl md:rounded-xl px-4 py-3 md:px-8 md:py-4 w-full max-w-[1200px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
                scrolled ? "py-2 md:py-3 bg-black/80 backdrop-blur-xl border-brand-cyan/20" : ""
            )}>

                {/* Desktop Layout (Hidden on Mobile) */}
                <div className="hidden md:flex items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="flex items-center gap-4">
                        {!isHome ? (
                            <Link
                                href="/"
                                className="relative z-50 flex items-center gap-2 text-sm font-medium text-brand-cyan transition-colors hover:text-white uppercase tracking-widest bg-brand-cyan/5 px-4 py-2 rounded-lg border border-brand-cyan/20 hover:bg-brand-cyan/10"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Volver al Inicio</span>
                            </Link>
                        ) : (
                            <Link href="/" className="flex items-center gap-3 group relative z-50">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                    <div className="w-9 h-9 bg-brand-cyan" style={{ maskImage: "url('/logoquimi%20copy.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi%20copy.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                </div>
                                <span className="text-xl font-bold tracking-tighter text-white font-display group-hover:text-brand-cyan transition-colors">
                                    QUIMEY MORANDO
                                </span>
                            </Link>
                        )}
                    </div>

                    {/* Center Section */}
                    <div className="flex items-center gap-8">
                        {isHome && navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 rounded-lg group overflow-hidden hover:text-brand-cyan"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <div className={cn(
                                    "absolute inset-0 border border-transparent rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
                                    item.color === 'cyan' ? "group-hover:border-brand-cyan" : "group-hover:border-brand-purple"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                            <FuturistButton className="!py-2 !px-6 text-sm" icon={<ArrowRight className="w-4 h-4" />}>
                                Contactar
                            </FuturistButton>
                        </a>
                    </div>
                </div>

                {/* Mobile Layout (Visible ONLY on Mobile) */}
                <div className="flex md:hidden flex-col w-full gap-3">
                    {/* Top Row: Logo & Contact Icon */}
                    <div className="flex items-center justify-between w-full px-1">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                                <div className="w-6 h-6 bg-brand-cyan" style={{ maskImage: "url('/logoquimi%20copy.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi%20copy.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                            </div>
                            <span className="text-sm font-bold tracking-tighter text-white font-display">
                                QUIMEY
                            </span>
                        </Link>

                        <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                                <span>Contactar</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </a>
                    </div>

                    {/* Bottom Row: Inline Scrollable Links (Delicate Buttons) */}
                    <div className="w-full overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
                        <div className="flex items-center gap-3 min-w-max pr-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-wider text-white/90 whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors active:scale-95 touch-manipulation"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </motion.nav>
    );
}

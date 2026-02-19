/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import FuturistButton from "@/components/ui/FuturistButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [visible, setVisible] = useState(true);
    const { scrollY } = useScroll();

    // OPTIMIZED SCROLL LOGIC
    useMotionValueEvent(scrollY, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollY.getPrevious() || 0;
            const direction = current - previous;

            if (scrollY.get() < 50) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    const navItems = [
        { name: "Cursos", href: "/cursos", color: "purple" },
        { name: "Productos", href: "/productos", color: "purple" },
        { name: "Agencia", href: "/agencia", color: "cyan" },
        { name: "Roadmap", href: "/roadmap", color: "white" }
    ];

    return (
        <>
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0
                }}
                transition={{
                    duration: 0.2, // Faster transition for mobile responsiveness
                    ease: "easeOut"
                }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[9999] flex flex-col items-center justify-center pt-2 md:pt-6 px-2 md:px-4 pointer-events-none will-change-transform"
                )}
            >
                <div className={cn(
                    "relative w-full max-w-[1200px] pointer-events-auto transition-all duration-300",
                    "flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
                    "rounded-2xl md:rounded-xl",
                    // MOBILE OPTIMIZATION: Solid BG (Simulated Dark), No Blur
                    "bg-[#050A14] md:bg-[#020617]/90",
                    "backdrop-filter-none md:backdrop-blur-[10px]",
                    "border border-white/10",
                    "shadow-lg md:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
                    "p-3 md:px-8 md:py-4"
                )}>

                    {/* --- DESKTOP LAYOUT --- */}
                    <div className="hidden md:flex items-center justify-between w-full">
                        {/* Left: Logo / Back */}
                        <div className="flex items-center gap-4 min-w-[200px]">
                            {!isHome ? (
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-white transition-colors uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-white/5"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Inicio</span>
                                </Link>
                            ) : (
                                <Link href="/" className="flex items-center gap-3 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan/20 transition-colors">
                                        <div className="w-8 h-8 bg-brand-cyan" style={{ maskImage: "url('/logoquimi.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                    </div>
                                    <span className="text-xl font-bold tracking-tighter text-white font-display group-hover:text-brand-cyan transition-colors">
                                        QUIMEY
                                    </span>
                                </Link>
                            )}
                        </div>

                        {/* Center: Nav Items */}
                        <div className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-lg group overflow-hidden will-change-transform",
                                        item.color === 'white' ? "text-white/70 hover:text-white" : "text-white hover:text-brand-cyan"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute inset-0 border border-transparent rounded-lg transition-all duration-300",
                                        "group-hover:border-white/20 group-hover:bg-white/5"
                                    )} />
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Right: Contact */}
                        <div className="flex items-center justify-end min-w-[200px]">
                            <a href="https://wa.me/5492804819907" target="_blank" rel="noopener noreferrer">
                                <FuturistButton className="!py-2 !px-6 text-xs" icon={<ArrowRight className="w-4 h-4" />}>
                                    Contactar
                                </FuturistButton>
                            </a>
                        </div>
                    </div>


                    {/* --- MOBILE LAYOUT (Optimized) --- */}
                    <div className="flex flex-col md:hidden w-full gap-3">

                        {/* Row 1: Logo & Fixed Contact Button */}
                        <div className="flex items-center justify-between w-full px-1">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-cyan/10 border border-brand-cyan/20">
                                    <div className="w-6 h-6 bg-brand-cyan" style={{ maskImage: "url('/logoquimi.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/logoquimi.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                                </div>
                                <span className="text-base font-bold tracking-tight text-white font-display">
                                    QUIMEY
                                </span>
                            </Link>

                            <a
                                href="https://wa.me/5492804819907"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-[10000] pointer-events-auto"
                                onClick={() => console.log("Mobile Contact Clicked")}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-bold uppercase tracking-wider text-brand-cyan shadow-[0_0_5px_rgba(6,182,212,0.1)] active:scale-95 transition-transform will-change-transform">
                                    <span>Contactar</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </a>
                        </div>

                        {/* Row 2: Horizontal Scroll Navigation */}
                        <div className="w-full relative">
                            {/* Scroll Container */}
                            <div
                                className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 px-1 w-full whitespace-nowrap"
                                style={{ WebkitOverflowScrolling: "touch" }}
                            >
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex-shrink-0 px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all will-change-transform",
                                            "bg-white/5 border-white/10 text-white/80",
                                            "active:scale-95 active:bg-white/10 active:text-white"
                                        )}
                                        style={{
                                            // Add extra margin to the last item for safety
                                            marginRight: idx === navItems.length - 1 ? "20px" : "0px"
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Fade Mask (Lighter/Subtle for speed) */}
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none" />
                        </div>
                    </div>

                </div>
            </motion.nav>
        </>
    );
}

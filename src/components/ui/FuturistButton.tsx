"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FuturistButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function FuturistButton({
    children,
    onClick,
    icon,
    variant = "primary",
    className = "",
    type = "button",
}: FuturistButtonProps) {
    const baseStyles = "relative px-8 py-4 rounded-xl font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 group";

    const variants = {
        primary: "bg-brand-purple text-white shadow-[0_0_20px_rgba(208,0,255,0.3)] hover:shadow-[0_0_40px_rgba(208,0,255,0.6)] hover:scale-105",
        secondary: "bg-transparent border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
        ghost: "bg-transparent text-foreground/60 hover:text-foreground hover:bg-white/5",
    };

    return (
        <motion.button
            type={type}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(baseStyles, variants[variant], className)}
        >
            <span className="relative z-10 flex items-center gap-2">
                {icon}
                {children}
            </span>
            {/* Glitch/Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
        </motion.button>
    );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    delay?: number;
}

export default function BentoCard({ title, description, icon, className, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "group relative p-8 rounded-3xl overflow-hidden glass-panel hover:bg-white/10 transition-all duration-500",
                "flex flex-col justify-between min-h-[200px]",
                className
            )}
        >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brand-cyan/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/20 transition-all duration-500" />

            <div className="relative z-10">
                <div className="mb-4 text-brand-gold w-10 h-10 flex items-center justify-center bg-brand-gold/10 rounded-full border border-brand-gold/20 pb-1">
                    {icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">{title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-sans">{description}</p>
            </div>

            {/* Decorative Border Gradient */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl z-20 pointer-events-none group-hover:border-brand-cyan/30 transition-colors duration-500" />
        </motion.div>
    );
}

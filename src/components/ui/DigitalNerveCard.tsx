"use client";

import React from "react";
import { motion } from "framer-motion";

interface DigitalNerveCardProps {
    level: 1 | 2 | 3; // 1: Linear, 2: Dense, 3: Alive
    subtitle: string;
    title: string;
    description: string;
    features: string[];
    className?: string;
    index?: number;
}

const DigitalNerveCard: React.FC<DigitalNerveCardProps> = ({
    level,
    subtitle,
    title,
    description,
    features,
    className = "",
    index = 0
}) => {
    // Define colors based on level for border/static elements
    const getBorderColor = () => {
        switch (level) {
            case 1: return "border-brand-cyan/30 hover:border-brand-cyan/60";
            case 2: return "border-brand-purple/30 hover:border-brand-purple/60";
            case 3: return "border-white/20 hover:border-white/50";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2 }}
            className={`group relative p-10 rounded-[2rem] border ${getBorderColor()} bg-[#0F1629]/60 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${className}`}
        >
            {/* Gradient Overlay for Fade */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0A0F1E]/80 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4 block">
                    {subtitle}
                </span>
                <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                    {title}
                </h4>
                <p className="text-white/70 mb-8 leading-relaxed text-sm font-light min-h-[80px]">
                    {description}
                </p>

                <ul className="space-y-4 mt-auto">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80 group-hover:text-white transition-colors">
                            <div className={`w-1.5 h-1.5 rounded-full ${level === 1 ? 'bg-brand-cyan' : level === 2 ? 'bg-brand-purple' : 'bg-white'} shadow-[0_0_8px_currentColor]`} />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Visual Anchor Node (Restored Animation) */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 rounded-full ${level === 1 ? 'bg-brand-cyan' : level === 2 ? 'bg-brand-purple' : 'bg-white'} animate-pulse`} />
                    <div className={`absolute inset-0 rounded-full border-2 border-t-transparent animate-spin duration-[3000ms] ${level === 1 ? 'border-brand-cyan' : level === 2 ? 'border-brand-purple' : 'border-white'}`} />
                </div>
            </div>
        </motion.div>
    );
};

export default DigitalNerveCard;

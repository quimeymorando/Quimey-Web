"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface AgencyCardProps {
    item: {
        subtitle: string;
        title: string;
        desc: string;
        features: string[];
        gradient: string;
        border: string;
        spotlightColor?: string;
    };
    index: number;
}

export default function AgencyCard({ item, index }: AgencyCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative p-10 rounded-[2rem] border ${item.border} bg-[#0F1629]/50 backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition-all duration-500`}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${item.spotlightColor || "rgba(255,255,255,.1)"}, transparent 40%)`,
                }}
            />

            {/* Existing static gradient for base ambiance (optional, can be kept or removed if spotlight is enough) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />

            <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white/30 mb-4 block">
                {item.subtitle}
            </span>
            <h4 className="relative z-10 text-2xl font-bold mb-6">{item.title}</h4>
            <p className="relative z-10 text-white/60 mb-8 leading-relaxed text-sm font-light min-h-[80px]">
                {item.desc}
            </p>

            <ul className="relative z-10 space-y-4">
                {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> {f}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

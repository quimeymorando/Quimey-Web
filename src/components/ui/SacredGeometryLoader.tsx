"use client";

import React, { useRef, useEffect } from "react";

const SacredGeometryLoader = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let time = 0;

        const drawHexagon = (x: number, y: number, radius: number, angle: number, color: string, alpha: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const theta = angle + (i * Math.PI) / 3;
                const px = x + radius * Math.cos(theta);
                const py = y + radius * Math.sin(theta);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = alpha;
            ctx.stroke();
            ctx.globalAlpha = 1;
        };

        const animate = () => {
            // Clear canvas with base background color, but slight fade for trail effect if desired (optional)
            // For cleaner lines, full clear:
            ctx.fillStyle = "#050A14";
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            time += 0.005;

            const baseRadius = 150 + Math.sin(time * 2) * 20; // Breathing effect
            const rotation = time * 0.5;

            // Gradient colors
            const gradient = ctx.createLinearGradient(centerX - baseRadius, centerY - baseRadius, centerX + baseRadius, centerY + baseRadius);
            gradient.addColorStop(0, "#00FFFF"); // Cyan
            gradient.addColorStop(1, "#7800FF"); // Purple

            // Flower of Life / Metatron-ish pattern
            // Central Hexagon
            drawHexagon(centerX, centerY, baseRadius, rotation, "#00FFFF", 0.8);

            // Surrounding Hexagons
            for (let i = 0; i < 6; i++) {
                const angle = rotation + (i * Math.PI) / 3;
                const x = centerX + baseRadius * Math.cos(angle);
                const y = centerY + baseRadius * Math.sin(angle);

                // Draw smaller hexagons around
                drawHexagon(x, y, baseRadius / 2, -rotation * 2, "#7800FF", 0.5);

                // Draw connecting lines to center?
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
                ctx.stroke();
            }

            // Outer ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, baseRadius * 1.8, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
            ctx.stroke();

            // Particles
            for (let i = 0; i < 20; i++) {
                const pAngle = time * (0.5 + i * 0.1) + i;
                const pRad = baseRadius * (1.2 + Math.sin(time * 3 + i) * 0.5);
                const px = centerX + Math.cos(pAngle) * pRad;
                const py = centerY + Math.sin(pAngle) * pRad;

                ctx.beginPath();
                ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = i % 2 === 0 ? "#00FFFF" : "#7800FF";
                ctx.fill();
            }


            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default SacredGeometryLoader;

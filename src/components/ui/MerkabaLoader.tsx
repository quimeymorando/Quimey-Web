"use client";

import React, { useRef, useEffect } from "react";

const MerkabaLoader = () => {
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

        const drawTriangle = (x: number, y: number, radius: number, angle: number, color: string, alpha: number) => {
            ctx.beginPath();
            for (let i = 0; i < 3; i++) {
                const theta = angle + (i * Math.PI * 2) / 3;
                const px = x + radius * Math.cos(theta);
                const py = y + radius * Math.sin(theta);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.globalAlpha = alpha;
            ctx.stroke();
            ctx.globalAlpha = 1;
        };

        const animate = () => {
            // Clear canvas
            ctx.fillStyle = "#050A14";
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            time += 0.01;

            const baseRadius = 180 + Math.sin(time * 1.5) * 20; // Breathing effect

            // Merkaba = Two Interlocking Tetrahedrons
            // Represented here as two counter-rotating equilateral triangles

            const rotationSpeed = 0.5;
            const angle1 = time * rotationSpeed; // Clockwise
            const angle2 = time * -rotationSpeed + Math.PI; // Counter-Clockwise + offset to start inverted

            // Draw Glow
            const gradient = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.5, centerX, centerY, baseRadius * 1.5);
            gradient.addColorStop(0, "rgba(6, 182, 212, 0.1)"); // Cyan low alpha
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);


            // Triangle 1 (Male/Electric) - Cyan
            drawTriangle(centerX, centerY, baseRadius, angle1 - Math.PI / 2, "#00FFFF", 0.8);
            // Inner echo
            drawTriangle(centerX, centerY, baseRadius * 0.6, angle1 - Math.PI / 2, "#00FFFF", 0.3);

            // Triangle 2 (Female/Magnetic) - Purple
            drawTriangle(centerX, centerY, baseRadius, angle2 - Math.PI / 2, "#7800FF", 0.8);
            // Inner echo
            drawTriangle(centerX, centerY, baseRadius * 0.6, angle2 - Math.PI / 2, "#7800FF", 0.3);


            // Connecting lines between vertices of alternating triangles (optional, creates complexity)
            // For now, let's keep it clean but maybe add a circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, baseRadius * 1.2, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.stroke();

            // Particles surrounding
            for (let i = 0; i < 30; i++) {
                const pAngle = time * (0.2 + i * 0.05) + i * 10;
                const pRad = baseRadius * (1.5 + Math.sin(time * 2 + i) * 0.8);
                const px = centerX + Math.cos(pAngle) * pRad;
                const py = centerY + Math.sin(pAngle) * pRad;

                ctx.beginPath();
                ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2);
                ctx.fillStyle = i % 2 === 0 ? "#00FFFF" : "#7800FF";
                ctx.globalAlpha = 0.6 + Math.sin(time * 5 + i) * 0.4;
                ctx.fill();
                ctx.globalAlpha = 1;
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

export default MerkabaLoader;

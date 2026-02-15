"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CircuitConfig {
    lineWidth: number;
    nodeRadius: number;
    color: string;
    glowColor: string;
    flowSpeed: number;
    opacity: number;
    density: number;
}

const CircuitBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const config: CircuitConfig = {
        lineWidth: 1.5,
        nodeRadius: 3,
        color: "#06b6d4", // brand-cyan
        glowColor: "#06b6d4",
        flowSpeed: 0.5,
        opacity: 0.15,
        density: 40, // Lower is denser
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const { clientWidth, clientHeight } = canvasRef.current.parentElement || document.body;
                setDimensions({ width: clientWidth, height: clientHeight });
                canvasRef.current.width = clientWidth;
                canvasRef.current.height = clientHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const width = dimensions.width;
        const height = dimensions.height;

        // Generate static circuit paths
        type Point = { x: number; y: number };
        type Path = Point[];
        const paths: Path[] = [];
        const nodes: Point[] = [];

        // Grid based generation
        const gridSize = config.density;
        const cols = Math.ceil(width / gridSize);
        const rows = Math.ceil(height / gridSize);

        // Create random paths
        for (let i = 0; i < (cols * rows) / 4; i++) {
            let cx = Math.floor(Math.random() * cols) * gridSize;
            let cy = Math.floor(Math.random() * rows) * gridSize;
            const path: Path = [{ x: cx, y: cy }];
            const length = Math.floor(Math.random() * 10) + 3;
            let dir = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left

            for (let j = 0; j < length; j++) {
                if (Math.random() > 0.7) {
                    dir = (dir + (Math.random() > 0.5 ? 1 : 3)) % 4; // Turn 90 deg
                }

                if (dir === 0) cy -= gridSize;
                else if (dir === 1) cx += gridSize;
                else if (dir === 2) cy += gridSize;
                else if (dir === 3) cx -= gridSize;

                // Keep within bounds
                if (cx < 0 || cx > width || cy < 0 || cy > height) break;

                path.push({ x: cx, y: cy });
            }

            if (path.length > 2) {
                paths.push(path);
                nodes.push(path[0]);
                nodes.push(path[path.length - 1]);
                if (Math.random() > 0.8) nodes.push(path[Math.floor(path.length / 2)]);
            }
        }

        // Animation state
        const particles: { pathIndex: number; progress: number; speed: number }[] = [];

        // Initial particles
        for (let i = 0; i < 20; i++) {
            particles.push({
                pathIndex: Math.floor(Math.random() * paths.length),
                progress: Math.random() * 100, // Distance along path
                speed: config.flowSpeed + Math.random() * 0.5
            });
        }


        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw static circuits
            ctx.lineWidth = config.lineWidth;
            ctx.strokeStyle = `${config.color}${Math.floor(config.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            paths.forEach(path => {
                ctx.beginPath();
                ctx.moveTo(path[0].x, path[0].y);
                for (let i = 1; i < path.length; i++) {
                    ctx.lineTo(path[i].x, path[i].y);
                }
                ctx.stroke();
            });

            // Draw Nodes
            ctx.fillStyle = config.color;
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, config.nodeRadius, 0, Math.PI * 2);
                ctx.fillStyle = `${config.color}${Math.floor((config.opacity + 0.2) * 255).toString(16).padStart(2, '0')}`;
                ctx.fill();
            });


            // Draw flowing particles
            ctx.shadowBlur = 10;
            ctx.shadowColor = config.glowColor;
            ctx.fillStyle = config.glowColor;

            particles.forEach((p, idx) => {
                const path = paths[p.pathIndex];
                if (!path) return;

                // Calculate total path length approximation
                let totalLen = 0;
                for (let i = 0; i < path.length - 1; i++) {
                    totalLen += Math.abs(path[i + 1].x - path[i].x) + Math.abs(path[i + 1].y - path[i].y);
                }

                // Move particle
                p.progress += p.speed;
                if (p.progress >= totalLen) {
                    // Reset or respawn
                    p.progress = 0;
                    p.pathIndex = Math.floor(Math.random() * paths.length);
                    return;
                }

                // Find current position
                let currentDist = 0;
                let pos = path[0];

                for (let i = 0; i < path.length - 1; i++) {
                    const segLen = Math.abs(path[i + 1].x - path[i].x) + Math.abs(path[i + 1].y - path[i].y);
                    if (currentDist + segLen >= p.progress) {
                        // Interpolate on this segment
                        const segProgress = (p.progress - currentDist) / segLen;
                        pos = {
                            x: path[i].x + (path[i + 1].x - path[i].x) * segProgress,
                            y: path[i].y + (path[i + 1].y - path[i].y) * segProgress
                        };
                        break;
                    }
                    currentDist += segLen;
                }

                ctx.beginPath();
                ctx.arc(pos.x, pos.y, config.nodeRadius * 1.5, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.shadowBlur = 0;


            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [dimensions]);

    if (isMobile) {
        return (
            <div className="absolute inset-0 z-0 bg-[#020617] opacity-40">
                {/* Fallback for mobile: Simple gradient or just dark bg */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-transparent to-[#0A0F1E] z-10" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Overlay gradient to fade edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-transparent to-[#0A0F1E] z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/50 via-transparent to-[#0A0F1E]/50 z-10" />
        </div>
    );
};

export default CircuitBackground;

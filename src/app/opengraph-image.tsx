import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quimey Morando — Arquitectura de Autonomía Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #020617 0%, #0a0f2e 50%, #020617 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative glow top-left */}
                <div
                    style={{
                        position: "absolute",
                        top: -100,
                        left: -100,
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "rgba(0, 240, 255, 0.08)",
                        filter: "blur(80px)",
                    }}
                />
                {/* Decorative glow bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "rgba(208, 0, 255, 0.08)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Top tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 20px",
                        borderRadius: 100,
                        border: "1px solid rgba(139, 92, 246, 0.3)",
                        background: "rgba(139, 92, 246, 0.1)",
                        color: "rgba(224, 176, 255, 0.9)",
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: 32,
                    }}
                >
                    Sistema En Línea: v3.0
                </div>

                {/* Main title */}
                <div
                    style={{
                        fontSize: 68,
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        textAlign: "center",
                        maxWidth: 900,
                        marginBottom: 24,
                    }}
                >
                    <span style={{ color: "#ffffff" }}>QUIMEY</span>
                    <span
                        style={{
                            background: "linear-gradient(90deg, #00F0FF, #D000FF)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {" "}MORANDO
                    </span>
                </div>

                {/* Separator */}
                <div
                    style={{
                        width: 120,
                        height: 2,
                        background: "linear-gradient(90deg, transparent, #00F0FF, #D000FF, transparent)",
                        marginBottom: 28,
                    }}
                />

                {/* Subtitle */}
                <div
                    style={{
                        color: "rgba(248, 250, 252, 0.6)",
                        fontSize: 22,
                        fontWeight: 300,
                        letterSpacing: "0.05em",
                        textAlign: "center",
                        maxWidth: 700,
                    }}
                >
                    Arquitectura de Autonomía Digital · High-Ticket Strategy
                </div>
            </div>
        ),
        { ...size }
    );
}

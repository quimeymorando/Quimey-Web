"use client";

import RoadmapHero from "@/components/roadmap/RoadmapHero";
import InteractiveTimeline from "@/components/roadmap/InteractiveTimeline";
import RoadmapCTA from "@/components/roadmap/RoadmapCTA";
import FloatingNav from "@/components/ui/magic/FloatingNav";

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-[#0a0a12] text-white selection:bg-brand-cyan selection:text-black overflow-hidden relative">
            <FloatingNav />
            {/* Ambient Background Particles */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] rounded-full animate-float-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-cyan/5 blur-[150px] rounded-full animate-float-slow delay-1000" />
            </div>

            <RoadmapHero />
            <InteractiveTimeline />
            <RoadmapCTA />
        </main>
    );
}

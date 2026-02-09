"use client";

import dynamic from "next/dynamic";
import FloatingNav from "@/components/ui/magic/FloatingNav";
import Hero from "@/components/sections/Hero";
import PowerCore from "@/components/sections/PowerCore";
import AutonomyThreshold from "@/components/sections/AutonomyThreshold";

const VisionaryProfile = dynamic(() => import("@/components/sections/VisionaryProfile"));
const AutonomyBridge = dynamic(() => import("@/components/sections/AutonomyBridge"));
const EcosystemInstallation = dynamic(() => import("@/components/sections/EcosystemInstallation"));
const ParadigmShifter = dynamic(() => import("@/components/sections/ParadigmShifter"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-background font-display selection:bg-brand-cyan selection:text-background">
      <FloatingNav />
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-0 left-0 w-full h-[800px] bg-brand-purple/5 blur-[150px] animate-float z-0" />

      {/* Hero Section */}
      <Hero />

      {/* Core Capabilities */}
      <PowerCore />

      {/* Visionary Section */}
      <VisionaryProfile />

      {/* Autonomy Bridge (Lead) */}
      <AutonomyBridge />

      {/* Ecosystem Installation (Offer) */}
      <EcosystemInstallation />

      {/* Paradigm Shifter (FAQ) */}
      <ParadigmShifter />

      {/* Autonomy Threshold (Closing) */}
      <AutonomyThreshold />
    </main>
  );
}

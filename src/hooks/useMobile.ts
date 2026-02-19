"use client";

import { useState, useEffect } from "react";

/**
 * Hook para detectar si el usuario está en un dispositivo mobile.
 * Usa un threshold de 768px (breakpoint md de Tailwind).
 * Retorna false durante SSR para evitar hydration mismatch.
 */
export function useMobile(threshold = 768): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < threshold);
        checkMobile();

        const mediaQuery = window.matchMedia(`(max-width: ${threshold - 1}px)`);
        mediaQuery.addEventListener("change", checkMobile);
        return () => mediaQuery.removeEventListener("change", checkMobile);
    }, [threshold]);

    return isMobile;
}

"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-[#020617] text-center text-white/20 text-xs tracking-widest border-t border-white/5">
            © {new Date().getFullYear()} QUIMEY MORANDO
        </footer>
    );
};

export default Footer;

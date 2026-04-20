"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      backgroundColor: scrolled
        ? "rgba(20, 20, 20, 0.35)"
        : "rgba(0, 0, 0, 0)",
      backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      borderColor: scrolled
        ? "rgba(255,255,255,0.08)"
        : "rgba(255,255,255,0)",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        ref={navRef}
        className="flex items-center justify-between px-8 py-5 border-b border-transparent transition-all"
      >
        {/* LEFT */}
        <div className="text-sm font-medium tracking-wide">
          Kaustubh
        </div>

        {/* CENTER */}
        <div className="hidden md:flex gap-10 text-sm opacity-70">
          <a href="#projects" className="hover:opacity-100 transition">
            Projects
          </a>
          <a href="#services" className="hover:opacity-100 transition">
            Services
          </a>
          <a href="#contact" className="hover:opacity-100 transition">
            Contact
          </a>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex gap-5 items-center opacity-70">

          {/* GitHub */}
          <a
            href="https://github.com/K-kaustubh420"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.1 3.3 9.43 7.88 10.96.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.17.08 1.8 1.22 1.8 1.22 1.04 1.8 2.74 1.28 3.4.98.1-.76.4-1.28.74-1.58-2.56-.3-5.25-1.3-5.25-5.78 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.55.12-3.23 0 0 1-.32 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.68.24 2.93.12 3.23.76.82 1.22 1.87 1.22 3.15 0 4.5-2.7 5.48-5.28 5.77.42.37.8 1.1.8 2.23v3.3c0 .32.2.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kaustubh-kushwaha-b61503285/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5C4.98 5 3.86 6.1 2.48 6.1h-.03C1.06 6.1 0 5 0 3.5 0 2 1.1.9 2.48.9c1.38 0 2.5 1.1 2.5 2.6zM.24 8.4h4.5V24H.24zM8.22 8.4h4.32v2.13h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.87V24h-4.5v-7.92c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.06-3.03 4.18V24h-4.5z" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PixelText from "./PixelText";
import SystemLabel from "./SystemLabel";

export default function Hero() {
  const lines = [
    "INITIALIZING SYSTEM...",
    "LOADING CORE_MODULES...",
    "CONNECTION ESTABLISHED.",
    "HI THERE, I'M KAUSTUBH.",
  ];

  const readyWords = ["READY", "TO", "BUILD"];

  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [phase, setPhase] = useState<"boot" | "ready" | "final">("boot");
  const [wordIndex, setWordIndex] = useState(0);

  // TYPEWRITER (BOOT)
  useEffect(() => {
    if (phase !== "boot") return;

    if (lineIndex >= lines.length) {
      setTimeout(() => {
        setPhase("ready");
      }, 400);
      return;
    }

    const timeout = setTimeout(() => {
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        setDisplayed((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayed("");
          setCharIndex(0);
          setLineIndex((prev) => prev + 1);
        }, 700);
      }
    }, 35);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, phase]);

  // READY → TO → BUILD
  useEffect(() => {
    if (phase !== "ready") return;

    if (wordIndex >= readyWords.length) {
      setTimeout(() => setPhase("final"), 300);
      return;
    }

    const t = setTimeout(() => {
      setWordIndex((prev) => prev + 1);
    }, 220);

    return () => clearTimeout(t);
  }, [phase, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1c12] text-[#F5E6C8] overflow-hidden p-6">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F5E6C8 1px, transparent 1px), linear-gradient(90deg, #F5E6C8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* LEFT VERTICAL NAME */}
      <div className="absolute left-[-5vh] top-0 h-full flex items-center pointer-events-none">
        <h1 className="text-[14vh] font-black text-white/5 -rotate-90 whitespace-nowrap tracking-tight">
          KAUSTUBH
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-5xl">

        <AnimatePresence mode="wait">

          {/* BOOT TERMINAL */}
          {phase === "boot" && (
            <motion.div
              key="boot"
              exit={{ opacity: 0, scale: 0.98 }}
              className="font-mono text-lg md:text-2xl text-[#8b916a]"
            >
              <span className="opacity-50 mr-2">root@kaustubh:~#</span>
              {displayed}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-[#F5E6C8] ml-1"
              />
            </motion.div>
          )}

          {/* READY → TO → BUILD */}
          {phase === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl md:text-8xl font-black font-mono text-[#F5E6C8]"
            >
              {readyWords.slice(0, wordIndex).map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {word}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* FINAL CONTENT */}
          {phase === "final" && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-6"
            >
              <SystemLabel text="STATUS: OPERATIONAL" />

              {/* NAME */}
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-[#F5E6C8]">
                Kaustubh
              </h1>

              {/* BOTTOM */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-[#F5E6C8]/20 pt-6 mt-4 gap-6">
                <div className="max-w-md">
                  <PixelText className="text-xl md:text-2xl leading-tight">
                    SYSTEMS BUILDER <br />
                    AI + INTERACTIVE INTERFACES
                  </PixelText>

                  <div className="mt-4 text-xs font-mono text-[#c0cf84]">
                    READY TO BUILD → &lt;/&gt;
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = '#projects'}
                  className="bg-[#F5E6C8] text-[#373c25] px-6 py-3 font-bold text-sm tracking-widest flex items-center gap-4 hover:bg-[#c0cf84] transition-colors"
                >
                  EXPLORE PROJECTS
                  <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* AMBIENT LIGHT */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-[#c0cf84] rounded-full blur-[150px] opacity-[0.05]" />
    </section>
  );
}
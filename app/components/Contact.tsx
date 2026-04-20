"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PixelText from "./PixelText";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const word1 = useRef<HTMLDivElement>(null);
  const word2 = useRef<HTMLDivElement>(null);
  const word3 = useRef<HTMLDivElement>(null);
  const finalLine = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const clipStyle = {
    clipPath:
      "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // initial states
      gsap.set([word1.current, word2.current, word3.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(finalLine.current, {
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 10,
      });

      // WORD SEQUENCE
      tl.to(word1.current, { opacity: 1, y: 0, duration: 0.3 })
        .to(word2.current, { opacity: 1, y: 0, duration: 0.25 }, "+=0.05")
        .to(word3.current, { opacity: 1, y: 0, duration: 0.3 }, "+=0.05")

        // HOLD
        .to({}, { duration: 0.25 })

        // HIDE WORDS
        .to([word1.current, word2.current, word3.current], {
          opacity: 0,
          y: -20,
          duration: 0.2,
          stagger: 0.03,
        })

        // FINAL SNAP
        .fromTo(
          finalLine.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.18,
            ease: "power4.out",
          }
        )

        // GLITCH X
        .to(finalLine.current, {
          x: -3,
          duration: 0.02,
          repeat: 3,
          yoyo: true,
        })

        // GLITCH Y
        .to(
          finalLine.current,
          {
            y: 2,
            duration: 0.02,
            repeat: 2,
            yoyo: true,
          },
          "<"
        )

        // BUTTON
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.1"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative px-6 py-32 min-h-screen flex items-center justify-center ">
      
      <div className="relative z-20 w-full max-w-5xl mx-auto" ref={container}>
        
        {/* OUTER FRAME */}
        <div
          className="relative p-px-white/20 hover:bg-[#6366f1]/20 transition-all duration-500"
          style={clipStyle}
        >
          
          {/* GLASS PANEL */}
          <div
            className="bg-white/4 backdrop-blur-2xl border border-white/10 relative overflow-hidden"
            style={clipStyle}
          >

            {/* SUBTLE LIGHT GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />

            {/* GRID */}


            <div className="p-10 md:p-20 relative z-10">

              {/* TOP BAR */}
              <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-16">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF4D4D] animate-pulse rounded-full" />
                  <PixelText className="text-[10px] tracking-[0.4em] text-white/50 uppercase">
                    Transmission // 009
                  </PixelText>
                </div>

                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
                  Secured_Line
                </span>
              </div>

              {/* TEXT AREA */}
              <div className="relative h-[120px] flex items-center justify-center text-center">

                {/* WORDS */}
                <div className="flex gap-4 md:gap-8 text-4xl md:text-7xl font-black tracking-tight uppercase italic text-white">
                  <div ref={word1}>Ready</div>
                  <div ref={word2}>To</div>
                  <div ref={word3}>Build</div>
                </div>

                {/* FINAL LINE (retro font) */}
                <div
                  ref={finalLine}
                  className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none"
                  style={{ fontFamily: "'Tiny5', monospace" }}
                >
                  <span className="text-white text-4xl md:text-6xl tracking-widest">
                    READY TO BUILD
                  </span>

                  <span className="text-[#FF4D4D] text-xl md:text-3xl font-mono">
                    &lt;/&gt;
                  </span>

                  <span className="text-[#FF4D4D] text-2xl md:text-4xl">
                    →
                  </span>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex flex-col items-center mt-12">
                <p className="text-white/60 text-sm max-w-md text-center">
                  Open to collaborations, systems, and ambitious builds.
                </p>

                <button
                  ref={buttonRef}
                  onClick={() => {
                    window.location.href = "mailto:kkaustubh92@gmail.com?body=hi%20builder";
                  }}
                  className="mt-10 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs transition hover:bg-[#FF4D4D] hover:text-white"
                >
                  Let's Connect
                </button>
              </div>

              {/* BOTTOM BAR */}
              <div className="mt-16 pt-6 border-t border-white/10 flex justify-between text-[9px] font-mono text-white/40">
                <span>CHENNAI // IN</span>
                <span>ALL SYSTEMS GO</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import PixelText from "./PixelText";

export default function Services() {
  const clipStyle = {
    clipPath:
      "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
  };

  return (
    <section id="services" className="px-6 py-24 bg-[#2d2b3f] text-[#F5E6C8]">
      <div className="max-w-6xl mx-auto">

        {/* OUTER CYBER FRAME */}
        <div
          className="relative p-px-white/10 hover:bg-blue-900/40 transition-all duration-500"
          style={clipStyle}
        >
          <div
            className="bg-[#0a0a0a]/80 backdrop-blur-md"
            style={clipStyle}
          >

            <div className="p-10 md:p-16">

              {/* TOP BAR */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-10">
                <PixelText className="text-xs opacity-50">
                  // SERVICES
                </PixelText>

                <span className="text-[10px] font-mono text-[#FF5A3D]">
                  ● ACTIVE
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col md:flex-row gap-10">

                {/* LEFT BIG NUMBER */}
                <div className="relative text-[120px] md:text-[160px] font-bold opacity-10 leading-none">
                  01

                  {/* small accent block */}
                  <div className="absolute bottom-4 left-2 w-2 h-2 bg-[#FF5A3D]" />
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold">
                    Systems & Product Engineering
                  </h3>

                  <p className="mt-4 text-sm opacity-60 max-w-md leading-relaxed">
                    Building scalable, performant, and intelligent systems—
                    from frontend experiences to AI-driven backends.
                  </p>

                  {/* SERVICES LIST */}
                  <div className="mt-8 border-t border-white/10 pt-6 space-y-3 text-sm">

                    <div className="flex justify-between">
                      <span>Web Applications</span>
                      <span className="opacity-40">01</span>
                    </div>

                    <div className="flex justify-between">
                      <span>AI Integrations</span>
                      <span className="opacity-40">02</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Interactive Systems</span>
                      <span className="opacity-40">03</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* BOTTOM SYSTEM BAR */}
              <div className="mt-10 pt-4 border-t border-white/10 flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-white/20" />
                  <div className="w-1 h-3 bg-white/20" />
                  <div className="w-1 h-3 bg-[#FF5A3D]" />
                </div>

                <span className="text-[10px] font-mono opacity-40">
                  SYS // ENGINEERING_CORE
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
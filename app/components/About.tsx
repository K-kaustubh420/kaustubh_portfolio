"use client";

import PixelText from "./PixelText";

export default function About() {
  return (
    <section className="px-6 py-24 bg-[#31413b] text-[#F5E6C8]">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 p-10 md:p-16">

        <PixelText className="text-xs opacity-50">// INTRO</PixelText>

        <h2 className="mt-6 text-2xl md:text-4xl leading-snug font-medium">
          I’m a versatile{" "}
          <span className="text-[#FF7A00]">
            developer who builds systems
          </span>{" "}
          and turns ideas into{" "}
          <span className="text-[#FF3B3B]">
            real products
          </span>. I focus on clarity,
          performance, and execution.
        </h2>

        <p className="mt-6 text-sm opacity-60 max-w-md">
          Bringing ideas to life through structured thinking,
          clean systems, and fast iteration.
        </p>

      </div>
    </section>
  );
}
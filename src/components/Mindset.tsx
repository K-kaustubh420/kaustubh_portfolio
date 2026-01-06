import React from 'react';
import { Typewriter } from './Typewriter';

const PRINCIPLES = [
  {
    title: "Systems over Pages",
    desc: "Architecture first. I design state-driven systems and extensible components that handle reliability by default."
  },
  {
    title: "UX Correctness",
    desc: "Stability and performance are core UI features. I prioritize correct, predictable behavior over decorative flashy elements."
  },
  {
    title: "Performance & Scalability",
    desc: "Think in infrastructure and caching from day one. Systems built to survive load and maintain high speed."
  },
  {
    title: "Build → Ship → Iterate",
    desc: "A focus on practical delivery and continuous improvement. Respect user time by shipping stable, useful products."
  }
];

export const Mindset = () => {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-12 flex items-center gap-2">
        <span className="text-zinc-700 font-mono">{">"}</span>
        <Typewriter text="How I Think" delay={1000} speed={100} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PRINCIPLES.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

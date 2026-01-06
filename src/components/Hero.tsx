import React from 'react';
import { Typewriter } from './Typewriter';

export const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-4 animate-fade-in-up">
      <div className="w-full max-w-2xl bg-zinc-900/50 rounded-t-lg border-x border-t border-zinc-800 p-2 flex items-center justify-between px-4">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        </div>
        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          bash — 80×24
        </div>
      </div>
      <div className="w-full max-w-2xl bg-zinc-950/50 border border-zinc-900 p-6 rounded-b-lg mb-4">
        <div className="font-mono text-xs text-zinc-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>kaustubh@production:~$ </span>
            <Typewriter 
                text="status --active" 
                speed={80} 
                delay={500}
                className="cursor-blink text-zinc-300"
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] transition-all">
            Building real, <br />
            <span className="text-zinc-500 font-mono italic">production-ready systems.</span>
        </h1>
      </div>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mt-2">
        Kaustubh Kushwaha — Product-focused Full-Stack Engineer specializing in 
        scalable architecture, practical AI systems, and UX correctness.
      </p>
      <div className="mt-8 flex gap-4">
         <a 
          href="#projects" 
          className="px-6 py-2.5 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors"
         >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-6 py-2.5 border border-zinc-800 text-zinc-300 font-semibold rounded-md hover:bg-zinc-900 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

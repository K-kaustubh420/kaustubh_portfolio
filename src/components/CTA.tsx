import React from 'react';

export const CTA = () => {
  return (
    <div id="contact" className="border-t border-zinc-900 pt-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Let's build something real.
      </h2>
      <p className="text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed">
        Currently open to senior product-focused roles or high-impact technical systems.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="mailto:kkaustubh92@gmail.com" 
          className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-all font-mono"
        >
          kkaustubh92@gmail.com
        </a>
        <div className="flex gap-4">
            <a 
            href="https://github.com/K-kaustubh420" 
            target="_blank"
            className="px-6 py-3 border border-zinc-800 text-zinc-300 font-bold rounded-md hover:bg-zinc-900 transition-all"
            >
            GitHub
            </a>
            <a 
            href="https://www.linkedin.com/in/kaustubh-kushwaha-b61503285" 
            target="_blank"
            className="px-6 py-3 border border-zinc-800 text-zinc-300 font-bold rounded-md hover:bg-zinc-900 transition-all"
            >
            LinkedIn
            </a>
        </div>
      </div>
      <footer className="mt-24 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-mono">
            <span>© 2026 Kaustubh Kushwaha</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
                System: Ready to Ship
            </span>
        </div>
        <div className="text-[9px] text-zinc-800 font-mono uppercase tracking-tighter">
            commit: 7f3a9e1 // production_stable
        </div>
      </footer>
    </div>
  );
};

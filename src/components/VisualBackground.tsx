'use client';

import React from 'react';

export const VisualBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-black">
      {/* Studio Lighting - Mesh Gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-amber-500/10 blur-[120px] animate-drift"
        />
        <div 
          className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-zinc-800/20 blur-[120px] animate-drift"
          style={{ animationDirection: 'reverse', animationDuration: '45s' }}
        />
        <div 
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-amber-600/5 blur-[100px] animate-drift"
          style={{ animationDuration: '75s' }}
        />
      </div>

      {/* Antidesign Creatives - Typography & Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 antidesign-text text-[12rem] font-black leading-none uppercase tracking-tighter">
          Systems
        </div>
        <div className="absolute bottom-20 right-10 antidesign-text text-[8rem] font-black leading-none uppercase tracking-tighter text-right">
          Architect
        </div>
        
        {/* Technical Wireframes */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-zinc-800/30" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-zinc-800/30" />
        <div className="absolute top-[40%] left-0 w-full h-px bg-zinc-800/30 -rotate-1" />
        <div className="absolute top-[70%] left-0 w-full h-px bg-zinc-800/30 rotate-1" />
      </div>

      {/* Film Grain & Noise Wrapper */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] animate-grain bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* SVG Filters (Hidden) */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      
      {/* Viewport Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%]" />
    </div>
  );
};

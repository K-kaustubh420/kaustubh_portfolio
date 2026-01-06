import React from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Mindset } from '@/components/Mindset';
import { Experience } from '@/components/Experience';
import { CTA } from '@/components/CTA';
import { VisualBackground } from '@/components/VisualBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen text-zinc-100 selection:bg-amber-500 selection:text-black">
      <VisualBackground />
      
      {/* Narrative Flow */}
      <SectionContainer>
        <Hero />
      </SectionContainer>

      <SectionContainer>
        <Projects />
      </SectionContainer>

      <SectionContainer className="bg-zinc-950/50">
        <Mindset />
      </SectionContainer>

      <SectionContainer>
        <Experience />
      </SectionContainer>

      <SectionContainer>
        <CTA />
      </SectionContainer>

    </main>
  );
}
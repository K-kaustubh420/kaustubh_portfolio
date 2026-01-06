import React from 'react';
import { Typewriter } from './Typewriter';

const PROJECTS = [
  {
    name: "EasyMaps",
    role: "Open Source Creator",
    context: "Composable UI kit for map-heavy products. Solving map UI pain — panels, markers, and overlays. Used for logistics and geo-apps.",
    link: "https://easymaps.vercel.app"
  },
  {
    name: "Theyala",
    role: "Lead Product Engineer",
    context: "Advanced social ecosystem built for high-intent communities. Architected for scale and interactive performance.",
    link: "https://www.theyala.com"
  },
  {
    name: "Gameflix",
    role: "Creator / Lead Engineer",
    context: "Interactive storytelling platform driven by dynamic system states.",
    link: "#"
  },
  {
    name: "AI Systems & Automation",
    role: "Lead Builder",
    context: "Practical AI-powered solutions including sales bots, triage systems, and assistants.",
    link: "#"
  },
  {
    name: "SaaS Platforms & Dashboards",
    role: "Full-Stack Engineer",
    context: "High-performance web platforms, internal tools, and scalable frontends.",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-12 flex items-center gap-2">
        <span className="text-zinc-700 font-mono">{">"}</span>
        <Typewriter text="Selected Projects" delay={500} speed={100} />
      </h2>
      <div className="flex flex-col divide-y divide-zinc-900">
        {PROJECTS.map((project, i) => (
          <div 
            key={i} 
            className="group py-8 first:pt-0 last:pb-0 transition-opacity hover:opacity-100 animate-fade-in-up"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <a 
                href={project.link} 
                target={project.link === "#" ? undefined : "_blank"}
                rel={project.link === "#" ? undefined : "noopener noreferrer"}
                className="group/link flex items-center gap-2"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                  {project.name}
                </h3>
                {project.link !== "#" && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-zinc-600 group-hover/link:text-amber-500 transition-colors"
                  >
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                )}
              </a>
              <span className="text-sm font-mono text-zinc-600 uppercase tracking-tighter">
                {project.role}
              </span>
            </div>
            <p className="mt-2 text-zinc-400 max-w-xl leading-relaxed">
              {project.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

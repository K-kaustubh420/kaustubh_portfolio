import React from 'react';
import { Typewriter } from './Typewriter';

const EXPERIENCE = [
  {
    company: "US-Based Startup (Theyala)",
    role: "Lead Engineer",
    period: "2023 — Present",
    points: ["Led engineering for a high-performance social platform", "Architected scalable backend and frontend infrastructure"]
  },
  {
    company: "Product Studio & Independent",
    role: "Product-Focused Engineer",
    period: "2022 — Present",
    points: ["Built production-ready AI triage and sales automation systems", "Developed custom web platforms and dashboards for serious clients"]
  }
];

export const Experience = () => {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-12 flex items-center gap-2">
        <span className="text-zinc-700 font-mono">{">"}</span>
        <Typewriter text="Professional Experience" delay={1500} speed={100} />
      </h2>
      <div className="space-y-12">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-zinc-400 mt-1">{exp.role}</p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-sm text-zinc-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm font-mono text-zinc-600">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

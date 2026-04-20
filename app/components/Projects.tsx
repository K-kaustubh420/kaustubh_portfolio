"use client";

import React from "react";

// Custom Github Icon to fix the Lucide export error
const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const sections = [
    {
      id: 1,
      type: "text",
      content: "I build systems ",
      highlight: "that feel simple on the surface but are deeply engineered underneath.",
      code: "INIT // KAUSTUBH",
    },
    {
      id: 2,
      type: "project",
      year: "2025",
      title: "Theyala",
      description: "A full-scale social platform built from scratch — real-time systems, content flows, and recommendation logic designed for scale and engagement.",
      link: "https://www.theyala.com/",
      image: "theyala.png",
      code: "SYS // SOCIAL_CORE",
    },
    {
      id: 3,
      type: "text",
      content: "From AI systems to interactive experiences, ",
      highlight: "I design flows, not just interfaces.",
      code: "THINK // SYSTEMS",
    },
    {
      id: 4,
      type: "project",
      year: "2024",
      title: "EzMaps",
      description: "A lightweight mapping tool focused on clarity and usability.",
      link: "https://easymaps.vercel.app/",
      image: "/easymaps.png",
      code: "SYS // MAP_ENGINE",
    },
    {
      id: 5,
      type: "text",
      content: "I don’t just write code — ",
      highlight: "I construct systems that solve real problems.",
      code: "MODE // BUILD",
    },
    {
      id: 6,
      type: "project",
      year: "2024",
      title: "Danfe AI",
      description: "AI-powered sales assistant designed to convert conversations into outcomes. This project focuses on high-concurrency message processing and specialized LLM fine-tuning.",
      link: null,
      image: null, 
      code: "AI // SALES_AGENT",
    },
    {
      id: 7,
      type: "skills",
      code: "STACK // CORE",
    },
    {
      id: 8,
      type: "github",
      link: "https://github.com/K-kaustubh420",
      code: "DEV // GITHUB",
    },
  ];

  const clipStyle = {
    clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
  };

  return (
    <div id="projects" className="bg-indigo-900/20 min-h-screen py-20 px-4 tracking-tight relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10 lg:pl-32">
        <ul className="timeline timeline-vertical">
          {sections.map((section, index) => {
            const isLeft = index % 2 === 0;
            const hasLink = !!section.link;
            const hasImage = section.type === "project" && !!section.image;

            return (
              <li key={section.id} className="w-full">
                {index !== 0 && <hr className="bg-white/10 h-16" />}

                <div className={`${isLeft ? "timeline-start" : "timeline-end"} timeline-box bg-transparent border-none p-0 w-full max-w-3xl mb-16`}>
                  
                  {/* Outer border wrapper: Red highlight only if clickable */}
                  <div
                    className={`relative p-px bg-white/10 transition-colors duration-500 ${hasLink ? "hover:bg-[rgb(44,75,86)]" : ""}`}
                    style={clipStyle}
                  >
                    <div className="bg-black/30 backdrop-blur-md relative overflow-hidden border border-white/10" style={clipStyle}>
                      <div className="p-8 md:p-14">
                        
                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
                          <span className="text-[10px] text-white/40 font-mono tracking-[0.2em]">
                            {section.code}
                          </span>
                          <span className={`text-[10px] font-mono uppercase ${hasLink ? "text-[#FF4D4D]" : "text-white/20"}`}>
                            ● {hasLink ? "Live Connection" : "Internal Log"}
                          </span>
                        </div>

                        {/* TEXT CONTENT */}
                        {section.type === "text" && (
                          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] text-white tracking-tighter">
                            {section.content}
                            <span className="text-[#FF4D4D] block mt-2">{section.highlight}</span>
                          </h2>
                        )}

                        {/* PROJECT CONTENT */}
                        {section.type === "project" && (
                          <div className={`flex flex-col gap-10 ${hasImage ? "md:flex-row" : "md:flex-col"}`}>
                            <div className={hasImage ? "flex-1" : "w-full"}>
                              <div className="text-white/40 font-mono text-[10px] mb-2 tracking-widest">
                                DATE: {section.year}
                              </div>
                              <h3 className="text-white text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                                {section.title}
                              </h3>
                              <p className={`text-white/60 text-sm leading-relaxed ${hasImage ? "max-w-sm" : "max-w-2xl"}`}>
                                {section.description}
                              </p>
                              
                              {!hasImage && hasLink && (
                                <a 
                                  href={section.link || "#"} 
                                  target="_blank" 
                                  className="inline-block mt-8 text-[#FF4D4D] text-xs font-mono border-b border-[#FF4D4D] pb-1 hover:text-white hover:border-white transition-colors"
                                >
                                  VIEW PROJECT _
                                </a>
                              )}
                            </div>

                            {/* Conditional Image Block */}
                            {hasImage && (
                              <div
                                className="flex-1 relative aspect-video bg-black/40 border border-white/10 overflow-hidden"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
                              >
                                <a
                                  href={section.link || "#"}
                                  target={hasLink ? "_blank" : undefined}
                                  rel="noopener noreferrer"
                                  className={`w-full h-full block ${!hasLink ? "pointer-events-none" : ""}`}
                                >
                                  <img
                                    src={section.image || ""}
                                    alt={section.title}
                                    className="h-full w-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                  />
                                </a>
                              </div>
                            )}
                          </div>
                        )}

                        {/* SKILLS CONTENT */}
                        {section.type === "skills" && (
                          <div>
                            <h3 className="text-white text-5xl font-black mb-6 tracking-tighter">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                              {["Next.js", "React", "FastAPI", "GSAP", "Three.js", "LLMs", "MediaPipe"].map((skill) => (
                                <span key={skill} className="px-4 py-2 text-xs border bg-olive-700 border-white/20 rounded-full text-white/70 font-mono">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* GITHUB CONTENT */}
                        {section.type === "github" && (
                          <a
                            href={section.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 group"
                          >
                            <div className="p-4 bg-white/5 rounded-lg group-hover:bg-[#FF4D4D]/10 transition-colors">
                              <GithubIcon size={40} className="text-white group-hover:text-[#FF4D4D] transition-all" />
                            </div>
                            <div>
                              <h3 className="text-white text-4xl font-black tracking-tighter">GitHub</h3>
                              <p className="text-white/50 text-sm font-mono mt-1">/ACCESS_REPOS</p>
                            </div>
                          </a>
                        )}

                        {/* FOOTER DECORATION */}
                        <div className="mt-12 pt-4 border-t border-white/10 flex justify-between items-center">
                          <div className="flex gap-1.5">
                            <div className="w-1.5 h-4 bg-white/20"></div>
                            <div className="w-1.5 h-4 bg-white/20"></div>
                            <div className={`w-1.5 h-4 ${hasLink ? "bg-[#FF4D4D]" : "bg-white/10"}`}></div>
                          </div>
                          <span className="text-[9px] text-white/30 font-mono tracking-widest uppercase">
                            SYSTEM CORE // 0{section.id}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {index !== sections.length - 1 && <hr className="bg-white/10" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
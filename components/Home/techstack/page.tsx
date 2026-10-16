'use client';

import React, { useState } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNestjs, 
  SiFastapi 
} from 'react-icons/si';
import { FaTable, FaFire, FaShieldAlt, FaBox } from 'react-icons/fa';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend';
  icon: React.ReactNode;
}

const technologies: TechItem[] = [
  { name: 'React.js', category: 'frontend', icon: <SiReact className="text-cyan-500 text-4xl" /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: 'TypeScript', category: 'frontend', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: 'JavaScript', category: 'frontend', icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
  { name: 'TanStack Query', category: 'frontend', icon: <FaFire className="text-red-500 text-4xl" /> },
  { name: 'TanStack Table', category: 'frontend', icon: <FaTable className="text-indigo-600 text-4xl" /> },
  { name: 'Zustand', category: 'frontend', icon: <FaBox className="text-amber-700 text-4xl" /> },
  { name: 'Zod', category: 'frontend', icon: <FaShieldAlt className="text-blue-500 text-4xl" /> },
  { name: 'Node.js', category: 'backend', icon: <SiNodedotjs className="text-emerald-600 text-4xl" /> },
  { name: 'NestJS', category: 'backend', icon: <SiNestjs className="text-red-600 text-4xl" /> },
  { name: 'FastAPI', category: 'backend', icon: <SiFastapi className="text-teal-600 text-4xl" /> },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend'>('all');

  const filteredTech = technologies.filter(
    (tech) => activeTab === 'all' || tech.category === activeTab
  );

  return (
    <section className="relative isolate flex min-h-[70svh] items-center justify-center overflow-hidden bg-[#0b1e3a] px-5 py-8 font-sans antialiased text-white sm:px-8 sm:py-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(56,145,206,.2),transparent_36%),radial-gradient(ellipse_at_85%_75%,rgba(26,137,158,.16),transparent_34%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 z-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl motion-safe:animate-[tech-bg-drift_12s_ease-in-out_infinite]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Tabs Header */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('all')} aria-pressed={activeTab === 'all'}
            className={`min-h-11 px-5 py-2.5 rounded-full border text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40 bg-slate-900/90 ${
              activeTab === 'all' ? 'border-cyan-300 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,.12)]' : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            All Technologies
          </button>
          <button
            onClick={() => setActiveTab('frontend')} aria-pressed={activeTab === 'frontend'}
            className={`min-h-11 px-5 py-2.5 rounded-full border text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40 bg-slate-900/90 ${
              activeTab === 'frontend' ? 'border-cyan-300 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,.12)]' : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            Frontend & State
          </button>
          <button
            onClick={() => setActiveTab('backend')} aria-pressed={activeTab === 'backend'}
            className={`min-h-11 px-5 py-2.5 rounded-full border text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40 bg-slate-900/90 ${
              activeTab === 'backend' ? 'border-cyan-300 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,.12)]' : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            Backend & APIs
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-300">
              TECHNOLOGIES WE USE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight text-white leading-tight">
              Tech stack that serves you well today and when you grow 10x in the next 12 months.
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Get an unbiased perspective on the best frameworks and tools for your project. With 50+ completed projects, we've seen enough to save you from trouble.
            </p>
          </div>

          {/* Right Tech Grid Section */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4 bg-[#0b111b]/90 p-4 sm:p-6 rounded-[26px] shadow-[0_18px_48px_rgba(0,0,0,.35)] border border-slate-800/90 backdrop-blur-sm">
            {filteredTech.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative flex min-h-[116px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-[#111a27]/95 p-4 text-center shadow-[0_6px_18px_rgba(0,0,0,.22)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-cyan-500/60 hover:shadow-[0_16px_28px_rgba(0,0,0,.4)] motion-safe:animate-[tech-card-in_.55s_cubic-bezier(.2,.7,.2,1)_both] motion-reduce:transition-none"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="relative z-10 text-sm font-semibold text-slate-200 transition-colors duration-200 group-hover:text-cyan-200 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

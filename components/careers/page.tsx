'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  BriefcaseBusiness, 
  Code2, 
  Layers3, 
  MapPin, 
  Sparkles, 
  UsersRound, 
  TrendingUp, 
  Wallet, 
  Users, 
  X, 
  Upload, 
  ChevronRight 
} from 'lucide-react';

const teams = [
  { icon: Code2, label: 'Software & digital' },
  { icon: Layers3, label: 'GIS & mapping' },
  { icon: UsersRound, label: 'Collaborative teams' },
];

const whyUsCards = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Clear career paths, mentorship, and dedicated skill development.',
    imagePath: '/growth.avif',
  },
  {
    icon: Wallet,
    title: 'Competitive Compensation',
    description: 'Competitive salary, healthcare benefits, and performance rewards.',
    imagePath: '/compensation.avif',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with multidisciplinary teams on meaningful, large-scale systems.',
    imagePath: '/culture.avif',
  },
];

const openPositions = [
  { title: 'Senior Software Engineer', department: 'Engineering', location: 'Agra' },
  { title: 'GIS Specialist', department: 'GIS', location: 'Agra' },
  { title: 'Field Surveyor', department: 'Land Record', location: 'Agra' },
  { title: 'HR Manager', department: 'Business Administration', location: 'Agra' },
  { title: 'Office Assistant', department: 'Office Administration', location: 'Agra' },
  { title: 'Data Entry Operator', department: 'Data Management', location: 'Agra' },
];

export default function CareerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleOpenForm = (positionTitle = '') => {
    setSelectedPosition(positionTitle);
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="career-page relative">
      {/* Hero Section */}
      <section className="career-hero" aria-labelledby="career-title">
        <header className="showcase-header services-header">
          <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
            <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
          </a>
          <Navbar />
        </header>
        <div className="career-orb career-orb-one" />
        <div className="career-orb career-orb-two" />
        <div className="career-grid" />

        <div className="career-inner">
          <div className="career-copy">
            <nav className="career-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Careers</span>
            </nav>

            <div className="career-kicker"><Sparkles size={14} /> GROW WITH US</div>
            <h1 id="career-title">Build work that<br /><span>moves the future.</span></h1>
            <p className="career-description">
              Bring your ideas to projects that make a real difference. Explore GIS, software, and digital transformation with a team that keeps learning.
            </p>

            <div className="career-actions">
              <button onClick={() => handleOpenForm()} className="career-primary flex items-center gap-2 cursor-pointer">
                Talk to our team <ArrowUpRight size={17} />
              </button>
              <a className="career-secondary" href="#career-values">Discover life at SDV <ArrowDownRight size={16} /></a>
            </div>

            <div className="career-traits" aria-label="Our areas of work">
              {teams.map(({ icon: Icon, label }) => <span key={label}><Icon size={15} />{label}</span>)}
            </div>
          </div>

          <div className="career-visual" aria-label="A glimpse of working at SDV Edutech">
            <Image src="/carrer.avif" alt="Career opportunities at SDV Edutech" fill priority sizes="(max-width: 900px) 100vw, 520px" className="career-hero-image" />
            <div className="career-visual-glow" />
            <div className="career-visual-top"><span className="career-live-dot" /> PEOPLE. PURPOSE. PROGRESS.</div>
            <div className="career-illustration" aria-hidden="true">
              <div className="career-planet" />
              <div className="career-orbit career-orbit-a" /><div className="career-orbit career-orbit-b" />
              <div className="career-window">
                <div className="career-window-bar"><i /><i /><i /><span>SDV / IDEAS IN MOTION</span></div>
                <div className="career-window-content">
                  <div className="career-code-lines"><b /><b /><b /><b /><b /><b /></div>
                  <div className="career-map"><span /><span /><span /><span /><span /></div>
                </div>
              </div>
              <div className="career-float career-float-one"><Code2 size={17} /><span>Build with purpose</span></div>
              <div className="career-float career-float-two"><MapPin size={17} /><span>Make an impact</span></div>
              <div className="career-star career-star-one">&#10022;</div><div className="career-star career-star-two">&#10038;</div>
            </div>
            <div className="career-visual-caption"><div><BriefcaseBusiness size={17} /><span>Good work. Good people.</span></div><span>YOUR NEXT CHAPTER</span></div>
          </div>
        </div>

        <a className="career-scroll" href="#career-values"><span /> Scroll to explore</a>
      </section>

      {/* Ticker / Values highlight bar */}
      <section className="career-values" id="career-values" aria-label="Working at SDV Edutech">
        <span>CURIOUS MINDS</span><i /> <span>MEANINGFUL PROJECTS</span><i /> <span>ROOM TO GROW</span>
      </section>

      {/* Why You'll Love Working Here Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#e7f1fa] via-[#e8edf9] to-[#dcecf6] px-5 py-14 sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-bold tracking-[.18em] text-blue-700 shadow-sm">
            WHY SDV
          </span>
          <h2 className="mt-3 mb-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Why You&apos;ll Love Working Here
          </h2>

          <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-3">
            {whyUsCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={card.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_10px_34px_rgba(23,56,92,.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(23,56,92,.12)] motion-safe:animate-[career-rise_.65s_ease-out_both]"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48">
                    <Image
                      src={card.imagePath}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-blue-700">
                      <IconComponent size={20} />
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg">{card.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative w-full bg-[#e5eef7] px-5 py-14 sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Open Positions
          </h2>
          <p className="mt-2 mb-8 text-sm text-slate-600 sm:text-base">
            Explore current opportunities and apply online.
          </p>

          <div className="space-y-3 text-left">
            {openPositions.map((position) => (
              <div 
                key={position.title}
                className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_8px_26px_rgba(25,55,85,.05)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_34px_rgba(25,55,85,.1)] sm:flex-row sm:items-center motion-safe:animate-[career-rise_.55s_ease-out_both]"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">{position.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 group-hover:text-blue-700 sm:text-sm">
                    {position.department} &middot; {position.location}
                  </p>
                </div>
                <button
                  onClick={() => handleOpenForm(position.title)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#176da4] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-[#125887] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 whitespace-nowrap cursor-pointer"
                >
                  Apply now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-600">
            Don&apos;t see a fit?{' '}
            <button 
              onClick={() => handleOpenForm('General Application')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Send us your resume
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-md sm:p-6 motion-safe:animate-[career-fade-in_.2s_ease-out_both]" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) handleCloseForm(); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="application-title" className="my-5 w-full max-w-2xl overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_32px_100px_rgba(2,18,38,.35)] motion-safe:animate-[career-modal-in_.35s_cubic-bezier(.2,.8,.2,1)_both]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-sky-50 via-white to-indigo-50/70 px-5 py-5 sm:px-8 sm:py-6">
              <div>
                <button 
                  onClick={handleCloseForm}
                  className="mb-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold text-blue-700 transition hover:bg-blue-50 cursor-pointer"
                >
                  <ChevronRight size={14} className="rotate-180" /> Back to Careers
                </button>
                <h2 id="application-title" className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Apply Now</h2>
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Join our team and help transform enterprises through innovative technology.
                </p>
              </div>
              <button 
                onClick={handleCloseForm}
                className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:border-slate-300 hover:bg-white hover:text-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); handleCloseForm(); }} className="max-h-[72vh] space-y-6 overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
              
              {/* Personal Information */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500 before:h-px before:w-5 before:bg-blue-400">
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Full name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">LinkedIn profile</label>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/username"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              {/* Position Details */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500 before:h-px before:w-5 before:bg-blue-400">
                  Position Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Position *</label>
                    <select 
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select a position</option>
                      {openPositions.map((pos) => (
                        <option key={pos.title} value={pos.title}>{pos.title}</option>
                      ))}
                      <option value="General Application">General Application / Send Resume</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Experience *</label>
                    <select 
                      defaultValue=""
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="" disabled>Select range</option>
                      <option value="0-1">0 - 1 Years</option>
                      <option value="1-3">1 - 3 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500 before:h-px before:w-5 before:bg-blue-400">
                  Application Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Resume / CV *</label>
                    <label className="group flex min-h-32 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 px-4 py-5 text-center transition hover:border-blue-400 hover:bg-blue-50/60 focus-within:ring-4 focus-within:ring-blue-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload size={22} className="text-slate-400 mb-2" />
                        <p className="text-xs text-slate-500 group-hover:text-blue-700">PDF, DOC up to 10MB</p>
                      </div>
                      <input type="file" required accept=".pdf,.doc,.docx" className="sr-only" />
                    </label>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">Cover letter</label>
                    <textarea 
                      rows={3}
                      placeholder="Write a brief cover letter..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#176da4] to-[#304fa4] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 cursor-pointer"
                >
                  Submit application
                </button>
                <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
                  By submitting, you agree to our{' '}
                  <a href="/terms" className="underline hover:text-slate-600">terms</a> and{' '}
                  <a href="/privacy" className="underline hover:text-slate-600">privacy policy</a>.
                </p>
              </div>

            </form>

          </div>
        </div>
      )}
    </main>
  );
}

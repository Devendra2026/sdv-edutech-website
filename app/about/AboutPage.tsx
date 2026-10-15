import React from 'react';
import Navbar from '@/components/Navbar';

interface AboutPageProps {
  imageSrc?: string;
}

const values = [
  { icon: '✦', title: 'Innovation', description: 'Smart & future-ready solutions.' },
  { icon: '✓', title: 'Quality', description: 'Reliable and durable systems.' },
  { icon: '♧', title: 'Customer Focus', description: 'Your vision, our priority.' },
  { icon: '↗', title: 'Growth', description: 'Building a smarter digital future.' },
];

const stats = [
  { number: '150+', label: 'Employees' },
  { number: '100+', label: 'Projects' },
  { number: '50+', label: 'Clients' },
  { number: '4+', label: 'Years experience' },
];

export default function AboutPage({ imageSrc = '/about.png' }: AboutPageProps) {
  return (
    <div className="about-scene">
      {/* Background */}
      <div
        className="about-background"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.28), rgba(255,255,255,.08)), url("${imageSrc}")` }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="showcase-header about-header">
        <a href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <img className="brand-logo" src="/logo.png" alt="SDV Edutech Logo" />
        </a>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="about-content">
        {/* About Company Header Section */}
        <section className="about-copy" aria-labelledby="about-heading">
          <p className="about-eyebrow">ABOUT THE COMPANY</p>
          <h1 id="about-heading" className="about-company-name">
            SDV EDUTECH PVT. LTD. 
          </h1>
          <p className="about-description">
            Since 2021, 4+ years of excellence — Sdv Edutech empowers organizations with technology, geospatial intelligence, and data-driven solutions for sustainable growth.
          </p>
          <p className="about-description">
            A leading innovator in educational technology, producing Digital Communication Tools like Smart Interactive Podiums, Interactive Touch Tables, and various kinds of Digital Kiosks. We are devoted to designing and creating solutions that exceed market expectations.
          </p>
          <p className="about-description about-description-secondary">
            Committed to revolutionizing learning with Smart Educational Tools, digital ergonomic systems are an essential communication commodity for the digital age we&apos;re in.
          </p>
        </section>

        {/* Values Cards Section */}
        <section className="about-values" aria-label="Our values">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <span className="about-value-icon" aria-hidden="true">{value.icon}</span>
              <span className="about-value-copy">
                <strong>{value.title}</strong>
                <span>{value.description}</span>
              </span>
            </article>
          ))}
        </section>

        {/* NEW SECTION: Our Story & Stats (Image design matching) */}
        <section className="relative my-16 py-12 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          {/* Subtle Grid Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
            
            {/* Left Story Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4">
              <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built on Trust, Driven by <br className="hidden md:block" /> Innovation
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                Sdv Edutech Private Limited helps enterprises leverage technology for transformation. We&apos;ve become a trusted partner across government and corporate sectors nationwide.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                Our expertise spans survey management, GIS solutions, custom software, training programs, and analytics — combining industry workflows with modern frameworks.
              </p>
            </div>

            {/* Right Stats Grid (4 Boxes) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center transition-all hover:shadow-md"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-500 mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Wave & Footer */}
      <div className="about-footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
          <path d="M0 56C180 115 300 122 492 79C701 32 793 43 974 84C1158 126 1293 105 1440 65V130H0Z" />
        </svg>
      </div>
      <footer className="about-footer">
        <span>© Agra, Uttar Pradesh, India</span>
        <span>© 2026 SDV EDUTECH Pvt Ltd</span>
      </footer>
    </div>
  );
}

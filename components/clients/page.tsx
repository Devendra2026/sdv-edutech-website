"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowUpRight, Building2, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

const clients = [
  {
    name: 'Nagar Panchayat Chhata, Mathura',
    description: 'Local Government Administration & Digital Services',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Jyoti Khudia, Mainpuri',
    description: 'Municipal Governance & Citizen Portals',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Raya, Mathura',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Sonkh, Mathura',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Palika Parishad, Etah',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },{
    name: 'Nagar Panchayat Anandnagar, Maharajganj',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Fatehabad, Agra',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Aminagar Sarai, Baghpat',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },
  {
    name: 'Nagar Panchayat Kushmara, Mainpuri',
    description: 'Smart Urban Planning & Digital Infrastructure',
    logo: '/governmentlogo.png',
  },

];

export default function ClientsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#eaf2f8] text-[#142b40]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[470px] bg-[radial-gradient(ellipse_at_18%_20%,rgba(83,161,202,.19),transparent_42%),radial-gradient(ellipse_at_88%_70%,rgba(73,146,165,.13),transparent_34%),linear-gradient(135deg,#e4f0f8_0%,#eaf2f8_58%,#e4eef6_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-36 z-0 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />

      <header className="showcase-header services-header">
        <Link href="/" className="showcase-logo" aria-label="SDV Edutech homepage">
          <Image className="brand-logo" src="/logo.png" alt="SDV Edutech" width={170} height={60} priority />
        </Link>
        <Navbar />
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-28 text-center sm:px-8 sm:pb-12 sm:pt-32 lg:px-12">
        <nav className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 sm:text-sm" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-sky-800">Home</Link>
          <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
          <span className="font-semibold text-slate-800" aria-current="page">Clients</span>
        </nav>

        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/75 px-3.5 py-1.5 text-[10px] font-bold tracking-[.16em] text-[#245d80] shadow-sm backdrop-blur sm:text-xs">
          <Sparkles size={13} aria-hidden="true" /> TRUSTED PARTNERS
        </div>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-.045em] text-[#122b42] sm:text-5xl lg:text-6xl">
          Trusted by industry <span className="bg-gradient-to-r from-[#176b9c] via-[#197e91] to-[#236b88] bg-[length:220%_auto] bg-clip-text text-transparent motion-safe:animate-[clients-shimmer_8s_linear_infinite]">leaders</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Partnering with government organizations across India to deliver reliable, scalable technology for stronger communities.
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/60 px-3.5 py-2 text-[11px] font-semibold text-slate-600">
          <ShieldCheck size={15} className="text-emerald-700" aria-hidden="true" /> Trusted public-sector partnerships
        </div>
      </section>

      <div className="relative z-10 mb-12 overflow-hidden border-y border-sky-200/70 bg-white/55 py-3.5 backdrop-blur-sm sm:mb-14" aria-label="Our government partners">
        <div className="clients-marquee flex w-max items-center gap-5 sm:gap-7">
          {[0, 1, 2].map((repeat) => (
            <div className="flex items-center gap-5 sm:gap-7" key={repeat} aria-hidden={repeat > 0}>
              {clients.map((client) => (
                <div className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200/90 bg-white px-4 py-2 shadow-[0_4px_14px_rgba(32,65,92,.06)] sm:px-5" key={`${repeat}-${client.name}`}>
                  <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
                    <Image src={client.logo} alt="" fill sizes="28px" className="object-contain p-0.5" />
                  </span>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-slate-700 sm:text-xs">{client.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12" aria-labelledby="clients-list-heading">
        <div className="mb-7 flex flex-col items-center justify-between gap-4 text-center sm:mb-8 sm:flex-row sm:text-left">
          <div>
            <span className="text-[10px] font-extrabold tracking-[.18em] text-[#28748a]">OUR CLIENTS</span>
            <h2 id="clients-list-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-[#142b40] sm:text-3xl">Trusted government organizations</h2>
          </div>
          <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[10px] font-bold tracking-wide text-slate-500">03 FEATURED PARTNERS</span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client, index) => (
            <article
              key={client.name}
              className="group relative flex min-h-[225px] flex-col items-center overflow-hidden rounded-[24px] border border-slate-200/90 bg-white/90 p-6 text-center shadow-[0_10px_30px_rgba(27,60,88,.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_38px_rgba(27,60,88,.13)] focus-within:ring-4 focus-within:ring-sky-100 motion-safe:animate-[clients-enter_.65s_cubic-bezier(.2,.7,.2,1)_both] sm:p-7"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span aria-hidden="true" className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
              <div className="relative mb-5 grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[22px] border border-slate-100 bg-gradient-to-br from-white to-[#edf4f8] p-3 shadow-[inset_0_1px_3px_rgba(33,73,105,.06)] transition duration-300 group-hover:scale-[1.04] sm:h-28 sm:w-28">
                <Image src={client.logo} alt={`${client.name} logo`} fill sizes="112px" className="object-contain p-3" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf5f7] px-2.5 py-1 text-[9px] font-extrabold tracking-[.12em] text-[#286b7d]">
                <Building2 size={12} aria-hidden="true" /> GOVERNMENT PARTNER
              </span>
              <h3 className="mt-3 text-base font-bold leading-snug text-[#1b3349] sm:text-lg">{client.name}</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-600 sm:text-sm">{client.description}</p>
              <a href="/contact" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold text-[#246a8a] transition hover:gap-2.5 hover:text-[#164e6c] focus-visible:rounded focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-100" aria-label={`Discuss a partnership with ${client.name}`}>
                Discuss a partnership <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

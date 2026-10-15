import Image from 'next/image';
import { ArrowUpRight, Building2, ShieldCheck, Sparkles } from 'lucide-react';

const clients = [
  {
    name: 'Nagar Panchayat Chhata',
    type: 'Local Government',
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://www.npchhata.com',
  },
  {
    name: 'Nagar Panchayat Raya',
    type: 'Local Government',
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://www.npraya.org',
  },
  {
    name: 'Nagar Panchayat Jyoti Khudia',
    type: 'Local Government',
    imagePath: '/governmentlogo.png',
    websiteUrl: 'https://example-jyotikhudia.gov.in',
  },
];

export default function ClientPage() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-slate-200/70 bg-[#eaf2f8] px-5 py-14 text-slate-900 sm:px-8 sm:py-16 lg:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_12%_10%,rgba(70,151,197,.16),transparent_36%),radial-gradient(ellipse_at_91%_83%,rgba(60,128,157,.12),transparent_32%),linear-gradient(135deg,#edf5fa_0%,#e6eff6_55%,#eff4f8_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-10 z-0 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 z-0 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] text-[#245d80] shadow-sm">
              <Sparkles size={13} aria-hidden="true" /> TRUSTED PARTNERS
            </span>
            <h2 id="clients-heading" className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-[-.045em] text-[#122b42] sm:text-4xl lg:text-[2.7rem]">
              Our <span className="bg-gradient-to-r from-[#176b9c] via-[#197e91] to-[#236b88] bg-[length:220%_auto] bg-clip-text text-transparent motion-safe:animate-[clients-shimmer_8s_linear_infinite]">Trusted Government Clients</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Building better learning and stronger communities through trusted partnerships.
            </p>
          </div>

          <div className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl border border-white/90 bg-white/75 px-4 py-3 shadow-[0_8px_24px_rgba(32,75,105,.07)] backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f3f7] text-[#28748a]"><ShieldCheck size={20} aria-hidden="true" /></span>
            <span className="flex items-center gap-2"><strong className="text-2xl font-extrabold tracking-tight text-[#173a56]">03</strong><span className="text-[10px] font-semibold uppercase leading-[1.35] tracking-[.12em] text-slate-500">Featured<br />partners</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client, index) => (
            <article
              className="group relative flex min-h-[132px] min-w-0 items-center gap-4 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white/85 p-4 shadow-[0_8px_24px_rgba(27,60,88,.055)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-[0_16px_34px_rgba(27,60,88,.12)] focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100 motion-safe:animate-[clients-enter_.6s_cubic-bezier(.2,.7,.2,1)_both]"
              key={client.name}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <span aria-hidden="true" className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-70" />
              <div className="relative grid h-[66px] w-[66px] shrink-0 place-items-center overflow-hidden rounded-[17px] border border-slate-100 bg-gradient-to-br from-white to-[#edf4f8] p-2 shadow-[inset_0_1px_2px_rgba(33,73,105,.06)] transition duration-300 group-hover:scale-[1.04]">
                <Image src={client.imagePath} alt={`${client.name} logo`} fill sizes="66px" className="object-contain p-2" />
              </div>

              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-2 py-1 text-[8px] font-extrabold tracking-[.14em] text-slate-500">PARTNER 0{index + 1}</span>
                <h3 className="mt-2 break-words text-[13px] font-bold leading-snug text-[#1b3349] sm:text-sm">{client.name}</h3>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-500"><Building2 size={12} className="text-[#378093]" aria-hidden="true" />{client.type}</span>
              </div>

              <a
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-[10px] font-bold text-[#245d80] shadow-sm transition hover:border-[#245d80] hover:bg-[#245d80] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
                href={client.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit website of ${client.name}`}
              >
                Visit <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-[10px] font-medium tracking-wide text-slate-500 sm:mt-7 sm:text-xs">
          <span aria-hidden="true" className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
          Trusted partnerships, growing stronger together
        </div>
      </div>
    </section>
  );
}

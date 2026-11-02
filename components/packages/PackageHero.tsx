import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

const orbitPositions = [
  "right-12 top-2",
  "right-0 top-28",
  "bottom-16 right-4",
  "bottom-2 left-20",
  "bottom-16 left-2",
  "left-0 top-28",
] as const;

type PackageHeroProps = {
  category: string;
  tier: string;
  title: string;
  accent: string;
  description: string;
  bestFor: string;
  timing: string;
  orbitLabels: [string, string, string, string, string, string];
};

export default function PackageHero({
  category,
  tier,
  title,
  accent,
  description,
  bestFor,
  timing,
  orbitLabels,
}: PackageHeroProps) {
  return (
    <section className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1600px] -translate-x-1/2 pt-6">
      <nav
        className="mb-8 flex items-center space-x-2 overflow-x-auto whitespace-nowrap text-sm text-slate-500"
        aria-label="Breadcrumb"
      >
        <Link
          href="/"
          className="flex items-center transition-colors hover:text-orange-500"
        >
          <FiHome className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Home
        </Link>
        <FiChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-600">
          Packages
        </span>
        <FiChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-600">
          {category}
        </span>
        <FiChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
        <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-600">
          {tier}
        </span>
      </nav>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
            {category} Package · {tier}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            {title}
            <span className="block text-orange-500">{accent}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              Best for: {bestFor}
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {timing}
            </span>
            <span
              className="hidden h-px min-w-8 flex-1 bg-gradient-to-r from-orange-300 to-transparent lg:block"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div
            className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
            role="img"
            aria-label={`Illustration representing ${category.toLowerCase()} package technology`}
          >
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-slate-300" />
            <div className="absolute inset-8 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-orange-300" />
            <div className="absolute inset-16 rounded-full border border-slate-200" />
            <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-orange-500 bg-white p-3 text-center shadow-2xl">
              <span className="text-lg font-black text-orange-500">SDV</span>
              <span className="text-[9px] font-bold text-slate-700">EDUTECH</span>
            </div>

            {orbitLabels.map((label, index) => {
              return (
                <span
                  key={`${label}-${index}`}
                  className={`absolute flex h-11 min-w-11 items-center justify-center rounded-full border border-slate-100 bg-white px-2 text-xs font-bold text-orange-600 shadow-md ${orbitPositions[index]}`}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

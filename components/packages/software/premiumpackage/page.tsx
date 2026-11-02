"use client";

import React from "react";
import Link from "next/link";
import PackageHero from "@/components/packages/PackageHero";
import {
  FiArrowRight,
  FiArrowUp,
  FiCheckCircle,
  FiCloud,
  FiDatabase,
  FiLayers,
  FiLink,
  FiSend,
  FiShield,
  FiUsers,
  FiXCircle,
} from "react-icons/fi";

const featuresList = [
  {
    icon: <FiLayers className="h-6 w-6 text-orange-500" />,
    title: "Connected Business Modules",
    description:
      "Bring ERP, CRM, customer portals, and other core operations together in one tailored platform.",
  },
  {
    icon: <FiUsers className="h-6 w-6 text-orange-500" />,
    title: "Flexible Access Controls",
    description:
      "Set up roles and access for teams, branches, administrators, and customer groups.",
  },
  {
    icon: <FiDatabase className="h-6 w-6 text-orange-500" />,
    title: "Reliable Data Foundation",
    description:
      "Structure your data and services to support growing workloads and connected systems.",
  },
  {
    icon: <FiLink className="h-6 w-6 text-orange-500" />,
    title: "Third-party Integrations",
    description:
      "Connect payment, messaging, accounting, shipping, and other business tools through APIs.",
  },
  {
    icon: <FiCloud className="h-6 w-6 text-orange-500" />,
    title: "Cloud and Release Setup",
    description:
      "Plan cloud hosting, automated deployments, backups, and ongoing platform monitoring.",
  },
  {
    icon: <FiShield className="h-6 w-6 text-orange-500" />,
    title: "Security Built into Delivery",
    description:
      "Include access policies, protected data, and activity tracking in the platform plan.",
  },
];

const includedItems = [
  "A platform designed around your requirements",
  "Multiple connected software modules",
  "Role and branch-based access",
  "Administrative dashboards",
  "Business workflow automation",
  "Payment and external API integrations",
  "Cloud deployment planning",
  "Automated backups and release pipelines",
  "Security review and activity logs",
  "Performance monitoring setup",
  "Project documentation and handover",
  "Six months of post-launch support",
];

const optionalItems = [
  "Native iOS and Android applications",
  "AI or machine-learning functionality",
];

export default function PremiumSoftwarePackage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-orange-500 selection:text-white">
      <main className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 py-10 sm:px-6 lg:px-8">
        <PackageHero
          category="Software"
          tier="Premium"
          title="Premium Software"
          accent="Package"
          description="Full multi-module platforms — ERP, CRM, SaaS products, and enterprise systems — built for scale, security, and long-term growth."
          bestFor="Growing Companies & Enterprise Platforms"
          timing="Estimated delivery: 3–6 months"
          orbitLabels={["ERP", "CRM", "API", "CLOUD", "PORTAL", "DATA"]}
        />

        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                What’s Included
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Premium Software <span className="text-orange-500">Features</span>
              </h2>
              <p className="mt-1 text-slate-500">
                Connected modules, integrations, and delivery planned around your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuresList.map((feature) => (
                <article
                  key={feature.title}
                  className="group flex space-x-4 rounded-2xl border border-slate-100 bg-white p-5 text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg"
                >
                  <div className="h-fit rounded-xl bg-orange-50 p-3 transition-colors group-hover:bg-white/20 group-hover:text-white [&>svg]:transition-colors [&>svg]:group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-slate-500 transition-colors group-hover:text-orange-100">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-indigo-700 bg-white p-7 shadow-xl lg:col-span-4 lg:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-800 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
                <FiLayers className="h-3.5 w-3.5" aria-hidden="true" />
                Full Platform
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-indigo-700 text-white">
                <FiSend className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <p className="text-sm font-extrabold uppercase tracking-wider text-indigo-700">
              Premium
            </p>
            <h2 className="mt-1 text-4xl font-extrabold tracking-tight text-indigo-700">
              ₹2,00,000
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-400">one-time</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Multi-module enterprise platform — ERP, CRM, SaaS — built for scale and security.
            </p>
            <Link
              href="/contact"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-indigo-700 px-5 py-3.5 font-bold text-white transition-colors hover:bg-indigo-800"
            >
              Get Premium <FiArrowRight aria-hidden="true" />
            </Link>

            <ul className="mt-8 space-y-3">
              {[
                "Multi-module platform",
                "Multi-role & multi-branch",
                "Payment gateway integration",
                "Third-party API integrations",
                "AWS/GCP cloud deployment",
                "CI/CD + automated backups",
                "Security audit + compliance",
                "6 months dedicated support",
              ].map((item) => (
                <li key={item} className="flex items-center text-sm font-medium text-slate-700">
                  <FiCheckCircle
                    className="mr-2.5 h-4 w-4 shrink-0 rounded-full bg-indigo-700 p-0.5 text-white"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="space-y-12">
          <div>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
              Full Feature List
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Everything You <span className="text-orange-500">Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
            {includedItems.map((item) => (
              <div key={item} className="flex items-center font-medium text-slate-700">
                <FiCheckCircle
                  className="mr-3 h-5 w-5 shrink-0 text-orange-500"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Available as Separately Scoped Work
            </p>
            <div className="flex flex-wrap gap-2.5">
              {optionalItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-500"
                >
                  <FiXCircle className="mr-1.5 text-slate-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-orange-200 bg-orange-50/50 p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Planning a larger platform rollout?
              </h3>
              <p className="text-sm text-slate-600">
                Talk with our team to define modules, integrations, timeline, and project scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex shrink-0 items-center rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-orange-600"
            >
              Plan Your Project <FiArrowRight className="ml-2" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-slate-900 p-10 text-center text-white shadow-2xl sm:p-16">
          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Ready to Build Your Platform?
            </h2>
            <p className="text-base text-orange-100 sm:text-lg">
              Tell us about your workflows and goals — we’ll help shape a practical project scope and proposal.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50"
              >
                Discuss Premium Software <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
              <Link
                href="/clients"
                className="flex items-center justify-center rounded-full border border-white/50 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                View Our Work <FiArrowRight className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 p-3.5 text-white shadow-2xl transition-colors hover:bg-orange-500"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

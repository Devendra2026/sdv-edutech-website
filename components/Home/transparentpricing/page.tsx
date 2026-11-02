"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiLock,
  FiFileText,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";

// Category Tabs
const categories = [
  { id: "website", label: "Website" },
  { id: "software", label: "Software" },
  { id: "seo", label: "SEO" },
];

type PricingPlan = {
  badge: string;
  popularTag?: string;
  accent?: "violet" | "green";
  price: string;
  period: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isPopular: boolean;
  included: string[];
  notIncluded: string[];
};

// Website Pricing Cards Data
const websitePricingData: PricingPlan[] = [
  {
    badge: "BASIC",
    price: "₹25,000",
    period: "one-time",
    description: "Everything you need to get your business online — clean, fast, mobile-ready.",
    ctaText: "Get Basic",
    ctaHref: "/packages/website/basicpackage",
    isPopular: false,
    included: [
      "5 custom designed pages",
      "Mobile responsive design",
      "Contact form + WhatsApp button",
      "Basic on-page SEO",
      "Google Analytics setup",
      "1 month free support",
    ],
    notIncluded: ["Blog / CMS", "E-commerce / payments"],
  },
  {
    badge: "STANDARD",
    popularTag: "MOST POPULAR",
    price: "₹50,000",
    period: "one-time",
    description: "Full business website with CMS, advanced SEO, analytics, and lead capture.",
    ctaText: "Get Standard",
    ctaHref: "/packages/website/standardpackage",
    isPopular: true,
    included: [
      "Up to 10 custom pages",
      "Full CMS — edit anything",
      "Advanced SEO + schema markup",
      "GA4 + Search Console setup",
      "Lead capture with CRM",
      "3 months free support",
      "Progressive Web App (PWA)",
    ],
    notIncluded: ["E-commerce / payments"],
  },
  {
    badge: "DYNAMIC",
    price: "₹90,000",
    period: "one-time",
    description: "Full web application — e-commerce, booking systems, user portals, and integrations.",
    ctaText: "Get Dynamic",
    ctaHref: "/packages/website/dynamicpackage",
    isPopular: false,
    included: [
      "Unlimited pages",
      "E-commerce + payment gateway",
      "Booking / appointment system",
      "Multi-role user accounts",
      "Admin dashboard",
      "6 months free support",
      "Third-party integrations",
      "Cloud deployment on AWS",
    ],
    notIncluded: [],
  },
];

const softwarePricingData: PricingPlan[] = [
  {
    badge: "BASIC",
    accent: "violet",
    price: "₹50,000",
    period: "one-time",
    description:
      "A focused software module built around your core business workflow.",
    ctaText: "Get Basic",
    ctaHref: "/packages/software/basicsoftwarepakage",
    isPopular: false,
    included: [
      "1 custom software module",
      "Role-based user access",
      "Admin panel and dashboard",
      "Reports and data export",
      "REST API",
      "2 months of support",
    ],
    notIncluded: ["Multiple modules", "Mobile app"],
  },
  {
    badge: "PREMIUM",
    popularTag: "FULL PLATFORM",
    accent: "violet",
    price: "₹2,00,000",
    period: "one-time",
    description:
      "Multi-module enterprise platform — ERP, CRM, SaaS — built for scale and security.",
    ctaText: "Get Premium",
    ctaHref: "/packages/software/premiumpackage",
    isPopular: true,
    included: [
      "Multi-module platform",
      "Multi-role & multi-branch",
      "Payment gateway integration",
      "Third-party API integrations",
      "AWS/GCP cloud deployment",
      "CI/CD + automated backups",
      "Security audit + compliance",
      "6 months dedicated support",
    ],
    notIncluded: [],
  },
];

const seoPricingData: PricingPlan[] = [
  {
    badge: "BASIC",
    accent: "green",
    price: "₹15,000",
    period: "per month · minimum 3 months",
    description:
      "Build a solid search foundation with technical fixes, local SEO, and monthly reporting.",
    ctaText: "Get Basic",
    ctaHref: "/packages/digitalmarketing/basicseo",
    isPopular: false,
    included: [
      "10 tracked keywords",
      "Technical SEO audit",
      "On-page SEO for 10 pages",
      "Google Business Profile",
      "5 backlinks per month",
      "Monthly SEO report",
    ],
    notIncluded: ["Blog content writing", "Advanced link building"],
  },
  {
    badge: "ADVANCED",
    popularTag: "FOR COMPETITIVE MARKETS",
    accent: "green",
    price: "₹35,000",
    period: "per month · minimum 3 months",
    description:
      "Full-spectrum SEO with content, stronger link building, and weekly performance updates.",
    ctaText: "Get Advanced",
    ctaHref: "/packages/digitalmarketing/advanceseo",
    isPopular: true,
    included: [
      "25+ tracked keywords",
      "Full technical SEO",
      "4 SEO blog posts per month",
      "15+ backlinks per month",
      "E-commerce and category SEO",
      "Weekly ranking updates",
    ],
    notIncluded: ["Google/Meta Ads", "Social media content"],
  },
];

// Key Guarantees Data
const guarantees = [
  {
    icon: <FiLock className="w-5 h-5 text-orange-500" />,
    text: "Fixed-price contracts — no surprise invoices",
  },
  {
    icon: <FiFileText className="w-5 h-5 text-purple-500" />,
    text: "Detailed scope document before we start",
  },
  {
    icon: <FiRefreshCw className="w-5 h-5 text-blue-500" />,
    text: "Unlimited revisions until you're 100% happy",
  },
  {
    icon: <FiShield className="w-5 h-5 text-emerald-500" />,
    text: "Full source code ownership on delivery",
  },
];

export default function TransparentPricing() {
  const [activeCategory, setActiveCategory] = useState("website");
  const activePricingData =
    activeCategory === "software"
      ? softwarePricingData
      : activeCategory === "seo"
        ? seoPricingData
        : websitePricingData;

  return (
    <div className="min-h-screen bg-rose-50 text-slate-800 font-sans relative py-16 px-4 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple Pricing, <br />
            <span className="text-orange-500">No Hidden Costs</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Fixed pricing on every project. You know exactly what you&apos;re paying before we start — no surprises, no scope creep charges.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center items-center">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full space-x-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? cat.id === "software"
                        ? "bg-indigo-700 text-white shadow-md shadow-indigo-700/20"
                        : cat.id === "seo"
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                          : "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : cat.id === "software"
                        ? "text-slate-600 hover:bg-indigo-700 hover:text-white hover:shadow-md hover:shadow-indigo-700/20"
                        : cat.id === "seo"
                          ? "text-slate-600 hover:bg-emerald-600 hover:text-white hover:shadow-md hover:shadow-emerald-600/20"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div
          className={`grid grid-cols-1 items-stretch gap-8 pt-4 ${
            activePricingData.length === 2
              ? "mx-auto max-w-5xl lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
            {activePricingData.map((plan) => (
              <div
                key={`${activeCategory}-${plan.badge}`}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 transition-all duration-300 ${
                  plan.accent
                    ? plan.accent === "violet"
                      ? "border border-indigo-700 shadow-xl"
                      : "border border-emerald-600 shadow-xl"
                    : plan.isPopular
                      ? "z-10 scale-100 border-2 border-orange-500 shadow-2xl lg:-translate-y-2"
                      : "border border-slate-200 shadow-md hover:border-orange-300 hover:shadow-xl"
                }`}
              >
                {/* Popular Tag Badge */}
                {plan.isPopular && (
                  plan.accent && plan.isPopular ? (
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider text-white ${plan.accent === "violet" ? "bg-indigo-800" : "bg-emerald-700"}`}>
                        ⚡ {plan.popularTag}
                      </span>
                      <span className={`grid h-10 w-10 place-items-center rounded-full text-white ${plan.accent === "violet" ? "bg-indigo-700" : "bg-emerald-600"}`}>
                        <FiArrowRight className="h-5 w-5 -rotate-45" aria-hidden="true" />
                      </span>
                    </div>
                  ) : (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                        ⚡ {plan.popularTag}
                      </span>
                    </div>
                  )
                )}

                <div>
                  {/* Card Header */}
                  <div className="space-y-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${plan.accent === "violet" ? "text-indigo-700" : plan.accent === "green" ? "text-emerald-700" : "text-slate-400"}`}>
                      {plan.badge}
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl font-extrabold tracking-tight ${plan.accent === "violet" ? "text-indigo-700" : plan.accent === "green" ? "text-emerald-700" : "text-slate-900"}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed pt-2 min-h-[48px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* CTA Button with Page Navigation Link */}
                  <div className="my-6">
                    <Link
                      href={plan.ctaHref}
                      className={`w-full py-3.5 px-6 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm ${
                        plan.accent === "violet"
                          ? "bg-indigo-700 text-white shadow-lg shadow-indigo-700/20 hover:bg-indigo-800"
                          : plan.accent === "green"
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
                            : plan.isPopular
                            ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/40"
                            : "bg-slate-100 text-slate-800 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    {/* Included Features */}
                    {plan.included.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                        <FiCheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.accent === "violet" ? "text-indigo-700" : plan.accent === "green" ? "text-emerald-600" : "text-orange-500"}`} />
                        <span>{item}</span>
                      </div>
                    ))}

                    {/* Not Included Features */}
                    {plan.notIncluded.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm text-slate-400 line-through">
                        <FiXCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* SECTION: GUARANTEES BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((g, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-slate-50 rounded-xl flex-shrink-0">
                {g.icon}
              </div>
              <p className="text-sm font-semibold text-slate-700 leading-snug">
                {g.text}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION: BOTTOM CUSTOM QUOTE BANNER */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Not sure which package fits you?
            </h3>
            <p className="text-slate-500 text-sm max-w-xl">
              Tell us your requirements — we&apos;ll recommend the right package and give you a detailed quote in 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>Get a Custom Quote</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/packages"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-2xl transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>See All Packages</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import PackageHero from "@/components/packages/PackageHero";
import {
  FiSearch,
  FiLink,
  FiShoppingCart,
  FiFileText,
  FiCpu,
  FiBarChart2,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

// Data Configurations for Advanced SEO Package
const featuresList = [
  {
    icon: <FiSearch className="w-6 h-6 text-orange-500" />,
    title: "25+ Target Keywords",
    description: "Deep keyword research covering short-tail, long-tail, and commercial-intent keywords for your industry.",
  },
  {
    icon: <FiLink className="w-6 h-6 text-orange-500" />,
    title: "15+ Backlinks / Month",
    description: "High-authority backlinks from industry-relevant websites — white-hat outreach and digital PR.",
  },
  {
    icon: <FiShoppingCart className="w-6 h-6 text-orange-500" />,
    title: "E-Commerce / Category SEO",
    description: "Product page optimisation, faceted navigation, schema markup, and category keyword mapping.",
  },
  {
    icon: <FiFileText className="w-6 h-6 text-orange-500" />,
    title: "4 SEO Blog Posts / Month",
    description: "Keyword-optimised, expert-level blog articles (1000–1500 words each) that rank and drive traffic.",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-orange-500" />,
    title: "Full Technical SEO",
    description: "Core Web Vitals, page speed, crawl budget, structured data, hreflang, and site architecture.",
  },
  {
    icon: <FiBarChart2 className="w-6 h-6 text-orange-500" />,
    title: "Advanced Reporting",
    description: "Weekly ranking updates, GA4 traffic analysis, conversion tracking, and competitor rank comparison.",
  },
];

const includedItems = [
  "25+ keywords tracked",
  "All pages on-page SEO",
  "Core Web Vitals optimisation",
  "15+ backlinks/month",
  "Competitor gap analysis",
  "GA4 + Search Console advanced",
  "Weekly keyword rank updates",
  "Dedicated SEO manager",
  "Full technical SEO audit",
  "Advanced schema markup",
  "4 SEO blog posts/month",
  "Digital PR outreach",
  "E-commerce / category SEO",
  "Conversion tracking setup",
  "Monthly strategy call",
  "Priority 24-hour response",
];

const notIncludedItems = [
  "Google / Meta Ads management",
  "Social media content",
  "Web design changes",
];

export default function AdvancedSeoPackage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative selection:bg-orange-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-20">
        
        <PackageHero
          category="SEO"
          tier="Advanced"
          title="Advanced SEO"
          accent="Package"
          description="Aggressive, full-spectrum SEO — 25+ keywords, 4 blog posts per month, 15+ backlinks, and weekly reporting — for businesses that want to dominate Google."
          bestFor="Competitive Industries & E-Commerce"
          timing="Monthly service · minimum 3 months"
          orbitLabels={["SEO", "CONTENT", "LINKS", "GA4", "ADS", "DATA"]}
        />

        {/* SECTION 2: FEATURES & PRICING CARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Features Grid (Left) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider">
                What's Included
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Advanced SEO <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-slate-500 mt-1">
                Everything in Basic, plus content, aggressive link building, and dedicated management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresList.map((feat) => (
                <div
                  key={feat.title}
                  className="group flex space-x-4 rounded-2xl border border-slate-100 bg-white p-5 text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg"
                >
                  <div className="h-fit rounded-xl bg-orange-50 p-3 transition-colors group-hover:bg-white/20 group-hover:text-white [&>svg]:transition-colors [&>svg]:group-hover:text-white">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-white">{feat.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-slate-500 transition-colors group-hover:text-orange-100">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box (Right) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border-2 border-orange-500 shadow-xl relative overflow-hidden">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block">PACKAGE</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Advanced SEO</h3>

            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">₹35,000</span>
              <p className="text-sm text-slate-500 mt-1">per month · minimum 3 months</p>
            </div>

            <hr className="border-slate-100 my-6" />

            <ul className="space-y-3.5 mb-8">
              {[
                "25+ keywords",
                "4 blog posts/month",
                "15+ backlinks/month",
                "E-commerce SEO",
                "Weekly rank updates",
                "Dedicated SEO manager",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                  <FiCheckCircle className="text-orange-500 mr-2.5 h-4 w-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Link href="/contact" className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center">
                Get Started <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/clients" className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center">
                View Case Studies <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: FULL FEATURE LIST & UPGRADE BANNER */}
        <section className="space-y-12">
          <div>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider">
              Full Feature List
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Everything You <span className="text-orange-500">Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            {includedItems.map((item, idx) => (
              <div key={idx} className="flex items-center text-slate-700 font-medium">
                <FiCheckCircle className="text-orange-500 mr-3 h-5 w-5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Not Included Block */}
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              NOT INCLUDED IN SEO PACKAGES
            </p>
            <div className="flex flex-wrap gap-2.5">
              {notIncludedItems.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold flex items-center"
                >
                  <FiXCircle className="text-slate-400 mr-1.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Upgrade Prompt Banner */}
          <div className="border border-orange-200 bg-orange-50/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900">Want paid ads alongside SEO?</h4>
              <p className="text-sm text-slate-600">
                Add Google Ads management for a combined organic + paid strategy — ask us for a bundle quote.
              </p>
            </div>
            <button className="whitespace-nowrap px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition-all flex items-center">
              Get Bundle Quote <FiArrowRight className="ml-2" />
            </button>
          </div>
        </section>

        {/* SECTION 4: FINAL CALL TO ACTION (CTA) */}
        <section className="relative rounded-3xl border-2 border-orange-500 bg-white text-slate-900 p-10 sm:p-16 text-center overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Ready to Dominate Your Industry on Google?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Free SEO audit first — then we show you the exact keyword opportunities you're missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center">
                Get Free SEO Audit <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/clients" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center">
                View Case Studies <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3.5 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-orange-500 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

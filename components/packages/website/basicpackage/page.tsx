"use client";

import React from "react";
import Link from "next/link";
import PackageHero from "@/components/packages/PackageHero";
import {
  FiMonitor,
  FiSmartphone,
  FiSearch,
  FiMail,
  FiLayers,
  FiShare2,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

// Data Configurations
const featuresList = [
  {
    icon: <FiMonitor className="w-6 h-6 text-orange-500" />,
    title: "5 Custom Pages",
    description: "Home, About, Services, Contact + 1 of your choice — all designed from scratch.",
  },
  {
    icon: <FiSmartphone className="w-6 h-6 text-orange-500" />,
    title: "Mobile Responsive",
    description: "Looks perfect on all phones, tablets, and desktops.",
  },
  {
    icon: <FiSearch className="w-6 h-6 text-orange-500" />,
    title: "Basic SEO Setup",
    description: "Meta tags, sitemap, robots.txt, and Google Search Console submission.",
  },
  {
    icon: <FiMail className="w-6 h-6 text-orange-500" />,
    title: "Contact Form",
    description: "Working form with email notification + WhatsApp button.",
  },
  {
    icon: <FiLayers className="w-6 h-6 text-orange-500" />,
    title: "CMS Integration",
    description: "Edit your own text and images — no developer needed.",
  },
  {
    icon: <FiShare2 className="w-6 h-6 text-orange-500" />,
    title: "Social Media Links",
    description: "All social profiles linked with open graph preview cards.",
  },
];

const includedItems = [
  "5 custom pages",
  "Mobile-first design",
  "Contact form",
  "WhatsApp button",
  "Basic on-page SEO",
  "XML sitemap",
  "Google Analytics setup",
  "SSL setup guidance",
  "Social media links",
  "Google Maps embed",
  "1 month free support",
  "Source files delivered",
];

const notIncludedItems = [
  "Blog / CMS blog",
  "Payment gateway",
  "Booking system",
  "Admin dashboard",
  "Custom animations",
  "E-commerce store",
];

export default function BasicWebsitePackage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative selection:bg-orange-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-20">
        
        <PackageHero
          category="Website"
          tier="Basic"
          title="Basic Website"
          accent="Package"
          description="A clean, fast, mobile-ready 5-page website — everything essential for getting your business online, nothing unnecessary."
          bestFor="Startups & New Businesses"
          timing="Delivery: 2–3 weeks"
          orbitLabels={["HTML", "REACT", "API", "CLOUD", "CMS", "SEO"]}
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
                Basic Package <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-slate-500 mt-1">
                A solid online presence — built right and delivered in 2–3 weeks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresList.map((feat, index) => (
                <div
                  key={index}
                  className="group flex space-x-4 rounded-2xl border border-slate-100 bg-white p-5 text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg"
                >
                  <div className="h-fit rounded-xl bg-orange-50 p-3 transition-colors group-hover:bg-white/20 group-hover:text-white [&>svg]:transition-colors [&>svg]:group-hover:text-white">{feat.icon}</div>
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
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Basic Website</h3>

            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">₹25,000</span>
              <p className="text-sm text-slate-500 mt-1">one-time · 2–3 weeks delivery</p>
            </div>

            <hr className="border-slate-100 my-6" />

            <ul className="space-y-3.5 mb-8">
              {[
                "5 custom pages",
                "Mobile responsive",
                "Basic SEO",
                "Contact form",
                "1 month support",
                "Source files included",
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
                View Our Work <FiArrowRight className="ml-2" />
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
              NOT INCLUDED IN BASIC
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
              <h4 className="text-lg font-bold text-slate-900">Need more?</h4>
              <p className="text-sm text-slate-600">
                Upgrade to Standard (₹50,000) for blog, advanced SEO, and lead capture.
              </p>
            </div>
            <button className="whitespace-nowrap px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition-all flex items-center">
              Standard Package <FiArrowRight className="ml-2" />
            </button>
          </div>
        </section>

        {/* SECTION 4: FINAL CALL TO ACTION (CTA) */}
        <section className="relative rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-slate-900 text-white p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Ready to Launch Your Website?
            </h2>
            <p className="text-orange-100 text-base sm:text-lg">
              Get in touch — project starts within 48 hours of confirmation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-all flex items-center justify-center">
                Book Basic Package <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/clients" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-all flex items-center justify-center">
                View Our Work <FiArrowRight className="ml-2" />
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

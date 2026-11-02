"use client";

import React from "react";
import Link from "next/link";
import PackageHero from "@/components/packages/PackageHero";
import {
  FiShoppingCart,
  FiCalendar,
  FiUsers,
  FiCpu,
  FiZap,
  FiShield,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

// Data Configurations for Dynamic Package
const featuresList = [
  {
    icon: <FiShoppingCart className="w-6 h-6 text-orange-500" />,
    title: "E-Commerce / Online Store",
    description: "Full online store with product listings, cart, and payment gateway (Razorpay/Stripe).",
  },
  {
    icon: <FiCalendar className="w-6 h-6 text-orange-500" />,
    title: "Booking & Appointment System",
    description: "Online booking with calendar, time slots, confirmation emails and reminders.",
  },
  {
    icon: <FiUsers className="w-6 h-6 text-orange-500" />,
    title: "Multi-Role User Accounts",
    description: "Customer accounts, vendor portals, or admin panels with role-based access control.",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-orange-500" />,
    title: "Custom Web Application",
    description: "Any functionality you need — calculators, configurators, dashboards, or workflows.",
  },
  {
    icon: <FiZap className="w-6 h-6 text-orange-500" />,
    title: "Third-Party Integrations",
    description: "WhatsApp, SMS, email marketing, shipping (Shiprocket), accounting, and more.",
  },
  {
    icon: <FiShield className="w-6 h-6 text-orange-500" />,
    title: "Security & Performance",
    description: "Enterprise-grade security, caching, CDN, and auto-scaling for high traffic.",
  },
];

const includedItems = [
  "Unlimited pages",
  "E-commerce / online store",
  "Razorpay / Stripe payments",
  "Booking & scheduling system",
  "Multi-role user management",
  "Admin dashboard",
  "Advanced CMS",
  "Full SEO suite",
  "API integrations (any)",
  "WhatsApp + email automation",
  "Shiprocket shipping",
  "Custom calculators or tools",
  "Performance & security audit",
  "6 months free support",
  "Source code ownership",
  "Cloud deployment on AWS",
];

const notIncludedItems = [
  "Native mobile app (Android/iOS)",
  "AI/ML features (separate scope)",
];

export default function DynamicWebsitePackage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative selection:bg-orange-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-20">
        
        <PackageHero
          category="Website"
          tier="Dynamic"
          title="Dynamic Website"
          accent="Package"
          description="A fully custom web application — e-commerce, booking systems, user portals, and complex integrations. If your website needs to do something, we build it."
          bestFor="E-Commerce, Portals & Complex Web Apps"
          timing="Delivery: 6–10 weeks"
          orbitLabels={["STORE", "BOOK", "USERS", "API", "CLOUD", "APP"]}
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
                Dynamic Package <span className="text-orange-500">Features</span>
              </h2>
              <p className="text-slate-500 mt-1">
                Everything in Standard, plus full web application capabilities — built for your exact business logic.
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
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Dynamic Website</h3>

            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">₹90,000</span>
              <p className="text-sm text-slate-500 mt-1">one-time · 6–10 weeks delivery</p>
            </div>

            <hr className="border-slate-100 my-6" />

            <ul className="space-y-3.5 mb-8">
              {[
                "E-commerce / store",
                "Payment gateway",
                "Booking system",
                "User accounts",
                "Admin dashboard",
                "6 months support",
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
              NOT INCLUDED (SEPARATE PROJECT)
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
              <h4 className="text-lg font-bold text-slate-900">Need a native mobile app too?</h4>
              <p className="text-sm text-slate-600">
                We build iOS & Android apps — ask us for a combined web + mobile quote.
              </p>
            </div>
            <button className="whitespace-nowrap px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition-all flex items-center">
              Get a Custom Quote <FiArrowRight className="ml-2" />
            </button>
          </div>
        </section>

        {/* SECTION 4: FINAL CALL TO ACTION (CTA) */}
        <section className="relative rounded-3xl border-2 border-orange-500 bg-white text-slate-900 p-10 sm:p-16 text-center overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Let's Build Something Powerful
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Share your requirements — we'll send a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center">
                Book Dynamic Package <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/clients" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center">
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

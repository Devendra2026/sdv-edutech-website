'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/shared/page-hero';
import SectionHeading from '@/components/shared/section-heading';
import CodeWindowVisual from '@/components/visuals/code-window';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Banknote, ArrowRight, TrendingUp, Wallet, Users2 } from 'lucide-react';

const jobs = [
  { title: 'Senior Software Engineer', location: 'New Delhi', salary: '₹15–25 LPA', dept: 'Engineering' },
  { title: 'GIS Specialist', location: 'Mumbai', salary: '₹12–18 LPA', dept: 'Geospatial' },
  { title: 'Project Manager', location: 'Bangalore', salary: '₹14–22 LPA', dept: 'Delivery' },
  { title: 'Data Analyst', location: 'Hyderabad', salary: '₹10–16 LPA', dept: 'Analytics' },
  { title: 'Solutions Architect', location: 'New Delhi', salary: '₹16–26 LPA', dept: 'Engineering' },
  { title: 'QA Engineer', location: 'Pune', salary: '₹8–14 LPA', dept: 'Quality' },
];

const benefits = [
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Opportunities', description: 'Clear career paths, mentorship, and continuous skill development.' },
  { icon: <Wallet className="w-6 h-6" />, title: 'Competitive Compensation', description: 'Industry-leading salary, benefits, and performance rewards.' },
  { icon: <Users2 className="w-6 h-6" />, title: 'Collaborative Culture', description: 'Work with talented teams on high-impact, meaningful projects.' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Join the team"
        title="Build Your Career with Us"
        highlight="Career"
        description="Join SDV EDUTECH and help transform enterprises through innovative IT and geospatial technology. We're hiring across engineering, GIS, and delivery."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
        visual={<CodeWindowVisual />}
      />

      {/* Benefits */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 section-tint" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Why SDV" title="Why You'll Love Working Here" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {benefits.map((b, i) => (
              <motion.div key={i} variants={item} className="p-7 rounded-2xl glass card-hover text-center">
                <div className="mx-auto mb-5 icon-tile p-3 w-12 h-12">{b.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Open roles" title="Open Positions" subtitle="Find the role where you'll do your best work" align="center" />
          <motion.div className="space-y-4 max-w-4xl mx-auto" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 rounded-2xl glass card-hover flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium">{job.dept}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{job.location}</div>
                    <div className="flex items-center gap-2"><Banknote className="w-4 h-4 text-primary" />{job.salary}</div>
                  </div>
                </div>
                <Link
                  href="/careers/apply"
                  className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold flex items-center gap-2 whitespace-nowrap shadow-lg shadow-primary/25 justify-center"
                >
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 text-center space-y-4 mt-12 max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">Don&apos;t see your role listed?</h2>
            <p className="text-muted-foreground">Send us your resume and we&apos;ll keep you in mind for future opportunities.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors mt-2 shadow-lg shadow-primary/25">
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/shared/page-hero';
import SectionHeading from '@/components/shared/section-heading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Quote } from 'lucide-react';

const clients = [
  'Tech Solutions India', 'Urban Development Corp', 'Enterprise Solutions Ltd', 'Global Innovations Inc',
  'Digital Ventures India', 'Infrastructure Systems', 'Public Works Authority', 'Advanced Analytics Group',
];

const initials = (name: string) =>
  name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const testimonials = [
  { quote: 'Their GIS platform transformed how we manage public infrastructure across the state.', author: 'Director, Public Works Authority' },
  { quote: 'A true engineering partner — the survey system paid for itself within months.', author: 'VP Operations, Urban Development Corp' },
  { quote: 'From strategy to delivery, SDV made our cloud migration genuinely seamless.', author: 'CTO, Global Innovations Inc' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Trusted partners"
        title="Trusted by Industry Leaders"
        highlight="Leaders"
        description="From government bodies to fast-growing enterprises, organizations rely on SDV EDUTECH to deliver IT and geospatial solutions that perform."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
        centered
      />

      {/* Marquee strip */}
      <section className="pb-8">
        <div className="marquee-mask overflow-hidden py-2">
          <div className="flex w-max animate-marquee gap-4">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="glass rounded-xl px-6 py-3 flex items-center gap-3 whitespace-nowrap">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold flex items-center justify-center">
                  {initials(c)}
                </span>
                <span className="text-sm font-medium text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo grid */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 -z-10 section-tint" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Our clients" title="Organizations We Serve" subtitle="A selection of the enterprises and institutions we partner with" />
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {clients.map((client, idx) => (
              <motion.div key={idx} variants={item} className="p-6 rounded-2xl glass card-hover flex flex-col items-center justify-center gap-3 min-h-36 text-center group">
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold flex items-center justify-center group-hover:scale-105 transition-transform">
                  {initials(client)}
                </span>
                <p className="font-medium text-foreground text-sm">{client}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="In their words" title="What Clients Say" />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={item} className="p-7 rounded-2xl glass card-hover flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm text-muted-foreground font-medium border-t border-border/70 pt-4">{t.author}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 text-center space-y-4 mt-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Join Our Growing Client Base</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover how SDV EDUTECH can transform your business.</p>
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

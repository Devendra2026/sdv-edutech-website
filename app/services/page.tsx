'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/shared/page-hero';
import SectionHeading from '@/components/shared/section-heading';
import GisMapVisual from '@/components/visuals/gis-map';
import { motion } from 'framer-motion';
import {
  BarChart3, Map, Code2, BookOpen, Zap, Users, ArrowUpRight,
  Search, PenTool, Rocket, LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <BarChart3 className="w-7 h-7" />, title: 'Survey Management', description: 'Advanced survey solutions for comprehensive data collection, real-time validation, and actionable analytics.', tags: ['Data Capture', 'Dashboards'] },
  { icon: <Map className="w-7 h-7" />, title: 'GIS Solutions', description: 'Geographic Information Systems for spatial analysis, asset mapping, and location intelligence at scale.', tags: ['Mapping', 'Geospatial'] },
  { icon: <Code2 className="w-7 h-7" />, title: 'Software Development', description: 'Custom enterprise software engineered to your specifications, from APIs to full platforms.', tags: ['Web', 'Cloud'] },
  { icon: <BookOpen className="w-7 h-7" />, title: 'Training Programs', description: 'Comprehensive training and skill development that empowers your teams to own the technology.', tags: ['LMS', 'Workshops'] },
  { icon: <Zap className="w-7 h-7" />, title: 'Digital Transformation', description: 'End-to-end transformation strategy and implementation that modernizes how you operate.', tags: ['Strategy', 'Automation'] },
  { icon: <Users className="w-7 h-7" />, title: 'Consulting Services', description: 'Expert consulting for technology architecture, data governance, and business strategy.', tags: ['Advisory', 'Architecture'] },
];

const process = [
  { icon: <Search className="w-6 h-6" />, step: '01', title: 'Discover', description: 'We map your goals, data, and constraints to define the right outcomes.' },
  { icon: <PenTool className="w-6 h-6" />, step: '02', title: 'Design', description: 'Architecture, UX, and delivery plan tailored to your enterprise.' },
  { icon: <Rocket className="w-6 h-6" />, step: '03', title: 'Deliver', description: 'Agile build and rollout with measurable milestones and zero surprises.' },
  { icon: <LifeBuoy className="w-6 h-6" />, step: '04', title: 'Support', description: 'Ongoing optimization, training, and SLA-backed support.' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="What we do"
        title="Enterprise Services that Scale"
        highlight="Scale"
        description="Comprehensive IT and geospatial solutions engineered to move your organization forward — from data capture to full digital transformation."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        visual={<GisMapVisual />}
      />

      {/* Services grid */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 section-tint" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Our Services"
            subtitle="Comprehensive enterprise solutions designed to drive your business forward"
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={item} className="group">
                <div className="relative h-full p-7 md:p-8 rounded-2xl glass card-hover cursor-pointer overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
                  <div className="relative">
                    <div className="mb-5 icon-tile p-3.5">{service.icon}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/15">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="How we work" title="A Proven Delivery Process" subtitle="A transparent, milestone-driven approach from first conversation to long-term support" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((p, idx) => (
              <motion.div key={idx} variants={item} className="relative p-7 rounded-2xl glass card-hover">
                <span className="font-display text-5xl font-extrabold text-primary/10 absolute top-4 right-5 select-none">{p.step}</span>
                <div className="mb-5 icon-tile p-3 w-12 h-12">{p.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-14">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

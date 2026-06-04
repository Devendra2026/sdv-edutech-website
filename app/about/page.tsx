'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageHero from '@/components/shared/page-hero';
import SectionHeading from '@/components/shared/section-heading';
import AnalyticsVisual from '@/components/visuals/analytics';
import { motion } from 'framer-motion';
import { Award, Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';

const team = [
  { name: 'Rajesh Kumar', title: 'Founder & CEO', initials: 'RK' },
  { name: 'Priya Singh', title: 'Chief Technology Officer', initials: 'PS' },
  { name: 'Amit Patel', title: 'VP, Sales', initials: 'AP' },
  { name: 'Neha Sharma', title: 'VP, Operations', initials: 'NS' },
];

const values = [
  { icon: <Award className="w-6 h-6" />, title: 'Excellence', description: 'We strive for the highest quality in everything we deliver.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'Continuously exploring new technologies and methodologies.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Integrity', description: 'Building trust through transparency and honesty.' },
  { icon: <HeartHandshake className="w-6 h-6" />, title: 'Customer Focus', description: 'Your success is our primary objective.' },
];

const milestones = [
  { year: '2009', title: 'Founded', description: 'SDV EDUTECH begins with a mission to help enterprises transform.' },
  { year: '2014', title: 'GIS Practice', description: 'Launched dedicated geospatial and survey management solutions.' },
  { year: '2019', title: 'Cloud Era', description: 'Scaled to multi-region cloud delivery and 100+ enterprise clients.' },
  { year: '2024', title: 'Today', description: '15+ years of excellence across IT, GIS, and digital transformation.' },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Who we are"
        title="Engineering Enterprise Transformation"
        highlight="Transformation"
        description="Since 2009, SDV EDUTECH has helped hundreds of organizations harness technology, geospatial intelligence, and data to grow with confidence."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        visual={<AnalyticsVisual />}
      />

      {/* Story */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 section-tint" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="eyebrow text-primary">Our story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Built on Trust, Driven by Innovation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2009, SDV EDUTECH began with a simple mission: to help enterprises leverage
                technology for transformation and growth. Over 15 years, we&apos;ve become a trusted partner
                for organizations across industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans survey management, GIS solutions, custom software, training, and digital
                transformation — combining deep industry knowledge with cutting-edge technology to deliver real value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { v: '15+', l: 'Years of Excellence' },
                { v: '100+', l: 'Enterprise Clients' },
                { v: '50+', l: 'Projects Delivered' },
                { v: '98%', l: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.l} className="glass card-hover rounded-2xl p-7 text-center">
                  <p className="font-display text-4xl font-extrabold text-gradient mb-1">{s.v}</p>
                  <p className="text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Our journey" title="Milestones" subtitle="A decade and a half of building, scaling, and delivering" />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {milestones.map((m, i) => (
              <motion.div key={i} variants={item} className="relative p-7 rounded-2xl glass card-hover">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <span className="font-display text-2xl font-bold text-primary">{m.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 section-tint" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="What drives us" title="Our Core Values" />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {values.map((v, i) => (
              <motion.div key={i} variants={item} className="p-7 rounded-2xl glass card-hover text-center">
                <div className="mx-auto mb-5 icon-tile p-3 w-12 h-12">{v.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Meet the Team" subtitle="Experienced leaders dedicated to your success" />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {team.map((member, i) => (
              <motion.div key={i} variants={item} className="text-center p-7 rounded-2xl glass card-hover group">
                <div className="relative mx-auto mb-5 w-20 h-20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-90 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold text-white">
                    {member.initials}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

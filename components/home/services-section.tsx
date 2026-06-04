'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Map, Code2, BookOpen, Zap, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    { icon: <BarChart3 className="w-7 h-7" />, title: 'Survey Management', description: 'Advanced survey solutions for data collection, analysis, and insights.', link: '/services/survey-management' },
    { icon: <Map className="w-7 h-7" />, title: 'GIS Solutions', description: 'Geographic Information Systems for spatial analysis and mapping.', link: '/services/gis-solutions' },
    { icon: <Code2 className="w-7 h-7" />, title: 'Software Development', description: 'Custom enterprise software tailored to your business needs.', link: '/services/software-development' },
    { icon: <BookOpen className="w-7 h-7" />, title: 'Training Programs', description: 'Comprehensive training and skill development programs.', link: '/services/training' },
    { icon: <Zap className="w-7 h-7" />, title: 'SBM Services', description: 'Water management soluctions & clean city Projects, Goverment compliance systems', link: '/services/digital-transformation' },
    { icon: <Users className="w-7 h-7" />, title: 'Consulting Services', description: 'Expert consulting for technology and business strategy.', link: '/services/consulting' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="relative py-16 md:py-24">
      {/* soft band to separate the section from the page */}
      <div className="absolute inset-0 -z-10 bg-muted/40" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-primary mb-3">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive enterprise solutions designed to drive your business forward
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              <Link href={service.link}>
                <div className="relative h-full p-7 md:p-8 rounded-2xl glass card-hover cursor-pointer overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
                  <div className="relative">
                    <div className="mb-5 inline-flex p-3.5 rounded-xl bg-linear-to-br from-primary to-accent-glow text-white shadow-lg shadow-primary/25">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/services">
            <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              Explore All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

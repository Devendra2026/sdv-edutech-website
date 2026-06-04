'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-4xl overflow-hidden"
        >
          {/* layered gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary" />
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(45%_60%_at_15%_20%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(40%_55%_at_85%_85%,rgba(255,255,255,0.18),transparent_60%)]" />
          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
            aria-hidden
          />
          {/* glow orbs */}
          <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-white/15 blur-3xl animate-pulse-glow" aria-hidden />

          <div className="relative px-8 md:px-12 lg:px-16 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Let&apos;s discuss how Sdv Edutech Private Limited can help you achieve your enterprise goals
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-3.5 bg-white text-primary rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-xl shadow-black/10"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <button className="px-8 py-3.5 border-2 border-white/70 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

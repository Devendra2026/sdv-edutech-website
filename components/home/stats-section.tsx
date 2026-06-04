'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Rocket, CalendarClock, Smile } from 'lucide-react';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats: StatItem[] = [
    { value: 100, label: 'Enterprise Clients', suffix: '+', icon: <Building2 className="w-6 h-6" /> },
    { value: 100, label: 'Successful Projects', suffix: '+', icon: <Rocket className="w-6 h-6" /> },
    { value: 4, label: 'Years of Excellence', suffix: '+', icon: <CalendarClock className="w-6 h-6" /> },
    { value: 98, label: 'Client Satisfaction', suffix: '%', icon: <Smile className="w-6 h-6" /> },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-primary mb-3">By the numbers</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering enterprise solutions that drive real business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="glass card-hover text-center p-8 rounded-2xl"
            >
              <div className="mx-auto mb-5 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center">
                <AnimatedCounter to={stat.value} duration={2} isInView={isInView} />
                <span className="text-gradient">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedCounterProps {
  to: number;
  duration: number;
  isInView: boolean;
}

function AnimatedCounter({ to, duration, isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationId: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(to * eased));
      if (progress < 1) animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [to, duration, isInView]);

  return <span>{count}</span>;
}

'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  company: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    { quote: 'Sdv Edutech Private Limited transformed our entire survey management process. Their expertise and support were exceptional.', company: 'Nagar Panchayat Govardhan', rating: 5 },
    { quote: 'The GIS solutions provided have significantly improved our project planning and resource allocation efficiency.', company: 'Nagar Panchayat Fatehabad', rating: 5 },
    { quote: 'Working with Sdv Edutech Private Limited was a game-changer for our digital transformation journey. Highly recommended!', company: 'Nagar Panchayat Basti', rating: 5 },
    { quote: 'Outstanding customer support and innovative solutions. They truly understand enterprise needs.', company: 'Nagar Panchayat Bithoor', rating: 5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const initials = (name: string) => name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-muted/40" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading enterprises and organizations worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative p-8 rounded-2xl glass card-hover overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" aria-hidden />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground font-medium mb-6 leading-relaxed relative">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-border/70 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent-glow text-white flex items-center justify-center font-display font-semibold">
                  {initials(testimonial.company)}  
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

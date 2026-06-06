// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { BarChart3, Map, Code2, BookOpen, Zap, Users, ArrowUpRight } from 'lucide-react';
// import Link from 'next/link';

// interface Service {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   link: string;
// }

// export default function ServicesSection() {
//   const services: Service[] = [
//     { icon: <BarChart3 className="w-7 h-7" />, title: 'Survey Management', description: 'Advanced survey solutions for data collection, analysis, and insights.', link: '/services/survey-management' },
//     { icon: <Map className="w-7 h-7" />, title: 'GIS Solutions', description: 'Geographic Information Systems for spatial analysis and mapping.', link: '/services/gis-solutions' },
//     { icon: <Code2 className="w-7 h-7" />, title: 'Software Development', description: 'Custom enterprise software tailored to your business needs.', link: '/services/software-development' },
//     { icon: <BookOpen className="w-7 h-7" />, title: 'Training Programs', description: 'Comprehensive training and skill development programs.', link: '/services/training' },
//     { icon: <Zap className="w-7 h-7" />, title: 'SBM Services', description: 'Water management soluctions & clean city Projects, Goverment compliance systems', link: '/services/digital-transformation' },
//     { icon: <Users className="w-7 h-7" />, title: 'Consulting Services', description: 'Expert consulting for technology and business strategy.', link: '/services/consulting' },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 22 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
//   };

//   return (
//     <section className="relative py-16 md:py-24">
//       {/* soft band to separate the section from the page */}
//       <div className="absolute inset-0 -z-10 bg-muted/40" aria-hidden />
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <p className="eyebrow text-primary mb-3">What we do</p>
//           <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive enterprise solutions designed to drive your business forward
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {services.map((service, idx) => (
//             <motion.div key={idx} variants={itemVariants} className="group">
//               <Link href={service.link}>
//                 <div className="relative h-full p-7 md:p-8 rounded-2xl glass card-hover cursor-pointer overflow-hidden">
//                   <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
//                   <div className="relative">
//                     <div className="mb-5 inline-flex p-3.5 rounded-xl bg-linear-to-br from-primary to-accent-glow text-white shadow-lg shadow-primary/25">
//                       {service.icon}
//                     </div>
//                     <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
//                     <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
//                     <div className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
//                       Learn more
//                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <Link href="/services">
//             <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
//               Explore All Services
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Map, Code2, BookOpen, Zap, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  image: string;
  gradient: string;
  accentColor: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    { 
      icon: <BarChart3 className="w-5 h-5 text-amber-700" />, 
      title: 'Survey Management', 
      description: 'Advanced survey solutions for data collection, cross-platform analysis, and actionable asset insights.', 
      link: '/services/survey-management',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-amber-500/[0.04] via-orange-500/[0.01] to-transparent',
      accentColor: 'border-amber-200 bg-amber-50/60',
    },
    { 
      icon: <Map className="w-5 h-5 text-blue-700" />, 
      title: 'GIS Solutions', 
      description: 'Geographic Information Systems built for robust spatial rendering, geodatabase management, and layering.', 
      link: '/services/gis-solutions',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-blue-500/[0.04] via-indigo-500/[0.01] to-transparent',
      accentColor: 'border-blue-200 bg-blue-50/60',
    },
    { 
      icon: <Code2 className="w-5 h-5 text-emerald-700" />, 
      title: 'Software Development', 
      description: 'Custom enterprise software and clean microservice ecosystems tailored entirely to your workflow needs.', 
      link: '/services/software-development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-emerald-500/[0.04] via-teal-500/[0.01] to-transparent',
      accentColor: 'border-emerald-200 bg-emerald-50/60',
    },
    { 
      icon: <BookOpen className="w-5 h-5 text-cyan-700" />, 
      title: 'Training Programs', 
      description: 'Comprehensive educational infrastructure, tracking metrics, and professional tech skill pathways.', 
      link: '/services/training',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-cyan-500/[0.04] via-sky-500/[0.01] to-transparent',
      accentColor: 'border-cyan-200 bg-cyan-50/60',
    },
    { 
      icon: <Zap className="w-5 h-5 text-purple-700" />, 
      title: 'SBM Services', 
      description: 'Water management structures, clean city programs, and smart government compliance networks.', 
      link: '/services/digital-transformation',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-500/[0.04] via-fuchsia-500/[0.01] to-transparent',
      accentColor: 'border-purple-200 bg-purple-50/60',
    },
    { 
      icon: <Users className="w-5 h-5 text-rose-700" />, 
      title: 'Consulting Services', 
      description: 'High-level strategic analysis, system architectural blueprints, and technology risk mitigation models.', 
      link: '/services/consulting',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-rose-500/[0.04] via-pink-500/[0.01] to-transparent',
      accentColor: 'border-rose-200 bg-rose-50/60',
    },
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
    <section className="relative py-20 md:py-28 bg-[#f8fafc] text-slate-800 overflow-hidden">
      {/* Soft Light-Mode Ambient Glow Elements */}
      <div className="absolute top-[-5%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-indigo-100/30 blur-[130px] pointer-events-none" />

      {/* Structural Dot Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.22] pointer-events-none bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px]" 
        aria-hidden 
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Services</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Comprehensive enterprise solutions engineered to elevate operation scalability and drive business value forward.
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
              <Link href={service.link} className="block h-full">
                <div className="relative h-full rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-xl hover:bg-white/95 hover:border-slate-300 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col shadow-md shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-200/40">
                  
                  {/* Gentle color overlay mapped by service theme */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-100 pointer-events-none`} />

                  {/* Top Image Frame */}
                  <div className="p-4 pb-0 relative z-10">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/80 shadow-inner">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.01]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Information Details Card Body */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      {/* Frosted Small Icon Container Tag */}
                      <div className={`p-2.5 rounded-xl border shadow-2xs ${service.accentColor}`}>
                        {service.icon}
                      </div>

                      {/* Small floating link accent trigger */}
                      <div className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 group-hover:border-blue-300 group-hover:bg-blue-50/80 transition-colors duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Learn More Action Line */}
                    <div className="pt-4 border-t border-slate-100 mt-auto flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA Action Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10 text-sm"
            >
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

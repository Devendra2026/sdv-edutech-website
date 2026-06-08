'use client'

// import PageHero from '@/components/shared/page-hero'
// import SectionHeading from '@/components/shared/section-heading'
// import { motion } from '@/lib/motion'
// import { Award, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'
// import Image from 'next/image'

/// const team = [
///   { name: 'Devendra Singh', title: 'Founder & CEO', initials: 'DS' },
///   { name: 'Tarun Sikarwar', title: 'Chief Technology Officer', initials: 'TS' },
///   { name: 'Dr. Pradeep Dwivedi', title: 'Head of Operations', initials: 'PD' },
///   { name: 'Aditya Singh', title: 'Field Operation Manager', initials: 'AP' },
///   { name: 'Preeti Singh', title: 'Office Adminstrator', initials: 'PS' },
///   { name: 'Sonam Dhall', title: 'Exective Assistant HR', initials: 'SD' },
///   { name: 'Gaurav Yadav', title: 'Software Engineer', initials: 'GY' },
///   { name: 'Harsh Pachauri', title: 'Software Engineer', initials: 'HP' },
///   { name: 'Divyanshi Arora', title: 'Data Analyst', initials: 'DA' },
/// ]

// const values = [
//   {
//     icon: <Award className='w-6 h-6' />,
//     title: 'Excellence',
//     description: 'We strive for the highest quality in everything we deliver.',
//   },
//   {
//     icon: <Lightbulb className='w-6 h-6' />,
//     title: 'Innovation',
//     description: 'Continuously exploring new technologies and methodologies.',
//   },
//   {
//     icon: <ShieldCheck className='w-6 h-6' />,
//     title: 'Integrity',
//     description: 'Building trust through transparency and honesty.',
//   },
//   {
//     icon: <HeartHandshake className='w-6 h-6' />,
//     title: 'Customer Focus',
//     description: 'Your success is our primary objective.',
//   },
// ]

// const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
// const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

// export default function About() {
//   return (
//     <main className='min-h-screen'>
//       <PageHero
//         eyebrow='Who we are'
//         title='Engineering Enterprise Transformation'
//         highlight='Transformation'
//         description='Since 2022, Sdv Edutech Private Limited has empowered hundreds of organizations to leverage technology, geospatial intelligence, and data-driven solutions to achieve sustainable growth. By combining innovation with practical implementation, we help businesses make smarter decisions, improve efficiency, and scale with confidence in an increasingly digital world.'
//         crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
//         visual={
//           <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
//             <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
//               <div className='relative w-full aspect-square'>
//                 <Image
//                   src='/images/about-hero.png'
//                   alt='Modern STPI office building with landscaped grounds and professional team at the entrance'
//                   fill
//                   priority
//                   className='object-cover object-center'
//                   sizes='(max-width: 1024px) 0px, 50vw'
//                 />
//                 <div
//                   className='absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent pointer-events-none'
//                   aria-hidden
//                 />
//               </div>
//             </div>
//           </div>
//         }
//       />

//       {/* Story */}
//       <section className='relative py-16 md:py-24'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className='space-y-5'
//             >
//               <p className='eyebrow text-primary'>Our story</p>
//               <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground'>
//                 Built on Trust, Driven by Innovation
//               </h2>
//               <p className='text-lg text-justify text-muted-foreground leading-relaxed'>
//                 Founded in 2022, Sdv Edutech Private Limited began with a simple mission: to help enterprises leverage
//                 technology for transformation and growth. Over 5 years, we&apos;ve become a trusted partner for
//                 organizations across industries.
//               </p>
//               <p className='text-lg text-justify text-muted-foreground leading-relaxed'>
//                 Our expertise spans survey management, GIS solutions, custom software, training, and digital
//                 transformation — combining deep industry knowledge with cutting-edge technology to deliver real value.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className='grid grid-cols-2 gap-4'
//             >
//               {[
//                 { v: '4+', l: 'Years of Excellence' },
//                 { v: '100+', l: 'Government Clients' },
//                 { v: '100+', l: 'Projects Delivered' },
//                 { v: '98%', l: 'Client Satisfaction' },
//               ].map(s => (
//                 <div key={s.l} className='glass card-hover rounded-2xl p-7 text-center'>
//                   <p className='font-display text-4xl font-extrabold text-gradient mb-1'>{s.v}</p>
//                   <p className='text-sm text-muted-foreground'>{s.l}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className='relative py-16 md:py-24'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading eyebrow='What drives us' title='Our Core Values' />
//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {values.map((v, i) => (
//               <motion.div key={i} variants={item} className='p-7 rounded-2xl glass card-hover text-center'>
//                 <div className='mx-auto mb-5 icon-tile p-3 w-12 h-12'>{v.icon}</div>
//                 <h3 className='font-display text-lg font-semibold text-foreground mb-2'>{v.title}</h3>
//                 <p className='text-muted-foreground text-sm leading-relaxed'>{v.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

{
  /* Team */
}
{
  /* <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Leadership'
            title='Meet the Team'
            subtitle='Experienced leaders dedicated to your success'
          />
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={item} className='text-center p-7 rounded-2xl glass card-hover group'>
                <div className='relative mx-auto mb-5 w-20 h-20'>
                  <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-secondary opacity-90 group-hover:scale-105 transition-transform' />
                  <div className='absolute inset-0 flex items-center justify-center font-display text-2xl font-bold text-white'>
                    {member.initials}
                  </div>
                </div>
                <h3 className='font-display text-lg font-semibold text-foreground mb-1'>{member.name}</h3>
                <p className='text-muted-foreground text-sm'>{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */
}
//     </main>
//   )
// }

import PageHero from '@/components/shared/page-hero'
import SectionHeading from '@/components/shared/section-heading'
import { motion } from '@/lib/motion'
import { Award, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: <Award className='w-6 h-6' />,
    title: 'Excellence',
    description: 'We strive for the highest quality and precision in every solution we design and engineer.',
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', // High standard team collaboration
  },
  {
    icon: <Lightbulb className='w-6 h-6' />,
    title: 'Innovation',
    description: 'Continuously exploring emerging technologies, advanced data tracking, and dynamic systems.',
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', // Technology & innovation concept
  },
  {
    icon: <ShieldCheck className='w-6 h-6' />,
    title: 'Integrity',
    description: 'Building deep trust with governmental and regional enterprises through transparent pipelines.',
    imageSrc: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80', // Professional handshake/trust structure
  },
  {
    icon: <HeartHandshake className='w-6 h-6' />,
    title: 'Customer Focus',
    description: 'Your scalable success, data ownership, and milestone achievements are our primary objectives.',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80', // Modern collaborative workspace support
  },
]

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function About() {
  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow='Who we are'
        title='Engineering Enterprise Transformation'
        highlight='Transformation'
        description='Since 2022, Sdv Edutech Private Limited has empowered hundreds of organizations to leverage technology, geospatial intelligence, and data-driven solutions to achieve sustainable growth. By combining innovation with practical implementation, we help businesses make smarter decisions, improve efficiency, and scale with confidence in an increasingly digital world.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        visual={
          <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
            <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
              <div className='relative w-full aspect-square'>
                <Image
                  src='/images/about-hero.png'
                  alt='Modern STPI office building with landscaped grounds and professional team at the entrance'
                  fill
                  priority
                  className='object-cover object-center'
                  sizes='(max-width: 1024px) 0px, 50vw'
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent pointer-events-none'
                  aria-hidden
                />
              </div>
            </div>
          </div>
        }
      />

      {/* Story Section */}
      <section className='relative py-16 md:py-24'>
        <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='space-y-5'
            >
              <p className='eyebrow text-primary'>Our story</p>
              <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground'>
                Built on Trust, Driven by Innovation
              </h2>
              <p className='text-lg text-justify text-muted-foreground leading-relaxed'>
                Founded in 2022, Sdv Edutech Private Limited began with a simple mission: to help enterprises leverage
                technology for transformation and sustainable growth. Over the years, we&apos;ve become a trusted
                partner for organizations across multiple scalable industries.
              </p>
              <p className='text-lg text-justify text-muted-foreground leading-relaxed'>
                Our enterprise expertise spans comprehensive survey management, secure GIS solutions, custom software
                ecosystems, technical training programs, and regional analytics layouts — combining deep industry
                workflows with cutting-edge frameworks to deliver long-term structural value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='grid grid-cols-2 gap-4'
            >
              {[
                { v: '4+', l: 'Years of Excellence' },
                { v: '100+', l: 'Government Clients' },
                { v: '100+', l: 'Projects Delivered' },
                { v: '98%', l: 'Client Satisfaction' },
              ].map(s => (
                <div key={s.l} className='glass card-hover rounded-2xl p-7 text-center'>
                  <p className='font-display text-4xl font-extrabold text-gradient mb-1'>{s.v}</p>
                  <p className='text-sm text-muted-foreground'>{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading eyebrow='What drives us' title='Our Core Values' />

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {values.map(v => (
              <motion.div
                key={v.title}
                variants={item}
                className='group relative flex flex-col h-full rounded-2xl border border-border/60 glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20'
              >
                {/* Value Card Image Container */}
                <div className='relative w-full aspect-16/11 overflow-hidden bg-muted'>
                  <Image
                    src={v.imageSrc}
                    alt={v.title}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  />
                  {/* Smooth Gradient Overlay */}
                  <div className='absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent' />

                  {/* Floating Action Icon inside the box */}
                  <div className='absolute bottom-3 left-4 p-2.5 bg-background/90 text-primary rounded-xl border border-border/40 shadow-sm transition-transform duration-300 group-hover:scale-110'>
                    {v.icon}
                  </div>
                </div>

                {/* Card Context Content */}
                <div className='flex flex-col grow p-6'>
                  <h3 className='font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200'>
                    {v.title}
                  </h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>{v.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

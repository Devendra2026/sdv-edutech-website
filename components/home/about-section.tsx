'use client'

import { Award, Globe, Users } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { number: '150+', label: 'Employees' },
    { number: '200+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '4+', label: 'Years Experience' },
  ]

  return (
    <section className='relative overflow-hidden py-24'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-b from-white via-sky-50 to-white' />

      {/* Premium Grid */}
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px',
        }}
      />

      {/* Glow Effects */}
      <div className='absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl' />
      <div className='absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl' />
      <div className='absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-200/20 blur-3xl' />

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Main Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Content */}
          <div>
            <span className='inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700'>
              Who We Are
            </span>

            <h2 className='mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>About Sdv Edutech</h2>

            <h3 className='mt-4 text-2xl font-semibold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
              Your Ideal Partner for Technology Solutions
            </h3>

            <p className='mt-6 text-lg text-gray-600 leading-relaxed'>
              Sdv Edutech Private Limited is your trusted partner for integrated digital and technology solutions,
              delivering end-to-end services across AI-enabled IT systems, GIS & smart surveying, intelligent data
              digitization, project consultancy, and capacity building.
            </p>

            <p className='mt-4 text-lg text-gray-600 leading-relaxed'>
              We collaborate closely with government bodies and corporate organizations to design and deploy scalable,
              secure, and high-performance solutions.
            </p>

            <p className='mt-4 text-lg text-gray-600 leading-relaxed'>
              By combining advanced technologies, industry expertise, and a skilled workforce, we empower organizations
              to improve data accuracy, optimize operations, and achieve sustainable growth.
            </p>
          </div>

          {/* Stats Cards */}
          <div className='grid grid-cols-2 gap-6'>
            {stats.map(stat => (
              <div
                key={stat.label}
                className='
                  group
                  rounded-3xl
                  border border-white/70
                  bg-white/80
                  backdrop-blur-lg
                  p-8
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                '
              >
                <h3 className='text-4xl font-bold text-blue-600'>{stat.number}</h3>

                <p className='mt-3 text-gray-600 font-medium'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className='mt-24 grid gap-8 md:grid-cols-3'>
          {/* Card 1 */}
          <div
            className='
              group
              rounded-3xl
              border border-white/80
              bg-white/80
              backdrop-blur-lg
              p-8
              shadow-lg
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
            '
          >
            <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 group-hover:scale-110 transition'>
              <Award className='h-8 w-8 text-blue-600' />
            </div>

            <h3 className='text-xl font-bold text-gray-900'>MSME Certified</h3>

            <p className='mt-3 text-gray-600 leading-relaxed'>
              Recognized as a registered MSME, ensuring compliance, credibility, and quality-driven service delivery.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className='
              group
              rounded-3xl
              border border-white/80
              bg-white/80
              backdrop-blur-lg
              p-8
              shadow-lg
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
            '
          >
            <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 group-hover:scale-110 transition'>
              <Globe className='h-8 w-8 text-cyan-600' />
            </div>

            <h3 className='text-xl font-bold text-gray-900'>PAN India Presence</h3>

            <p className='mt-3 text-gray-600 leading-relaxed'>
              Extensive service coverage across India with experience in government, corporate, and institutional
              projects.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className='
              group
              rounded-3xl
              border border-white/80
              bg-white/80
              backdrop-blur-lg
              p-8
              shadow-lg
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
            '
          >
            <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 group-hover:scale-110 transition'>
              <Users className='h-8 w-8 text-sky-600' />
            </div>

            <h3 className='text-xl font-bold text-gray-900'>Expert Team</h3>

            <p className='mt-3 text-gray-600 leading-relaxed'>
              Supported by highly skilled professionals delivering reliable, scalable, and innovative technology
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

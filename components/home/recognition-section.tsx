'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const recognitions = [
  {
    title: 'Certificate of Registration',

    image: 'https://sdvedutech.com/public/site_setting_img/1751610210.jpeg',
  },
  {
    title: 'Udyam Registration Certificate',

    image: 'https://sdvedutech.com/public/site_setting_img/1751609872.jpeg',
  },
  {
    title: 'Income Tax Department Certificate',

    image: 'https://sdvedutech.com/public/site_setting_img/1751608455.jpeg',
  },
  {
    title: 'Certificate of Incorporation',

    image: 'https://sdvedutech.com/public/site_setting_img/1751608295.jpeg',
  },
  {
    title: ' Certificate Of Compliance',

    image: 'https://sdvedutech.com/public/site_setting_img/1751537543.jpeg',
  },
  {
    title: 'Certificate of Registration',

    image: 'https://sdvedutech.com/public/site_setting_img/1751537464.jpeg',
  },
  {
    title: 'Certificate of Registration',
    date: '',
    image: 'https://sdvedutech.com/public/site_setting_img/1751537138.jpeg',
  },
]

export default function RecognitionSlider() {
  return (
    <section className='relative overflow-hidden py-24'>
      {/* Background */}
      <div className='absolute inset-0 bg-linear-to-b from-white via-sky-50 to-white' />

      {/* Grid */}
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className='absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 bg-cyan-200/30 rounded-full blur-3xl' />

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <span className='inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold'>
            Certifications
          </span>

          <h2 className='mt-5 text-4xl md:text-5xl font-bold text-blue-900'>Our Recognition</h2>

          <p className='mt-5 text-lg text-gray-600 max-w-3xl mx-auto'>
            We take pride in our achievements and recognitions received for excellence, compliance, and quality service
            delivery.
          </p>

          <div className='w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6' />
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {recognitions.map(item => (
            <SwiperSlide key={item.image}>
              <div
                className='
                  group
                  bg-white/80
                  backdrop-blur-lg
                  rounded-3xl
                  border border-white
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                '
              >
                {/* Certificate Image */}
                <div className='overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='
                      h-75
                      w-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    '
                  />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 line-clamp-2'>{item.title}</h3>

                  <div className='mt-3 inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium'>
                    {item.date}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Trust Text */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Trusted by Government Organizations
          </h3>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are proud to serve a wide network of government departments,
            institutions, public-sector organizations, and corporate clients
            across India.
          </p>
        </div> */}
      </div>
    </section>
  )
}

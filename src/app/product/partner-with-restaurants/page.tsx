'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  )
}

const benefits = [
  { 
    title: 'Increased Order Value', 
    desc: 'Customers order more when they see dishes first',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    title: 'Reduced Confusion', 
    desc: 'No more "that\'s not what I expected"',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    title: 'Premium Brand Image', 
    desc: 'Stand out as a modern, innovative restaurant',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    title: 'Data and Insights', 
    desc: 'Understand what customers want to see',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

const idealFor = [
  'Cafés', 'Fine Dining', 'Cloud Kitchens', 
  'Food Chains', 'New Launches', 'Casual Dining',
  'Hotels', 'Catering', 'Food Courts'
]

export default function PartnerWithRestaurantsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label mb-4 block">B2B Product</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Partner With <span className="text-gradient">Restaurants</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-dark/70 font-light mb-8"
            >
              Let customers see food before they order it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body max-w-2xl mb-10"
            >
              People eat with their eyes first. WebAR helps restaurants showcase dishes 
              using AR-powered digital menus. Customers scan a QR code and instantly 
              visualize dishes in 3D or video — before ordering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/try-now" className="btn-primary">
                Become a Partner
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">How It Works</span>
            <h2 className="heading-lg">Simple Setup, Powerful Results</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'QR Placement', desc: 'We place QR codes on your menu cards' },
              { step: '2', title: 'Customer Scans', desc: 'Diners scan before ordering' },
              { step: '3', title: 'AR Experience', desc: 'Dish appears in AR or video' },
              { step: '4', title: 'Confident Order', desc: 'Customer orders with clarity' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Restaurant Benefits</span>
            <h2 className="heading-lg">
              Better Clarity. Better Decisions. <span className="text-gradient">Better Sales.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-bordered p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-dark/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Marketing Section */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Beyond Menus</span>
              <h2 className="heading-lg mb-6">Marketing With WebAR</h2>
              <p className="text-xl text-white/70 mb-8">
                We don't just give menus — we help restaurants market smarter.
              </p>
              
              <div className="space-y-4">
                {[
                  'AR-powered promotions that capture attention',
                  'Shareable QR experiences for social media',
                  'Seasonal dish launches with immersive previews',
                  'Social-media-ready AR content',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/5 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-6">What You Don't Need</h3>
              <div className="space-y-4">
                {[
                  'No app development required',
                  'No technical knowledge needed',
                  'No expensive hardware',
                  'No long setup time',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60">
                    <span className="text-red-400">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary font-medium mt-8">We handle everything.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ideal For */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="label mb-4 block">Ideal For</span>
            <h2 className="heading-lg mb-4">Every Type of Restaurant</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            {idealFor.map((item, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-primary/5 text-dark rounded-full font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp}>
            <h2 className="heading-lg mb-6">
              Let Your Food Speak <span className="text-gradient">Before It's Served</span>
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Join 500+ restaurants already transforming their dining experience with WebAR.
            </p>
            <Link href="/try-now" className="btn-primary">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

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

const useCases = [
  'Birthdays', 'Anniversaries', 'First Dates', 
  'Family Dinners', 'Proposals', 'Graduations',
  'Reunions', 'Date Nights', 'Celebrations'
]

const benefits = [
  { icon: '⚡', title: 'Instant Gratification', desc: 'Get your photo and AR memory immediately' },
  { icon: '❤️', title: 'Emotional Connection', desc: 'Feel the moment again, not just see it' },
  { icon: '📤', title: 'Easy Sharing', desc: 'Share with friends and family instantly' },
  { icon: '🎁', title: 'A Memory, Not Media', desc: 'More than a photo — it\'s an experience' },
]

export default function GetYourMomentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label mb-4 block">B2C Product</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Get Your <span className="text-gradient">Moment</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-dark/70 font-light mb-8"
            >
              Relive what you felt, not just what you saw.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body max-w-2xl mb-10"
            >
              Some moments deserve more than a photo. At partner restaurants, our WebAR 
              agent captures your moment — a smile, a celebration, a surprise. You instantly 
              receive a printed photo with a custom frame and QR code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/try-now" className="btn-primary">
                Experience It Now
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">The Experience</span>
            <h2 className="heading-lg">
              Scan the QR. <span className="text-gradient">Relive the Moment.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card-bordered p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎬</span>
              </div>
              <h3 className="heading-sm mb-3">AR Video</h3>
              <p className="text-body-sm">A short video that plays right from your printed photo</p>
            </div>
            <div className="card-bordered p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="heading-sm mb-3">Living Memory</h3>
              <p className="text-body-sm">Watch your moment come alive in augmented reality</p>
            </div>
            <div className="card-bordered p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="heading-sm mb-3">The Exact Feeling</h3>
              <p className="text-body-sm">Experience the same emotion, anytime, anywhere</p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-center text-xl font-medium text-dark mt-12">
            No apps. No logins. Just scan and relive.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">How It Works</span>
            <h2 className="heading-lg">Four Simple Steps</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Visit', desc: 'Dine at a WebAR partner restaurant' },
              { step: '2', title: 'Capture', desc: 'Our agent captures your special moment' },
              { step: '3', title: 'Receive', desc: 'Get an instant photo with QR code' },
              { step: '4', title: 'Relive', desc: 'Scan anytime to see it in AR' },
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

          <motion.p variants={fadeUp} className="text-center text-2xl font-light text-dark/70 mt-16">
            That's it. Simple as that.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Why People Love It</span>
            <h2 className="heading-lg">More Than Just a Photo</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-5xl mb-6 block">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="label mb-4 block">Perfect For</span>
            <h2 className="heading-lg mb-4">Every Moment That Matters</h2>
            <p className="text-body">Moments matter. We help you keep them alive.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            {useCases.map((item, i) => (
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
              Ready to Create Your <span className="text-gradient">Moment</span>?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Find a WebAR partner restaurant near you and experience the magic of living memories.
            </p>
            <Link href="/try-now" className="btn-primary">
              Try Now
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

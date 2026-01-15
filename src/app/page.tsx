'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Section component for scroll animations
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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <>
      {/* Hero Section - ema.co style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-custom relative z-10"
        >
          <div className="max-w-5xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="label">Augmented Reality Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              Turn Real Moments Into{' '}
              <span className="text-gradient">Living Memories</span>
              <br />
              and Menus Into{' '}
              <span className="text-gradient">Experiences</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body max-w-2xl mb-12"
            >
              WebAR blends real life with augmented reality to help people relive moments 
              and help restaurants sell food before it's ordered. From instant AR memories 
              to immersive menus — we bring stories to life through a simple QR scan.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/try-now" className="btn-primary">
                Try Now
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/resources/videos" className="btn-ghost">
                Watch Demo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-dark/20 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeUp} className="label mb-4 block">What We Do</motion.span>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Where Hospitality Meets{' '}
                <span className="text-gradient">Augmented Reality</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-body mb-8">
                We work at the intersection of hospitality, memories, and augmented reality. 
                For customers, capture a moment and relive it anytime. For restaurants, 
                showcase dishes in AR and market smarter.
              </motion.p>
              <motion.p variants={fadeUp} className="text-xl font-medium text-dark">
                One platform. Two powerful experiences.
              </motion.p>
            </div>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <div className="card-bordered text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">For Customers</h3>
                <p className="text-sm text-dark/60">Capture & relive moments</p>
              </div>
              <div className="card-bordered text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">For Restaurants</h3>
                <p className="text-sm text-dark/60">AR menus & marketing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Our Products</span>
            <h2 className="heading-lg">
              Choose Your <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* B2C Product */}
            <motion.div variants={fadeUp}>
              <Link href="/product/get-your-moment" className="block group">
                <div className="card-bordered h-full p-10 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                      B2C
                    </span>
                    <span className="text-dark/40">For Customers</span>
                  </div>
                  
                  <h3 className="heading-md mb-4 group-hover:text-primary transition-colors duration-300">
                    Get Your Moment
                  </h3>
                  
                  <p className="text-body-sm mb-8">
                    Turn a single moment into an interactive AR memory. Visit a partner 
                    restaurant, let our agent capture your special moment, and relive it 
                    anytime with a simple scan.
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn more</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* B2B Product */}
            <motion.div variants={fadeUp}>
              <Link href="/product/partner-with-restaurants" className="block group">
                <div className="card-bordered h-full p-10 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary-dark/10 text-primary-dark rounded-full">
                      B2B
                    </span>
                    <span className="text-dark/40">For Restaurants</span>
                  </div>
                  
                  <h3 className="heading-md mb-4 group-hover:text-primary transition-colors duration-300">
                    Partner With Restaurants
                  </h3>
                  
                  <p className="text-body-sm mb-8">
                    Help restaurants grow using AR-powered menus and marketing. Let customers 
                    see dishes in 3D before ordering. Better clarity, better decisions, better sales.
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Partner with us</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why WebAR Section */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Why WebAR</span>
            <h2 className="heading-lg">
              Simple. Instant. <span className="text-primary">Magical.</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '📱', title: 'No App Required', desc: 'Works in browser' },
              { icon: '⚡', title: 'Instant Access', desc: 'Just scan QR' },
              { icon: '🌐', title: 'Any Smartphone', desc: 'Universal support' },
              { icon: '🍽️', title: 'Built for Food', desc: 'Restaurant-first' },
              { icon: '❤️', title: 'Emotion-First', desc: 'Tech stays hidden' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">How It Works</span>
            <h2 className="heading-lg">
              Three Steps to <span className="text-gradient">Magic</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Scan', 
                desc: 'Point your phone at the QR code on your table or printed photo.' 
              },
              { 
                step: '02', 
                title: 'Experience', 
                desc: 'Watch as dishes come alive in 3D or your memory plays in AR.' 
              },
              { 
                step: '03', 
                title: 'Share', 
                desc: 'Save the moment or order with confidence. Share with anyone.' 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative"
              >
                <span className="text-8xl font-bold text-primary/10 absolute -top-4 -left-2">
                  {item.step}
                </span>
                <div className="relative pt-12">
                  <h3 className="heading-sm mb-4">{item.title}</h3>
                  <p className="text-body-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-primary/5">
        <div className="container-custom">
          <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Partner Restaurants' },
              { value: '2M+', label: 'AR Experiences' },
              { value: '300%', label: 'Engagement Boost' },
              { value: '4.9★', label: 'User Rating' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-dark/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            className="bg-dark rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.span variants={fadeUp} className="label mb-4 block">Ready?</motion.span>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Your Journey Starts With{' '}
                <span className="text-primary">One Scan</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
                Whether you're a customer wanting to capture moments, or a restaurant 
                looking to transform your menu — we're ready when you are.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <Link href="/try-now" className="btn-primary">
                  Try Now
                </Link>
                <Link href="/product/partner-with-restaurants" className="btn-outline border-white/20 text-white hover:bg-white hover:text-dark">
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

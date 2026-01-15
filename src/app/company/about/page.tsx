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

const values = [
  { 
    title: 'Human-First', 
    desc: 'Technology should enhance human connection, not replace it.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  { 
    title: 'Simple Technology', 
    desc: 'Complex problems deserve simple, elegant solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  { 
    title: 'Real Business Value', 
    desc: 'Every feature we build must create measurable impact.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

const team = [
  { name: 'Founder', role: 'CEO & Visionary' },
  { name: 'Tech Lead', role: 'CTO & Innovation' },
  { name: 'Design Lead', role: 'Creative Director' },
  { name: 'Operations', role: 'COO & Strategy' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center pt-20 relative overflow-hidden">
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
              <span className="label mb-4 block">Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              About <span className="text-gradient">WebAR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-dark/70 font-light"
            >
              We believe moments should be relived, and food should 
              be experienced before it's ordered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Our Story</span>
              <h2 className="heading-lg mb-6">Built on a Simple Idea</h2>
              <div className="space-y-6 text-body">
                <p>
                  WebAR was founded on a simple observation: the most meaningful experiences 
                  in life happen around food. Celebrations, first dates, family gatherings — 
                  some of our most cherished memories are made at the table.
                </p>
                <p>
                  We are a team of creators, technologists, and storytellers building AR 
                  experiences for the real world — starting with restaurants.
                </p>
                <p>
                  Our platform serves both sides of the dining experience: helping customers 
                  capture and relive special moments, while empowering restaurants with 
                  immersive tools to showcase their food and grow their business.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center"
            >
              <svg className="w-32 h-32 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Our Focus</span>
            <h2 className="heading-lg">What We Believe</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-bordered p-10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="heading-sm mb-4">{value.title}</h3>
                <p className="text-body-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Vision</span>
              <h2 className="heading-md mb-6">Where We're Going</h2>
              <p className="text-xl text-white/70">
                To make augmented reality a natural part of everyday moments — 
                as simple as taking a photo, but infinitely more meaningful.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Mission</span>
              <h2 className="heading-md mb-6">Why We Exist</h2>
              <p className="text-xl text-white/70">
                To help people feel their memories again and help restaurants grow 
                through immersive experiences that put emotion before technology.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Our Team</span>
            <h2 className="heading-lg mb-4">The People Behind WebAR</h2>
            <p className="text-body">Dreamers, builders, and experience creators.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-dark/50 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp}>
            <h2 className="heading-lg mb-6">
              Want to <span className="text-gradient">Join Us</span>?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              We're always looking for passionate people to help us build 
              the future of immersive experiences.
            </p>
            <Link href="/company/careers" className="btn-primary">
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

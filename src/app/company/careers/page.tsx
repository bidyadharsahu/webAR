'use client'

import { useRef } from 'react'
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

const roles = [
  {
    title: 'Senior AR Developer',
    department: 'Engineering',
    location: 'Remote / Florida',
    type: 'Full-time',
    description: 'Build immersive AR experiences that work seamlessly on any device.'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive, beautiful interfaces for our AR platform.'
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Florida',
    type: 'Full-time',
    description: 'Build partnerships with restaurants and grow our B2B business.'
  },
  {
    title: 'Content Creator',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Tell our story through compelling content and creative campaigns.'
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable systems that power millions of AR experiences.'
  },
]

const culture = [
  { icon: '🚀', title: 'Fast-Moving', desc: 'We ship fast and learn faster.' },
  { icon: '🎨', title: 'Creative-First', desc: 'Bold ideas are always welcome.' },
  { icon: '🧪', title: 'Experiment-Driven', desc: 'We test, measure, and iterate.' },
  { icon: '💫', title: 'Impact-Focused', desc: 'Every day should matter.' },
]

const lookingFor = [
  'Designers who think in experiences',
  'Developers who love challenges',
  'AR creators who push boundaries',
  'Sales minds who build relationships',
  'Storytellers who inspire action'
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center pt-20 relative overflow-hidden">
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
              <span className="label mb-4 block">Careers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Join the <span className="text-gradient">Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-dark/70 font-light mb-8"
            >
              We're building the future of experiences — and we're just getting started.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-body"
            >
              If you're curious, creative, and excited about AR, we'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">We Look For</span>
              <h2 className="heading-lg mb-8">People Who Dream Big</h2>
              
              <div className="space-y-4">
                {lookingFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-2 gap-4">
                {culture.map((item, i) => (
                  <div 
                    key={i}
                    className="card-bordered p-6 text-center"
                  >
                    <span className="text-4xl mb-3 block">{item.icon}</span>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-dark/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Open Positions</span>
            <h2 className="heading-lg">Find Your Role</h2>
          </motion.div>

          <div className="space-y-4">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-bordered p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {role.department}
                      </span>
                      <span className="text-sm text-dark/40">{role.location}</span>
                      <span className="text-sm text-dark/40">•</span>
                      <span className="text-sm text-dark/40">{role.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {role.title}
                    </h3>
                    
                    <p className="text-body-sm">{role.description}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <span className="btn-primary">
                      Apply Now
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Benefits</span>
            <h2 className="heading-lg">Why Work With Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere in the world' },
              { icon: '📈', title: 'Growth', desc: 'Learn and grow with the company' },
              { icon: '💰', title: 'Competitive Pay', desc: 'Salary + equity for all roles' },
              { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take time when you need it' },
              { icon: '🛠️', title: 'Best Tools', desc: 'Latest hardware and software' },
              { icon: '🎉', title: 'Team Events', desc: 'Regular meetups and celebrations' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
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
              Don't See Your Role?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              We're always looking for talented people. Send us your resume 
              and tell us how you'd make WebAR better.
            </p>
            <a href="mailto:namasterides@gmail.com" className="btn-primary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

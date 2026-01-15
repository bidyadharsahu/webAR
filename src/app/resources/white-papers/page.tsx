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

const whitePapers = [
  {
    title: 'AR Adoption in Restaurants: 2026 Report',
    description: 'Comprehensive analysis of augmented reality adoption rates in the restaurant industry, including trends, challenges, and opportunities.',
    pages: '24 pages',
    category: 'Industry Report'
  },
  {
    title: 'Customer Engagement Through Immersive Tech',
    description: 'How immersive technologies are reshaping customer expectations and driving engagement in hospitality.',
    pages: '18 pages',
    category: 'Research'
  },
  {
    title: 'QR-First Experiences in India',
    description: 'A deep dive into the rapid adoption of QR-based experiences in Indian markets and what it means for businesses.',
    pages: '15 pages',
    category: 'Market Analysis'
  },
  {
    title: 'The ROI of AR Menus',
    description: 'Data-driven analysis of return on investment for restaurants implementing AR menu technology.',
    pages: '20 pages',
    category: 'Business Case'
  },
  {
    title: 'Building Emotional Connections with Technology',
    description: 'The psychology of creating memorable experiences through technology without losing the human touch.',
    pages: '12 pages',
    category: 'Research'
  },
  {
    title: 'The Future of Hospitality Tech',
    description: 'Predictions and insights on how technology will continue to transform the hospitality industry.',
    pages: '28 pages',
    category: 'Industry Report'
  },
]

export default function WhitePapersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-4 block">Resources</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            White <span className="text-gradient">Papers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl"
          >
            Deep dives into AR adoption, customer engagement, and the future of 
            hospitality technology. Built for founders, marketers, and operators.
          </motion.p>
        </div>
      </section>

      {/* White Papers Grid */}
      <AnimatedSection className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {whitePapers.map((paper, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-bordered p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {paper.category}
                      </span>
                      <span className="text-sm text-dark/40">{paper.pages}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {paper.title}
                    </h2>
                    
                    <p className="text-body-sm mb-6">{paper.description}</p>

                    <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Download PDF
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
            <h2 className="heading-md mb-4">Get Future Reports</h2>
            <p className="text-white/60 mb-8">
              Be the first to receive our latest research and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

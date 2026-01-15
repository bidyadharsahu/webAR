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

const newsItems = [
  {
    title: 'WebAR Raises $5M to Expand AR Dining Experiences',
    source: 'TechCrunch',
    date: 'January 12, 2026',
    type: 'Press Release',
    excerpt: 'The AR dining platform announces Series A funding to accelerate restaurant partnerships across North America.'
  },
  {
    title: 'How WebAR is Changing the Restaurant Industry',
    source: 'Forbes',
    date: 'January 8, 2026',
    type: 'Feature',
    excerpt: 'An in-depth look at the technology helping restaurants increase engagement and sales through augmented reality.'
  },
  {
    title: 'WebAR Partners with Major Restaurant Chain',
    source: 'Restaurant Business',
    date: 'January 5, 2026',
    type: 'Announcement',
    excerpt: 'New partnership brings AR menus to over 200 locations nationwide.'
  },
  {
    title: 'The Future of Food: AR Menus Gain Traction',
    source: 'Wired',
    date: 'December 28, 2025',
    type: 'Industry',
    excerpt: 'Why more restaurants are adopting augmented reality to enhance customer experience.'
  },
  {
    title: 'WebAR Named Top 10 Food Tech Startup',
    source: 'Fast Company',
    date: 'December 20, 2025',
    type: 'Recognition',
    excerpt: 'Recognition for innovation in blending technology with hospitality experiences.'
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
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
            News & <span className="text-gradient">Media</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl"
          >
            See how WebAR is shaping the future of dining experiences. 
            Media coverage, press releases, and announcements.
          </motion.p>
        </div>
      </section>

      {/* News Items */}
      <AnimatedSection className="section-padding pt-0">
        <div className="container-custom">
          <div className="space-y-6">
            {newsItems.map((item, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                className="card-bordered p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {item.type}
                      </span>
                      <span className="text-sm text-dark/40">{item.source}</span>
                      <span className="text-sm text-dark/40">•</span>
                      <span className="text-sm text-dark/40">{item.date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h2>
                    
                    <p className="text-body-sm">{item.excerpt}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Read More
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Press Contact */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Press Inquiries</span>
              <h2 className="heading-lg mb-6">Get in Touch</h2>
              <p className="text-white/60 text-lg mb-8">
                For press inquiries, interview requests, or media resources, 
                please reach out to our communications team.
              </p>
              <a 
                href="mailto:namasterides@gmail.com"
                className="btn-primary"
              >
                Contact Press Team
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/5 rounded-3xl p-10">
              <h3 className="text-xl font-semibold mb-6">Media Resources</h3>
              <div className="space-y-4">
                {['Brand Assets', 'Press Kit', 'Company Fact Sheet', 'Executive Bios'].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span>{item}</span>
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

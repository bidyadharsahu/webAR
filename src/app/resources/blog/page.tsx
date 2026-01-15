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

const blogPosts = [
  {
    title: 'The Future of Restaurant Menus is Here',
    excerpt: 'How AR technology is revolutionizing the way customers interact with food before ordering.',
    category: 'Technology',
    date: 'Jan 10, 2026',
    readTime: '5 min read'
  },
  {
    title: 'Why Customers Trust What They Can See',
    excerpt: 'The psychology behind visual food experiences and how it affects ordering decisions.',
    category: 'Insights',
    date: 'Jan 8, 2026',
    readTime: '4 min read'
  },
  {
    title: 'Creating Memories That Last: The Power of AR',
    excerpt: 'Exploring how augmented reality transforms ordinary moments into extraordinary memories.',
    category: 'Experience',
    date: 'Jan 5, 2026',
    readTime: '6 min read'
  },
  {
    title: 'Restaurant Marketing in the Digital Age',
    excerpt: 'Modern strategies for restaurants looking to stand out in a crowded marketplace.',
    category: 'Marketing',
    date: 'Jan 2, 2026',
    readTime: '7 min read'
  },
  {
    title: 'The Rise of QR-First Experiences',
    excerpt: 'How QR codes became the gateway to immersive digital experiences in physical spaces.',
    category: 'Technology',
    date: 'Dec 28, 2025',
    readTime: '5 min read'
  },
  {
    title: 'Building Emotional Connections Through Tech',
    excerpt: 'The delicate balance of using technology to enhance human experiences, not replace them.',
    category: 'Experience',
    date: 'Dec 25, 2025',
    readTime: '4 min read'
  },
]

const categories = ['All', 'Technology', 'Insights', 'Experience', 'Marketing']

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
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
            <span className="text-gradient">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl"
          >
            Stories, insights, and ideas at the intersection of food, technology, and experiences.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <AnimatedSection className="pb-12 border-b border-dark/10">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  i === 0 
                    ? 'bg-dark text-white' 
                    : 'bg-dark/5 text-dark/70 hover:bg-dark/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Blog Posts */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="card-bordered h-full flex flex-col">
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-dark/40">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-body-sm flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-dark/10">
                    <span className="text-sm text-dark/40">{post.date}</span>
                    <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Read
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <button className="btn-outline">
              Load More
            </button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
            <h2 className="heading-md mb-4">Stay in the Loop</h2>
            <p className="text-white/60 mb-8">
              Get the latest insights on AR, restaurant tech, and creating memorable experiences.
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

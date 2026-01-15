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

const videos = [
  {
    title: 'WebAR Demo: See Your Food in AR',
    description: 'Watch how customers visualize dishes before ordering using our AR menu technology.',
    duration: '2:30',
    category: 'Product Demo'
  },
  {
    title: 'Customer Reactions: First AR Experience',
    description: 'Real customer reactions when they see their moments come alive in augmented reality.',
    duration: '3:15',
    category: 'Customer Stories'
  },
  {
    title: 'Behind the Scenes: Creating AR Menus',
    description: 'How we transform restaurant menus into immersive AR experiences.',
    duration: '4:45',
    category: 'Behind the Scenes'
  },
  {
    title: 'Restaurant Partner Success Story',
    description: 'See how one restaurant increased orders by 40% with WebAR menus.',
    duration: '5:20',
    category: 'Case Study'
  },
  {
    title: 'How It Works: Get Your Moment',
    description: 'A complete walkthrough of our B2C product for capturing AR memories.',
    duration: '2:00',
    category: 'Product Demo'
  },
  {
    title: 'The Technology Behind WebAR',
    description: 'A technical deep dive into how we deliver AR experiences without app downloads.',
    duration: '6:30',
    category: 'Tech Talk'
  },
]

const categories = ['All', 'Product Demo', 'Customer Stories', 'Case Study', 'Behind the Scenes']

export default function VideosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
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
            <span className="text-gradient">Videos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl"
          >
            Watch WebAR in action. Customer reactions, restaurant demos, 
            product walkthroughs, and behind-the-scenes stories.
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

      {/* Videos Grid */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="card-bordered overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-dark to-dark-light relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-dark/80 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {video.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-body-sm">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp}>
            <h2 className="heading-md mb-4">Want to See It Live?</h2>
            <p className="text-body max-w-xl mx-auto mb-8">
              Experience WebAR for yourself. It takes just a scan.
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

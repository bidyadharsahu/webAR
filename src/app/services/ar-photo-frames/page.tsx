'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  
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
  );
}

export default function ARPhotoFramesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="label">AR Photo Frames</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              Turn Photos Into{' '}
              <span className="text-gradient">Living Memories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body max-w-2xl mb-10"
            >
              Imagine pointing your phone at a photo and watching it come alive with video, 
              sound, and animation. Perfect for weddings, anniversaries, birthdays, or any 
              precious moment you want to preserve forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/try-now" className="btn-primary">
                Try Demo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">How It Works</span>
            <h2 className="heading-lg">
              Simple <span className="text-gradient">Magic</span> in 3 Steps
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Your Photo',
                desc: 'Send us your favorite photo — a wedding shot, family portrait, or any special moment.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: '02',
                title: 'Add Your Video',
                desc: 'Share a video message, behind-the-scenes footage, or animated content to pair with it.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: '03',
                title: 'Scan & Experience',
                desc: 'Receive your QR-enabled photo frame. Scan anytime to watch your memory come alive.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative bg-cream rounded-3xl p-8 hover:shadow-xl transition-shadow duration-500"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">Step {item.step}</span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-dark/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">Perfect For</span>
            <h2 className="heading-lg">
              Moments Worth <span className="text-gradient">Preserving</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Weddings', desc: 'Relive your vows and first dance' },
              { title: 'Birthdays', desc: 'Birthday wishes that play on demand' },
              { title: 'Memorials', desc: 'Keep loved ones close forever' },
              { title: 'Graduations', desc: 'Capture that proud achievement' },
              { title: 'Baby Photos', desc: 'Watch them grow, anytime' },
              { title: 'Travel Memories', desc: 'Relive adventures on your wall' },
              { title: 'Pet Moments', desc: 'Keep furry friends alive' },
              { title: 'Family Reunions', desc: 'Group memories that move' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-dark/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Demo QR Section */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeIn} className="label mb-4 block">Try It Now</motion.span>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Experience the <span className="text-primary">Magic</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/70 mb-8">
                Scan our demo QR code with your smartphone camera to see an AR photo 
                frame in action. No app needed — it works right in your browser!
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/try-now" className="btn-primary">
                  Get Started Today
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              variants={scaleIn}
              className="bg-white rounded-3xl p-8 text-dark"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-48 h-48 bg-dark/5 rounded-xl flex items-center justify-center border-2 border-dashed border-dark/20">
                  <span className="text-dark/40 text-center px-4">Demo QR Code<br/>Coming Soon</span>
                </div>
              </div>
              <p className="text-center text-dark/60">Scan with your phone camera</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
            className="bg-dark rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <motion.span variants={fadeIn} className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Get Started Today</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Bring Your Photos to{' '}
                <span className="text-primary">Life?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Start creating AR photo frames today. Perfect as gifts, keepsakes, 
                or a unique way to display your most cherished memories.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,102,0.4)] hover:scale-105"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/company/about" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

'use client'

import { useRef, useState } from 'react'
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

export default function TryNowPage() {
  const [activeTab, setActiveTab] = useState<'customer' | 'restaurant'>('customer')

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-4 block">Start Here</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Ready to Experience <span className="text-gradient">WebAR</span>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl mx-auto"
          >
            Whether you're a customer wanting to capture moments, or a restaurant 
            looking to transform your menu — your journey starts here.
          </motion.p>
        </div>
      </section>

      {/* Tab Selection */}
      <AnimatedSection className="pb-12">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex bg-dark/5 rounded-full p-1">
              <button
                onClick={() => setActiveTab('customer')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'customer'
                    ? 'bg-primary text-white'
                    : 'text-dark/60 hover:text-dark'
                }`}
              >
                I'm a Customer
              </button>
              <button
                onClick={() => setActiveTab('restaurant')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'restaurant'
                    ? 'bg-primary text-white'
                    : 'text-dark/60 hover:text-dark'
                }`}
              >
                I'm a Restaurant
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Customer Content */}
      {activeTab === 'customer' && (
        <AnimatedSection className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="label mb-4 block">For Customers</span>
                <h2 className="heading-lg mb-6">Capture Your Moment</h2>
                <p className="text-body mb-8">
                  Visit one of our partner restaurants to experience the magic of AR memories. 
                  Our agent will capture your special moment, and you'll receive an instant 
                  photo with a QR code that brings it to life.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Find a WebAR partner restaurant near you',
                    'Celebrate your special moment',
                    'Receive your AR-enabled photo',
                    'Scan anytime to relive the memory'
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary">
                  Find Partner Restaurants
                </button>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="card-bordered p-10 text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                    <span className="text-8xl">📱</span>
                  </div>
                  <h3 className="heading-sm mb-4">Demo Experience</h3>
                  <p className="text-body-sm mb-6">
                    Scan the QR code below to see a sample AR experience on your phone.
                  </p>
                  <div className="w-32 h-32 bg-dark mx-auto rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs">QR Code</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Restaurant Content */}
      {activeTab === 'restaurant' && (
        <AnimatedSection className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="label mb-4 block">For Restaurants</span>
                <h2 className="heading-lg mb-6">Partner With Us</h2>
                <p className="text-body mb-8">
                  Transform your restaurant with AR-powered menus and marketing. 
                  Let customers see your dishes before ordering. We handle everything — 
                  no technical knowledge required.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Fill out the partnership form',
                    'We'll reach out to discuss your needs',
                    'We set up your AR menu experience',
                    'Start delighting customers with AR'
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="card-bordered p-10">
                  <h3 className="heading-sm mb-6">Get Started</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Restaurant Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary"
                        placeholder="Your restaurant name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary resize-none"
                        placeholder="Tell us about your restaurant..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Submit Partnership Request
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* FAQ Section */}
      <AnimatedSection className="section-padding bg-dark text-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">FAQ</span>
            <h2 className="heading-lg">Common Questions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: 'Do I need to download an app?', a: 'No! WebAR works directly in your phone\'s browser. Just scan the QR code and the experience loads instantly.' },
              { q: 'Which phones are supported?', a: 'Any modern smartphone with a camera works. iPhone, Android — if it can scan a QR code, it works with WebAR.' },
              { q: 'How much does it cost for restaurants?', a: 'We offer flexible pricing based on your restaurant\'s size and needs. Contact us for a custom quote.' },
              { q: 'How long does setup take?', a: 'Most restaurants are up and running within 1-2 weeks. We handle everything from photography to QR placement.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 rounded-2xl p-8">
                <h3 className="font-semibold text-lg mb-3">{item.q}</h3>
                <p className="text-white/60">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection className="section-padding">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp}>
            <h2 className="heading-md mb-4">Still Have Questions?</h2>
            <p className="text-body mb-8">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <a href="mailto:namasterides@gmail.com" className="btn-outline">
              Contact Us
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

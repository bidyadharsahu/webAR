'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = `Contact from ${formData.name} - ${formData.company || 'WebAR Inquiry'}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company || 'Not provided'}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    
    window.location.href = `mailto:namasterides@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center pt-20 relative overflow-hidden bg-gradient-to-b from-cream via-sand to-dark/[0.03]">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dark leading-[1.1] mb-8"
            >
              Let's Build
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Something Amazing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-dark/60 max-w-xl leading-relaxed"
            >
              Have a project in mind? Want to learn more about WebAR? 
              We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-dark/[0.03] via-sand to-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-dark mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email</h3>
                    <a 
                      href="mailto:namasterides@gmail.com" 
                      className="text-dark/60 hover:text-primary transition-colors"
                    >
                      namasterides@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Location</h3>
                    <p className="text-dark/60">Tampa, Florida</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Response Time</h3>
                    <p className="text-dark/60">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-8 border-t border-dark/10">
                <h3 className="font-semibold text-dark mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="/pricing" 
                    className="px-4 py-2 bg-dark/5 rounded-full text-sm text-dark/70 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    View Pricing
                  </a>
                  <a 
                    href="/try-now" 
                    className="px-4 py-2 bg-dark/5 rounded-full text-sm text-dark/70 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Try Demo
                  </a>
                  <a 
                    href="/company/careers" 
                    className="px-4 py-2 bg-dark/5 rounded-full text-sm text-dark/70 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Join Our Team
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp}>
              <div className="bg-cream/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-dark/5">
                <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Message Sent!</h3>
                    <p className="text-dark/60">We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', company: '', message: '' })
                      }}
                      className="mt-6 text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map / Location Visual */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-cream to-sand">
        <div className="container-custom">
          <motion.div 
            variants={fadeUp}
            className="bg-gradient-to-br from-dark/[0.03] via-primary/5 to-dark/[0.02] rounded-3xl p-12 md:p-16 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Based in Tampa, Florida</h2>
            <p className="text-xl text-dark/60 max-w-2xl mx-auto mb-8">
              We work with clients worldwide, bringing immersive AR experiences 
              to businesses across every timezone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-dark/60">
                Remote-First Team
              </span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-dark/60">
                24hr Response Time
              </span>
              <span className="px-4 py-2 bg-white/80 rounded-full text-sm text-dark/60">
                Global Clients
              </span>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

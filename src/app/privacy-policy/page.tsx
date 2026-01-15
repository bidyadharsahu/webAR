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

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-4 block">Legal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body"
          >
            Last updated: January 15, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <AnimatedSection className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div variants={fadeUp} className="prose prose-lg">
              <div className="space-y-12">
                <section>
                  <h2 className="heading-sm mb-4">Introduction</h2>
                  <p className="text-body-sm">
                    WebAR ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                    Policy explains how we collect, use, disclose, and safeguard your information when 
                    you use our augmented reality platform and services.
                  </p>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-body-sm">
                    <p><strong>Personal Information:</strong> When you use our services, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information</li>
                      <li>Photos and videos you choose to capture</li>
                      <li>Device information and browser type</li>
                      <li>Location data (with your permission)</li>
                      <li>Usage data and interaction patterns</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-body-sm">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and maintain our AR experiences</li>
                      <li>Create and deliver your AR memories</li>
                      <li>Improve our products and services</li>
                      <li>Communicate with you about updates and offers</li>
                      <li>Ensure the security of our platform</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Data Storage and Security</h2>
                  <p className="text-body-sm">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information. Your AR memories are stored securely and are only 
                    accessible via your unique QR code. We retain your data only for as long as 
                    necessary to provide our services.
                  </p>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Sharing Your Information</h2>
                  <div className="space-y-4 text-body-sm">
                    <p>We do not sell your personal information. We may share your information with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Partner restaurants (to provide services at their locations)</li>
                      <li>Service providers who assist in our operations</li>
                      <li>Legal authorities when required by law</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Cookies and Tracking</h2>
                  <p className="text-body-sm">
                    We use cookies and similar tracking technologies to enhance your experience on 
                    our platform. You can control cookie preferences through your browser settings. 
                    Our website uses essential cookies for functionality and optional analytics 
                    cookies to help us improve our services.
                  </p>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Your Rights</h2>
                  <div className="space-y-4 text-body-sm">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Data portability where applicable</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Children's Privacy</h2>
                  <p className="text-body-sm">
                    Our services are not intended for children under 13 years of age. We do not 
                    knowingly collect personal information from children under 13. If you are a 
                    parent or guardian and believe your child has provided us with personal 
                    information, please contact us.
                  </p>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Changes to This Policy</h2>
                  <p className="text-body-sm">
                    We may update this Privacy Policy from time to time. We will notify you of 
                    any changes by posting the new Privacy Policy on this page and updating the 
                    "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="heading-sm mb-4">Contact Us</h2>
                  <div className="text-body-sm space-y-4">
                    <p>
                      If you have questions about this Privacy Policy or our data practices, 
                      please contact us:
                    </p>
                    <div className="card-bordered p-6">
                      <p><strong>Email:</strong> namasterides@gmail.com</p>
                      <p><strong>Location:</strong> Florida, USA</p>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Animation variants - smooth and sophisticated
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
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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

// Section wrapper with scroll animation
function AnimatedSection({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Experience card data
const experiences = [
  {
    title: 'AR Photo Stories',
    description: 'Turn printed photos into living memories. Scan to play videos, messages, or animations right from the image.',
    href: '/services/ar-photo-frames',
  },
  {
    title: 'AR Food Preview',
    description: 'Let customers see dishes in 3D before ordering. Reduce waste, increase confidence, boost sales.',
    href: '/services/restaurant-menu',
  },
  {
    title: 'AR Brand Moments',
    description: 'Add interactive layers to packaging, posters, or business cards. Make every touchpoint memorable.',
    href: '/services/ar-business-cards',
  },
  {
    title: 'AR Space Preview',
    description: 'Walk through properties or spaces remotely. Perfect for real estate, architecture, or event planning.',
    href: '/services/real-estate-ar',
  },
  {
    title: 'Custom AR Experience',
    description: 'Something unique in mind? We design and build bespoke AR experiences tailored to your vision.',
    href: '/services/3d-modeling',
  },
];

// Pricing data
const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'For learning and experimentation',
    features: [
      'Up to 5 AR experiences',
      '500 AR views per year',
      '100 MB storage',
      'Community access',
    ],
  },
  {
    name: 'Starter',
    price: '29',
    description: 'For small businesses and creators',
    features: [
      'Up to 25 AR experiences',
      '10,000 AR views/month',
      '1 GB storage',
      'Basic analytics',
    ],
  },
  {
    name: 'Growth',
    price: '79',
    description: 'For growing brands and teams',
    features: [
      'Up to 100 AR experiences',
      '50,000 AR views/month',
      '5 GB storage',
      'Advanced analytics',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: '199',
    description: 'For agencies at scale',
    features: [
      'Unlimited AR experiences',
      '150,000 AR views/month',
      '10 GB storage',
      'API access',
      'Dedicated support',
    ],
  },
];



export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              Point your phone at the real world.
              <br />
              <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
                We add the magic.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-xl mb-12 leading-relaxed"
            >
              Web-based augmented reality experiences that work instantly. 
              No apps to download, no barriers to entry.
            </motion.p>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT HAPPENS */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-sand via-dark/[0.02] to-sand" id="how-it-works">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
            How it works
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-16 max-w-2xl">
            What happens when someone scans your image or product?
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { step: '01', title: 'They scan', desc: 'Using any smartphone camera, they point at your image, packaging, or product.' },
              { step: '02', title: 'The browser opens', desc: 'No app needed. A lightweight web experience loads in seconds.' },
              { step: '03', title: 'They experience it', desc: 'Video plays, 3D appears, or interactive content comes to life — right there.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <motion.span 
                  className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2"
                  whileHover={{ scale: 1.1, color: 'rgba(45, 90, 61, 0.2)' }}
                >
                  {item.step}
                </motion.span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-semibold text-dark mb-3">{item.title}</h3>
                  <p className="text-dark/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SECTION 3: EXPERIENCES */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-cream via-dark/[0.02] to-sand" id="experiences">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
            What you can create
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-16">
            Experiences built for real moments
          </motion.h2>

          <motion.div variants={staggerContainer} className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link 
                  href={exp.href}
                  className="block bg-gradient-to-r from-sand/50 to-sand rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:from-sand hover:to-cream group border border-transparent hover:border-primary/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-dark/60 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center text-primary font-medium">
                        Learn more
                        <motion.svg 
                          className="w-5 h-5 ml-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SECTION 4: WHY WEB AR */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-dark/[0.03] via-sand to-cream">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
            Why web AR
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-16 max-w-3xl">
            No app to install. No friction. Just point, scan, and experience.
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Instant access', 
                desc: 'Works in any browser. No downloads, no waiting.',
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: 'Any smartphone', 
                desc: 'iOS, Android — if it has a camera, it works.',
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: 'Higher engagement', 
                desc: 'Remove the app barrier and reach more people.',
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              { 
                title: 'Easy updates', 
                desc: 'Change content anytime without user action.',
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-cream/80 backdrop-blur-sm rounded-2xl p-6 border border-dark/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-dark/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SECTION 5: LIVE DEMO */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-sand via-dark/[0.03] to-sand" id="demo">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
                Try it now
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-6">
                See it for yourself
              </motion.h2>
              <motion.p variants={fadeUp} className="text-dark/60 text-lg leading-relaxed mb-8">
                Scan this QR code with your phone camera. No app needed — 
                the experience opens right in your browser.
              </motion.p>
              <motion.div variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://webar-lovat.vercel.app/" className="btn-primary">
                    View all demos
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div variants={scaleIn} className="flex justify-center">
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/10"
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(45, 90, 61, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src="/qr-code.png" 
                  alt="Scan QR Code for AR Demo" 
                  className="w-64 h-64 object-contain"
                />
                <p className="text-center text-dark/60 text-sm mt-4 font-medium">
                  Scan with your camera
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 6: HOW WE BUILD */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-cream via-dark/[0.02] to-cream">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
            Our approach
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-16 max-w-2xl">
            How we build your experience
          </motion.h2>

          <motion.div variants={staggerContainer} className="max-w-2xl space-y-8">
            {[
              { num: '01', text: 'We start with a conversation about what you want people to feel.' },
              { num: '02', text: 'We design and build the AR experience to fit that moment.' },
              { num: '03', text: 'You get everything you need — QR codes, files, and support.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeRight}
                className="flex items-start gap-6 group"
              >
                <motion.span 
                  className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.num}
                </motion.span>
                <p className="text-xl text-dark/70 leading-relaxed pt-2">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SECTION 7: PRICING */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-dark/[0.04] via-sand to-cream" id="pricing">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
            Pricing
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Simple pricing that grows with you
          </motion.h2>
          <motion.p variants={fadeUp} className="text-dark/60 text-lg mb-16 max-w-xl">
            Start small, scale when you're ready. No hidden costs.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ 
                  y: -10, 
                  boxShadow: plan.popular 
                    ? '0 25px 50px -12px rgba(45, 90, 61, 0.25)' 
                    : '0 20px 40px -12px rgba(0, 0, 0, 0.1)'
                }}
                className={`bg-cream rounded-2xl p-8 transition-all duration-400 border ${
                  plan.popular 
                    ? 'ring-2 ring-primary lg:scale-105 lg:z-10 border-primary/20' 
                    : 'border-primary/5 hover:border-primary/20'
                }`}
              >
                {plan.popular && (
                  <motion.span 
                    className="inline-block text-xs font-medium text-white bg-primary px-3 py-1 rounded-full mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Most popular
                  </motion.span>
                )}
                <h3 className="text-xl font-semibold text-dark mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  {plan.price === '0' ? (
                    <span className="text-3xl font-bold text-dark">$0</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-dark">${plan.price}</span>
                      <span className="text-dark/50">/month</span>
                    </>
                  )}
                </div>
                <p className="text-dark/60 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-dark/70">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/pricing" className="btn-secondary">
                View full pricing details
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SECTION 8: HUMAN TOUCH */}
      <AnimatedSection className="py-24 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6">
              Who we are
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Built by people who care about the details
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-dark/60 leading-relaxed mb-8">
              We're a small team that believes technology should feel invisible. 
              The best AR experiences are the ones where people forget they're using AR 
              — they're just having a moment.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-dark/60 leading-relaxed mb-8">
              Every project gets our full attention. We're not here to sell you features. 
              We're here to help you create something meaningful.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link href="/company/careers" className="btn-outline">
                  Join our team
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 9: FINAL CTA */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-sand via-cream to-sand relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-40 -bottom-40 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full"
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to create something?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark/60 text-lg mb-10">
              Start with a demo, or reach out to talk about your project. 
              No pressure, just a conversation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://webar-lovat.vercel.app/" className="btn-primary">
                  Try demo
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/company/about" className="btn-secondary">
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

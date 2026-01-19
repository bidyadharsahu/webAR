'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Smooth animation variants
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

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Magnetic button component
function MagneticButton({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'outline' | 'outline-light' }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
  };
  
  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.style.transform = 'translate(0, 0) scale(1)';
  };
  
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-primary text-white hover:shadow-[0_0_30px_rgba(0,204,102,0.4)]',
    outline: 'border-2 border-dark text-dark hover:bg-dark hover:text-white',
    'outline-light': 'border-2 border-white/30 text-white hover:bg-white hover:text-dark'
  };
  
  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.2s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease' }}
    >
      {children}
    </Link>
  );
}

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

// Service Card Component
function ServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  gradient 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  href: string;
  gradient: string;
}) {
  return (
    <motion.div 
      variants={scaleIn}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
    >
      <Link href={href} className="block group h-full">
        <div className="card-bordered h-full p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-dark/60 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>Explore</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// QR Code Demo Component
function QRDemoCard({ title, description, qrPlaceholder }: { title: string; description: string; qrPlaceholder: string }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="w-32 h-32 bg-dark/5 rounded-xl flex items-center justify-center border-2 border-dashed border-dark/20">
          <span className="text-dark/40 text-sm text-center px-4">{qrPlaceholder}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-dark/60 text-sm">{description}</p>
    </motion.div>
  );
}

// Services Data
const services = [
  {
    title: 'AR Photo Frames',
    description: 'Transform your cherished memories into living experiences. Scan and watch photos come alive with videos and animations.',
    href: '/services/ar-photo-frames',
    gradient: 'bg-pink-500',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Restaurant Menu AR',
    description: 'Let customers see dishes in stunning 3D before ordering. Increase sales and reduce order confusion with immersive menus.',
    href: '/services/restaurant-menu',
    gradient: 'bg-orange-500',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'AR Business Cards',
    description: 'Make unforgettable first impressions. Your business card becomes a digital portfolio with videos, links, and contact info.',
    href: '/services/ar-business-cards',
    gradient: 'bg-blue-500',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: 'Real Estate AR',
    description: 'Virtual property tours that sell. Let buyers explore properties in immersive 3D from anywhere in the world.',
    href: '/services/real-estate-ar',
    gradient: 'bg-emerald-500',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: '3D Modeling Services',
    description: 'Professional 3D models for any AR experience. From products to architectural visualizations, we bring ideas to life.',
    href: '/services/3d-modeling',
    gradient: 'bg-purple-500',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
];

// Pricing Plans
const pricingPlans = [
  {
    name: 'Super Lite',
    price: '29',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 AR experiences',
      'Basic QR code generation',
      'Standard 3D models',
      'Email support',
      '1 user account',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Lite',
    price: '79',
    description: 'Great for growing businesses',
    features: [
      'Up to 25 AR experiences',
      'Custom QR code branding',
      'HD 3D models',
      'Priority support',
      '5 user accounts',
      'Analytics dashboard',
      'Custom domain',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Prime',
    price: '199',
    description: 'For enterprises and agencies',
    features: [
      'Unlimited AR experiences',
      'White-label solution',
      'Ultra HD 3D models',
      '24/7 dedicated support',
      'Unlimited users',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Priority rendering',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/3 to-transparent rounded-full blur-3xl" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-custom relative z-10"
        >
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="label">Augmented Reality Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              Bring Your World to{' '}
              <span className="text-gradient">Life</span>
              <br />
              With Augmented{' '}
              <span className="text-gradient">Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body max-w-2xl mb-12"
            >
              From photo frames that play memories to business cards that impress — 
              we create immersive AR experiences for every industry. No app required, 
              just scan and experience the magic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="/try-now" variant="primary">
                Try AR Demo
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="/pricing" variant="outline">
                View Pricing
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Services Section */}
      <AnimatedSection className="section-padding bg-white" id="services">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">Our Services</span>
            <h2 className="heading-lg mb-6">
              AR Solutions for{' '}
              <span className="text-gradient">Every Need</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Whether you're preserving memories, showcasing products, or revolutionizing 
              your business — we have the perfect AR solution for you.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">How It Works</span>
            <h2 className="heading-lg">
              Simple as <span className="text-gradient">1-2-3</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Choose Your Service', 
                desc: 'Select from our range of AR solutions — photo frames, menus, business cards, real estate tours, or custom 3D models.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                )
              },
              { 
                step: '02', 
                title: 'We Create the Magic', 
                desc: 'Our team designs your AR experience with stunning visuals, smooth animations, and unique QR codes for instant access.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                step: '03', 
                title: 'Scan & Experience', 
                desc: 'Anyone with a smartphone can scan your QR code and instantly experience your content in augmented reality — no app needed.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">Step {item.step}</span>
                <h3 className="heading-sm mb-4">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* QR Demo Section */}
      <AnimatedSection className="section-padding bg-dark text-white" id="demos">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span variants={fadeIn} className="label mb-4 block">Try It Yourself</motion.span>
              <motion.h2 variants={fadeUp} className="heading-lg mb-6">
                Scan & Experience{' '}
                <span className="text-primary">AR Magic</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/70 mb-8">
                Use your smartphone camera to scan any of our demo QR codes and 
                experience the future of augmented reality firsthand.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <MagneticButton href="/try-now" variant="primary">
                  See All Demos
                </MagneticButton>
              </motion.div>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              <QRDemoCard 
                title="AR Photo Frame"
                description="Scan to see a memory come alive"
                qrPlaceholder="QR Code Here"
              />
              <QRDemoCard 
                title="AR Menu Demo"
                description="See 3D dishes before ordering"
                qrPlaceholder="QR Code Here"
              />
              <QRDemoCard 
                title="Business Card AR"
                description="Experience digital networking"
                qrPlaceholder="QR Code Here"
              />
              <QRDemoCard 
                title="Real Estate Tour"
                description="Walk through properties virtually"
                qrPlaceholder="QR Code Here"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why WebAR Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">Why Choose Us</span>
            <h2 className="heading-lg">
              Simple. Instant. <span className="text-gradient">Powerful.</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                title: 'No App Required', 
                desc: 'Works in browser',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: 'Instant Access', 
                desc: 'Just scan QR',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: 'Any Smartphone', 
                desc: 'Universal support',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              { 
                title: 'Multi-Industry', 
                desc: 'Any business type',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              { 
                title: 'Human Touch', 
                desc: 'Tech stays hidden',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-dark/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection className="section-padding bg-white" id="pricing">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">Pricing Plans</span>
            <h2 className="heading-lg mb-6">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Flexible pricing for every stage of your journey. Start small and scale as you grow.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl p-8 flex flex-col h-full ${
                  plan.popular 
                    ? 'bg-dark text-white ring-4 ring-primary shadow-2xl md:-my-4 md:py-12' 
                    : 'bg-cream-dark'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-white/60' : 'text-dark/60'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={plan.popular ? 'text-white/60' : 'text-dark/60'}>/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-dark/70'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/pricing"
                  className={`block text-center py-4 px-6 rounded-full font-medium transition-all duration-300 mt-auto ${
                    plan.popular
                      ? 'bg-primary text-white hover:shadow-[0_0_30px_rgba(0,204,102,0.4)] hover:scale-105'
                      : 'bg-dark text-white hover:bg-dark/80 hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Video/Demo Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">See It In Action</span>
              <h2 className="heading-lg mb-6">
                Watch How <span className="text-gradient">AR Works</span>
              </h2>
              <p className="text-body mb-8">
                Experience the magic of augmented reality through our demo videos. 
                See how businesses and individuals are using WebAR to create 
                unforgettable experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/try-now" variant="primary">
                  Try It Now
                </MagneticButton>
                <Link href="/company/about" className="btn-ghost">
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={scaleIn}
              className="relative aspect-video bg-dark rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium">Watch Demo Video</p>
                <p className="text-white/60 text-sm">2 min • See AR in action</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
            className="bg-dark rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.span variants={fadeIn} className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Ready to Get Started?</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your AR Journey Begins{' '}
                <span className="text-primary">Today</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Whether you're a photographer, restaurant owner, real estate agent, or business professional
                — we're ready to bring your vision to life with AR.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <MagneticButton href="/try-now" variant="primary">
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MagneticButton>
                <MagneticButton href="/pricing" variant="outline-light">
                  View All Plans
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

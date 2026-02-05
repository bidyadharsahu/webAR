'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

// Demo websites for restaurant section
const demoWebsites = [
  { name: 'Taiga Sports Bar', url: 'https://taiga-demo.vercel.app', description: 'Sports bar with AR menu' },
  { name: 'Italiano Bistro', url: '#', description: 'Italian restaurant showcase' },
  { name: 'Sushi Master', url: '#', description: 'Japanese cuisine AR experience' },
];

export default function TryNowPage() {
  const [activeTab, setActiveTab] = useState<'photo-frames' | 'business-cards' | 'restaurants'>('photo-frames');
  const [formData, setFormData] = useState({
    businessName: '',
    yourName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Partnership Request - ${formData.serviceType} from ${formData.businessName}`;
    const body = `Business Name: ${formData.businessName}%0D%0AContact Name: ${formData.yourName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService Type: ${formData.serviceType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:namasterides@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center pt-20 relative overflow-hidden">
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
            <span className="label mb-4 block">Live Demos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Experience <span className="text-gradient">Netrik XR</span> in Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl mx-auto"
          >
            Explore our AR Photo Frames, AR Business Cards, and Restaurant solutions. 
            See how we bring digital experiences to the physical world.
          </motion.p>
        </div>
      </section>

      {/* Tab Selection */}
      <AnimatedSection className="pb-8">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex bg-dark/5 rounded-full p-1.5 flex-wrap justify-center gap-1">
              <button
                onClick={() => setActiveTab('photo-frames')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'photo-frames'
                    ? 'bg-primary text-white'
                    : 'text-dark/60 hover:text-dark'
                }`}
              >
                AR Photo Frames
              </button>
              <button
                onClick={() => setActiveTab('business-cards')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'business-cards'
                    ? 'bg-primary text-white'
                    : 'text-dark/60 hover:text-dark'
                }`}
              >
                AR Business Cards
              </button>
              <button
                onClick={() => setActiveTab('restaurants')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'restaurants'
                    ? 'bg-primary text-white'
                    : 'text-dark/60 hover:text-dark'
                }`}
              >
                AR Restaurants
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* AR Photo Frames Demo */}
      {activeTab === 'photo-frames' && (
        <AnimatedSection className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <span className="label mb-4 block">AR Photo Frames Demo</span>
                <h2 className="heading-lg mb-6">Bring Your Photos to Life</h2>
                <p className="text-body mb-8">
                  Transform any printed photo into an interactive AR experience. When scanned, 
                  the photo comes alive with videos, animations, or special messages. Perfect for 
                  events, celebrations, marketing, and cherished memories.
                </p>

                <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-dark mb-4">
                    How to Experience the Demo
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Look at the photo on the right showing TAIGA Sports Bar',
                      'Find the QR code in the bottom-right corner of the photo',
                      'Scan the QR code with your smartphone camera',
                      'Watch as the photo transforms into an AR video experience'
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-dark/70 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:namasterides@gmail.com?subject=AR Photo Frame Inquiry&body=Hi, I'm interested in creating AR Photo Frames for my business/event." 
                    className="btn-primary"
                  >
                    Get AR Photo Frames
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative">
                  {/* Demo Photo with QR Code */}
                  <div className="card-bordered p-4 bg-white">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                      <Image
                        src="/demo-photo-frame.jpg"
                        alt="TAIGA Sports Bar & Night Club - AR Photo Frame Demo"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-dark/60 mb-2">
                        Scan the QR code in the photo above
                      </p>
                      <p className="text-xs text-dark/40">
                        The AR video will play automatically on your phone
                      </p>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Live Demo
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* AR Business Cards Demo */}
      {activeTab === 'business-cards' && (
        <AnimatedSection className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <span className="label mb-4 block">AR Business Cards Demo</span>
                <h2 className="heading-lg mb-6">Business Cards That Impress</h2>
                <p className="text-body mb-8">
                  Make your first impression unforgettable with AR-enabled business cards. 
                  When scanned, your card displays videos, portfolios, social links, or 
                  interactive content. Stand out from the competition.
                </p>

                <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-dark mb-4">
                    How to Experience the Demo
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Look at the business card sample on the right',
                      'Find the QR code on the business card',
                      'Scan the QR code with your smartphone camera',
                      'Watch the card come alive with AR content'
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-dark/70 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:namasterides@gmail.com?subject=AR Business Card Inquiry&body=Hi, I'm interested in creating AR Business Cards for my business." 
                    className="btn-primary"
                  >
                    Get AR Business Cards
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative">
                  {/* Demo Business Card Placeholder */}
                  <div className="card-bordered p-6 bg-white">
                    <div className="relative aspect-[1.75/1] rounded-xl overflow-hidden bg-gradient-to-br from-dark to-dark/80 flex items-center justify-center">
                      {/* Placeholder Business Card Design */}
                      <div className="text-center text-white p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg mb-1">Your Name Here</h4>
                        <p className="text-white/60 text-sm mb-4">CEO / Founder</p>
                        <div className="w-20 h-20 mx-auto bg-white rounded-lg p-2">
                          <div className="w-full h-full bg-dark/10 rounded flex items-center justify-center text-dark/40 text-xs">
                            QR Code
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-dark/60 mb-2">
                        Demo coming soon
                      </p>
                      <p className="text-xs text-dark/40">
                        We&apos;re preparing an interactive business card demo
                      </p>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Coming Soon
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* AR Restaurants Demo */}
      {activeTab === 'restaurants' && (
        <AnimatedSection className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp}>
                <span className="label mb-4 block">For Restaurants</span>
                <h2 className="heading-lg mb-6">Transform Your Menu with AR</h2>
                <p className="text-body mb-8">
                  Give your customers a visual feast before they order. AR menus show 
                  3D dish previews, ingredient details, and portion sizes. Increase 
                  orders, reduce returns, and create memorable dining experiences.
                </p>

                {/* Demo Websites */}
                <div className="mb-8">
                  <h3 className="font-semibold text-dark mb-4">Live Demo Websites</h3>
                  <div className="space-y-3">
                    {demoWebsites.map((site, i) => (
                      <a
                        key={i}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-sand rounded-xl hover:bg-primary/5 transition-colors group"
                      >
                        <div>
                          <h4 className="font-medium text-dark group-hover:text-primary transition-colors">
                            {site.name}
                          </h4>
                          <p className="text-sm text-dark/50">{site.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-dark/30 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-dark">How It Works for Restaurants</h3>
                  {[
                    'Fill out the partnership form',
                    'We discuss your menu and needs',
                    'We create your AR menu experience',
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
                <div className="card-bordered p-8 sticky top-24">
                  <h3 className="heading-sm mb-6">Get Started</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Type</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="AR Restaurant Menu">AR Restaurant Menu</option>
                        <option value="AR Photo Frames">AR Photo Frames</option>
                        <option value="AR Business Cards">AR Business Cards</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Full Package">Full Package (All Services)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:outline-none focus:border-primary resize-none transition-colors"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Submit Request
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
              { q: 'Which phones are supported?', a: 'Any modern smartphone with a camera works. iPhone, Android — if it can scan a QR code, it works with Netrik XR.' },
              { q: 'How much does it cost?', a: 'We offer flexible pricing starting at $149/month. Contact us for a custom quote based on your needs.' },
              { q: 'How long does setup take?', a: 'Most projects are completed within 1-2 weeks. We handle everything from design to deployment.' },
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
              We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
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

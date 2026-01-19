'use client';

import { useRef, useState } from 'react';
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

const pricingPlans = [
  {
    name: 'Super Lite',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for individuals and small projects',
    features: [
      { text: 'Up to 5 AR experiences', included: true },
      { text: 'Basic QR code generation', included: true },
      { text: 'Standard 3D models', included: true },
      { text: 'Email support', included: true },
      { text: '1 user account', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Custom QR branding', included: false },
      { text: 'Priority support', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
    color: 'bg-cream-dark',
  },
  {
    name: 'Lite',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Great for growing businesses',
    features: [
      { text: 'Up to 25 AR experiences', included: true },
      { text: 'Custom QR code branding', included: true },
      { text: 'HD 3D models', included: true },
      { text: 'Priority email support', included: true },
      { text: '5 user accounts', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom domain', included: true },
      { text: 'Remove WebAR branding', included: true },
      { text: 'API access', included: false },
    ],
    cta: 'Get Started',
    popular: true,
    color: 'bg-dark text-white',
  },
  {
    name: 'Prime',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'For enterprises and agencies',
    features: [
      { text: 'Unlimited AR experiences', included: true },
      { text: 'White-label solution', included: true },
      { text: 'Ultra HD 3D models', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Enterprise analytics', included: true },
      { text: 'Full API access', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Priority rendering', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'bg-cream-dark',
  },
];

const faqs = [
  {
    question: 'What AR services are included in each plan?',
    answer: 'All plans include access to AR Photo Frames, Restaurant Menu AR, AR Business Cards, Real Estate AR, and 3D Modeling. The difference is in the number of experiences you can create and the quality/features available.'
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes! You can upgrade instantly and the price difference will be prorated. Downgrades take effect at the end of your billing cycle.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans come with a 14-day free trial. No credit card required to start. You can explore all features before committing.'
  },
  {
    question: 'What happens to my AR experiences if I cancel?',
    answer: 'Your AR experiences will remain active for 30 days after cancellation. After that, they will be archived but not deleted — you can reactivate them by resubscribing.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Absolutely! For large organizations with specific needs, we offer custom packages with dedicated support, custom integrations, and volume pricing. Contact our sales team.'
  },
  {
    question: 'What file formats do you support for 3D models?',
    answer: 'We support GLTF, GLB, USDZ (for iOS AR), OBJ, and FBX. Our team can help convert your existing models to AR-ready formats.'
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/3 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="label">Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body max-w-2xl mx-auto mb-10"
          >
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
            No credit card required.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`font-medium ${!isYearly ? 'text-dark' : 'text-dark/50'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-dark rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-primary rounded-full"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-dark' : 'text-dark/50'}`}>
              Yearly
              <span className="ml-2 text-sm text-primary font-semibold">Save 17%</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <AnimatedSection className="section-padding pt-0">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl p-8 flex flex-col h-full ${plan.color} ${
                  plan.popular ? 'ring-4 ring-primary shadow-2xl md:-my-4 md:py-12 z-10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-white/60' : 'text-dark/60'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">
                      ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className={plan.popular ? 'text-white/60' : 'text-dark/60'}>/month</span>
                  </div>
                  {isYearly && (
                    <p className={`text-sm mt-2 ${plan.popular ? 'text-white/50' : 'text-dark/50'}`}>
                      Billed ${plan.yearlyPrice}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white/30' : 'text-dark/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? (plan.popular ? 'text-white/90' : 'text-dark/80')
                          : (plan.popular ? 'text-white/40' : 'text-dark/40')
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={plan.name === 'Prime' ? '/company/about' : '/try-now'}
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

      {/* Feature Comparison */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">Compare Plans</span>
            <h2 className="heading-lg">
              Detailed <span className="text-gradient">Comparison</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-dark/10">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Super Lite</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Lite</th>
                  <th className="text-center py-4 px-4 font-semibold">Prime</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AR Experiences', '5', '25', 'Unlimited'],
                  ['3D Model Quality', 'Standard', 'HD', 'Ultra HD'],
                  ['User Accounts', '1', '5', 'Unlimited'],
                  ['QR Code Branding', 'No', 'Yes', 'Yes'],
                  ['Custom Domain', 'No', 'Yes', 'Yes'],
                  ['White Label', 'No', 'No', 'Yes'],
                  ['API Access', 'No', 'No', 'Yes'],
                  ['Analytics', 'Basic', 'Advanced', 'Enterprise'],
                  ['Support', 'Email', 'Priority', '24/7 Dedicated'],
                  ['Remove Branding', 'No', 'Yes', 'Yes'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-dark/5 hover:bg-cream/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{row[0]}</td>
                    <td className="text-center py-4 px-4 text-dark/70">{row[1]}</td>
                    <td className="text-center py-4 px-4 text-dark/70 bg-primary/5">{row[2]}</td>
                    <td className="text-center py-4 px-4 text-dark/70">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block">FAQs</span>
            <h2 className="heading-lg">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-dark/60">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
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
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.span variants={fadeIn} className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Need Help Deciding?</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Still Have{' '}
                <span className="text-primary">Questions?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Our team is here to help you choose the right plan and get started with AR.
                Schedule a free consultation today.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/company/about" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,102,0.4)] hover:scale-105"
                >
                  Contact Sales
                </Link>
                <Link 
                  href="/try-now" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-dark hover:scale-105"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}

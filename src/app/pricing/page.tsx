'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  
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
    name: 'Free',
    tagline: 'For learning and experimentation',
    monthlyPrice: 0,
    yearlyPrice: 0,
    billingNote: 'Free forever',
    features: [
      'Up to 5 AR experiences',
      '500 AR views per year',
      '100 MB storage',
      'Standard Web AR support',
      'Community access',
    ],
    cta: 'Start for free',
    popular: false,
  },
  {
    name: 'Starter',
    tagline: 'For small businesses and creators',
    monthlyPrice: 29,
    yearlyPrice: 288, // $24/month when billed yearly
    billingNote: '$24/month when billed yearly',
    features: [
      'Up to 25 AR experiences',
      '10,000 AR views per month',
      '1 GB storage',
      'Custom QR code styling',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Growth',
    tagline: 'For growing brands and teams',
    monthlyPrice: 79,
    yearlyPrice: 780, // $65/month when billed yearly
    billingNote: '$65/month when billed yearly',
    features: [
      'Up to 100 AR experiences',
      '50,000 AR views per month',
      '5 GB storage',
      'Advanced analytics dashboard',
      'Custom branded experiences',
      'Priority email support',
    ],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Pro',
    tagline: 'For agencies and businesses at scale',
    monthlyPrice: 199,
    yearlyPrice: 1920, // $160/month when billed yearly
    billingNote: '$160/month when billed yearly',
    features: [
      'Unlimited AR experiences',
      '150,000 AR views per month',
      '10 GB storage',
      'Advanced analytics with export',
      'White label experience',
      'API access',
      'Dedicated support',
    ],
    cta: 'Go Pro',
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: 'AR experiences', free: '5', starter: '25', growth: '100', pro: 'Unlimited' },
  { feature: 'Monthly AR views', free: '500/year', starter: '10,000', growth: '50,000', pro: '150,000' },
  { feature: 'Storage', free: '100 MB', starter: '1 GB', growth: '5 GB', pro: '10 GB' },
  { feature: 'Web AR access', free: true, starter: true, growth: true, pro: true },
  { feature: 'App installation required', free: false, starter: false, growth: false, pro: false },
  { feature: 'QR code customization', free: false, starter: true, growth: true, pro: true },
  { feature: 'Analytics', free: '—', starter: 'Basic', growth: 'Advanced', pro: 'Advanced + export' },
  { feature: 'Branding removal', free: false, starter: false, growth: 'Partial', pro: true },
  { feature: 'API access', free: false, starter: false, growth: false, pro: true },
  { feature: 'Support', free: 'Community', starter: 'Email', growth: 'Priority email', pro: 'Dedicated' },
];

const addOns = [
  { name: 'Extra AR views', price: '$50 per additional 50,000 views' },
  { name: 'Additional storage', price: '$10 per extra 1 GB per month' },
  { name: 'Custom domain mapping', price: '$15 per month' },
  { name: 'Training and onboarding session', price: 'One-time fee of $299' },
];

const faqs = [
  {
    question: 'What AR experiences can I create?',
    answer: 'You can create AR photo stories, food previews for menus, brand moments for packaging and business cards, space previews for real estate, and fully custom AR experiences.'
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of your billing cycle.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, Starter and Growth plans include a 14-day free trial with no credit card required.'
  },
  {
    question: 'What happens if I exceed my view limit?',
    answer: 'You can purchase additional AR views as needed, or upgrade to a higher plan for more included views.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes. For organizations with specific needs, we offer Enterprise packages with unlimited views, dedicated support, and custom integrations.'
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-dark/50 text-sm tracking-wide uppercase mb-6"
          >
            Pricing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-dark mb-6"
          >
            Simple pricing that grows with you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-dark/60 max-w-xl mx-auto mb-12"
          >
            Start small, scale when you're ready. No hidden costs.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-[15px] ${!isYearly ? 'text-dark font-medium' : 'text-dark/50'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-dark/10 rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-5 h-5 bg-primary rounded-full"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-[15px] ${isYearly ? 'text-dark font-medium' : 'text-dark/50'}`}>
              Yearly
              {isYearly && <span className="ml-2 text-xs text-primary font-medium">Save up to 20%</span>}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <AnimatedSection className="py-24 bg-sand">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`bg-cream rounded-2xl p-8 flex flex-col transition-all duration-400 hover:shadow-lg hover:shadow-primary/5 ${
                  plan.popular ? 'ring-2 ring-primary lg:scale-105 lg:z-10' : ''
                }`}
              >
                {plan.popular && (
                  <span className="inline-block text-xs font-medium text-white bg-primary px-3 py-1 rounded-full mb-4 self-start">
                    Most popular
                  </span>
                )}
                
                <h3 className="text-xl font-semibold text-dark mb-1">{plan.name}</h3>
                <p className="text-dark/50 text-sm mb-4">{plan.tagline}</p>
                
                <div className="flex items-baseline gap-1 mb-1">
                  {plan.monthlyPrice === 0 ? (
                    <span className="text-4xl font-bold text-dark">$0</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-dark">
                        ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-dark/50">/month</span>
                    </>
                  )}
                </div>
                
                <p className="text-sm text-dark/40 mb-6">
                  {plan.monthlyPrice === 0 ? plan.billingNote : (isYearly ? `Billed $${plan.yearlyPrice}/year` : plan.billingNote)}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-dark/70">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/try-now"
                  className={`block text-center py-3 px-6 rounded-full text-[15px] font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-dark/5 text-dark hover:bg-dark/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enterprise Section */}
          <motion.div 
            variants={fadeUp}
            className="mt-12 bg-cream rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-dark mb-2">Enterprise</h3>
                <p className="text-dark/60 mb-4">
                  Custom solutions for large teams and high-traffic use cases.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    'Unlimited AR experiences and views',
                    'Unlimited storage',
                    'Dedicated account manager',
                    'Custom integrations',
                    'SLA and priority onboarding',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark/70">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/company/about"
                  className="inline-block bg-primary text-white py-3 px-8 rounded-full text-[15px] font-medium transition-all duration-300 hover:bg-primary/90"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Feature Comparison Table */}
      <AnimatedSection className="py-24 bg-cream">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6 text-center">
            Compare
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-dark mb-16 text-center">
            Compare plans
          </motion.h2>

          <motion.div variants={fadeUp} className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-dark/10">
                  <th className="text-left py-4 px-4 font-semibold text-dark">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-dark">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-dark">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-dark">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-dark/5">
                    <td className="py-4 px-4 font-medium text-dark">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-dark/70">
                      {typeof row.free === 'boolean' ? (
                        row.free ? (
                          <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-dark/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : row.free}
                    </td>
                    <td className="text-center py-4 px-4 text-dark/70">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-dark/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : row.starter}
                    </td>
                    <td className="text-center py-4 px-4 text-dark/70 bg-primary/5">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-dark/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : row.growth}
                    </td>
                    <td className="text-center py-4 px-4 text-dark/70">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <svg className="w-5 h-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-dark/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Optional Add-ons */}
      <AnimatedSection className="py-24 bg-sand">
        <div className="container-custom">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6 text-center">
            Add-ons
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-dark mb-16 text-center">
            Optional add-ons
          </motion.h2>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-cream rounded-xl p-6"
              >
                <h3 className="font-semibold text-dark mb-2">{addon.name}</h3>
                <p className="text-dark/60 text-sm">{addon.price}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Billing Footnote */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-dark/50 text-sm max-w-2xl mx-auto">
              Monthly billing offers flexibility. Yearly billing provides approximately 20 to 30 percent savings. 
              Starter and Growth plans include a 14-day free trial with no credit card required.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="py-24 bg-cream">
        <div className="container-custom max-w-3xl">
          <motion.p variants={fadeIn} className="text-dark/50 text-sm tracking-wide uppercase mb-6 text-center">
            Questions
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-dark mb-16 text-center">
            Common questions
          </motion.h2>

          <motion.div variants={staggerContainer} className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-sand rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-sand/80 transition-colors"
                >
                  <span className="font-medium text-dark pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-dark/40 transition-transform duration-300 ${
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
                  <p className="px-5 pb-5 text-dark/60">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 bg-sand">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-dark mb-6">
              Need help choosing?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-dark/60 text-lg mb-10">
              Our team is here to help you find the right plan. 
              Schedule a free consultation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/company/about" className="btn-primary">
                Contact us
              </Link>
              <Link href="/try-now" className="btn-secondary">
                Start free trial
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

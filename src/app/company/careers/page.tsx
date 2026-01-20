'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

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
    transition: { duration: 0.6 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

function AnimatedSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
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

// Job listings data
const jobOpenings = [
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Florida',
    type: 'Full-time',
    salary: '$80K - $120K',
    description: 'Design beautiful, intuitive interfaces that make AR experiences feel magical.',
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio showcasing web and mobile design',
      'Proficiency in Figma and design systems',
      'Experience with motion design is a plus',
    ],
  },
  {
    id: 'ai-designer',
    title: 'AI Designer',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100K - $150K',
    description: 'Shape how AI enhances AR experiences through intelligent design and interactions.',
    requirements: [
      'Experience designing AI-powered products',
      'Understanding of ML/AI capabilities and limitations',
      'Background in conversational UI or generative design',
      'Ability to translate complex AI concepts into simple UX',
    ],
  },
  {
    id: 'ar-designer',
    title: 'AR Designer',
    department: 'Creative',
    location: 'Remote / Florida',
    type: 'Full-time',
    salary: '$90K - $140K',
    description: 'Create immersive AR experiences that blur the line between digital and physical.',
    requirements: [
      '3+ years of AR/VR design experience',
      'Proficiency in 3D design tools (Blender, Unity, etc.)',
      'Strong understanding of spatial design principles',
      'Portfolio of shipped AR projects',
    ],
  },
  {
    id: 'sales-representative',
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Florida',
    type: 'Full-time',
    salary: '$60K - $100K + Commission',
    description: 'Connect restaurants and businesses with AR experiences that drive engagement.',
    requirements: [
      '2+ years of B2B sales experience',
      'Excellent communication and presentation skills',
      'Experience with CRM tools (Salesforce, HubSpot)',
      'Self-motivated with a track record of exceeding targets',
    ],
  },
  {
    id: 'sales-manager',
    title: 'Sales Manager',
    department: 'Sales',
    location: 'Florida',
    type: 'Full-time',
    salary: '$90K - $130K + Commission',
    description: 'Lead and grow our sales team to expand WebAR adoption across industries.',
    requirements: [
      '5+ years of sales experience with 2+ in management',
      'Proven track record of building and leading sales teams',
      'Experience in SaaS or tech industry preferred',
      'Strategic thinking and hands-on leadership style',
    ],
  },
  {
    id: 'senior-ar-developer',
    title: 'Senior AR Developer',
    department: 'Engineering',
    location: 'Remote / Florida',
    type: 'Full-time',
    salary: '$120K - $180K',
    description: 'Build immersive AR experiences that work seamlessly on any device.',
    requirements: [
      '5+ years of software development experience',
      'Experience with WebXR, AR.js, or similar frameworks',
      'Strong JavaScript/TypeScript skills',
      'Understanding of 3D graphics and rendering',
    ],
  },
];

const culture = [
  { 
    title: 'Fast-Moving', 
    desc: 'We ship fast and learn faster. Every week counts.' 
  },
  { 
    title: 'Creative-First', 
    desc: 'Bold ideas are always welcome. We encourage experimentation.' 
  },
  { 
    title: 'Experiment-Driven', 
    desc: 'We test, measure, and iterate. Data guides our decisions.' 
  },
  { 
    title: 'Impact-Focused', 
    desc: 'Every project should make a difference. Quality matters.' 
  },
];

const benefits = [
  { title: 'Remote-First', desc: 'Work from anywhere in the world' },
  { title: 'Growth', desc: 'Learn and grow with the company' },
  { title: 'Competitive Pay', desc: 'Salary plus equity for all roles' },
  { title: 'Flexible PTO', desc: 'Take time when you need it' },
  { title: 'Best Tools', desc: 'Latest hardware and software' },
  { title: 'Team Events', desc: 'Regular meetups and celebrations' },
];

const teamPhotos = [
  { title: 'Team Meeting', color: 'from-primary/20 to-primary/5' },
  { title: 'Office Space', color: 'from-sand to-cream' },
  { title: 'AR Demo', color: 'from-primary-light/20 to-sand' },
  { title: 'Team Event', color: 'from-cream to-sand' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center pt-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sand to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                We're Hiring!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dark leading-[1.1] mb-8"
            >
              Join the Team
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Building the Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-dark/60 font-light mb-8 max-w-2xl"
            >
              We're creating the future of augmented reality experiences — and we need exceptional people to help us get there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#openings" className="btn-primary">
                View Open Positions
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="mailto:namasterides@gmail.com" className="btn-secondary">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Photos / Video Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-cream to-sand">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="label mb-4 block">Our Team</span>
            <h2 className="heading-lg mb-4">Life at WebAR</h2>
            <p className="text-body max-w-2xl mx-auto">
              Get a glimpse of our team, workspace, and the exciting projects we work on.
            </p>
          </motion.div>

          {/* Photo/Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamPhotos.map((photo, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${photo.color} flex items-center justify-center cursor-pointer overflow-hidden group`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-dark/60 font-medium">{photo.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Placeholder */}
          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-dark/5 to-dark/10 flex items-center justify-center cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <p className="absolute bottom-6 text-dark/50 text-sm">Watch our team story</p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Culture Section */}
      <AnimatedSection className="py-24 bg-sand">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="label mb-4 block">Our Culture</span>
              <h2 className="heading-lg mb-6">We Dream Big & Ship Fast</h2>
              <p className="text-body mb-8">
                We're a small, passionate team that believes in creating meaningful experiences. 
                Every team member has a direct impact on what we build and how we grow.
              </p>
              
              <div className="space-y-4">
                {[
                  'Designers who think in experiences',
                  'Developers who love challenges',
                  'AR creators who push boundaries',
                  'Sales minds who build relationships',
                  'Storytellers who inspire action'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-dark/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerContainer}>
              <div className="grid grid-cols-2 gap-4">
                {culture.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(45, 90, 61, 0.1)' }}
                    className="bg-cream rounded-2xl p-6 text-center transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="w-3 h-3 bg-primary rounded-full"></span>
                    </div>
                    <h3 className="font-semibold mb-1 text-dark">{item.title}</h3>
                    <p className="text-sm text-dark/50">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection className="py-24 bg-cream" id="openings">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="label mb-4 block">Open Positions</span>
            <h2 className="heading-lg mb-4">Find Your Role</h2>
            <p className="text-body max-w-xl mx-auto">
              We're looking for talented individuals who want to shape the future of AR.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobOpenings.map((job, i) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-sand text-dark/60 rounded-full">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-sand text-dark/60 rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full">
                        {job.salary}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    
                    <p className="text-dark/60 mb-4">{job.description}</p>

                    {/* Requirements Preview */}
                    <div className="hidden md:flex flex-wrap gap-2">
                      {job.requirements.slice(0, 2).map((req, j) => (
                        <span key={j} className="text-xs text-dark/40 bg-dark/5 px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 2 && (
                        <span className="text-xs text-primary">+{job.requirements.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <motion.a 
                      href={`mailto:namasterides@gmail.com?subject=Application for ${job.title}&body=Hi WebAR Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0AExperience: %0D%0APortfolio/LinkedIn: %0D%0A%0D%0AThank you!`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Apply Now
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-24 bg-dark text-white">
        <div className="container-custom">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <span className="label mb-4 block !text-white/40">Benefits</span>
            <h2 className="heading-lg">Why Work With Us</h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="bg-white/5 rounded-2xl p-8 text-center transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-sand via-cream to-sand">
        <div className="container-custom text-center">
          <motion.div variants={fadeUp}>
            <h2 className="heading-lg mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              We're always looking for talented people. Send us your resume 
              and tell us how you'd make WebAR better.
            </p>
            <motion.a 
              href="mailto:namasterides@gmail.com?subject=General Application - WebAR&body=Hi WebAR Team,%0D%0A%0D%0AI am interested in joining WebAR.%0D%0A%0D%0AAbout me:%0D%0A%0D%0AName: %0D%0ARole I'm interested in: %0D%0AExperience: %0D%0APortfolio/LinkedIn: %0D%0A%0D%0AWhy I want to join WebAR:%0D%0A%0D%0AThank you!"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}

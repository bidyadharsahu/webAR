'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  options?: ChatOption[]
}

interface ChatOption {
  id: string
  text: string
  action: string
  data?: any
}

interface OrderData {
  plan: string
  planPrice: number
  billingCycle: 'monthly' | 'yearly'
  customerName: string
  customerEmail: string
  customerPhone: string
  businessName: string
  ticketId: string
}

// Generate unique ticket ID
function generateTicketId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `NXR-${timestamp}-${random}`
}

// Format WhatsApp message
function formatWhatsAppMessage(order: OrderData): string {
  return encodeURIComponent(
    `*New Order - Netrik XR*\n\n` +
    `*Ticket ID:* ${order.ticketId}\n` +
    `*Plan:* ${order.plan}\n` +
    `*Price:* $${order.planPrice}/${order.billingCycle === 'monthly' ? 'month' : 'year'}\n` +
    `*Billing:* ${order.billingCycle}\n\n` +
    `*Customer Details:*\n` +
    `Name: ${order.customerName}\n` +
    `Email: ${order.customerEmail}\n` +
    `Phone: ${order.customerPhone}\n` +
    `Business: ${order.businessName}\n\n` +
    `Please confirm this order.`
  )
}

// Admin contact details
const ADMIN_PHONE = '+16562145190'
const ADMIN_PHONE_DISPLAY = '+1 (656) 214-5190'
const ADMIN_EMAIL = 'namasterides@gmail.com'

// AI-like response system with general conversations
const contextResponses = {
  greeting: [
    "Hi there! Welcome to Netrik XR. I'm here to help you discover the perfect AR solution for your business. What brings you here today?",
    "Hello! Great to see you. I can help with AR services, answer questions, or assist with placing an order. How can I help?",
    "Hey! Welcome to Netrik XR. Whether you're curious about AR technology or ready to get started, I'm here to assist!"
  ],
  pricing: [
    "Great question! We have three plans:\n\n" +
    "• **Starter** - $249/mo: Perfect for small businesses\n" +
    "• **Growth** - $399/mo: Most popular with expanded features\n" +
    "• **Premium** - $499/mo: Complete solution\n\n" +
    "Save 20% with yearly billing! Would you like to subscribe?",
  ],
  starter: [
    "The **Starter plan** at $249/month includes:\n\n" +
    "• One-Page Website\n" +
    "• AR Restaurant Menu 3D (5 Items)\n" +
    "• AR Business Card\n" +
    "• QR Code Table Branding\n" +
    "• Basic Local SEO Setup\n" +
    "• Google Maps Integration\n" +
    "• Email Support\n\n" +
    "Would you like to subscribe?"
  ],
  growth: [
    "The **Growth plan** at $399/month is our most popular! Includes:\n\n" +
    "• Multi-Page Website\n" +
    "• AR Restaurant Menu 3D (10 Items)\n" +
    "• AR Business Card\n" +
    "• AI Chatbot\n" +
    "• Video Editing (Edit Only - 10)\n" +
    "• Content Suggestions\n" +
    "• Priority Support\n\n" +
    "Ready to grow? Would you like to subscribe?"
  ],
  premium: [
    "The **Premium plan** at $499/month is our complete solution:\n\n" +
    "• Dynamic Website + Admin Panel\n" +
    "• AR Restaurant Menu 3D (Whole Menu)\n" +
    "• Advanced AI Chatbot (Custom-Trained)\n" +
    "• Social Media Management (Instagram, X, TikTok)\n" +
    "• Monthly Performance Report\n" +
    "• Dedicated Support\n\n" +
    "Would you like to subscribe?"
  ],
  howItWorks: [
    "Here's how Netrik XR works:\n\n" +
    "1. **Scan** - Customers scan QR code\n" +
    "2. **View** - AR opens in browser\n" +
    "3. **Engage** - Products come to life in 3D!\n\n" +
    "No app needed! Want to try a demo?"
  ],
  demo: [
    "We have demos for:\n\n" +
    "• **AR Photo Frames** - Memories come to life\n" +
    "• **AR Business Cards** - Make an impression\n" +
    "• **AR Menus** - Preview dishes in 3D\n\n" +
    "Visit our Try Now page to experience them!"
  ],
  contact: [
    `You can reach us:\n\n` +
    `• **Email:** ${ADMIN_EMAIL}\n` +
    `• **Phone:** ${ADMIN_PHONE_DISPLAY}\n` +
    `• **Location:** Tampa, Florida\n\n` +
    `Or I can help you place an order right here!`
  ],
  aboutUs: [
    "**Netrik XR** is a leading AR technology company based in Tampa, Florida.\n\n" +
    "We specialize in creating immersive augmented reality experiences for businesses - from restaurants to real estate, events to personal memories.\n\n" +
    "Our mission is to bridge the physical and digital worlds through innovative AR solutions."
  ],
  arTechnology: [
    "**What is AR (Augmented Reality)?**\n\n" +
    "AR overlays digital content onto the real world through your smartphone camera. Unlike VR, you don't need special headsets!\n\n" +
    "With Netrik XR, your customers can:\n" +
    "• See 3D models of products\n" +
    "• Watch videos from photos\n" +
    "• Interact with digital content\n\n" +
    "All through their phone's browser - no app download needed!"
  ],
  restaurants: [
    "**AR for Restaurants**\n\n" +
    "Imagine your customers seeing their dishes in 3D before ordering! Our AR menus:\n\n" +
    "• Show realistic 3D food previews\n" +
    "• Increase customer engagement\n" +
    "• Reduce order mistakes\n" +
    "• Stand out from competition\n\n" +
    "Would you like to see a demo or get started?"
  ],
  photoFrames: [
    "**AR Photo Frames**\n\n" +
    "Transform any printed photo into a magical experience! When scanned:\n\n" +
    "• Photos come alive with videos\n" +
    "• Share special messages\n" +
    "• Perfect for events & gifts\n" +
    "• Cherish memories forever\n\n" +
    "Would you like to create one?"
  ],
  businessCards: [
    "**AR Business Cards**\n\n" +
    "Make unforgettable first impressions! Your card can:\n\n" +
    "• Show video introductions\n" +
    "• Display your portfolio in 3D\n" +
    "• Link to your social profiles\n" +
    "• Stand out from ordinary cards\n\n" +
    "Ready to impress your contacts?"
  ],
  thanks: [
    "You're welcome! Is there anything else I can help you with today?",
    "Happy to help! Let me know if you have any other questions.",
    "Glad I could assist! Feel free to ask anything else."
  ],
  help: [
    "I can help you with:\n\n" +
    "• **Products** - AR Photo Frames, Business Cards, Restaurant Menus\n" +
    "• **Pricing** - Our subscription plans\n" +
    "• **Demos** - Try our AR experiences\n" +
    "• **Orders** - Place a subscription order\n" +
    "• **Contact** - Get in touch with our team\n" +
    "• **About AR** - Learn about augmented reality\n\n" +
    "What would you like to know more about?"
  ],
  default: [
    "I'm here to help! Ask me about:\n\n" +
    "• AR services and features\n" +
    "• Pricing plans\n" +
    "• How to get started\n" +
    "• Booking a demo\n\n" +
    "Or I can help you place an order!",
    "I didn't quite catch that, but I'm happy to help! You can ask about our AR services, pricing, demos, or I can help you place an order.",
    "Feel free to ask me anything about Netrik XR - our AR photo frames, business cards, restaurant solutions, or pricing!"
  ]
}

function getResponse(key: keyof typeof contextResponses): string {
  const responses = contextResponses[key]
  return responses[Math.floor(Math.random() * responses.length)]
}

function analyzeIntent(message: string): string {
  const msg = message.toLowerCase().trim()
  
  // Order/purchase intent
  if (msg.includes('buy') || msg.includes('purchase') || msg.includes('subscribe') || msg.includes('order') || msg.includes('sign up')) return 'order'
  
  // Specific plan inquiries
  if (msg.includes('starter')) return 'starter'
  if (msg.includes('growth')) return 'growth'
  if (msg.includes('premium')) return 'premium'
  
  // Pricing
  if (msg.includes('price') || msg.includes('cost') || msg.includes('plan') || msg.includes('pricing') || msg.includes('how much')) return 'pricing'
  
  // How it works / AR technology
  if ((msg.includes('how') && msg.includes('work')) || msg.includes('what is ar') || msg.includes('augmented reality')) return 'arTechnology'
  
  // Specific products
  if (msg.includes('restaurant') || msg.includes('menu') || msg.includes('food')) return 'restaurants'
  if (msg.includes('photo') || msg.includes('frame') || msg.includes('picture')) return 'photoFrames'
  if (msg.includes('business card') || msg.includes('card')) return 'businessCards'
  
  // Demo
  if (msg.includes('demo') || msg.includes('try') || msg.includes('example') || msg.includes('see it')) return 'demo'
  
  // Contact
  if (msg.includes('contact') || msg.includes('email') || msg.includes('call') || msg.includes('phone') || msg.includes('reach')) return 'contact'
  
  // About
  if (msg.includes('about') || msg.includes('who are') || msg.includes('company') || msg.includes('netrik')) return 'aboutUs'
  
  // Greetings
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good evening')) return 'greeting'
  
  // Thanks
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) return 'thanks'
  
  // Help
  if (msg.includes('help') || msg.includes('what can you do') || msg.includes('options')) return 'help'
  
  // Confirmation
  if (msg === 'yes' || msg === 'sure' || msg === 'ok' || msg === 'yeah' || msg === 'yep') return 'confirm'
  
  return 'default'
}

export default function Chatbot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the Netrik XR assistant. I can help with AR services, answer questions, or assist with orders. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      options: [
        { id: '1', text: 'What is AR?', action: 'arTech' },
        { id: '2', text: 'View Pricing', action: 'pricing' },
        { id: '3', text: 'See Demos', action: 'demo' },
        { id: '4', text: 'Subscribe Now', action: 'order' },
        { id: '5', text: 'Contact Us', action: 'contact' },
      ]
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const [orderFlow, setOrderFlow] = useState<{
    active: boolean
    step: 'plan' | 'name' | 'email' | 'phone' | 'business' | 'confirm' | 'complete'
    data: Partial<OrderData>
  }>({ active: false, step: 'plan', data: {} })
  const [lastIntent, setLastIntent] = useState('')
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lastStateRef = useRef(false)
  const stableTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkBackground = () => {
      const buttonCenterY = window.innerHeight - 56
      const buttonCenterX = window.innerWidth - 56
      const elementAtButton = document.elementFromPoint(buttonCenterX, buttonCenterY)
      
      let isOnDarkBg = false
      if (elementAtButton) {
        let element: Element | null = elementAtButton
        while (element && element !== document.body) {
          const bgColor = window.getComputedStyle(element).backgroundColor
          const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
          if (rgbMatch) {
            const luminance = 0.299 * parseInt(rgbMatch[1]) + 0.587 * parseInt(rgbMatch[2]) + 0.114 * parseInt(rgbMatch[3])
            if (luminance < 128 && bgColor !== 'rgba(0, 0, 0, 0)') { isOnDarkBg = true; break }
          }
          if (element.classList.contains('bg-primary') || element.tagName === 'FOOTER') { isOnDarkBg = true; break }
          element = element.parentElement
        }
      }
      
      if (isOnDarkBg !== lastStateRef.current) {
        if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current)
        stableTimeoutRef.current = setTimeout(() => {
          lastStateRef.current = isOnDarkBg
          setIsOverDark(isOnDarkBg)
        }, 150)
      }
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { checkBackground(); ticking = false })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkBackground)
    setTimeout(checkBackground, 100)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkBackground)
      if (stableTimeoutRef.current) clearTimeout(stableTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addBotMessage = (text: string, options?: ChatOption[], delay = 800) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), text, sender: 'bot', timestamp: new Date(), options }])
      setIsTyping(false)
    }, delay)
  }

  const processOrderStep = (userInput: string) => {
    const input = userInput.trim()
    
    switch (orderFlow.step) {
      case 'plan':
        const inputLower = input.toLowerCase()
        let plan = '', price = 0
        if (inputLower.includes('starter') || inputLower === '1') { plan = 'Starter'; price = 249 }
        else if (inputLower.includes('growth') || inputLower === '2') { plan = 'Growth'; price = 399 }
        else if (inputLower.includes('premium') || inputLower === '3') { plan = 'Premium'; price = 499 }
        
        if (plan) {
          setOrderFlow(prev => ({ ...prev, step: 'name', data: { ...prev.data, plan, planPrice: price, billingCycle: 'monthly' } }))
          addBotMessage(`Great! You selected **${plan}** at $${price}/month.\n\nWhat's your full name?`)
        } else {
          addBotMessage("Please select:\n\n1. Starter ($249/mo)\n2. Growth ($399/mo)\n3. Premium ($499/mo)")
        }
        break

      case 'name':
        if (input.length >= 2) {
          setOrderFlow(prev => ({ ...prev, step: 'email', data: { ...prev.data, customerName: input } }))
          addBotMessage(`Thanks, ${input}! What's your email address?`)
        } else addBotMessage("Please enter a valid name:")
        break

      case 'email':
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
          setOrderFlow(prev => ({ ...prev, step: 'phone', data: { ...prev.data, customerEmail: input } }))
          addBotMessage("Perfect! Your phone number? (with country code, e.g., +1 71252569994)")
        } else addBotMessage("Please enter a valid email:")
        break

      case 'phone':
        if (/^[\+]?[0-9\s\-\(\)]{10,}$/.test(input.replace(/\s/g, ''))) {
          setOrderFlow(prev => ({ ...prev, step: 'business', data: { ...prev.data, customerPhone: input } }))
          addBotMessage("Great! What's your business/restaurant name?")
        } else addBotMessage("Please enter a valid phone number:")
        break

      case 'business':
        if (input.length >= 2) {
          const ticketId = generateTicketId()
          const data = { ...orderFlow.data, businessName: input, ticketId } as OrderData
          setOrderFlow(prev => ({ ...prev, step: 'confirm', data }))
          addBotMessage(
            `Order Summary:\n\n**Ticket:** ${ticketId}\n**Plan:** ${data.plan} - $${data.planPrice}/mo\n\n` +
            `**Details:**\n• ${data.customerName}\n• ${data.customerEmail}\n• ${data.customerPhone}\n• ${data.businessName}\n\n` +
            `Type "confirm" to proceed to payment.`,
            [{ id: 'confirm', text: 'Confirm & Pay', action: 'confirmOrder' }, { id: 'edit', text: 'Edit', action: 'editOrder' }]
          )
        } else addBotMessage("Please enter your business name:")
        break

      case 'confirm':
        if (input.toLowerCase().includes('confirm') || input.toLowerCase() === 'yes') {
          const order = orderFlow.data as OrderData
          const whatsappUrl = `https://wa.me/${ADMIN_PHONE.replace(/[^0-9]/g, '')}?text=${formatWhatsAppMessage(order)}`
          localStorage.setItem('pendingOrder', JSON.stringify(order))
          window.open(whatsappUrl, '_blank')
          setOrderFlow(prev => ({ ...prev, step: 'complete' }))
          addBotMessage(
            `Order confirmed! Ticket: **${order.ticketId}**\n\nWhatsApp notification sent. Click below to pay:`,
            [{ id: 'pay', text: `Pay $${order.planPrice}`, action: 'payment' }, { id: 'wa', text: 'WhatsApp', action: 'whatsapp', data: whatsappUrl }]
          )
        } else if (input.toLowerCase().includes('edit')) {
          setOrderFlow({ active: true, step: 'plan', data: {} })
          addBotMessage("Let's start over. Which plan?", [
            { id: 's', text: 'Starter - $249/mo', action: 'selectPlan', data: 'Starter' },
            { id: 'g', text: 'Growth - $399/mo', action: 'selectPlan', data: 'Growth' },
            { id: 'p', text: 'Premium - $499/mo', action: 'selectPlan', data: 'Premium' }
          ])
        }
        break
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return
    setMessages(prev => [...prev, { id: Date.now().toString(), text: inputValue, sender: 'user', timestamp: new Date() }])
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)

    if (orderFlow.active) {
      setTimeout(() => { setIsTyping(false); processOrderStep(currentInput) }, 600)
      return
    }

    const intent = analyzeIntent(currentInput)
    setLastIntent(intent)

    setTimeout(() => {
      setIsTyping(false)
      if (intent === 'order') {
        setOrderFlow({ active: true, step: 'plan', data: {} })
        addBotMessage("Which plan would you like?", [
          { id: 's', text: 'Starter - $249/mo', action: 'selectPlan', data: 'Starter' },
          { id: 'g', text: 'Growth - $399/mo', action: 'selectPlan', data: 'Growth' },
          { id: 'p', text: 'Premium - $499/mo', action: 'selectPlan', data: 'Premium' }
        ], 400)
      } else if (intent === 'confirm' && ['pricing', 'starter', 'growth', 'premium'].includes(lastIntent)) {
        setOrderFlow({ active: true, step: 'plan', data: {} })
        addBotMessage("Let's get you set up. Which plan?", [
          { id: 's', text: 'Starter - $249/mo', action: 'selectPlan', data: 'Starter' },
          { id: 'g', text: 'Growth - $399/mo', action: 'selectPlan', data: 'Growth' },
          { id: 'p', text: 'Premium - $499/mo', action: 'selectPlan', data: 'Premium' }
        ], 400)
      } else if (['pricing', 'starter', 'growth', 'premium'].includes(intent)) {
        addBotMessage(getResponse(intent as keyof typeof contextResponses), [
          { id: 'order', text: 'Subscribe Now', action: 'order' }
        ], 400)
      } else if (intent === 'demo') {
        addBotMessage(getResponse('demo'), [{ id: 'go', text: 'Go to Demos', action: 'goToDemo' }], 400)
      } else {
        addBotMessage(getResponse(intent as keyof typeof contextResponses) || getResponse('default'), [], 400)
      }
    }, 800)
  }

  const handleOptionClick = (option: ChatOption) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), text: option.text, sender: 'user', timestamp: new Date() }])

    switch (option.action) {
      case 'pricing':
        addBotMessage(getResponse('pricing'), [
          { id: 'order', text: 'Subscribe Now', action: 'order' },
          { id: 's', text: 'About Starter', action: 'starterInfo' },
          { id: 'g', text: 'About Growth', action: 'growthInfo' },
          { id: 'p', text: 'About Premium', action: 'premiumInfo' }
        ])
        break
      case 'starterInfo': addBotMessage(getResponse('starter'), [{ id: 'o', text: 'Subscribe to Starter', action: 'selectPlan', data: 'Starter' }]); break
      case 'growthInfo': addBotMessage(getResponse('growth'), [{ id: 'o', text: 'Subscribe to Growth', action: 'selectPlan', data: 'Growth' }]); break
      case 'premiumInfo': addBotMessage(getResponse('premium'), [{ id: 'o', text: 'Subscribe to Premium', action: 'selectPlan', data: 'Premium' }]); break
      case 'order':
        setOrderFlow({ active: true, step: 'plan', data: {} })
        addBotMessage("Which plan would you like?", [
          { id: 's', text: 'Starter - $249/mo', action: 'selectPlan', data: 'Starter' },
          { id: 'g', text: 'Growth - $399/mo', action: 'selectPlan', data: 'Growth' },
          { id: 'p', text: 'Premium - $499/mo', action: 'selectPlan', data: 'Premium' }
        ])
        break
      case 'selectPlan':
        setOrderFlow({ active: true, step: 'plan', data: {} })
        processOrderStep(option.data)
        break
      case 'howItWorks':
        addBotMessage(getResponse('howItWorks'), [{ id: 'd', text: 'See a Demo', action: 'goToDemo' }, { id: 'o', text: 'Get Started', action: 'order' }])
        break
      case 'arTech':
        addBotMessage(getResponse('arTechnology'), [{ id: 'd', text: 'See Demos', action: 'goToDemo' }, { id: 'p', text: 'View Pricing', action: 'pricing' }])
        break
      case 'contact':
        addBotMessage(getResponse('contact'), [{ id: 'o', text: 'Place Order', action: 'order' }])
        break
      case 'demo': case 'goToDemo':
        addBotMessage("Taking you to demos!")
        setTimeout(() => router.push('/try-now'), 1500)
        break
      case 'confirmOrder': processOrderStep('confirm'); break
      case 'editOrder': processOrderStep('edit'); break
      case 'payment':
        const order = orderFlow.data as OrderData
        router.push(`/payment?plan=${order.plan}&price=${order.planPrice}&ticket=${order.ticketId}&name=${encodeURIComponent(order.customerName)}&email=${encodeURIComponent(order.customerEmail)}&phone=${encodeURIComponent(order.customerPhone)}&business=${encodeURIComponent(order.businessName)}`)
        break
      case 'whatsapp': window.open(option.data, '_blank'); break
      default: addBotMessage(getResponse('default'))
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: isOverDark ? '#F5F0E8' : '#2D5A3D',
          color: isOverDark ? '#2D5A3D' : '#FFFFFF',
          boxShadow: isOverDark ? '0 10px 25px -5px rgba(0,0,0,0.2)' : '0 10px 25px -5px rgba(45,90,61,0.3)',
          transition: 'all 400ms ease-in-out',
        }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center z-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[380px] h-[70vh] md:h-[520px] max-h-[520px] bg-cream rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-primary/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Netrik XR Assistant</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
              {orderFlow.active && (
                <button onClick={() => setOrderFlow({ active: false, step: 'plan', data: {} })} className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30">
                  Cancel
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sand/30">
              {messages.map((message) => (
                <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[85%]">
                    <div className={`rounded-2xl px-4 py-2.5 ${message.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-dark rounded-bl-none shadow-sm'}`}>
                      <p className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-dark/40'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.options && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {message.options.map((opt) => (
                          <button key={opt.id} onClick={() => handleOptionClick(opt)} className="text-xs px-3 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all font-medium">
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <motion.span key={i} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: d }} className="w-2 h-2 bg-dark/40 rounded-full" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Progress */}
            {orderFlow.active && (
              <div className="px-4 py-2 bg-primary/5 border-t border-primary/10">
                <div className="flex justify-between text-xs text-dark/60">
                  <span>Order Progress</span>
                  <span className="font-medium text-primary">
                    {orderFlow.step === 'plan' && 'Step 1/5'}
                    {orderFlow.step === 'name' && 'Step 2/5'}
                    {orderFlow.step === 'email' && 'Step 3/5'}
                    {orderFlow.step === 'phone' && 'Step 4/5'}
                    {orderFlow.step === 'business' && 'Step 5/5'}
                    {orderFlow.step === 'confirm' && 'Review'}
                    {orderFlow.step === 'complete' && 'Done!'}
                  </span>
                </div>
                <div className="mt-1 h-1 bg-dark/10 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-primary rounded-full" animate={{ width: orderFlow.step === 'plan' ? '20%' : orderFlow.step === 'name' ? '40%' : orderFlow.step === 'email' ? '60%' : orderFlow.step === 'phone' ? '80%' : '100%' }} />
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-cream border-t border-primary/10">
              <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={orderFlow.active ? (orderFlow.step === 'plan' ? 'Type plan name...' : orderFlow.step === 'name' ? 'Your name...' : orderFlow.step === 'email' ? 'Your email...' : orderFlow.step === 'phone' ? 'Phone number...' : orderFlow.step === 'business' ? 'Business name...' : 'Type message...') : 'Type message...'}
                  className="flex-1 px-4 py-2.5 bg-white border border-primary/10 rounded-full text-sm focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10"
                />
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark disabled:opacity-50" disabled={!inputValue.trim()}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

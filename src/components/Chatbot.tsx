'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const quickReplies = [
  'What is WebAR?',
  'Pricing plans',
  'How does it work?',
  'Contact information',
  'View demos',
]

const botResponses: Record<string, string> = {
  'what is webar': 'WebAR is a web-based augmented reality platform that allows you to create immersive AR experiences that work instantly in any browser. No app downloads required!',
  'pricing': 'We offer 4 pricing plans: Free ($0), Starter ($29/mo), Growth ($79/mo - most popular), and Pro ($199/mo). Visit our pricing page for full details!',
  'how does it work': 'Simple! 1) Users scan your image or QR code with their phone camera. 2) The browser opens instantly. 3) They experience AR content right there. No app needed!',
  'contact': 'You can reach us at namasterides@gmail.com or visit our Contact page. We are based in Tampa, Florida and typically respond within 24 hours.',
  'demo': 'You can try our live demos at /try-now or view examples in our showcase section on the homepage!',
  'careers': 'We are hiring! We have openings for UI/UX Designers, AR Designers, AI Designers, Sales Representatives, and more. Check out our Careers page!',
  'features': 'WebAR works on any smartphone, requires no app installation, offers instant access, higher engagement, and easy content updates. It\'s perfect for restaurants, real estate, marketing, and more!',
  'default': 'I\'m here to help! You can ask me about our pricing, how WebAR works, view demos, or contact information. What would you like to know?',
}

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim()
  
  if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
    return botResponses.pricing
  }
  if (message.includes('how') || message.includes('work')) {
    return botResponses['how does it work']
  }
  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return botResponses.contact
  }
  if (message.includes('demo') || message.includes('try') || message.includes('example')) {
    return botResponses.demo
  }
  if (message.includes('job') || message.includes('career') || message.includes('hiring')) {
    return botResponses.careers
  }
  if (message.includes('feature') || message.includes('what') || message.includes('webar')) {
    return botResponses['what is webar']
  }
  
  return botResponses.default
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m the WebAR assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Track if chat button overlaps with green/primary colored sections
  useEffect(() => {
    const checkOverlapWithGreen = () => {
      // Get button position (bottom-right corner)
      const buttonBottom = window.innerHeight - 24 // bottom-6 = 24px
      const buttonRight = window.innerWidth - 24
      const buttonCenterY = buttonBottom - 32 // center of button
      const buttonCenterX = buttonRight - 32
      
      // Get element at button position
      const elementAtButton = document.elementFromPoint(buttonCenterX, buttonCenterY)
      
      if (elementAtButton) {
        // Check if element or its parents have green/primary background
        let element: Element | null = elementAtButton
        let isOverGreen = false
        
        while (element && element !== document.body) {
          const computedStyle = window.getComputedStyle(element)
          const bgColor = computedStyle.backgroundColor
          
          // Check for primary green color (rgb(45, 90, 61) or similar)
          if (bgColor.includes('45, 90, 61') || 
              bgColor.includes('45,90,61') ||
              element.classList.contains('bg-primary') ||
              element.classList.contains('from-primary') ||
              element.tagName === 'FOOTER') {
            isOverGreen = true
            break
          }
          element = element.parentElement
        }
        
        setIsNearFooter(isOverGreen)
      }
    }

    // Debounced version to prevent flickering
    const handleScrollDebounced = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(checkOverlapWithGreen, 50)
    }

    window.addEventListener('scroll', handleScrollDebounced, { passive: true })
    window.addEventListener('resize', checkOverlapWithGreen)
    checkOverlapWithGreen() // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced)
      window.removeEventListener('resize', checkOverlapWithGreen)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800)
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center z-50 transition-all duration-300 ${isNearFooter ? 'bg-cream text-primary shadow-dark/20 hover:bg-white' : 'bg-primary text-white shadow-primary/30 hover:bg-primary-dark'}`}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[350px] h-[60vh] md:h-[480px] max-h-[480px] bg-cream rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-primary/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">WebAR Assistant</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sand/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white text-dark rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-dark/40'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-dark rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-dark/40 rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-dark/40 rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-dark/40 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 bg-sand/30 border-t border-primary/5">
                <p className="text-xs text-dark/50 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1.5 bg-white text-dark/70 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-cream border-t border-primary/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-white border border-primary/10 rounded-full text-sm focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!inputValue.trim()}
                >
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

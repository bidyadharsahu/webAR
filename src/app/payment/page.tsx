'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

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

// Plan features for display
const planFeatures: Record<string, string[]> = {
  Starter: [
    'One-Page Website',
    'AR Menu (5 dishes)',
    'QR Code Design',
    'Basic SEO',
    'Email Support'
  ],
  Growth: [
    'Multi-Page Website',
    'Unlimited AR Menu Items',
    'AI Chatbot',
    'Photo & Video Editing',
    'Priority Support'
  ],
  Premium: [
    'Dynamic Website + Admin',
    'Advanced AR with 3D',
    'Custom AI Chatbot',
    'Social Media Management',
    'Dedicated Account Manager'
  ]
}

function PaymentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [step, setStep] = useState<'review' | 'payment' | 'processing' | 'success' | 'failed'>('review')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card')
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' })
  const [upiId, setUpiId] = useState('')
  const [selectedBank, setSelectedBank] = useState('')
  const [isYearly, setIsYearly] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    // Get order data from URL params or localStorage
    const plan = searchParams.get('plan')
    const price = searchParams.get('price')
    const ticket = searchParams.get('ticket')
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const phone = searchParams.get('phone')
    const business = searchParams.get('business')

    if (plan && price && ticket) {
      setOrderData({
        plan: plan,
        planPrice: parseInt(price),
        billingCycle: 'monthly',
        customerName: name ? decodeURIComponent(name) : '',
        customerEmail: email ? decodeURIComponent(email) : '',
        customerPhone: phone ? decodeURIComponent(phone) : '',
        businessName: business ? decodeURIComponent(business) : '',
        ticketId: ticket
      })
    } else {
      // Try to get from localStorage
      const stored = localStorage.getItem('pendingOrder')
      if (stored) {
        setOrderData(JSON.parse(stored))
      }
    }
  }, [searchParams])

  const calculatePrice = () => {
    if (!orderData) return { monthly: 0, yearly: 0, savings: 0 }
    const monthly = orderData.planPrice
    const yearly = Math.round(monthly * 12 * 0.8) // 20% off
    const savings = (monthly * 12) - yearly
    return { monthly, yearly, savings }
  }

  const { monthly, yearly, savings } = calculatePrice()
  const finalPrice = isYearly ? yearly : monthly
  const billingText = isYearly ? '/year' : '/month'

  const validateCard = () => {
    const newErrors: Record<string, string> = {}
    
    if (!cardDetails.number || cardDetails.number.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Enter valid 16-digit card number'
    }
    if (!cardDetails.expiry || !/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
      newErrors.expiry = 'Enter valid expiry (MM/YY)'
    }
    if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
      newErrors.cvv = 'Enter valid CVV'
    }
    if (!cardDetails.name || cardDetails.name.length < 2) {
      newErrors.cardName = 'Enter cardholder name'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateUPI = () => {
    const newErrors: Record<string, string> = {}
    if (!upiId || !/@/.test(upiId)) {
      newErrors.upi = 'Enter valid UPI ID (e.g., name@bank)'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateNetbanking = () => {
    const newErrors: Record<string, string> = {}
    if (!selectedBank) {
      newErrors.bank = 'Please select a bank'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePayment = async () => {
    let isValid = false
    
    if (paymentMethod === 'card') isValid = validateCard()
    else if (paymentMethod === 'upi') isValid = validateUPI()
    else if (paymentMethod === 'netbanking') isValid = validateNetbanking()
    
    if (!isValid) return
    
    setStep('processing')
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // For demo, always succeed
    const success = true // In real implementation, check payment gateway response
    
    if (success) {
      // Send notifications
      const finalOrder = {
        ...orderData,
        billingCycle: isYearly ? 'yearly' : 'monthly',
        finalPrice,
        paymentMethod,
        paymentDate: new Date().toISOString()
      }
      
      // Store successful order
      localStorage.setItem('completedOrder', JSON.stringify(finalOrder))
      localStorage.removeItem('pendingOrder')
      
      // Open WhatsApp with payment confirmation
      const whatsappMessage = encodeURIComponent(
        `*Payment Confirmed - Netrik XR*\n\n` +
        `*Ticket:* ${orderData?.ticketId}\n` +
        `*Plan:* ${orderData?.plan}\n` +
        `*Amount Paid:* $${finalPrice}${billingText}\n` +
        `*Customer:* ${orderData?.customerName}\n` +
        `*Email:* ${orderData?.customerEmail}\n` +
        `*Phone:* ${orderData?.customerPhone}\n` +
        `*Business:* ${orderData?.businessName}\n\n` +
        `Payment completed successfully.`
      )
      window.open(`https://wa.me/16562145190?text=${whatsappMessage}`, '_blank')
      
      setStep('success')
    } else {
      setStep('failed')
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(' ') : value
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4)
    }
    return v
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark/60">Loading order details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-sand pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-block text-2xl font-bold text-primary mb-4">
            Netrik XR
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-2">
            Complete Your Order
          </h1>
          <p className="text-dark/60">
            Ticket ID: <span className="font-mono font-medium">{orderData.ticketId}</span>
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center mb-12"
        >
          {['Review', 'Payment', 'Complete'].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                (step === 'review' && i === 0) || 
                (step === 'payment' && i <= 1) || 
                (['processing', 'success'].includes(step) && i <= 2)
                  ? 'bg-primary text-white' 
                  : 'bg-dark/10 text-dark/40'
              }`}>
                {(['processing', 'success'].includes(step) && i < 2) ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={`ml-2 text-sm ${
                (step === 'review' && i === 0) || 
                (step === 'payment' && i <= 1) || 
                (['processing', 'success'].includes(step) && i <= 2)
                  ? 'text-dark font-medium' 
                  : 'text-dark/40'
              }`}>{s}</span>
              {i < 2 && <div className={`w-12 h-0.5 mx-4 ${
                (step === 'payment' && i === 0) || (['processing', 'success'].includes(step) && i <= 1)
                  ? 'bg-primary' 
                  : 'bg-dark/10'
              }`} />}
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Left - Form/Status */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              
              {/* Review Step */}
              {step === 'review' && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-dark mb-6">Review Your Order</h2>
                  
                  {/* Customer Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-dark/10">
                      <span className="text-dark/60">Name</span>
                      <span className="font-medium">{orderData.customerName}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark/10">
                      <span className="text-dark/60">Email</span>
                      <span className="font-medium">{orderData.customerEmail}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark/10">
                      <span className="text-dark/60">Phone</span>
                      <span className="font-medium">{orderData.customerPhone}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-dark/10">
                      <span className="text-dark/60">Business</span>
                      <span className="font-medium">{orderData.businessName}</span>
                    </div>
                  </div>

                  {/* Billing Toggle */}
                  <div className="bg-sand/50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Billing Cycle</span>
                      <div className="flex items-center gap-3">
                        <span className={!isYearly ? 'font-medium' : 'text-dark/50'}>Monthly</span>
                        <button
                          onClick={() => setIsYearly(!isYearly)}
                          className="relative w-12 h-6 bg-dark/10 rounded-full p-0.5"
                        >
                          <motion.div
                            className="w-5 h-5 bg-primary rounded-full"
                            animate={{ x: isYearly ? 24 : 0 }}
                          />
                        </button>
                        <span className={isYearly ? 'font-medium' : 'text-dark/50'}>Yearly</span>
                      </div>
                    </div>
                    {isYearly && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-primary text-sm mt-2"
                      >
                        Save ${savings}/year with yearly billing
                      </motion.p>
                    )}
                  </div>

                  <button
                    onClick={() => setStep('payment')}
                    className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-dark mb-6">Payment Method</h2>
                  
                  {/* Payment Method Tabs */}
                  <div className="flex gap-2 mb-6">
                    {[
                      { id: 'card', label: 'Card', icon: '💳' },
                      { id: 'upi', label: 'UPI', icon: '📱' },
                      { id: 'netbanking', label: 'Net Banking', icon: '🏦' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        onClick={() => { setPaymentMethod(method.id as any); setErrors({}) }}
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          paymentMethod === method.id
                            ? 'bg-primary text-white'
                            : 'bg-sand/50 text-dark/70 hover:bg-sand'
                        }`}
                      >
                        <span className="mr-1">{method.icon}</span> {method.label}
                      </button>
                    ))}
                  </div>

                  {/* Card Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-dark/70 mb-1">Card Number</label>
                        <input
                          type="text"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.cardNumber ? 'border-red-500' : 'border-dark/10'}`}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-dark/70 mb-1">Expiry</label>
                          <input
                            type="text"
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))}
                            placeholder="MM/YY"
                            maxLength={5}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.expiry ? 'border-red-500' : 'border-dark/10'}`}
                          />
                          {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-dark/70 mb-1">CVV</label>
                          <input
                            type="password"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                            placeholder="•••"
                            maxLength={4}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.cvv ? 'border-red-500' : 'border-dark/10'}`}
                          />
                          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-dark/70 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.cardName ? 'border-red-500' : 'border-dark/10'}`}
                        />
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>
                    </div>
                  )}

                  {/* UPI Form */}
                  {paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-sm text-dark/70 mb-1">UPI ID</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi"
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.upi ? 'border-red-500' : 'border-dark/10'}`}
                      />
                      {errors.upi && <p className="text-red-500 text-xs mt-1">{errors.upi}</p>}
                      <p className="text-xs text-dark/50 mt-2">Enter your UPI ID (e.g., name@paytm, name@gpay)</p>
                    </div>
                  )}

                  {/* Net Banking Form */}
                  {paymentMethod === 'netbanking' && (
                    <div>
                      <label className="block text-sm text-dark/70 mb-2">Select Bank</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'Yes Bank'].map((bank) => (
                          <button
                            key={bank}
                            onClick={() => setSelectedBank(bank)}
                            className={`p-3 border rounded-xl text-sm transition-all ${
                              selectedBank === bank
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-dark/10 hover:border-dark/20'
                            }`}
                          >
                            {bank}
                          </button>
                        ))}
                      </div>
                      {errors.bank && <p className="text-red-500 text-xs mt-2">{errors.bank}</p>}
                    </div>
                  )}

                  {/* Security Note */}
                  <div className="flex items-center gap-2 mt-6 mb-6 p-3 bg-green-50 rounded-xl">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm text-green-700">Your payment is secure and encrypted</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep('review')}
                      className="flex-1 border border-dark/20 text-dark py-3 rounded-full font-medium hover:bg-dark/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePayment}
                      className="flex-1 bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
                    >
                      Pay ${finalPrice}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Processing Step */}
              {step === 'processing' && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center"
                >
                  <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <h2 className="text-xl font-semibold text-dark mb-2">Processing Payment</h2>
                  <p className="text-dark/60">Please wait while we process your payment...</p>
                  <p className="text-sm text-dark/40 mt-4">Do not close this window</p>
                </motion.div>
              )}

              {/* Success Step */}
              {step === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-semibold text-dark mb-2">Payment Successful!</h2>
                  <p className="text-dark/60 mb-6">
                    Thank you for subscribing to Netrik XR {orderData.plan} plan.
                  </p>
                  
                  <div className="bg-sand/50 rounded-xl p-4 mb-6 text-left">
                    <div className="flex justify-between mb-2">
                      <span className="text-dark/60">Ticket ID</span>
                      <span className="font-mono font-medium">{orderData.ticketId}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-dark/60">Amount Paid</span>
                      <span className="font-semibold text-primary">${finalPrice}{billingText}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark/60">Plan</span>
                      <span className="font-medium">{orderData.plan}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
                    <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Confirmation email sent to {orderData.customerEmail}</li>
                      <li>• SMS confirmation to {orderData.customerPhone}</li>
                      <li>• Our team will contact you within 24 hours</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/"
                      className="flex-1 border border-dark/20 text-dark py-3 rounded-full font-medium hover:bg-dark/5 transition-colors text-center"
                    >
                      Go Home
                    </Link>
                    <Link
                      href="/try-now"
                      className="flex-1 bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors text-center"
                    >
                      Explore Demos
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Failed Step */}
              {step === 'failed' && (
                <motion.div
                  key="failed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center"
                >
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-dark mb-2">Payment Failed</h2>
                  <p className="text-dark/60 mb-6">
                    There was an issue processing your payment. Please try again.
                  </p>
                  <button
                    onClick={() => setStep('payment')}
                    className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right - Order Summary */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
            >
              <h3 className="font-semibold text-dark mb-4">Order Summary</h3>
              
              <div className="border border-primary/20 rounded-xl p-4 mb-4 bg-primary/5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-dark">{orderData.plan} Plan</h4>
                    <p className="text-sm text-dark/60">{isYearly ? 'Yearly' : 'Monthly'} billing</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">${finalPrice}</p>
                    <p className="text-sm text-dark/60">{billingText}</p>
                  </div>
                </div>
                {isYearly && (
                  <p className="text-sm text-green-600 font-medium">
                    Saving ${savings}/year
                  </p>
                )}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-dark mb-2">Includes:</h4>
                <ul className="space-y-2">
                  {(planFeatures[orderData.plan] || []).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark/70">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dark/10 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-dark/60">Subtotal</span>
                  <span>${finalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-dark/60">Tax</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-dark/10">
                  <span>Total</span>
                  <span className="text-primary">${finalPrice}{billingText}</span>
                </div>
              </div>

              {/* Support */}
              <div className="mt-6 pt-4 border-t border-dark/10">
                <p className="text-xs text-dark/50 mb-2">Need help?</p>
                <a 
                  href="https://wa.me/16562145190" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}

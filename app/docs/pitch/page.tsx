'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Brand colors from design spec
const colors = {
  bgPrimary: '#0f1419',
  bgSecondary: '#1a2129',
  bgSurface: '#242d38',
  textPrimary: '#f5f5f0',
  textSecondary: '#9ca3af',
  textMuted: '#6b7280',
  accentPurple: '#7C3AED',
  accentGreen: '#2d4a3e',
  accentOrange: '#F97316',
}

// Slide components
function TitleSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.bgPrimary} 0%, ${colors.bgSecondary} 100%)` }}>
      <div className="max-w-5xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <span className="font-serif text-6xl md:text-8xl" style={{ color: colors.textPrimary }}>OcheScore</span>
        </div>
        
        {/* Tagline */}
        <h1 className="font-serif text-3xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
          Score like a pro
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12" style={{ color: colors.textSecondary }}>
          The modern dart scoring app for casual and competitive players
        </p>
        
        {/* Visual accent */}
        <div className="flex justify-center gap-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentPurple }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentOrange }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
        </div>
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left: Problem statement */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🤔</span>
              <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>The Problem</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
              What&apos;s the checkout from 167?
            </h2>
            
            <div className="space-y-4" style={{ color: colors.textSecondary }}>
              <p className="text-xl">
                Dart players waste mental energy on checkout math instead of focusing on their throw.
              </p>
              <p className="text-lg">
                Paper scoring is error-prone. Existing apps are clunky and outdated.
              </p>
            </div>
          </div>
          
          {/* Right: Stats */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentPurple }}>68%</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>of players struggle with checkout calculations</div>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentPurple }}>170</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>possible checkout combinations to memorize</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.accentPurple}20 0%, ${colors.bgPrimary} 50%)` }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">✨</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>The Solution</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
          Instant checkout calculations
        </h2>
        
        <p className="text-xl mb-12 max-w-2xl" style={{ color: colors.textSecondary }}>
          Enter your score, see the optimal checkout path immediately. No mental math, no lookup tables.
        </p>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['⚡ One-tap scoring', '🎯 Real-time checkouts', '📊 Stats tracking'].map((feature) => (
            <div 
              key={feature} 
              className="px-6 py-3 rounded-full border text-lg"
              style={{ borderColor: colors.accentOrange, color: colors.accentOrange }}
            >
              {feature}
            </div>
          ))}
        </div>
        
        {/* Key differentiator */}
        <div className="p-6 rounded-xl max-w-xl" style={{ backgroundColor: colors.bgSurface }}>
          <p className="text-lg italic font-serif" style={{ color: colors.textPrimary }}>
            &quot;OcheScore lets you focus on your throw, not your math.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📊</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>Market Opportunity</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Darts is going mainstream
        </h2>
        
        {/* Market size grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$2.1B</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>TAM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>Global darts market</div>
          </div>
          <div className="text-center p-6 rounded-xl border-2" style={{ backgroundColor: colors.bgSurface, borderColor: colors.accentPurple }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$180M</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>SAM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>Digital scoring apps</div>
          </div>
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-5xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$5M</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: colors.textMuted }}>SOM</div>
            <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>Year 3 target</div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="px-6 py-3 rounded-full" style={{ backgroundColor: colors.accentGreen }}>
            <span className="text-lg font-mono" style={{ color: colors.textPrimary }}>+12% annual growth (PDC viewership up 40%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🚀</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>Traction</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Launch-ready product
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Metrics */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">🎯</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>501 & Cricket</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Game modes ready</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">📱</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>iOS & Android</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Cross-platform</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <span className="text-3xl">⚡</span>
              <div>
                <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>Offline</div>
                <div className="text-sm" style={{ color: colors.textMuted }}>Works in any pub</div>
              </div>
            </div>
          </div>
          
          {/* Right: Launch plan */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: colors.accentOrange }}>30-Day Launch Plan</h3>
            <div className="space-y-3" style={{ color: colors.textSecondary }}>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentPurple }}>●</span>
                <span>Week 1: Reddit & Discord community seeding</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentOrange }}>●</span>
                <span>Week 2: Product Hunt + YouTuber partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: colors.accentGreen }}>●</span>
                <span>Week 3-4: TikTok/Instagram growth campaign</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t" style={{ borderColor: colors.bgSurface }}>
              <div className="text-sm" style={{ color: colors.textMuted }}>Target Month 1</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.textPrimary }}>10K downloads • 5% premium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💎</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>Product</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-8" style={{ color: colors.textPrimary }}>
          Simple, fast, beautiful
        </h2>
        
        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>One-Tap Scoring</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Enter throws instantly with our optimized keypad. No complicated menus.
            </p>
          </div>
          
          <div className="p-6 rounded-xl border-2" style={{ backgroundColor: colors.bgSurface, borderColor: colors.accentPurple }}>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>Smart Checkouts</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              See optimal checkout paths in real-time. Multiple options for every score.
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>Track Progress</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Averages, checkout rates, 180s count. See your improvement over time.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <span className="text-lg font-mono px-6 py-3 rounded-full" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>
            ochescore.ashketing.com
          </span>
        </div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💰</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>Business Model</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Freemium with premium upgrades
        </h2>
        
        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>Free Tier</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$0</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Basic scoring, checkout hints</div>
          </div>
          
          <div className="p-6 rounded-xl relative" style={{ backgroundColor: colors.accentPurple }}>
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: colors.accentOrange, color: colors.bgPrimary }}>
              TARGET TIER
            </div>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Pro Monthly</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$4.99</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Full stats, multiplayer, history</div>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>Pro Annual</div>
            <div className="text-3xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$39.99</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Best value, 33% savings</div>
          </div>
        </div>
        
        {/* Unit economics */}
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentOrange }}>5%</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Target conversion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentOrange }}>$4.50</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>ARPU</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold" style={{ color: colors.accentOrange }}>&lt;5%</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Monthly churn</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgPrimary }}>
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🎯</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>Competition</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Modern UX wins
        </h2>
        
        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <th className="text-left py-4 px-4" style={{ color: colors.textMuted }}></th>
                <th className="text-center py-4 px-4" style={{ color: colors.textMuted }}>Darts Connect</th>
                <th className="text-center py-4 px-4" style={{ color: colors.textMuted }}>MyDartTraining</th>
                <th className="text-center py-4 px-4 rounded-t-lg" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>OcheScore</th>
              </tr>
            </thead>
            <tbody style={{ color: colors.textSecondary }}>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>UI/UX</td>
                <td className="text-center py-3 px-4">Dated, complex</td>
                <td className="text-center py-3 px-4">Training focused</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentPurple}40` }}>Modern, minimal</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Free tier</td>
                <td className="text-center py-3 px-4">Limited</td>
                <td className="text-center py-3 px-4">Very limited</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentPurple}40` }}>Full scoring free</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${colors.bgSurface}` }}>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Offline mode</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4">✅</td>
                <td className="text-center py-3 px-4" style={{ backgroundColor: `${colors.accentPurple}40` }}>✅</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium" style={{ color: colors.textPrimary }}>Checkout hints</td>
                <td className="text-center py-3 px-4">Manual</td>
                <td className="text-center py-3 px-4">❌</td>
                <td className="text-center py-3 px-4 rounded-b-lg" style={{ backgroundColor: `${colors.accentPurple}40` }}>✅ Real-time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: colors.bgSecondary }}>
      <div className="max-w-5xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl">🤝</span>
          <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>The Ask</span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: colors.textPrimary }}>
          Help us reach every dartboard
        </h2>
        
        {/* Ask details */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          <div className="p-8 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Seeking</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$100K</div>
            <div style={{ color: colors.textSecondary }}>Pre-seed round</div>
          </div>
          <div className="p-8 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Use of funds</div>
            <div className="space-y-2 text-left" style={{ color: colors.textSecondary }}>
              <div>• App development & polish</div>
              <div>• Marketing launch campaign</div>
              <div>• League partnership program</div>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="p-6 rounded-xl inline-block" style={{ backgroundColor: colors.accentPurple }}>
          <p className="text-lg mb-2" style={{ color: colors.textPrimary }}>Let&apos;s talk</p>
          <p className="font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>ochescore.ashketing.com</p>
        </div>
      </div>
    </div>
  )
}

function VisionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 md:p-16" style={{ background: `linear-gradient(135deg, ${colors.bgPrimary} 0%, ${colors.accentPurple}40 100%)` }}>
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8" style={{ color: colors.textPrimary }}>
          The future of dart scoring is mobile-first
        </h2>
        
        <p className="text-xl md:text-2xl mb-12" style={{ color: colors.textSecondary }}>
          Every player deserves professional-grade scoring in their pocket.
        </p>
        
        {/* Visual accent */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="w-20 h-1 rounded" style={{ backgroundColor: colors.accentPurple }} />
          <span className="text-4xl">🎯</span>
          <div className="w-20 h-1 rounded" style={{ backgroundColor: colors.accentPurple }} />
        </div>
        
        <div className="font-serif text-3xl" style={{ color: colors.accentOrange }}>
          OcheScore
        </div>
        <p className="text-lg mt-2" style={{ color: colors.textMuted }}>
          Score like a pro
        </p>
      </div>
    </div>
  )
}

// Slide configuration
const slides = [
  { id: 1, component: <TitleSlide />, label: 'Title' },
  { id: 2, component: <ProblemSlide />, label: 'Problem' },
  { id: 3, component: <SolutionSlide />, label: 'Solution' },
  { id: 4, component: <MarketSlide />, label: 'Market' },
  { id: 5, component: <TractionSlide />, label: 'Traction' },
  { id: 6, component: <ProductSlide />, label: 'Product' },
  { id: 7, component: <BusinessModelSlide />, label: 'Business' },
  { id: 8, component: <CompetitionSlide />, label: 'Competition' },
  { id: 9, component: <TeamSlide />, label: 'Ask' },
  { id: 10, component: <VisionSlide />, label: 'Vision' },
]

export default function PitchDeck() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goNext = useCallback(() => {
    setCurrent(c => Math.min(c + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent(c => Math.max(c - 1, 0))
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (diff > 50) goNext()
    if (diff < -50) goPrev()
    setTouchStart(null)
  }

  return (
    <div 
      className="h-screen w-screen overflow-hidden font-sans fixed inset-0"
      style={{ backgroundColor: colors.bgPrimary }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(i)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
          >
            <div 
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'w-8' : 'hover:scale-125'
              }`}
              style={{ 
                backgroundColor: i === current ? colors.accentPurple : colors.textMuted 
              }}
            />
            {/* Tooltip */}
            <span 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ backgroundColor: colors.bgSurface, color: colors.textSecondary }}
            >
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div 
        className="fixed bottom-6 right-6 font-mono text-sm z-50"
        style={{ color: colors.textMuted }}
      >
        {current + 1} / {slides.length}
      </div>

      {/* Navigation arrows (desktop) */}
      <button
        onClick={goPrev}
        disabled={current === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 p-4 rounded-full transition-opacity hidden md:block disabled:opacity-20"
        style={{ backgroundColor: `${colors.bgSurface}80`, color: colors.textPrimary }}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={goNext}
        disabled={current === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 p-4 rounded-full transition-opacity hidden md:block disabled:opacity-20"
        style={{ backgroundColor: `${colors.bgSurface}80`, color: colors.textPrimary }}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Instructions overlay (first load) */}
      <div 
        className="fixed top-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm z-50"
        style={{ backgroundColor: `${colors.bgSurface}90`, color: colors.textMuted }}
      >
        ← → keys or swipe to navigate
      </div>
    </div>
  )
}

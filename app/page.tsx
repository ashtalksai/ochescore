"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  Trophy,
  ChevronRight,
  Smartphone,
  BarChart3,
  Users,
  Sparkles,
  Check,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// Animated dartboard for hero
function HeroDartboard() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7C3AED]/30 via-transparent to-transparent blur-3xl" />
      
      {/* Dartboard SVG */}
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
        {/* Outer ring */}
        <circle cx="200" cy="200" r="190" fill="#1a1a1a" stroke="#333" strokeWidth="2" />
        
        {/* Double ring */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="#7C3AED" strokeWidth="12" opacity="0.8" />
        
        {/* Outer single */}
        <circle cx="200" cy="200" r="158" fill="#0f0f0f" />
        
        {/* Triple ring */}
        <circle cx="200" cy="200" r="100" fill="none" stroke="#F97316" strokeWidth="10" opacity="0.9" />
        
        {/* Inner single */}
        <circle cx="200" cy="200" r="90" fill="#1a1a1a" />
        
        {/* Outer bull */}
        <motion.circle 
          cx="200" cy="200" r="32" 
          fill="#F97316"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Bullseye */}
        <motion.circle 
          cx="200" cy="200" r="14" 
          fill="#7C3AED"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Number markers - just a few for effect */}
        {[20, 1, 18, 4, 13, 6, 10, 15, 2, 17].map((num, i) => {
          const angle = (i * 36 - 99) * (Math.PI / 180);
          const x = 200 + Math.cos(angle) * 178;
          const y = 200 + Math.sin(angle) * 178;
          return (
            <text
              key={num}
              x={x}
              y={y}
              fill="#888"
              fontSize="14"
              fontFamily="monospace"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {num}
            </text>
          );
        })}
      </svg>
      
      {/* Animated dart hitting */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <div className="w-4 h-4 bg-[#10B981] rounded-full shadow-lg shadow-[#10B981]/50" />
      </motion.div>
      
      {/* Score popup */}
      <motion.div
        className="absolute top-[40%] left-[60%] bg-[#7C3AED] text-white font-bold px-3 py-1 rounded-full text-sm"
        initial={{ y: 0, opacity: 0, scale: 0.5 }}
        animate={{ y: -30, opacity: [0, 1, 1, 0], scale: 1 }}
        transition={{ delay: 1.3, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
      >
        +50
      </motion.div>
    </div>
  );
}

// Stats counter animation
function AnimatedStat({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="text-center">
      <motion.div 
        className="text-3xl md:text-5xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {value}<span className="text-[#F97316]">{suffix}</span>
      </motion.div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Grain overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#F97316] flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">OcheScore</span>
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</Link>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/login" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Login</Link>
            <Link href="/signup">
              <Button variant="outline" className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 px-6">
                Sign Up
              </Button>
            </Link>
            <Link href="/app">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6">
                Play Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 py-6 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="#features" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#pricing" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="/login" className="block text-gray-300 hover:text-white py-2">Login</Link>
            <Link href="/signup">
              <Button variant="outline" className="w-full border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 mt-2">
                Sign Up
              </Button>
            </Link>
            <Link href="/app">
              <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-2">
                Play Now
              </Button>
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[128px]" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#F97316]/15 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  The dart scorer that doesn't suck
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Tap the board.
                <br />
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#F97316] bg-clip-text text-transparent">
                  See the magic.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Interactive dartboard scoring that feels as smooth as your throw. 
                No setup, no clutter, no BS.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/app">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-[#7C3AED]/25"
                  >
                    Start Scoring Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/deck">
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="w-full sm:w-auto text-gray-300 hover:text-white hover:bg-white/5 px-8 py-6 text-lg"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>
              
              {/* Social proof */}
              <motion.div 
                className="flex items-center gap-4 justify-center lg:justify-start mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-[#0a0a0a]" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-white font-semibold">2,500+</span>
                  <span className="text-gray-500"> games scored this week</span>
                </div>
              </motion.div>
            </div>
            
            {/* Right: Dartboard */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroDartboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-white/5 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value="100" suffix="ms" label="Tap-to-score speed" />
            <AnimatedStat value="X01" suffix="" label="& Round-the-Clock" />
            <AnimatedStat value="4" suffix="" label="Players per game" />
            <AnimatedStat value="$0" suffix="" label="Forever free tier" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="text-[#F97316]">real</span> dart players
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every feature exists because someone at the oche needed it
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Tap-to-Score Board",
                desc: "Visual dartboard with 62 tap targets. Touch where you hit — singles, doubles, triples, bulls. Feels natural.",
                color: "#7C3AED"
              },
              {
                icon: Zap,
                title: "Instant Checkout Hints",
                desc: "When you're close to finishing, we show the best checkout paths. T20, D20, D1? We got you.",
                color: "#F97316"
              },
              {
                icon: BarChart3,
                title: "Live Stats Tracking",
                desc: "Hit rate, segment accuracy, averages per round. See who's actually playing better, not just winning.",
                color: "#10B981"
              },
              {
                icon: Users,
                title: "Multi-Player Support",
                desc: "Up to 4 players. Turn order, score tracking, and a clean winner screen when someone checks out.",
                color: "#7C3AED"
              },
              {
                icon: Trophy,
                title: "Round-the-Clock Mode",
                desc: "Hit 1 through 20, then bullseye. Doubles skip 2, triples skip 3. Three end variations.",
                color: "#F97316"
              },
              {
                icon: Target,
                title: "X01 Variants",
                desc: "301, 501, or 101. Normal out or double out. Set it up once, then just play.",
                color: "#10B981"
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three taps to first throw
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              { step: "01", title: "Pick your game", desc: "X01 or Round-the-Clock. Set your variant and options." },
              { step: "02", title: "Add players", desc: "Quick-pick from recent players or type new names." },
              { step: "03", title: "Tap and score", desc: "Hit the interactive board where you throw. We handle the math." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-5xl font-bold text-[#7C3AED]/20">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Free is actually free
            </h2>
            <p className="text-gray-400 text-lg">
              No credit card. No trial that expires. No bullshit.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <motion.div 
              className="p-8 rounded-2xl bg-[#111] border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 font-medium mb-2">FREE</div>
              <div className="text-5xl font-bold mb-1">$0</div>
              <div className="text-gray-500 mb-6">forever</div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "All game modes (X01 + RTC)",
                  "Interactive dartboard",
                  "Up to 4 players",
                  "Session stats & hints",
                  "No account required",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-[#10B981]" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/app">
                <Button variant="outline" className="w-full py-6 text-lg border-white/10 hover:bg-white/5">
                  Start Free
                </Button>
              </Link>
            </motion.div>

            {/* Pro */}
            <motion.div 
              className="relative p-8 rounded-2xl bg-gradient-to-b from-[#7C3AED]/20 to-[#7C3AED]/5 border border-[#7C3AED]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#7C3AED] rounded-full text-xs font-bold">
                POPULAR
              </div>
              
              <div className="text-sm text-[#7C3AED] font-medium mb-2">PRO</div>
              <div className="text-5xl font-bold mb-1">$4.99</div>
              <div className="text-gray-500 mb-6">/month</div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Free",
                  "Unlimited game history",
                  "Advanced stats & trends",
                  "Export to CSV",
                  "Cloud sync across devices",
                  "Priority support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-[#7C3AED]" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/signup">
                <Button className="w-full py-6 text-lg bg-[#7C3AED] hover:bg-[#6D28D9]">
                  Start 14-Day Trial
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#7C3AED]/20 via-transparent to-transparent blur-3xl -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your next checkout
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#F97316] bg-clip-text text-transparent">
              starts here
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join players who've ditched pen-and-paper and clunky apps for something that actually works.
          </p>
          <Link href="/app">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#7C3AED] to-[#F97316] hover:opacity-90 text-white px-12 py-7 text-xl font-semibold shadow-lg shadow-[#7C3AED]/25"
            >
              Play Now — It's Free
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#F97316] flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">OcheScore</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2026 OcheScore
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

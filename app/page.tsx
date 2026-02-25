"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Gamepad2, 
  History, 
  Trophy,
  Clock,
  CreditCard,
  Zap,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-[#7C3AED]">Oche</span>Score
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link>
            <Link href="/app">
              <Button size="sm" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                Try Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
            <Link href="/about" className="block text-gray-400 hover:text-white">About</Link>
            <Link href="/pricing" className="block text-gray-400 hover:text-white">Pricing</Link>
            <Link href="/app">
              <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-2">
                Try Free
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Score like a pro.
            <br />
            <span className="text-[#7C3AED]">Tap</span> like a boss.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            The fastest way to score darts without the clutter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/app">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 text-lg"
              >
                Try Now — Free
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 px-8 py-6 text-lg"
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Hero image placeholder */}
          <div className="mt-12 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#7C3AED]/20 to-[#F97316]/20 p-8">
            <Target className="w-24 h-24 md:w-32 md:h-32 mx-auto text-[#7C3AED]" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-12 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Tired of <span className="text-[#F97316]">clunky</span> dart apps?
          </h2>
          
          <div className="grid gap-4">
            {[
              { icon: Zap, title: "Complex Setup", desc: "10 steps before you can start" },
              { icon: CreditCard, title: "Paywalls", desc: "$10/mo just to track history" },
              { icon: Clock, title: "Slow UI", desc: "Laggy interfaces kill the flow" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg">
                <item.icon className="w-8 h-8 text-[#F97316] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Tap. Score. Win.
          </h2>
          
          <ul className="space-y-4">
            {[
              "Interactive dartboard — tap where you hit",
              "Instant feedback with smooth animations",
              "Checkout hints when you're close",
              "No signup required — play immediately",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-12 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
            Everything you need
          </h2>
          <p className="text-gray-400 text-center mb-8">Pro features without the price</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: Target, title: "Touch Board", desc: "Tap to score" },
              { icon: Lightbulb, title: "Smart Hints", desc: "Checkout paths" },
              { icon: TrendingUp, title: "Stats", desc: "Track averages" },
              { icon: Gamepad2, title: "Multi Mode", desc: "X01 & Clock" },
              { icon: History, title: "History", desc: "Save games" },
              { icon: Trophy, title: "Leaderboard", desc: "Compete globally" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[#1a1a1a] rounded-lg text-center">
                <item.icon className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Simple pricing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Free */}
            <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-1">Free</h3>
              <p className="text-gray-400 text-sm mb-4">For casual players</p>
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-2 mb-6">
                {["All game modes", "Session stats", "Up to 4 players"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button variant="outline" className="w-full">Start Free</Button>
              </Link>
            </div>

            {/* Pro */}
            <div className="p-6 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-xl">
              <h3 className="text-xl font-bold mb-1">Pro</h3>
              <p className="text-white/70 text-sm mb-4">For serious players</p>
              <div className="text-4xl font-bold mb-4">$4.99<span className="text-lg font-normal">/mo</span></div>
              <ul className="space-y-2 mb-6">
                {["Everything in Free", "Unlimited history", "Advanced stats", "Export games"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-white text-[#7C3AED] hover:bg-white/90">
                  Start 14-Day Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-[#7C3AED] to-[#F97316]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to level up?
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands scoring smarter with OcheScore
          </p>
          <Link href="/app">
            <Button size="lg" className="bg-white text-[#7C3AED] hover:bg-white/90 px-8 py-6 text-lg font-bold">
              Start Scoring — Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="font-bold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/app" className="hover:text-white">Try Free</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2026 OcheScore. Built with ❤️ for dart players.
          </div>
        </div>
      </footer>
    </div>
  );
}

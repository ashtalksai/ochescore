"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            <span className="text-[#7C3AED]">Oche</span>Score
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">About</Link>
            <Link href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors">Pricing</Link>
            <Link href="/login" className="text-text-secondary hover:text-text-primary transition-colors">Login</Link>
            <Link href="/app">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/20">
                Try Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-section-desktop overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#7C3AED]/10 via-transparent to-transparent" />
        <div className="max-w-container mx-auto relative z-10">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-display text-72 md:text-[96px] font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Score like a pro.
              <br />
              <span className="text-[#7C3AED]">Tap</span> like a boss.
            </motion.h1>
            
            <motion.p 
              className="text-20 text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              The fastest way to score darts without the clutter.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/app">
                <Button 
                  size="lg" 
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-18 px-8 py-6 shadow-xl shadow-[#7C3AED]/30 animate-pulse"
                >
                  Try Now - Free
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 text-18 px-8 py-6"
                >
                  Sign Up
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="mt-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="aspect-video bg-gradient-to-br from-[#7C3AED] to-[#F97316] p-1">
                <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                  <Target className="w-32 h-32 text-[#7C3AED]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-section-desktop bg-surface/50">
        <div className="max-w-container mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-12"
            {...fadeInUp}
          >
            Tired of <span className="text-[#F97316]">clunky</span> dart apps?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Complex Setup", description: "Most apps require 10 steps before you can even start scoring." },
              { icon: CreditCard, title: "Paywalls Everywhere", description: "Pay $10/mo just to track your game history? No thanks." },
              { icon: Clock, title: "Slow UI", description: "Laggy interfaces that make manual scoring faster." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="bg-surface border-white/10 hover:border-[#7C3AED]/50 transition-all duration-250">
                  <CardHeader>
                    <item.icon className="w-12 h-12 text-[#F97316] mb-4" />
                    <CardTitle className="text-24">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-16">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-section-desktop relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#F97316]/20" />
        <div className="max-w-container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-64 font-bold mb-6">
                Tap. Score. Win.
              </h2>
              <ul className="space-y-4 text-18">
                {[
                  "Interactive dartboard - tap where you hit",
                  "Instant feedback with smooth animations",
                  "Checkout hints when you're close to winning",
                  "No signup required - play immediately",
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-xl p-1">
                <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                  <Target className="w-48 h-48 text-[#7C3AED]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-section-desktop bg-surface/50">
        <div className="max-w-container mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-4"
            {...fadeInUp}
          >
            Everything you need
          </motion.h2>
          <motion.p 
            className="text-20 text-text-secondary text-center mb-12"
            {...fadeInUp}
          >
            Pro features without the pro price
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Touch Board", description: "Tap any combination - singles, doubles, triples, bulls. Instant feedback." },
              { icon: Lightbulb, title: "Smart Hints", description: "Get checkout suggestions when you're ≤170. Know the path to victory." },
              { icon: TrendingUp, title: "Stats Track", description: "3-dart average, high score, checkout %. Track your improvement." },
              { icon: Gamepad2, title: "Multi Mode", description: "X01 (301/501/101) and Round-the-Clock with multiple variants." },
              { icon: History, title: "Game History", description: "Save and review all your games. Pro feature with 14-day trial." },
              { icon: Trophy, title: "Leaderboard", description: "Compare your times globally. See how you stack up." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="bg-surface border-white/10 hover:border-[#7C3AED] hover:shadow-lg hover:shadow-[#7C3AED]/20 hover:-translate-y-1 transition-all duration-250">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-[#7C3AED] mb-4" />
                    <CardTitle className="text-20">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-16">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-section-desktop">
        <div className="max-w-container mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-16"
            {...fadeInUp}
          >
            How it works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Pick a Game", description: "Choose X01 or Round-the-Clock. Add players." },
              { num: "02", title: "Tap to Score", description: "Hit the dartboard where your dart landed. Instant feedback." },
              { num: "03", title: "Win & Track", description: "See your stats, save games, improve your average." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
              >
                <div className="text-[120px] font-display font-bold text-[#7C3AED] opacity-20 absolute -top-8 left-1/2 -translate-x-1/2">
                  {step.num}
                </div>
                <div className="relative z-10 pt-16">
                  <h3 className="font-display text-32 font-bold mb-4">{step.title}</h3>
                  <p className="text-18 text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-section-desktop bg-surface/50">
        <div className="max-w-container mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-12"
            {...fadeInUp}
          >
            What players say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Finally, a dart app that doesn't get in the way. The tap-to-score board is genius.", author: "Mike T.", role: "Pub League Player" },
              { quote: "I've tried 5+ apps. This is the only one I kept. Fast, beautiful, and actually free to use.", author: "Sarah K.", role: "Amateur Player" },
              { quote: "The checkout hints alone are worth it. Helped me finish my first 170 out.", author: "James R.", role: "Practice Enthusiast" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="bg-surface/50 border-white/10 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <p className="text-18 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-14 text-text-secondary">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-section-desktop">
        <div className="max-w-container mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-4"
            {...fadeInUp}
          >
            Simple pricing
          </motion.h2>
          <motion.p 
            className="text-20 text-text-secondary text-center mb-12"
            {...fadeInUp}
          >
            Start free. Upgrade when you need more.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-surface border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-32 font-display">Free</CardTitle>
                  <CardDescription className="text-18">Perfect for casual players</CardDescription>
                  <div className="text-48 font-bold font-display mt-4">$0</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Instant play - no signup",
                      "All game modes",
                      "Session stats",
                      "Up to 4 players",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-16">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/app">
                    <Button className="w-full" variant="outline">Start Free</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] border-[#7C3AED] h-full">
                <CardHeader>
                  <CardTitle className="text-32 font-display">Pro</CardTitle>
                  <CardDescription className="text-18 text-white/80">For serious players</CardDescription>
                  <div className="text-48 font-bold font-display mt-4">
                    $4.99<span className="text-20 font-normal">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Everything in Free",
                      "Unlimited game history",
                      "Advanced stats & graphs",
                      "Export games",
                      "Priority support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-16 text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup">
                    <Button className="w-full bg-white text-[#7C3AED] hover:bg-white/90 animate-pulse">
                      Start 14-Day Trial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-section-desktop bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="font-display text-48 font-bold text-center mb-12"
            {...fadeInUp}
          >
            Frequently asked questions
          </motion.h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Do I need to sign up to use OcheScore?", a: "Nope! You can start scoring immediately without any signup. Just tap 'Try Free' and you're in. Sign up later if you want to save your game history." },
              { q: "How does the interactive dartboard work?", a: "Simply tap on the dartboard where your dart landed - singles, doubles, triples, or bulls. The app instantly registers your score with smooth animations and haptic feedback." },
              { q: "What game modes are supported?", a: "We support X01 games (301, 501, 101) with normal or double-out rules, plus Round-the-Clock with multiple variants. More modes coming soon!" },
              { q: "What's included in the Pro plan?", a: "Pro gives you unlimited game history, advanced stats and graphs, export capabilities, and priority support. Free plan includes all core scoring features." },
              { q: "Can I cancel anytime?", a: "Absolutely. Cancel anytime from your account settings. No questions asked, no hidden fees." },
              { q: "Does it work on mobile?", a: "Yes! OcheScore is a Progressive Web App that works perfectly on iPhone, Android, tablets, and desktop. Add it to your home screen for the best experience." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <AccordionItem value={`item-${i}`} className="bg-surface border-white/10 rounded-lg px-6">
                  <AccordionTrigger className="text-18 font-medium text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-16 text-text-secondary">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-section-desktop relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#F97316]" />
        <div className="max-w-container mx-auto relative z-10 text-center">
          <motion.h2 
            className="font-display text-64 font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to level up your game?
          </motion.h2>
          <motion.p 
            className="text-20 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Join thousands of players scoring smarter with OcheScore
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/app">
              <Button 
                size="lg" 
                className="bg-white text-[#7C3AED] hover:bg-white/90 text-20 px-12 py-8 font-bold animate-pulse"
              >
                Start Scoring Now - Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 px-6 py-12">
        <div className="max-w-container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-20 font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/app" className="hover:text-text-primary transition-colors">Try Free</Link></li>
              <li><Link href="/pricing" className="hover:text-text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/app/history" className="hover:text-text-primary transition-colors">Game History</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-20 font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/about" className="hover:text-text-primary transition-colors">About</Link></li>
              <li><Link href="/deck" className="hover:text-text-primary transition-colors">Pitch Deck</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-20 font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-20 font-bold mb-4">Social</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="https://twitter.com" className="hover:text-text-primary transition-colors">Twitter</a></li>
              <li><a href="https://github.com" className="hover:text-text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container mx-auto mt-12 pt-8 border-t border-white/10 text-center text-text-secondary">
          <p>&copy; 2026 OcheScore. Built with ❤️ for dart players everywhere.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            <span className="text-[#7C3AED]">Oche</span>Score
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-container mx-auto px-6 py-section-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-64 font-bold mb-4">
            Simple <span className="text-[#7C3AED]">Pricing</span>
          </h1>
          <p className="text-20 text-text-secondary">
            Start free. Upgrade when you need more.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
                    "Instant play - no signup required",
                    "All game modes (X01, Round-the-Clock)",
                    "Interactive dartboard scoring",
                    "Checkout hints",
                    "Session stats (3-dart avg, high score)",
                    "Up to 4 players per game",
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] border-[#7C3AED] h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#F97316] text-white px-3 py-1 rounded-full text-12 font-bold">
                POPULAR
              </div>
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
                    "Per-player analytics",
                    "Export games (CSV, PDF)",
                    "Priority support",
                    "Early access to new features",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-16 text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-white text-[#7C3AED] hover:bg-white/90">
                    Start 14-Day Free Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="font-display text-32 font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: "Can I really use it for free?", 
                a: "Yes! All core features—interactive dartboard, scoring, checkout hints, and session stats—are free forever. Pro adds history and advanced analytics." 
              },
              { 
                q: "What's included in the 14-day trial?", 
                a: "Full access to Pro features: unlimited game history, advanced stats, export capabilities, and priority support. Cancel anytime during the trial with no charge." 
              },
              { 
                q: "Can I cancel anytime?", 
                a: "Absolutely. Cancel from your account settings at any time. No questions asked, no hidden fees. Your saved games remain accessible." 
              },
              { 
                q: "Do I need an account for the free version?", 
                a: "Nope! You can use all free features without signing up. Create an account later if you want to save game history (Pro feature)." 
              },
              { 
                q: "What payment methods do you accept?", 
                a: "We accept all major credit cards (Visa, Mastercard, Amex) via Stripe. Secure and simple." 
              },
              { 
                q: "Is there a team or family plan?", 
                a: "Not yet, but we're working on it! Email us at hello@ochescore.com if you're interested." 
              },
              { 
                q: "What if I need more help?", 
                a: "Free users get email support (48h response). Pro users get priority support (12h response). We're real humans who actually play darts!" 
              },
              { 
                q: "Can I upgrade/downgrade later?", 
                a: "Yes! Upgrade to Pro anytime from your account. Downgrade and you'll keep Pro features until the end of your billing period." 
              },
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
        </motion.div>
      </div>
    </div>
  );
}

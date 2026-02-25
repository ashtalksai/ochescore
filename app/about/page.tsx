"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Heart, Zap } from "lucide-react";

export default function AboutPage() {
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
      <div className="max-w-3xl mx-auto px-6 py-section-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-64 font-bold mb-8">
            About <span className="text-[#7C3AED]">OcheScore</span>
          </h1>

          <div className="space-y-12 text-18 leading-relaxed text-text-secondary">
            {/* Mission */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-[#7C3AED]" />
                <h2 className="font-display text-32 font-bold text-text-primary">Our Mission</h2>
              </div>
              <p>
                We're building the dart scoring app we always wished existed. No clutter, no paywalls for basic features, 
                no 10-step setup process. Just tap where you hit and keep playing.
              </p>
              <p className="mt-4">
                OcheScore is designed for the player who wants to focus on the game, not fight with technology. 
                Whether you're at the pub with friends or practicing alone, we're here to make scoring effortless.
              </p>
            </section>

            {/* Story */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#F97316]" />
                <h2 className="font-display text-32 font-bold text-text-primary">The Story</h2>
              </div>
              <p>
                OcheScore was born out of frustration. After trying countless dart apps—all either too complicated, 
                riddled with ads, or locked behind expensive paywalls—we decided to build something different.
              </p>
              <p className="mt-4">
                We studied what makes mobile apps feel fast and delightful (looking at you, Linear and Notion), 
                then applied those principles to dart scoring. The result? An app that feels like a premium product 
                but starts completely free.
              </p>
              <p className="mt-4">
                The interactive dartboard—our signature feature—came from a simple question: "Why are we typing numbers 
                when we could just tap the board?" That one insight changed everything.
              </p>
            </section>

            {/* What Makes Us Different */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-[#10B981]" />
                <h2 className="font-display text-32 font-bold text-text-primary">What Makes Us Different</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-text-primary mb-2">No Signup Required</h3>
                  <p>
                    You can start scoring in under 5 seconds. Just open the app and play. 
                    Sign up later if you want to save your history.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Interactive Dartboard</h3>
                  <p>
                    Tap where you hit. See instant feedback with smooth animations and haptic vibrations. 
                    It feels more like a game than a utility.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Smart Checkout Hints</h3>
                  <p>
                    When you're close to finishing, we show you the optimal path. Learn the outs while you play.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Actually Free</h3>
                  <p>
                    All core features are free forever. Pro unlocks history and advanced stats, 
                    but you can score games without paying a cent.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section>
              <h2 className="font-display text-32 font-bold text-text-primary mb-4">Built by Players</h2>
              <p>
                OcheScore is built by a small team of developers and dart enthusiasts who believe software 
                should get out of your way and let you focus on what matters: playing darts and having fun.
              </p>
              <p className="mt-4">
                We're constantly improving based on player feedback. Have an idea? Found a bug? 
                We're listening.
              </p>
            </section>

            {/* CTA */}
            <section className="border-t border-white/10 pt-12">
              <div className="text-center">
                <h2 className="font-display text-32 font-bold text-text-primary mb-4">
                  Ready to try it?
                </h2>
                <p className="mb-6">
                  Join thousands of players already scoring smarter with OcheScore.
                </p>
                <Link href="/app">
                  <Button 
                    size="lg" 
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-18 px-8"
                  >
                    Start Scoring - Free
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

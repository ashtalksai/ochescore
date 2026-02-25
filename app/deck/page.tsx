"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Target } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "OcheScore",
    subtitle: "Score like a pro. Tap like a boss.",
    content: "The fastest dart scoring app that players actually love",
  },
  {
    title: "The Problem",
    subtitle: "Dart apps are painful",
    content: "Complex setup • Hidden paywalls • Slow, clunky interfaces",
    bullets: [
      "Players try 5+ apps searching for a better option",
      "Most apps require 10 steps before you can start",
      "$10/mo just to track history? No thanks.",
    ],
  },
  {
    title: "The Solution",
    subtitle: "Delightfully simple scoring",
    content: "Tap where you hit. Instant feedback. No clutter.",
    bullets: [
      "Interactive dartboard - tap any segment",
      "Checkout hints when you're close to winning",
      "No signup required - play immediately",
      "Pro features, free price",
    ],
  },
  {
    title: "Market Opportunity",
    subtitle: "1.5M+ users on market leader alone",
    content: "Growing casual dart playing segment (pubs, home games)",
    bullets: [
      "Proven freemium model ($2.99-9.99/mo)",
      "Active communities on Reddit, Discord",
      "Users actively searching for better apps",
      "PWA = instant distribution, no app store wait",
    ],
  },
  {
    title: "What Makes Us Different",
    subtitle: "The interactive dartboard",
    content: "Unlike every competitor (boring manual input), we have a tactile, beautiful tap-to-score board",
    bullets: [
      "Immediate haptic feedback + animations",
      "Purple bullseye, orange outer bull (bold colors)",
      "Linear.app-level quality, 60fps animations",
      "This is what people screenshot and share",
    ],
  },
  {
    title: "Tech Stack",
    subtitle: "Built for speed and delight",
    content: "Next.js • React • Framer Motion • Tailwind • Stripe",
    bullets: [
      "Progressive Web App (works everywhere)",
      "Target: <3s load, <100ms tap-to-score",
      "Offline support via service workers",
      "Simple backend: Postgres + API routes",
    ],
  },
  {
    title: "Traction",
    subtitle: "Just launched",
    content: "Early adopters love the interactive dartboard",
    bullets: [
      "MVP complete with all core features",
      "Free tier drives viral growth",
      "Pro tier ($4.99/mo) for serious players",
      "14-day trial converts casual to paid",
    ],
  },
  {
    title: "The Ask",
    subtitle: "Let's score big together",
    content: "Join us in building the dart app that players deserve",
    bullets: [
      "hello@ochescore.com",
      "Built by players, for players",
      "Try it: ochescore.com",
    ],
  },
];

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  return (
    <div
      className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#F97316]/20" />

      {/* Slide content */}
      <div className="relative z-10 w-full max-w-5xl px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-center"
          >
            {currentSlide === 0 && (
              <div className="space-y-8">
                <Target className="w-32 h-32 text-[#7C3AED] mx-auto" />
                <h1 className="font-display text-[120px] font-bold leading-none">
                  <span className="text-[#7C3AED]">Oche</span>Score
                </h1>
                <p className="text-48 font-display">{slides[0].subtitle}</p>
                <p className="text-24 text-text-secondary">{slides[0].content}</p>
              </div>
            )}

            {currentSlide > 0 && (
              <div className="space-y-8">
                <h2 className="font-display text-72 font-bold">{slides[currentSlide].title}</h2>
                <p className="text-32 text-[#F97316] font-display">{slides[currentSlide].subtitle}</p>
                <p className="text-24 text-text-secondary max-w-3xl mx-auto">
                  {slides[currentSlide].content}
                </p>
                {slides[currentSlide].bullets && (
                  <ul className="space-y-4 text-20 text-left max-w-2xl mx-auto mt-12">
                    {slides[currentSlide].bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[#7C3AED] text-32">•</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 z-20">
        <Button
          variant="ghost"
          size="lg"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-[#7C3AED] w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Exit link */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/">
          <Button variant="ghost" className="text-white">
            ← Back to Home
          </Button>
        </Link>
      </div>

      <div className="absolute top-8 right-8 z-20 text-text-secondary text-14">
        Use arrow keys to navigate
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  User,
  Quote,
  Calendar,
  BarChart3,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Mail,
  FileText,
  Zap,
  Heart
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Positioning Statement */}
        <motion.section {...fadeIn} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#F97316]/20 rounded-2xl" />
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <Megaphone className="w-12 h-12 text-[#F97316]" />
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold">Positioning</h1>
                <p className="text-text-secondary">Marketing Strategy</p>
              </div>
            </div>
            
            <div className="bg-surface rounded-xl p-8 border border-white/10">
              <div className="space-y-4 text-lg">
                <p><span className="text-[#7C3AED] font-semibold">For</span> casual to semi-serious dart players (pubs, home, leagues)</p>
                <p><span className="text-[#7C3AED] font-semibold">Who</span> are frustrated with overcomplicated, paywalled, or ugly scoring apps</p>
                <p><span className="text-[#F97316] font-semibold">OcheScore</span> is a progressive web app</p>
                <p><span className="text-[#7C3AED] font-semibold">That</span> delivers instant, delightful, free dart scoring with an interactive touch dartboard</p>
                <p><span className="text-[#7C3AED] font-semibold">Unlike</span> <span className="text-text-secondary">DartCounter (paywalled), Dartore (too basic), or DARTS Scorer (dated UI)</span></p>
                <p><span className="text-[#7C3AED] font-semibold">We</span> offer a modern, fast, actually-free experience that feels like a premium mobile game</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Target Persona */}
        <motion.section {...fadeIn} transition={{ delay: 0.1 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <User className="w-8 h-8 text-[#7C3AED]" />
            Target Persona
          </h2>

          <div className="bg-surface rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar */}
              <div className="lg:w-1/3">
                <div className="w-32 h-32 bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-full flex items-center justify-center text-6xl mb-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-1">"Pub League Paul"</h3>
                <p className="text-text-secondary">Primary Persona</p>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Age</span>
                    <span>32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Location</span>
                    <span>Manchester, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Occupation</span>
                    <span>IT Support Tech</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Income</span>
                    <span>£35K/year</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h4 className="font-semibold text-[#7C3AED] mb-3">Behavior</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>• Plays darts at pub every Thursday (league night)</p>
                    <p>• Owns a dartboard at home for practice</p>
                    <p>• Uses phone for everything (no laptop at pub)</p>
                    <p>• Tech-savvy but hates complicated apps</p>
                    <p>• Tried 4-5 dart apps, settled for pen-and-paper</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-destructive mb-3">Pain Points</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "I just want to score without creating an account",
                      "Why do I need to pay $10/mo just to track my games?",
                      "These apps look like they're from 2010",
                      "Manual input is slow — I want to tap the board",
                    ].map((pain, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Quote className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="italic text-text-secondary">{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-success mb-3">Goals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>Quick scoring during pub games</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>Track improvement over time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>Impress friends with cool tech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>Free tier that's actually useful</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#F97316] mb-3">Conversion Triggers</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>• After 10+ games: "I want to see my progress over time"</p>
                    <p>• After 30 days: "Cloud sync so I can access from my tablet"</p>
                    <p>• After league season: "Export my stats to share with team"</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Where He Hangs Out</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#FF4500]/20 text-[#FF4500] rounded-full text-sm">r/Darts (daily)</span>
                    <span className="px-3 py-1 bg-[#1877F2]/20 text-[#1877F2] rounded-full text-sm">UK Darts Community</span>
                    <span className="px-3 py-1 bg-[#FF0000]/20 text-[#FF0000] rounded-full text-sm">Flight School Darts</span>
                    <span className="px-3 py-1 bg-[#4285F4]/20 text-[#4285F4] rounded-full text-sm">Google Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Brand Voice & Messaging */}
        <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-[#F97316]" />
            Brand Voice
          </h2>

          <div className="bg-[#7C3AED]/10 rounded-xl p-6 border border-[#7C3AED]/30 mb-8">
            <h3 className="font-semibold text-[#7C3AED] text-lg mb-2">Tone: Confident, Playful, Effortless</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DO */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-success" />
                <h3 className="font-semibold text-lg">What we sound like</h3>
              </div>
              <div className="space-y-3">
                {[
                  { text: "Tap the board. See the magic.", note: "confident, direct" },
                  { text: "The dart scorer that doesn't suck.", note: "playful, honest" },
                  { text: "Free is actually free.", note: "bold, trustworthy" },
                  { text: "Your next checkout starts here.", note: "aspirational, inclusive" },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-success/10 rounded-lg">
                    <p className="font-medium">&quot;{item.text}&quot;</p>
                    <p className="text-xs text-text-secondary mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DON'T */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-destructive" />
                <h3 className="font-semibold text-lg">What we DON&apos;T sound like</h3>
              </div>
              <div className="space-y-3">
                {[
                  { text: "Revolutionary AI-powered dart scoring platform", note: "too corporate" },
                  { text: "For professional dart athletes only", note: "too exclusive" },
                  { text: "Download now to unlock premium features!", note: "clickbait" },
                  { text: "The #1 dart app in the world", note: "unproven claim" },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-destructive/10 rounded-lg">
                    <p className="font-medium line-through opacity-70">&quot;{item.text}&quot;</p>
                    <p className="text-xs text-text-secondary mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Messaging Pillars */}
        <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
          <h2 className="font-display text-3xl font-bold mb-8">Messaging Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <Zap className="w-10 h-10 text-[#7C3AED] mb-4" />
              <h3 className="font-semibold text-lg mb-1">Speed</h3>
              <p className="text-sm text-[#F97316] font-mono mb-3">&quot;100ms tap-to-score&quot;</p>
              <p className="text-text-secondary text-sm">You throw fast. We score faster. No waiting, no lag, no BS.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-text-secondary">Proof: Interactive dartboard with instant visual feedback, &lt;100ms response time</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/80 rounded-xl p-6 text-white">
              <Heart className="w-10 h-10 text-[#F97316] mb-4" />
              <h3 className="font-semibold text-lg mb-1">Freedom</h3>
              <p className="text-sm text-[#F97316] font-mono mb-3">&quot;Free is actually free&quot;</p>
              <p className="text-white/80 text-sm">All game modes. No paywall. No trial that expires. Just play.</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="text-xs text-white/60">Proof: X01 + Round-the-Clock unlocked, no signup required, Pro is optional</span>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-[#F97316] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Delight</h3>
              <p className="text-sm text-[#F97316] font-mono mb-3">&quot;Feels like a game&quot;</p>
              <p className="text-text-secondary text-sm">Smooth animations, confetti on wins, hints when you need them. Scoring should feel this good.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-text-secondary">Proof: Purple/orange brand, touch dartboard, checkout hints, celebratory UX</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Strategy */}
        <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#7C3AED]" />
            Content Strategy
          </h2>

          <div className="space-y-6">
            {/* Blog */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Blog (SEO-focused)</h3>
                <span className="text-sm text-text-secondary">2 posts/week → 1 post/week</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#7C3AED]/20 rounded-lg p-3 text-center">
                  <span className="text-2xl font-bold text-[#7C3AED]">50%</span>
                  <p className="text-xs text-text-secondary">Educational</p>
                </div>
                <div className="bg-[#F97316]/20 rounded-lg p-3 text-center">
                  <span className="text-2xl font-bold text-[#F97316]">30%</span>
                  <p className="text-xs text-text-secondary">Product</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-2xl font-bold">20%</span>
                  <p className="text-xs text-text-secondary">Comparative</p>
                </div>
              </div>

              <h4 className="font-semibold mb-3">First 8 Posts:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {[
                  "The 7 Best Dart Scoring Apps in 2026 (Tested)",
                  "How to Score Darts: Complete Beginner's Guide",
                  "Master Dart Checkouts: Chart + Strategy Tips",
                  "X01 Dart Rules Explained (301, 501, 701)",
                  "Round-the-Clock: Rules, Strategy & Practice",
                  "5 Ways to Improve Your 3-Dart Average",
                  "OcheScore vs DartCounter: Which Is Better?",
                  "Why Every Dart Player Needs a Scoring App",
                ].map((post, i) => (
                  <div key={i} className="flex items-center gap-2 text-text-secondary">
                    <span className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center text-xs text-[#7C3AED]">{i + 1}</span>
                    <span>{post}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg mb-4">Social Media Strategy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#FF4500]/10 rounded-lg border border-[#FF4500]/30">
                  <h4 className="font-semibold text-[#FF4500] mb-2">Reddit (r/Darts)</h4>
                  <p className="text-sm text-text-secondary mb-2">1 post/week (not spammy)</p>
                  <div className="space-y-1 text-xs text-text-secondary">
                    <p>Week 1: Launch story</p>
                    <p>Week 2: Tutorial</p>
                    <p>Week 3: Feedback request</p>
                    <p>Week 4: Milestone</p>
                  </div>
                </div>

                <div className="p-4 bg-[#1877F2]/10 rounded-lg border border-[#1877F2]/30">
                  <h4 className="font-semibold text-[#1877F2] mb-2">Facebook Groups</h4>
                  <p className="text-sm text-text-secondary mb-2">2-3 posts/week across 5 groups</p>
                  <div className="space-y-1 text-xs text-text-secondary">
                    <p>Screenshots of game results</p>
                    <p>Asking for feedback</p>
                    <p>Sharing tips</p>
                    <p>Product updates</p>
                  </div>
                </div>

                <div className="p-4 bg-[#0077B5]/10 rounded-lg border border-[#0077B5]/30">
                  <h4 className="font-semibold text-[#0077B5] mb-2">LinkedIn (Personal)</h4>
                  <p className="text-sm text-text-secondary mb-2">1 post/week</p>
                  <div className="space-y-1 text-xs text-text-secondary">
                    <p>Founder story</p>
                    <p>Lessons learned</p>
                    <p>Metrics milestones</p>
                    <p>Behind-the-scenes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#7C3AED]" />
                <h3 className="font-semibold text-lg">Email Strategy</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#7C3AED]/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Welcome Series</h4>
                  <p className="text-xs text-text-secondary mb-2">For Pro trial signups</p>
                  <div className="space-y-1 text-xs">
                    <p>Day 0: Welcome + what&apos;s unlocked</p>
                    <p>Day 3: 3 features you missed</p>
                    <p>Day 7: How to export history</p>
                    <p>Day 12: Trial ends in 2 days</p>
                    <p>Day 14: Last chance</p>
                  </div>
                </div>

                <div className="p-4 bg-[#F97316]/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Re-engagement</h4>
                  <p className="text-xs text-text-secondary mb-2">For inactive users</p>
                  <div className="space-y-1 text-xs">
                    <p>Day 30: We miss you + what&apos;s new</p>
                    <p>Day 60: New feature announcement</p>
                    <p>Day 90: 2-minute feedback survey</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Monthly Newsletter</h4>
                  <p className="text-xs text-text-secondary mb-2">For all users with emails</p>
                  <div className="space-y-1 text-xs">
                    <p>Product updates</p>
                    <p>Dart tips</p>
                    <p>Community highlights</p>
                    <p>One Pro tier CTA (subtle)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Calendar */}
        <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-[#F97316]" />
            Content Calendar (Month 1)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-3 font-semibold">Week</th>
                  <th className="py-3 px-3 font-semibold">Day</th>
                  <th className="py-3 px-3 font-semibold">Platform</th>
                  <th className="py-3 px-3 font-semibold">Content</th>
                  <th className="py-3 px-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { week: 1, day: "Mon", platform: "Reddit", content: "I built OcheScore — the dart scorer that doesn't suck", type: "Launch" },
                  { week: 1, day: "Tue", platform: "Facebook", content: "Just scored my first 180 with OcheScore!", type: "Social proof" },
                  { week: 1, day: "Wed", platform: "LinkedIn", content: "Why I built a free dart scoring app", type: "Thought leadership" },
                  { week: 1, day: "Thu", platform: "Blog", content: "The 7 Best Dart Scoring Apps in 2026", type: "SEO" },
                  { week: 1, day: "Fri", platform: "ProductHunt", content: "Launch OcheScore", type: "Launch" },
                  { week: 2, day: "Mon", platform: "Reddit", content: "How to use checkout hints to finish faster", type: "Tutorial" },
                  { week: 2, day: "Tue", platform: "Facebook", content: "Need a dart scoring app? Try OcheScore", type: "Promo" },
                  { week: 2, day: "Thu", platform: "Blog", content: "How to Score Darts: Beginner's Guide", type: "SEO" },
                  { week: 2, day: "Fri", platform: "LinkedIn", content: "1 week in: 200 players, 800 games", type: "Milestone" },
                  { week: 3, day: "Mon", platform: "Reddit", content: "What features should we add? (feedback)", type: "Community" },
                  { week: 3, day: "Wed", platform: "Blog", content: "Master Dart Checkouts: Chart + Tips", type: "SEO" },
                  { week: 3, day: "Fri", platform: "LinkedIn", content: "Lessons from launching a PWA in 2026", type: "Thought leadership" },
                  { week: 4, day: "Mon", platform: "Reddit", content: "1,000 games scored! Thank you r/Darts", type: "Gratitude" },
                  { week: 4, day: "Wed", platform: "Blog", content: "X01 Dart Rules Explained", type: "SEO" },
                  { week: 4, day: "Fri", platform: "LinkedIn", content: "Month 1 results: 500 players, lessons", type: "Milestone" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-3 font-mono text-[#7C3AED]">{row.week}</td>
                    <td className="py-3 px-3">{row.day}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        row.platform === "Reddit" ? "bg-[#FF4500]/20 text-[#FF4500]" :
                        row.platform === "Facebook" ? "bg-[#1877F2]/20 text-[#1877F2]" :
                        row.platform === "LinkedIn" ? "bg-[#0077B5]/20 text-[#0077B5]" :
                        row.platform === "Blog" ? "bg-[#7C3AED]/20 text-[#7C3AED]" :
                        "bg-[#DA552F]/20 text-[#DA552F]"
                      }`}>
                        {row.platform}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-text-secondary">{row.content}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-1 bg-white/10 rounded text-xs">{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* KPIs & Tracking */}
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-2xl p-8 lg:p-12">
            <h2 className="font-display text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8" />
              KPIs & Tracking
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Acquisition</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Unique Players</span>
                    <span className="text-white font-mono">1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Games Scored</span>
                    <span className="text-white font-mono">5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Bounce Rate</span>
                    <span className="text-white font-mono">&lt;30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Session Duration</span>
                    <span className="text-white font-mono">&gt;3min</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Activation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Play Rate</span>
                    <span className="text-white font-mono">&gt;80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Games/Player</span>
                    <span className="text-white font-mono">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Return (7d)</span>
                    <span className="text-white font-mono">&gt;40%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Conversion</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Pro Trials</span>
                    <span className="text-white font-mono">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Trial → Paid</span>
                    <span className="text-white font-mono">50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">MRR (Month 3)</span>
                    <span className="text-white font-mono">$250</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-white mb-4">Retention</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Day 7</span>
                    <span className="text-white font-mono">&gt;30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Day 30</span>
                    <span className="text-white font-mono">&gt;15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Pro Churn</span>
                    <span className="text-white font-mono">&lt;10%/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

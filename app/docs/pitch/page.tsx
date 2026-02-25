"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Layers,
  BarChart3,
  DollarSign,
  Users,
  Rocket,
  Mail,
  CheckCircle2,
  XCircle,
  ExternalLink,
  LucideIcon
} from "lucide-react";

// Type definitions for slide content
interface ProblemContent {
  pains: { label: string; detail: string }[];
  proof: string;
}

interface SolutionContent {
  features: { label: string; detail: string }[];
}

interface MarketContent {
  tam: { value: string; label: string };
  sam: { value: string; label: string };
  som: { value: string; label: string };
  growth: string;
}

interface HowItWorksContent {
  steps: { step: number; title: string; detail: string }[];
}

interface TractionContent {
  signals: { platform: string; stat: string; detail: string }[];
  edge: string;
}

interface BusinessContent {
  free: string[];
  pro: { price: string; features: string[] };
  projections: { period: string; players: string; mrr: string }[];
}

interface CompetitionContent {
  competitors: { name: string; users: string; weakness: string }[];
  ourEdge: string[];
}

interface GTMContent {
  channels: { name: string; reach: string; cost: string }[];
  budget: string;
  target: string;
}

interface AskContent {
  ask: string;
  runway: string;
  useOfFunds: { category: string; percent: number }[];
  milestones: string[];
  cta: string;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  icon: LucideIcon;
  content?: ProblemContent | SolutionContent | MarketContent | HowItWorksContent | TractionContent | BusinessContent | CompetitionContent | GTMContent | AskContent;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "OcheScore",
    subtitle: "The dart scorer that doesn't suck",
    type: "title",
    icon: Target,
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Every dart scoring app is broken",
    type: "problem",
    icon: AlertTriangle,
    content: {
      pains: [
        { label: "Overcomplicated", detail: "DartCounter: 50+ features, account required, 10-min onboarding" },
        { label: "Paywalled", detail: "Basic features locked behind $10/mo subscriptions" },
        { label: "Dated UI", detail: "Most apps look like Windows 95 (literally)" },
        { label: "Slow", detail: "Manual input = 10+ seconds per turn, breaks game flow" },
      ],
      proof: "Players try 5+ apps before settling. \"What's the best scoring app?\" posted weekly on r/Darts.",
    } as ProblemContent,
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "Tap where you hit. We handle the rest.",
    type: "solution",
    icon: Lightbulb,
    content: {
      features: [
        { label: "Interactive touch dartboard", detail: "62 tap targets, <100ms response" },
        { label: "Instant checkout hints", detail: "Shows best finish paths when ≤170" },
        { label: "Actually free", detail: "All game modes (X01 + Round-the-Clock), no paywall" },
        { label: "Zero setup", detail: "No signup, no tutorial, just play" },
        { label: "Delightful UX", detail: "Smooth animations, confetti on wins" },
      ],
    } as SolutionContent,
  },
  {
    id: 4,
    title: "Market Size",
    subtitle: "$37.96M market opportunity",
    type: "market",
    icon: TrendingUp,
    content: {
      tam: { value: "10M", label: "Recreational dart players (US/UK/EU)" },
      sam: { value: "3M", label: "Active app users (DartCounter has 1.5M)" },
      som: { value: "100K", label: "Players in Year 1 (3% of SAM)" },
      growth: "+18% YoY",
    } as MarketContent,
  },
  {
    id: 5,
    title: "How It Works",
    subtitle: "Three taps to first throw",
    type: "howItWorks",
    icon: Layers,
    content: {
      steps: [
        { step: 1, title: "Pick Your Game", detail: "X01 (301/501/101) or Round-the-Clock" },
        { step: 2, title: "Add Players", detail: "1-4 players, no signup required" },
        { step: 3, title: "Tap & Score", detail: "Touch dartboard, scores fly up, auto-advance" },
      ],
    } as HowItWorksContent,
  },
  {
    id: 6,
    title: "Traction",
    subtitle: "Strong validation signals",
    type: "traction",
    icon: BarChart3,
    content: {
      signals: [
        { platform: "Reddit", stat: "180K", detail: "r/Darts members" },
        { platform: "Facebook", stat: "500K+", detail: "Dart community members" },
        { platform: "Search", stat: "40K", detail: "Monthly searches for 'dart scoring app'" },
        { platform: "Competitor", stat: "1.5M", detail: "DartCounter users (proving market)" },
      ],
      edge: "Modern UI, actually free tier, touch dartboard, <100ms speed",
    } as TractionContent,
  },
  {
    id: 7,
    title: "Business Model",
    subtitle: "Freemium SaaS",
    type: "business",
    icon: DollarSign,
    content: {
      free: ["All game modes", "Interactive dartboard", "Up to 4 players", "Session stats & hints", "No signup required"],
      pro: { price: "$4.99/mo", features: ["Unlimited history", "Advanced stats", "Export CSV", "Cloud sync", "Priority support"] },
      projections: [
        { period: "Month 3", players: "1,000", mrr: "$499" },
        { period: "Year 1", players: "10,000", mrr: "$4,990" },
        { period: "Year 2", players: "50,000", mrr: "$24,950" },
      ],
    } as BusinessContent,
  },
  {
    id: 8,
    title: "Competition",
    subtitle: "Crowded market, clear differentiation",
    type: "competition",
    icon: Users,
    content: {
      competitors: [
        { name: "DartCounter", users: "1.5M", weakness: "Paywall everything" },
        { name: "Dartore", users: "Unknown", weakness: "Too basic" },
        { name: "DARTS Scorer", users: "100K+", weakness: "Dated UI" },
        { name: "Dartsmind", users: "50K+", weakness: "Gimmicky camera" },
      ],
      ourEdge: [
        "Modern design (purple/orange, not dated)",
        "Actually free tier (all game modes)",
        "Touch dartboard (better UX)",
        "<100ms speed (fastest)",
        "Instant checkout hints",
      ],
    } as CompetitionContent,
  },
  {
    id: 9,
    title: "Go-to-Market",
    subtitle: "Organic-first, community-driven",
    type: "gtm",
    icon: Rocket,
    content: {
      channels: [
        { name: "Reddit", reach: "180K members", cost: "$0" },
        { name: "Facebook Groups", reach: "500K+ players", cost: "$0" },
        { name: "SEO/Blog", reach: "40K searches/mo", cost: "$0" },
        { name: "YouTube", reach: "2M+ subs", cost: "$0-500" },
      ],
      budget: "$800 (first 90 days)",
      target: "1,000 players @ $0.80 CAC",
    } as GTMContent,
  },
  {
    id: 10,
    title: "The Ask",
    subtitle: "Let's score big together",
    type: "ask",
    icon: Mail,
    content: {
      ask: "$50K",
      runway: "12 months",
      useOfFunds: [
        { category: "Marketing", percent: 40 },
        { category: "Development", percent: 30 },
        { category: "Operations", percent: 20 },
        { category: "Buffer", percent: 10 },
      ],
      milestones: ["10K players", "$5K MRR", "Break-even in 12 months"],
      cta: "ochescore.ashketing.com",
    } as AskContent,
  },
];

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  const renderSlideContent = () => {
    switch (slide.type) {
      case "title":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Icon className="w-32 h-32 text-[#7C3AED] mx-auto" />
            </motion.div>
            <h1 className="font-display text-7xl lg:text-9xl font-bold">
              <span className="text-[#7C3AED]">Oche</span>Score
            </h1>
            <p className="text-3xl lg:text-4xl text-text-secondary font-display">{slide.subtitle}</p>
            <p className="text-xl text-text-secondary">Modern, free, instant dart scoring for every player</p>
            <a 
              href="https://ochescore.ashketing.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#F97316] transition-colors"
            >
              ochescore.ashketing.com <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        );

      case "problem": {
        const content = slide.content as ProblemContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#F97316]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#F97316]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.pains.map((pain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface rounded-xl p-5 border border-white/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold">{pain.label}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{pain.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="p-4 bg-[#F97316]/10 rounded-xl border border-[#F97316]/30">
              <p className="text-text-secondary">{content.proof}</p>
            </div>
          </div>
        );
      }

      case "solution": {
        const content = slide.content as SolutionContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#7C3AED]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#7C3AED]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="space-y-3">
              {content.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-surface rounded-xl p-4 border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{feature.label}</span>
                    <span className="text-text-secondary ml-2">— {feature.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }

      case "market": {
        const content = slide.content as MarketContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#7C3AED]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#7C3AED]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#7C3AED] rounded-2xl p-6 text-white text-center"
              >
                <span className="text-sm opacity-80">TAM</span>
                <div className="text-5xl font-mono font-bold">{content.tam.value}</div>
                <p className="text-sm opacity-80 mt-2">{content.tam.label}</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-surface rounded-2xl p-6 border border-white/10 text-center"
              >
                <span className="text-sm text-text-secondary">SAM</span>
                <div className="text-5xl font-mono font-bold text-[#F97316]">{content.sam.value}</div>
                <p className="text-sm text-text-secondary mt-2">{content.sam.label}</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-surface rounded-2xl p-6 border border-white/10 text-center"
              >
                <span className="text-sm text-text-secondary">SOM (Year 1)</span>
                <div className="text-5xl font-mono font-bold">{content.som.value}</div>
                <p className="text-sm text-text-secondary mt-2">{content.som.label}</p>
              </motion.div>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5" />
                Growth Rate: {content.growth}
              </span>
            </div>
          </div>
        );
      }

      case "howItWorks": {
        const content = slide.content as HowItWorksContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#F97316]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#F97316]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <div className="bg-surface rounded-xl p-6 pt-10 border border-white/10 h-full">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      }

      case "traction": {
        const content = slide.content as TractionContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#7C3AED]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#7C3AED]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.signals.map((signal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface rounded-xl p-5 border border-white/10 text-center"
                >
                  <p className="text-sm text-text-secondary mb-1">{signal.platform}</p>
                  <p className="text-3xl font-mono font-bold text-[#7C3AED]">{signal.stat}</p>
                  <p className="text-xs text-text-secondary mt-1">{signal.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="p-4 bg-[#7C3AED]/10 rounded-xl border border-[#7C3AED]/30">
              <span className="font-semibold text-[#7C3AED]">Our Edge:</span>
              <span className="text-text-secondary ml-2">{content.edge}</span>
            </div>
          </div>
        );
      }

      case "business": {
        const content = slide.content as BusinessContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-success" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-success">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Free Tier</h3>
                  <span className="font-mono text-2xl">$0</span>
                </div>
                <div className="space-y-2">
                  {content.free.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/80 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Pro Tier</h3>
                  <span className="font-mono text-2xl">{content.pro.price}</span>
                </div>
                <div className="space-y-2">
                  {content.pro.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 px-4 font-semibold">Period</th>
                    <th className="py-2 px-4 font-semibold">Players</th>
                    <th className="py-2 px-4 font-semibold">MRR</th>
                  </tr>
                </thead>
                <tbody>
                  {content.projections.map((p, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2 px-4">{p.period}</td>
                      <td className="py-2 px-4 font-mono text-[#7C3AED]">{p.players}</td>
                      <td className="py-2 px-4 font-mono text-success">{p.mrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }

      case "competition": {
        const content = slide.content as CompetitionContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#F97316]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#F97316]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.competitors.map((c, i) => (
                <div key={i} className="bg-surface rounded-xl p-4 border border-white/10">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-text-secondary">{c.users} users</p>
                  <p className="text-xs text-destructive mt-2">{c.weakness}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#7C3AED]/10 rounded-xl p-6 border border-[#7C3AED]/30">
              <h3 className="font-semibold text-[#7C3AED] mb-3">Our Edge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {content.ourEdge.map((edge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>{edge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "gtm": {
        const content = slide.content as GTMContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#7C3AED]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#7C3AED]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.channels.map((channel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface rounded-xl p-4 border border-white/10"
                >
                  <p className="font-semibold">{channel.name}</p>
                  <p className="text-sm text-[#7C3AED] font-mono">{channel.reach}</p>
                  <p className="text-xs text-success mt-2">Cost: {channel.cost}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#7C3AED]/10 rounded-xl p-4 border border-[#7C3AED]/30 text-center">
                <p className="text-sm text-text-secondary">Budget (90 days)</p>
                <p className="text-2xl font-mono font-bold text-[#7C3AED]">{content.budget}</p>
              </div>
              <div className="bg-success/10 rounded-xl p-4 border border-success/30 text-center">
                <p className="text-sm text-text-secondary">Target</p>
                <p className="text-2xl font-mono font-bold text-success">{content.target}</p>
              </div>
            </div>
          </div>
        );
      }

      case "ask": {
        const content = slide.content as AskContent;
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Icon className="w-12 h-12 text-[#F97316]" />
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl text-[#F97316]">{slide.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-2xl p-6 text-white text-center">
                  <p className="text-sm opacity-80">Pre-seed</p>
                  <p className="text-5xl font-mono font-bold">{content.ask}</p>
                  <p className="text-sm opacity-80">{content.runway} runway</p>
                </div>
                <div className="bg-surface rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Use of Funds</h3>
                  {content.useOfFunds.map((item, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.category}</span>
                        <span className="text-[#7C3AED]">{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percent}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          className="h-full bg-[#7C3AED]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-surface rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Milestones</h3>
                  <div className="space-y-3">
                    {content.milestones.map((m, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#7C3AED]/10 rounded-xl p-6 border border-[#7C3AED]/30 text-center">
                  <p className="text-sm text-text-secondary mb-2">Try it now</p>
                  <a 
                    href={`https://${content.cta}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-mono text-[#7C3AED] hover:text-[#F97316] transition-colors"
                  >
                    {content.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#F97316]/10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-5xl px-8 py-12"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/10 bg-surface">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide 
                    ? "bg-[#7C3AED] w-6" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="absolute top-4 right-4 text-xs text-text-secondary hidden lg:block">
        Use ← → or Space to navigate
      </div>
    </div>
  );
}

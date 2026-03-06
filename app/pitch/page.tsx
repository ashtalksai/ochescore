"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Target, X } from "lucide-react";
import Link from "next/link";

// Slide content data
const SLIDES = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const TOTAL = SLIDES.length;

function SlideLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-px bg-[#7C3AED]" />
      <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED]">{label}</span>
    </div>
  );
}

function Slide1() {
  return (
    <div className="max-w-4xl w-full text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}
        className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center"
      >
        <Target className="w-12 h-12 text-[#7C3AED]" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-8xl font-bold mb-4">
        <span className="text-[#7C3AED]">Oche</span>Score
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl font-display text-[#F97316] mb-6">
        Score like a pro.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
        Free dart scoring with interactive dartboard UI, checkout hints, and shot accuracy tracking. No signup. No paywall. Just play.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Link href="/app" className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-3 rounded-full transition-colors">
          Play Free →
        </Link>
      </motion.div>
    </div>
  );
}

function Slide2() {
  const bullets = [
    { icon: "🔐", text: "Most apps require account creation before you can score a single point" },
    { icon: "💸", text: 'DartCounter (1.5M users) paywalls basic features — "Checkout hints? That\'s Pro."' },
    { icon: "😤", text: "r/Darts is full of \"What's the best scoring app?\" threads. Players try 5+ apps and hate them all." },
    { icon: "📱", text: "Every app looks like it was built in 2012 and hasn't been touched since" },
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="The Problem" />
      <h2 className="font-display text-5xl font-bold mb-2">Dart scoring apps are a nightmare.</h2>
      <p className="text-xl text-[#F97316] mb-8">You just want to play. The apps have other ideas.</p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {bullets.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 flex items-start gap-3">
            <span className="text-2xl">{b.icon}</span>
            <p className="text-sm text-white/80 leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="border-l-4 border-[#F97316] pl-4 bg-[#F97316]/5 rounded-r-xl py-3 pr-4">
        <p className="text-white/70 italic">"Tried 4 different dart apps. Either too complex, requires sign up, or paywalls the features I actually want."</p>
        <p className="text-[#F97316] text-sm mt-1 font-mono">— r/Darts</p>
      </motion.div>
    </div>
  );
}

function Slide3() {
  const pillars = [
    { title: "No friction", desc: "Guest mode works instantly. No account, no email, no waiting." },
    { title: "Interactive board", desc: "Tap the actual segment you hit. The board responds in real-time." },
    { title: "Smart scoring", desc: "Checkout hints, shot accuracy, per-player stats. Actually useful." },
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="The Solution" />
      <h2 className="font-display text-5xl font-bold mb-2">Open URL. Start scoring.</h2>
      <p className="text-xl text-[#F97316] mb-10">OcheScore is built for the pub, not the pro circuit.</p>
      <div className="grid grid-cols-3 gap-6 mb-10">
        {pillars.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className={`rounded-xl p-6 border ${i === 1 ? "bg-[#7C3AED] border-[#7C3AED]" : "bg-[#1A1A1A] border-white/10"}`}>
            <div className="text-3xl font-bold font-mono mb-3 text-[#F97316]">0{i + 1}</div>
            <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
            <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/80" : "text-white/60"}`}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <Link href="https://ochescore.ashketing.com" className="text-[#7C3AED] hover:text-[#6D28D9] font-semibold underline underline-offset-4">
        Try it live → ochescore.ashketing.com
      </Link>
    </div>
  );
}

function Slide4() {
  const markets = [
    { label: "TAM", value: "250M+", desc: "dart players worldwide" },
    { label: "SAM", value: "15M", desc: "active app-using dart players" },
    { label: "Year 1 SOM", value: "$30K ARR", desc: "10K users · 500 Pro subscribers" },
    { label: "Year 3 SOM", value: "$300K ARR", desc: "100K users · 5K Pro subscribers" },
  ];
  const evidence = [
    "DartCounter: 1.5M users, 4.2★ — top complaints are paywall and complexity",
    '"dart scoring app free": 3,600 monthly searches (US alone)',
    "r/Darts: 180K members, weekly 'what app do you use?' posts",
    "UK alone: 6M+ regular pub darts players",
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="Market Opportunity" />
      <h2 className="font-display text-4xl font-bold mb-8">1.5M people already use the competition&apos;s product. And they hate it.</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {markets.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-5 border text-center ${i === 0 ? "bg-[#7C3AED] border-[#7C3AED]" : "bg-[#1A1A1A] border-white/10"}`}>
            <div className="text-xs font-mono uppercase tracking-widest text-[#F97316] mb-2">{m.label}</div>
            <div className="text-3xl font-bold font-display mb-1">{m.value}</div>
            <div className="text-xs text-white/60">{m.desc}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {evidence.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-start gap-2 text-sm text-white/70">
            <span className="text-[#7C3AED] mt-0.5">→</span>
            <span>{e}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide5() {
  const steps = [
    { num: "01", title: "Open the URL", desc: "ochescore.ashketing.com — no install, no account required" },
    { num: "02", title: "Add players & mode", desc: "Choose X01 or Round-the-Clock, add your players" },
    { num: "03", title: "Tap the dartboard", desc: "Hit the interactive segment after each throw — scoring is instant" },
  ];
  const magic = [
    "Score calculates automatically after 3 darts",
    "Checkout hints appear when you're in finishing range",
    "Shot accuracy updates live per player",
    "Game history saves automatically (account optional)",
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="How It Works" />
      <h2 className="font-display text-5xl font-bold mb-8">Three taps to game on.</h2>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
            <div className="text-4xl font-bold font-mono text-[#7C3AED]/40 mb-3">{s.num}</div>
            <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-5">
        <p className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] mb-3">Then the magic ✨</p>
        <div className="grid grid-cols-2 gap-2">
          {magic.map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/70">
              <span className="text-[#F97316]">→</span><span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide6() {
  const community = [
    { platform: "r/Darts", stat: "180K", desc: "members, weekly posts requesting better free apps" },
    { platform: "Facebook Groups", stat: "350K+", desc: "combined members across darts groups" },
    { platform: "YouTube Darts", stat: "2M+", desc: "views on top tutorial channels" },
  ];
  const search = [
    { keyword: '"dart scoring app"', volume: "3,600/mo" },
    { keyword: '"dart checkout calculator"', volume: "2,400/mo" },
    { keyword: '"best dart scorer"', volume: "1,200/mo" },
    { keyword: '"round the clock darts"', volume: "900/mo" },
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="Traction & Proof" />
      <h2 className="font-display text-4xl font-bold mb-8">The market is ready. Here&apos;s the evidence.</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F97316] mb-3">Community signals</p>
          <div className="space-y-3">
            {community.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4">
                <div className="text-xs text-white/50 mb-0.5">{c.platform}</div>
                <div className="text-2xl font-bold font-mono text-[#7C3AED]">{c.stat}</div>
                <div className="text-xs text-white/60">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F97316] mb-3">Search demand</p>
          <div className="space-y-2 mb-4">
            {search.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2">
                <span className="text-sm font-mono text-white/70">{s.keyword}</span>
                <span className="text-sm font-bold text-[#7C3AED]">{s.volume}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4 text-center">
            <div className="text-xs font-mono text-[#7C3AED] mb-1">Total monthly searches</div>
            <div className="text-2xl font-bold">~40K monthly searches for dart scoring</div>
          </div>
          <div className="mt-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl p-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="text-[#F97316]">⚡</span>
              <span>23% of DartCounter 1-star reviews mention paywall specifically</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide7() {
  const freeFeatures = ["Unlimited X01 & Round-the-Clock games", "Interactive dartboard UI", "Checkout hints", "Last 5 games history", "Shot accuracy (session)"];
  const proFeatures = ["Unlimited game history", "Full stats dashboard", "Export to CSV", "Custom game modes", "Priority feature requests"];
  const projections = [
    { period: "Month 1", users: "500", pro: "20", mrr: "$100" },
    { period: "Month 6", users: "5,000", pro: "200", mrr: "$1,000" },
    { period: "Year 1", users: "15,000", pro: "600", mrr: "$3,000" },
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="Business Model" />
      <h2 className="font-display text-4xl font-bold mb-6">Free makes it viral. Pro makes it sustainable.</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
          <div className="text-sm text-white/50 mb-1">Free</div>
          <div className="text-4xl font-bold font-mono mb-4">$0<span className="text-base font-normal text-white/40">/mo</span></div>
          <ul className="space-y-2">{freeFeatures.map((f, i) => <li key={i} className="flex items-center gap-2 text-sm text-white/70"><span className="text-[#7C3AED]">✓</span> {f}</li>)}</ul>
        </div>
        <div className="bg-[#7C3AED] rounded-xl p-6 relative">
          <div className="absolute -top-3 left-6 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
          <div className="text-sm text-white/70 mb-1">Pro</div>
          <div className="text-4xl font-bold font-mono mb-4">$4.99<span className="text-base font-normal opacity-60">/mo</span></div>
          <ul className="space-y-2">{proFeatures.map((f, i) => <li key={i} className="flex items-center gap-2 text-sm text-white/80"><span className="text-[#F97316]">✓</span> {f}</li>)}</ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {projections.map((p, i) => (
          <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-xl p-3 text-center">
            <div className="text-xs font-mono text-[#F97316] mb-2">{p.period}</div>
            <div className="text-lg font-bold">{p.mrr} <span className="text-xs text-white/50">MRR</span></div>
            <div className="text-xs text-white/50">{p.users} users · {p.pro} Pro</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/40 italic">Free tier is genuinely useful → word of mouth at the pub. Pub players introduce others → viral loop. Stats obsessives upgrade → $4.99 is 2 beers.</p>
    </div>
  );
}

function Slide8() {
  const features = ["No signup required", "Interactive dartboard", "Checkout hints (free)", "Shot accuracy", "Offline / PWA", "Modern UI"];
  const competitors = [
    { name: "OcheScore ✨", us: true, values: [true, true, true, true, true, true] },
    { name: "DartCounter", us: false, values: [false, false, false, "Pro only", "Partial", "Mediocre"] },
    { name: "Dartore", us: false, values: [false, false, false, false, false, "Old"] },
    { name: "Generic", us: false, values: [true, false, false, false, false, false] },
  ];
  const moat = [
    "Guest mode with full features → zero conversion friction",
    "Interactive dartboard → tactile, satisfying, shareable",
    "PWA → no App Store approval, instant updates, works offline",
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="Competition" />
      <h2 className="font-display text-3xl font-bold mb-6">We&apos;re not competing with DartCounter. We&apos;re replacing their free tier.</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 pr-4 text-white/50 font-normal"></th>
              {competitors.map((c, i) => (
                <th key={i} className={`px-3 py-2 font-display ${c.us ? "text-[#7C3AED]" : "text-white/50"}`}>{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-4 text-white/70 whitespace-nowrap">{f}</td>
                {competitors.map((c, j) => {
                  const val = c.values[i];
                  return (
                    <td key={j} className={`px-3 py-2 text-center ${c.us ? "bg-[#7C3AED]/10" : ""}`}>
                      {val === true ? <span className="text-green-400">✅</span> : val === false ? <span className="text-red-400">❌</span> : <span className="text-yellow-400 text-xs">{val as string}</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] mb-3">Our moat</p>
        <div className="space-y-1">
          {moat.map((m, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="text-[#F97316] mt-0.5">→</span><span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide9() {
  const months = [
    { label: "Month 1", title: "Launch", items: ["Reddit r/Darts post (180K members)", "ProductHunt launch — target top 5", "Facebook groups (500K+ combined)", "HackerNews Show HN", "2 SEO blog posts"] },
    { label: "Month 2", title: "Grow", items: ["YouTube/TikTok demo video", "3 more SEO posts", "Email onboarding sequence", "Community presence in r/Darts"] },
    { label: "Month 3", title: "Scale", items: ["Test $50 Reddit ads (organic proven)", "Reach out to darts league organizers", "Feature update from top feedback"] },
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="Go-to-Market" />
      <h2 className="font-display text-4xl font-bold mb-8">Community-first. Zero paid spend to start.</h2>
      <div className="grid grid-cols-3 gap-5 mb-6">
        {months.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className={`rounded-xl p-5 border ${i === 0 ? "border-[#7C3AED] bg-[#7C3AED]/10" : "border-white/10 bg-[#1A1A1A]"}`}>
            <div className="text-xs font-mono text-[#F97316] mb-1">{m.label}</div>
            <h3 className="font-display font-bold text-lg mb-4">{m.title}</h3>
            <ul className="space-y-2">
              {m.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-[#7C3AED] mt-0.5">→</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-[#F97316] text-lg">💰</span>
          <div>
            <div className="text-xs text-white/50">Cost to validate</div>
            <div className="font-bold">$0–$80/month</div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-[#7C3AED] text-lg">⚡</span>
          <div>
            <div className="text-xs text-white/50">Break-even</div>
            <div className="font-bold">32 Pro subscribers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide10() {
  const built = [
    "Full MVP live at ochescore.ashketing.com",
    "Interactive dartboard with 62 tap targets",
    "X01 (101/301/501) + Round-the-Clock game modes",
    "Checkout hints, shot accuracy, game history",
    "Stripe payments (Pro tier)",
    "PWA with offline support",
  ];
  const accelerators = [
    "Distribution: darts league partnerships and app store listing",
    "Content: sponsored YouTube placement in top darts channels",
    'B2B: "OcheScore for Leagues" (league management features)',
  ];
  return (
    <div className="max-w-5xl w-full">
      <SlideLabel label="The Ask" />
      <h2 className="font-display text-4xl font-bold mb-8">OcheScore is live. The question is distribution.</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F97316] mb-3">What we&apos;ve built</p>
          <div className="space-y-2">
            {built.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-2 text-sm text-white/80">
                <span className="text-green-400">✅</span><span>{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F97316] mb-3">What would accelerate this</p>
          <div className="space-y-3 mb-6">
            {accelerators.map((a, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-xl p-3 flex items-start gap-2 text-sm text-white/70">
                <span className="text-[#7C3AED]">→</span><span>{a}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#7C3AED] rounded-xl p-5">
            <p className="text-white/80 text-sm mb-1">Built by ChimeStream / Ash Hatef</p>
            <p className="text-white/60 text-xs font-mono mb-4">Next.js 15, Tailwind, Framer Motion, Stripe, Postgres</p>
            <p className="text-white/70 text-sm mb-2">If you play darts (or know someone who does):</p>
            <p className="font-bold text-lg">Share the link. That&apos;s all we need right now.</p>
            <Link href="https://ochescore.ashketing.com"
              className="mt-4 inline-flex items-center gap-2 bg-white text-[#7C3AED] font-bold px-5 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
              👉 ochescore.ashketing.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

export default function PitchPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setCurrent((c) => Math.min(c + 1, TOTAL - 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") setCurrent((c) => Math.max(c - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const SlideComp = SLIDE_COMPONENTS[current];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0F0F0F] text-white relative select-none">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <X className="w-4 h-4" /><span className="text-sm font-mono">Exit</span>
        </Link>
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-[#7C3AED]" />
          <span className="font-display font-bold text-sm">OcheScore</span>
          <span className="text-white/30 text-sm mx-2">|</span>
          <span className="font-mono text-sm text-white/40">{current + 1} / {TOTAL}</span>
        </div>
        <div className="text-xs text-white/30 font-mono">← → arrow keys</div>
      </div>

      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-full w-full flex items-center justify-center p-8 pt-16 pb-20"
        >
          <SlideComp />
        </motion.div>
      </AnimatePresence>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
        <button onClick={() => setCurrent((c) => Math.max(c - 1, 0))} disabled={current === 0}
          className="flex items-center gap-1 text-sm text-white/50 hover:text-white disabled:opacity-20 transition-colors font-mono">
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#7C3AED]" : i < current ? "w-1.5 bg-[#7C3AED]/40" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
        <button onClick={() => setCurrent((c) => Math.min(c + 1, TOTAL - 1))} disabled={current === TOTAL - 1}
          className="flex items-center gap-1 text-sm text-white/50 hover:text-white disabled:opacity-20 transition-colors font-mono">
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

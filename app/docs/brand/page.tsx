"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Type,
  Square,
  MousePointer,
  Image,
  CheckCircle2,
  XCircle,
  Sparkles
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function BrandPage() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Brand Overview */}
        <motion.section {...fadeIn} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#F97316]/20 rounded-2xl" />
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <Palette className="w-12 h-12 text-[#F97316]" />
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold">Brand Spec</h1>
                <p className="text-text-secondary">Visual Identity Guidelines</p>
              </div>
            </div>
            
            <div className="bg-surface rounded-xl p-6 border border-white/10 mb-8">
              <h2 className="font-semibold text-lg mb-2">Mission</h2>
              <p className="text-xl text-text-secondary">Make dart scoring effortless, delightful, and accessible to every player.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-[#7C3AED]">Visual DNA</h3>
                <p className="text-text-secondary">Modern, tactile, playful confidence. Linear.app&apos;s slick animations meet Apple Game Center&apos;s polished fun.</p>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold mb-3 text-[#F97316]">Brand Personality</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• <span className="text-white">Delightfully tactile</span> — Tapping feels satisfying</li>
                  <li>• <span className="text-white">Confident and playful</span> — Not stuffy</li>
                  <li>• <span className="text-white">Effortless</span> — No manual needed</li>
                  <li>• <span className="text-white">Polished but approachable</span> — Pro quality, friendly tone</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section {...fadeIn} transition={{ delay: 0.1 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Palette className="w-8 h-8 text-[#7C3AED]" />
            Color Palette
          </h2>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl overflow-hidden">
                <div className="h-24 bg-[#7C3AED]"></div>
                <div className="p-4 bg-surface border border-white/10 border-t-0">
                  <div className="font-semibold">Vibrant Purple</div>
                  <div className="font-mono text-sm text-[#7C3AED]">#7C3AED</div>
                  <div className="text-xs text-text-secondary">rgb(124, 58, 237)</div>
                  <div className="text-xs text-text-secondary mt-1">Primary brand, CTAs, dartboard bullseye</div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="h-24 bg-[#F97316]"></div>
                <div className="p-4 bg-surface border border-white/10 border-t-0">
                  <div className="font-semibold">Warm Orange</div>
                  <div className="font-mono text-sm text-[#F97316]">#F97316</div>
                  <div className="text-xs text-text-secondary">rgb(249, 115, 22)</div>
                  <div className="text-xs text-text-secondary mt-1">Secondary accent, highlights, outer bull</div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="h-24 bg-[#0F0F0F] border border-white/10"></div>
                <div className="p-4 bg-surface border border-white/10 border-t-0">
                  <div className="font-semibold">Deep Black</div>
                  <div className="font-mono text-sm">#0F0F0F</div>
                  <div className="text-xs text-text-secondary">rgb(15, 15, 15)</div>
                  <div className="text-xs text-text-secondary mt-1">Background</div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <div className="h-24 bg-[#1A1A1A]"></div>
                <div className="p-4 bg-surface border border-white/10 border-t-0">
                  <div className="font-semibold">Charcoal Surface</div>
                  <div className="font-mono text-sm">#1A1A1A</div>
                  <div className="text-xs text-text-secondary">rgb(26, 26, 26)</div>
                  <div className="text-xs text-text-secondary mt-1">Cards, panels, modals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Semantic Colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Text Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#FAFAFA]"></div>
                    <span>Off-White</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary">#FAFAFA</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#A1A1A1]"></div>
                    <span className="text-text-secondary">Gray</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary">#A1A1A1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#6B7280]"></div>
                    <span className="text-[#6B7280]">Muted</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary">#6B7280</span>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Semantic Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#10B981]"></div>
                    <span className="text-success">Success Green</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary">#10B981</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EF4444]"></div>
                    <span className="text-destructive">Destructive Red</span>
                  </div>
                  <span className="font-mono text-sm text-text-secondary">#EF4444</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Type className="w-8 h-8 text-[#F97316]" />
            Typography
          </h2>

          <div className="space-y-6">
            {/* Display Font */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-display text-xl font-semibold">Space Grotesk</h3>
                <span className="text-sm text-text-secondary">Display Font</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">Usage: Headings, hero text, CTAs</p>
              <div className="font-display space-y-2">
                <p className="text-5xl font-bold">Aa Bb Cc Dd</p>
                <p className="text-3xl font-semibold">The quick brown fox jumps</p>
                <p className="text-xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-xl">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-xl">0123456789</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-sm text-text-secondary">
                <span>Weights: Regular (400), Medium (500), Bold (700)</span>
                <span>Sizes: 24px, 32px, 48px, 64px, 72px</span>
              </div>
            </div>

            {/* Body Font */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-sans text-xl font-semibold">Inter</h3>
                <span className="text-sm text-text-secondary">Body Font</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">Usage: UI text, paragraphs, navigation</p>
              <div className="font-sans space-y-2">
                <p className="text-3xl">Aa Bb Cc Dd</p>
                <p className="text-xl">The quick brown fox jumps over the lazy dog.</p>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-sm text-text-secondary">
                <span>Weights: Regular (400), Medium (500), Semibold (600)</span>
                <span>Sizes: 12px, 14px, 16px, 18px, 20px</span>
              </div>
            </div>

            {/* Mono Font */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-mono text-xl font-semibold">JetBrains Mono</h3>
                <span className="text-sm text-text-secondary">Mono Font</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">Usage: Scores, data, stats, code</p>
              <div className="font-mono space-y-2">
                <p className="text-3xl font-bold text-[#7C3AED]">501 → 180 → 321</p>
                <p className="text-xl">Score: 60 | Average: 42.5 | Checkout: T20-T20-D20</p>
                <p>0123456789 . , : - + = % $ €</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-sm text-text-secondary">
                <span>Weights: Regular (400), Bold (700)</span>
                <span>Sizes: 14px, 16px, 20px, 32px</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Spacing & Layout */}
        <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Square className="w-8 h-8 text-[#7C3AED]" />
            Spacing & Layout
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Spacing Scale</h3>
              <p className="text-sm text-text-secondary mb-4">Base Unit: 4px</p>
              <div className="space-y-2">
                {[
                  { size: "4px", name: "xs" },
                  { size: "8px", name: "sm" },
                  { size: "12px", name: "md" },
                  { size: "16px", name: "base" },
                  { size: "24px", name: "lg" },
                  { size: "32px", name: "xl" },
                  { size: "48px", name: "2xl" },
                  { size: "64px", name: "3xl" },
                  { size: "80px", name: "4xl" },
                ].map((item) => (
                  <div key={item.size} className="flex items-center gap-3">
                    <div className="w-16 text-sm text-text-secondary font-mono">{item.size}</div>
                    <div className="h-3 bg-[#7C3AED]/50" style={{ width: item.size }}></div>
                    <span className="text-xs text-text-secondary">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Border Radius</h3>
              <div className="space-y-4">
                {[
                  { size: "6px", name: "Small", usage: "Tags, badges" },
                  { size: "12px", name: "Medium", usage: "Buttons, inputs" },
                  { size: "16px", name: "Large", usage: "Cards, modals" },
                  { size: "24px", name: "XL", usage: "Large cards, sections" },
                  { size: "9999px", name: "Full", usage: "Pills, circular buttons" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 bg-[#7C3AED]/50 flex-shrink-0" 
                      style={{ borderRadius: item.size }}
                    ></div>
                    <div>
                      <div className="font-medium">{item.name} <span className="font-mono text-sm text-text-secondary">({item.size})</span></div>
                      <div className="text-xs text-text-secondary">{item.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#7C3AED]/10 rounded-xl p-4 border border-[#7C3AED]/30">
              <span className="text-sm text-text-secondary">Container Max-Width</span>
              <div className="font-mono font-bold text-[#7C3AED]">1200px</div>
            </div>
            <div className="bg-[#F97316]/10 rounded-xl p-4 border border-[#F97316]/30">
              <span className="text-sm text-text-secondary">Section Padding (Desktop)</span>
              <div className="font-mono font-bold text-[#F97316]">80px</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-sm text-text-secondary">Section Padding (Mobile)</span>
              <div className="font-mono font-bold">48px</div>
            </div>
          </div>
        </motion.section>

        {/* Animations */}
        <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#F97316]" />
            Animations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Timing Functions</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Smooth</span>
                    <span className="font-mono text-xs text-text-secondary">cubic-bezier(0.4, 0, 0.2, 1)</span>
                  </div>
                  <p className="text-xs text-text-secondary">General transitions</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Snappy</span>
                    <span className="font-mono text-xs text-text-secondary">cubic-bezier(0.25, 0.1, 0.25, 1)</span>
                  </div>
                  <p className="text-xs text-text-secondary">Button presses, taps</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <h3 className="font-semibold mb-4">Durations</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Fast</span>
                  <span className="font-mono text-[#7C3AED]">150ms</span>
                </div>
                <p className="text-xs text-text-secondary -mt-2">Hover states, small transitions</p>
                <div className="flex justify-between">
                  <span>Normal</span>
                  <span className="font-mono text-[#7C3AED]">250ms</span>
                </div>
                <p className="text-xs text-text-secondary -mt-2">Button clicks, modals</p>
                <div className="flex justify-between">
                  <span>Slow</span>
                  <span className="font-mono text-[#7C3AED]">400ms</span>
                </div>
                <p className="text-xs text-text-secondary -mt-2">Page transitions, large animations</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#7C3AED]/10 rounded-xl p-6 border border-[#7C3AED]/30">
            <h3 className="font-semibold mb-4 text-[#7C3AED]">Key Animations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#F97316]">•</span>
                <div>
                  <span className="font-medium">Dartboard tap:</span>
                  <span className="text-text-secondary"> Segment glows + scales (1.05) for 200ms</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#F97316]">•</span>
                <div>
                  <span className="font-medium">Score fly-up:</span>
                  <span className="text-text-secondary"> Spring physics via Framer Motion</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#F97316]">•</span>
                <div>
                  <span className="font-medium">Confetti:</span>
                  <span className="text-text-secondary"> On game win (purple + orange colors)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#F97316]">•</span>
                <div>
                  <span className="font-medium">Page load:</span>
                  <span className="text-text-secondary"> Hero fades in with scale, headline slides up</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Components */}
        <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <MousePointer className="w-8 h-8 text-[#7C3AED]" />
            Components
          </h2>

          {/* Buttons */}
          <div className="bg-surface rounded-xl p-6 border border-white/10 mb-6">
            <h3 className="font-semibold mb-6">Buttons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-text-secondary mb-3">Primary (Purple Glow)</p>
                <button className="bg-[#7C3AED] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all hover:scale-[1.02]">
                  Start Game
                </button>
                <div className="mt-3 text-xs text-text-secondary">
                  <p>Background: #7C3AED</p>
                  <p>Hover: Glow + scale(1.02)</p>
                  <p>Radius: 12px</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-3">Secondary (Outline)</p>
                <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED] hover:text-white transition-all">
                  Learn More
                </button>
                <div className="mt-3 text-xs text-text-secondary">
                  <p>Border: 2px solid #7C3AED</p>
                  <p>Hover: Fill background</p>
                  <p>Radius: 12px</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-3">Ghost</p>
                <button className="text-text-secondary px-6 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-all">
                  Cancel
                </button>
                <div className="mt-3 text-xs text-text-secondary">
                  <p>Background: transparent</p>
                  <p>Hover: bg #1A1A1A</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Dartboard */}
          <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#F97316]/20 rounded-xl p-6 border border-white/10">
            <h3 className="font-semibold mb-4">Interactive Dartboard ⭐ THE Signature Element</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#7C3AED] mb-2">Design</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Flat SVG (not skeuomorphic)</li>
                    <li>• 62 tap targets (20 numbers × 3 zones + 2 bulls)</li>
                    <li>• Bold outlines for segments</li>
                    <li>• Tap feedback: 200ms glow + scale</li>
                    <li>• Haptic vibration on mobile</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#F97316] mb-2">Why Different Colors?</h4>
                  <p className="text-sm text-text-secondary">Brand differentiation. Every competitor uses green/red — we use purple/orange to stand out.</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Dartboard Colors</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED]"></div>
                    <div>
                      <span className="font-medium">Bullseye</span>
                      <span className="text-text-secondary text-sm ml-2">#7C3AED ⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F97316]"></div>
                    <div>
                      <span className="font-medium">Outer Bull</span>
                      <span className="text-text-secondary text-sm ml-2">#F97316 ⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black border border-white/20"></div>
                    <div>
                      <span className="font-medium">Traditional</span>
                      <span className="text-text-secondary text-sm ml-2">Black, White, Red, Green</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Imagery Style */}
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Image className="w-8 h-8 text-[#F97316]" />
            Imagery Style
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <h3 className="font-semibold">What we use</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Dark moody lighting (matches brand background)</li>
                <li>• Close-ups of dartboards, hands throwing darts</li>
                <li>• Purple/orange color grading (subtle)</li>
                <li>• Minimal, clean compositions</li>
              </ul>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-destructive" />
                <h3 className="font-semibold">What we DON&apos;T use</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Generic stock photos of people smiling</li>
                <li>• Overly bright, cheerful lighting</li>
                <li>• Cluttered backgrounds</li>
                <li>• Literal dartboard textures (no wood grain, no cork)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* DO / DON'T */}
        <motion.section {...fadeIn} transition={{ delay: 0.7 }}>
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-2xl p-8 lg:p-12">
            <h2 className="font-display text-3xl font-bold text-white mb-8">DO / DON&apos;T Guidelines</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visual Design */}
              <div>
                <h3 className="font-semibold text-white mb-4">Visual Design</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Use purple/orange for brand elements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Flat, modern UI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Dark background (#0F0F0F)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Generous spacing (32px+)</span>
                  </div>
                  <div className="h-px bg-white/20 my-3"></div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">Traditional green/red dartboard colors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">Skeuomorphic textures (wood, shadows)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">White/light backgrounds</span>
                  </div>
                </div>
              </div>

              {/* Tone & Copy */}
              <div>
                <h3 className="font-semibold text-white mb-4">Tone & Copy</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">&quot;Tap the board. See the magic.&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">&quot;Free is actually free.&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">&quot;100ms tap-to-score speed.&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">Confident, direct, playful</span>
                  </div>
                  <div className="h-px bg-white/20 my-3"></div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">&quot;Revolutionary AI-powered platform&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">&quot;Limited time offer!&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm line-through">Corporate, buzzwordy, desperate</span>
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

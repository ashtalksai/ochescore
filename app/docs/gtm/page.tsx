"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Calendar, 
  Target,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  MessageSquare,
  Facebook,
  Youtube,
  Search,
  Zap
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function GTMPage() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Launch Overview */}
        <motion.section {...fadeIn} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#F97316]/20 rounded-2xl" />
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-12 h-12 text-[#F97316]" />
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold">Launch Overview</h1>
                <p className="text-text-secondary">Go-to-Market Strategy</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <Calendar className="w-6 h-6 text-[#7C3AED] mb-2" />
                <span className="text-sm text-text-secondary">Launch Date</span>
                <div className="text-xl font-semibold">March 1, 2026</div>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <Users className="w-6 h-6 text-[#7C3AED] mb-2" />
                <span className="text-sm text-text-secondary">Target Audience</span>
                <div className="text-xl font-semibold">Pub Players</div>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <Target className="w-6 h-6 text-[#7C3AED] mb-2" />
                <span className="text-sm text-text-secondary">90-Day Goal</span>
                <div className="text-xl font-semibold">1,000 Players</div>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <DollarSign className="w-6 h-6 text-success mb-2" />
                <span className="text-sm text-text-secondary">MRR Target</span>
                <div className="text-xl font-semibold text-success">$250</div>
              </div>
            </div>

            {/* Milestone Timeline */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { period: "Week 1", target: "100", metric: "Soft launch (Reddit)" },
                { period: "Month 1", target: "500", metric: "Organic + ProductHunt" },
                { period: "Month 3", target: "1,000", metric: "SEO + paid ads test" },
                { period: "Month 6", target: "3,000", metric: "Scaling winners" },
              ].map((milestone, i) => (
                <div key={i} className="relative">
                  <div className="bg-[#7C3AED]/20 rounded-xl p-4 border border-[#7C3AED]/30">
                    <span className="text-xs text-[#7C3AED] font-semibold uppercase">{milestone.period}</span>
                    <div className="text-2xl font-mono font-bold text-white">{milestone.target}</div>
                    <span className="text-xs text-text-secondary">{milestone.metric}</span>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#7C3AED]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 90-Day Timeline */}
        <motion.section {...fadeIn} transition={{ delay: 0.1 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-[#7C3AED]" />
            90-Day Timeline
          </h2>

          <div className="space-y-8">
            {/* Week 1 */}
            <div className="relative pl-8 border-l-2 border-[#7C3AED]">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#7C3AED] rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">1</span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[#F97316] font-semibold">Week 1: Soft Launch</span>
                    <h3 className="text-xl font-semibold">Mar 1-7</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#7C3AED]/20 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-[#7C3AED]" />
                    <span className="text-sm font-mono">100 players</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">Validate product-market fit with 100 early adopters</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Post to r/Darts: "I built the dart scoring app I wish existed"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Share in 5 Facebook dart groups</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Email 20 friends who play darts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Set up Google Analytics + Hotjar</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-text-secondary">Success: 100 players, 300+ games, &lt;5% bounce, 5+ shares</span>
                </div>
              </div>
            </div>

            {/* Week 2-4 */}
            <div className="relative pl-8 border-l-2 border-[#7C3AED]">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#7C3AED] rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">2</span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[#F97316] font-semibold">Week 2-4: Community Growth</span>
                    <h3 className="text-xl font-semibold">Mar 8-31</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#7C3AED]/20 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-[#7C3AED]" />
                    <span className="text-sm font-mono">500 players</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">Reach 500 players through organic channels</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Weekly posts to r/Darts (tutorials, tips, updates)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Facebook Groups: Screenshots, feedback requests</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>YouTube: Comment on dart tutorials with subtle mentions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>ProductHunt launch (aim for top 10 of the day)</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#7C3AED]/10 rounded-lg">
                  <span className="text-sm font-semibold">Content Mix:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-[#7C3AED]/20 rounded text-xs">40% Educational</span>
                    <span className="px-2 py-1 bg-[#F97316]/20 rounded text-xs">30% Updates</span>
                    <span className="px-2 py-1 bg-success/20 rounded text-xs">20% User Stories</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">10% Promo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 2-3 */}
            <div className="relative pl-8 border-l-2 border-[#7C3AED]">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#7C3AED] rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">3</span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[#F97316] font-semibold">Month 2-3: SEO + Paid Ads Test</span>
                    <h3 className="text-xl font-semibold">Apr 1 - May 31</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#7C3AED]/20 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-[#7C3AED]" />
                    <span className="text-sm font-mono">1,000 players</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">Scale to 1,000 players, test paid acquisition</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>SEO: 8 blog posts targeting dart keywords</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Google Ads test: $300 budget</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>YouTube sponsorships: 10 channels @ $50-200 each</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>League partnerships: 5 trials with free Pro tier</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-success/10 rounded-lg border border-success/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-success">Budget: $800</span>
                    <span className="text-sm text-text-secondary">Google Ads $300 + YouTube $500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 4-6 */}
            <div className="relative pl-8 border-l-2 border-[#7C3AED]">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#F97316] rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">4</span>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[#F97316] font-semibold">Month 4-6: Scaling Winners</span>
                    <h3 className="text-xl font-semibold">Jun 1 - Aug 31</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F97316]/20 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-[#F97316]" />
                    <span className="text-sm font-mono">3,000 players</span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">Double down on winning channels</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>If Reddit works → Expand to related subreddits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>If SEO works → 12 more blog posts, build backlinks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>If YouTube works → Sponsor 5 more, own channel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>Launch referral: "Invite 3, get 1 month Pro free"</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#F97316]/10 rounded-lg border border-[#F97316]/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#F97316]">Budget: $2,300/mo</span>
                    <span className="text-sm text-text-secondary">Best channel $1,500 + Second $500 + Experiments $300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Channel Strategy */}
        <motion.section {...fadeIn} transition={{ delay: 0.2 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#F97316]" />
            Channel Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reddit */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF4500] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Reddit (r/Darts)</h3>
                  <span className="text-xs text-[#7C3AED]">40% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">180K members, high intent, free, proven engagement</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Week 1</span>
                  <span>Launch post</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Week 2</span>
                  <span>Tutorial</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Week 3</span>
                  <span>Feedback request</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Week 4</span>
                  <span>User showcase</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="text-success font-mono">300 signups/mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="text-success font-mono">$0</span>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Facebook Groups</h3>
                  <span className="text-xs text-[#7C3AED]">20% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">500K+ dart players in groups, community-driven</p>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>• UK Darts Community (80K)</div>
                <div>• Darts Players United (50K)</div>
                <div>• American Darts Organization (40K)</div>
                <div>• Pub Darts League (30K)</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="text-success font-mono">150 signups/mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="text-success font-mono">$0</span>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4285F4] rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">SEO (Blog)</h3>
                  <span className="text-xs text-[#7C3AED]">15% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">40K monthly searches, long-term compounding</p>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>• "dart scoring app" (12K/mo)</div>
                <div>• "best dart scorer" (8K/mo)</div>
                <div>• "how to score darts" (22K/mo)</div>
                <div>• 8 posts targeting these keywords</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="text-success font-mono">100 signups (M2-3)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="text-success font-mono">$0 (DIY)</span>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">YouTube Sponsorships</h3>
                  <span className="text-xs text-[#7C3AED]">10% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">Dart YouTube community is engaged</p>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>• Flight School Darts (200K subs)</div>
                <div>• DartsDudes (150K subs)</div>
                <div>• OneHundredAndEighty (100K subs)</div>
                <div>• $50-200/video if paid</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="text-success font-mono">50/video mention</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="font-mono">$0-500</span>
                </div>
              </div>
            </div>

            {/* ProductHunt */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#DA552F] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">ProductHunt</h3>
                  <span className="text-xs text-[#7C3AED]">10% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">Tech-savvy audience, viral potential</p>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>• Launch Tuesday or Wednesday</div>
                <div>• 5 friends upvote + comment in first hour</div>
                <div>• Find hunter with 1K+ followers</div>
                <div>• Engage in comments all day</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="text-success font-mono">200 signups (launch day)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="text-success font-mono">$0</span>
                </div>
              </div>
            </div>

            {/* Google Ads */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#34A853] rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Google Ads (Test)</h3>
                  <span className="text-xs text-[#F97316]">5% of effort</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">High intent, fast feedback, test only</p>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>• "dart scoring app" (exact match)</div>
                <div>• "free dart counter" (phrase match)</div>
                <div>• Headline: "Free Dart Scoring App"</div>
                <div>• $300 budget in Month 2</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Expected</span>
                  <span className="font-mono">60 signups</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Cost</span>
                  <span className="font-mono">$300 ($5 CPC)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing & Monetization */}
        <motion.section {...fadeIn} transition={{ delay: 0.3 }}>
          <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-success" />
            Pricing & Monetization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Tier */}
            <div className="bg-surface rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Free Tier</h3>
                <span className="text-2xl font-mono font-bold">$0</span>
              </div>
              <p className="text-text-secondary text-sm mb-4">Forever free. Build trust, remove friction.</p>
              <div className="space-y-2">
                {[
                  "All game modes (X01 + Round-the-Clock)",
                  "Interactive dartboard",
                  "Up to 4 players",
                  "Session stats & checkout hints",
                  "No account required",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tier */}
            <div className="bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/80 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Pro Tier</h3>
                <div className="text-right">
                  <span className="text-2xl font-mono font-bold text-white">$4.99</span>
                  <span className="text-white/70">/mo</span>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">14-day free trial. For serious players.</p>
              <div className="space-y-2">
                {[
                  "Everything in Free",
                  "Unlimited game history (cloud)",
                  "Advanced stats & trends",
                  "Export to CSV",
                  "Cloud sync across devices",
                  "Priority support (24h response)",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Budget Summary */}
        <motion.section {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-3xl font-bold mb-8">Budget Summary</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-semibold">Month</th>
                  <th className="py-4 px-4 font-semibold">Channels</th>
                  <th className="py-4 px-4 font-semibold">Budget</th>
                  <th className="py-4 px-4 font-semibold">Expected Signups</th>
                  <th className="py-4 px-4 font-semibold">CAC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Month 1</td>
                  <td className="py-4 px-4 text-text-secondary">Reddit, Facebook, Communities</td>
                  <td className="py-4 px-4 font-mono text-success">$0</td>
                  <td className="py-4 px-4 font-mono">500</td>
                  <td className="py-4 px-4 font-mono text-success">$0</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Month 2</td>
                  <td className="py-4 px-4 text-text-secondary">SEO, ProductHunt, YouTube (organic)</td>
                  <td className="py-4 px-4 font-mono text-success">$0</td>
                  <td className="py-4 px-4 font-mono">300</td>
                  <td className="py-4 px-4 font-mono text-success">$0</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Month 3</td>
                  <td className="py-4 px-4 text-text-secondary">Google Ads (test), YouTube (paid)</td>
                  <td className="py-4 px-4 font-mono">$800</td>
                  <td className="py-4 px-4 font-mono">200</td>
                  <td className="py-4 px-4 font-mono">$4</td>
                </tr>
                <tr className="bg-[#7C3AED]/10">
                  <td className="py-4 px-4 font-bold">Total</td>
                  <td className="py-4 px-4"></td>
                  <td className="py-4 px-4 font-mono font-bold">$800</td>
                  <td className="py-4 px-4 font-mono font-bold">1,000</td>
                  <td className="py-4 px-4 font-mono font-bold text-success">$0.80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Success Criteria */}
        <motion.section {...fadeIn} transition={{ delay: 0.5 }}>
          <div className="bg-gradient-to-br from-[#7C3AED] to-[#F97316] rounded-2xl p-8 lg:p-12">
            <h2 className="font-display text-3xl font-bold text-white mb-8">Success Criteria</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { period: "Week 1", metrics: ["100 players", "300 games", "<5% bounce", "5+ shares"] },
                { period: "Month 1", metrics: ["500 players", "1,500 games", "10+ testimonials", "PH top 10"] },
                { period: "Month 3", metrics: ["1,000 players", "5,000 games", "50 Pro subs", "<$10 CAC"] },
                { period: "Month 6 🎯", metrics: ["3,000+ players", "15,000+ games", "150 Pro subs", "Cash flow+"] },
              ].map((milestone, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-3">{milestone.period}</h3>
                  <div className="space-y-2">
                    {milestone.metrics.map((metric, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-white/70" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

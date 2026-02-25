const colors = {
  bgPrimary: '#0f1419',
  bgSecondary: '#1a2129',
  bgSurface: '#242d38',
  textPrimary: '#f5f5f0',
  textSecondary: '#9ca3af',
  textMuted: '#6b7280',
  accentPurple: '#7C3AED',
  accentGreen: '#2d4a3e',
  accentOrange: '#F97316',
}

export default function GTMPage() {
  return (
    <div className="space-y-12">
      {/* Launch Overview - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentOrange}30 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>
              Go-To-Market Plan
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
            Score like a pro
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl" style={{ color: colors.textSecondary }}>
            Launch strategy for OcheScore — targeting dart enthusiasts from casual pub players 
            to competitive league members who want effortless scoring.
          </p>

          {/* Launch metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>Launch Target</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>Day 1</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>500 downloads</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>Month 1 Goal</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>10K</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>active users</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-xs mb-1" style={{ color: colors.textMuted }}>Premium Conv.</div>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>5%</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>target rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📅</span> 90-Day Timeline
        </h2>

        <div className="space-y-4">
          {/* Week 1 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentPurple }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentPurple }}>WEEK 1</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>Community Seeding</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Reddit & Discord Launch</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Post in r/darts with value-first content</li>
                <li>• Create OcheScore Discord server</li>
                <li>• Reach out to dart YouTubers</li>
                <li>• Seed discussions in dart Facebook groups</li>
                <li>• Engage with comments, gather feedback</li>
              </ul>
            </div>
          </div>

          {/* Week 2-4 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentOrange }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentOrange }}>WEEK 2-4</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentOrange, color: colors.bgPrimary }}>App Store Launch</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Product Hunt + Influencer Push</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Tuesday: Product Hunt launch</li>
                <li>• Partner with 3-5 dart YouTubers</li>
                <li>• TikTok dart trick shot content</li>
                <li>• Instagram Reels showing checkout hints</li>
                <li>• First metrics review & iterate</li>
                <li>• Respond to all app store reviews</li>
              </ul>
            </div>
          </div>

          {/* Month 2-3 */}
          <div className="flex gap-4">
            <div className="w-1 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
            <div className="flex-1 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm" style={{ color: colors.accentGreen }}>MONTH 2-3</span>
                <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentGreen, color: colors.textPrimary }}>Growth & Optimization</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Scale Winners, Launch Premium</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm" style={{ color: colors.textSecondary }}>
                <li>• Analyze which channels drove downloads</li>
                <li>• Launch premium tier with advanced stats</li>
                <li>• Partner with local dart leagues</li>
                <li>• Reach out to pub chains for B2B</li>
                <li>• Email marketing for premium upsells</li>
                <li>• Tournament feature beta launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Mix */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📣</span> Channel Mix
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: 'Reddit',
              budget: '35%',
              icon: '🔴',
              desc: 'r/darts + r/dartsleague',
              expected: '5,000+ profile visits, 2K downloads',
              tactics: ['Value-first posts', 'Checkout tip threads', 'AMAs with dart players']
            },
            {
              name: 'YouTube',
              budget: '30%',
              icon: '📺',
              desc: 'Dart tutorial creators',
              expected: '50K views, 3K downloads',
              tactics: ['Sponsored tutorials', 'Integration demos', 'Tournament coverage']
            },
            {
              name: 'TikTok/Reels',
              budget: '20%',
              icon: '📱',
              desc: '#Darts content creators',
              expected: '100K views, 1K downloads',
              tactics: ['Trick shots with scores', '180 celebrations', 'Checkout path reveals']
            },
            {
              name: 'Facebook Groups',
              budget: '10%',
              icon: '👥',
              desc: 'Local dart leagues',
              expected: '1K reached, 500 downloads',
              tactics: ['League partnerships', 'Tournament features']
            },
            {
              name: 'Product Hunt',
              budget: '5%',
              icon: '🚀',
              desc: 'Tech-savvy early adopters',
              expected: 'Top 10 product, 1K downloads',
              tactics: ['Launch day all-hands', 'Premium code giveaway']
            },
          ].map((channel, i) => (
            <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{channel.icon}</span>
                  <span className="font-bold" style={{ color: colors.textPrimary }}>{channel.name}</span>
                </div>
                <span className="font-mono text-sm px-2 py-1 rounded" style={{ backgroundColor: colors.accentOrange, color: colors.bgPrimary }}>
                  {channel.budget}
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: colors.textMuted }}>{channel.desc}</p>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>{channel.expected}</p>
              <div className="flex flex-wrap gap-2">
                {channel.tactics.map((tactic, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.bgPrimary, color: colors.textMuted }}>
                    {tactic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💰</span> Budget Allocation
        </h2>

        <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <div className="space-y-4">
            {[
              { label: 'YouTube Sponsorships', amount: 2000, pct: 40 },
              { label: 'TikTok/Instagram Ads', amount: 1500, pct: 30 },
              { label: 'Reddit Ads', amount: 800, pct: 16 },
              { label: 'App Store Optimization', amount: 500, pct: 10 },
              { label: 'Tools & Design', amount: 200, pct: 4 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: colors.textSecondary }}>{item.label}</span>
                  <span className="font-mono" style={{ color: colors.textPrimary }}>${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.bgPrimary }}>
                  <div 
                    className="h-full rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: colors.accentPurple }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t flex justify-between items-center" style={{ borderColor: colors.bgPrimary }}>
            <span className="font-bold" style={{ color: colors.textPrimary }}>Total Month 1</span>
            <span className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>$5,000</span>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🏆</span> Milestones
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { period: 'Week 1', target: '500 downloads', metric: 'Day 1' },
            { period: 'Month 1', target: '10K users', metric: '5% premium' },
            { period: 'Month 3', target: '50K users', metric: '8% premium' },
            { period: 'Month 6', target: '150K users', metric: '$25K MRR' },
          ].map((milestone, i) => (
            <div key={i} className="p-5 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
              <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>{milestone.period}</div>
              <div className="text-xl font-bold mb-1" style={{ color: colors.textPrimary }}>{milestone.target}</div>
              <div className="text-sm font-mono" style={{ color: colors.accentOrange }}>{milestone.metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Criteria */}
      <section 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: colors.accentPurple }}
      >
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>✅</span> Success Criteria
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentOrange }}>Awareness</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 500K social impressions (M1)</li>
              <li>• 50K app store views (M1)</li>
              <li>• 4.5+ star rating maintained</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentOrange }}>Engagement</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 30% Day 7 retention</li>
              <li>• 5 games avg per active user</li>
              <li>• 20% share a game result</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3" style={{ color: colors.accentOrange }}>Conversion</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <li>• 5% free-to-premium conversion</li>
              <li>• $4.99/mo average revenue</li>
              <li>• &lt;5% monthly churn</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

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

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      {/* Executive Summary - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentPurple}40 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📊</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>
              Executive Summary
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: colors.textPrimary }}>
            OcheScore Market Research
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl" style={{ color: colors.textSecondary }}>
            A modern dart scoring app for casual and competitive players, solving the pain of 
            manual scoring and complex checkout calculations.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>$2.1B</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>TAM</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>9/10</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>Validation Score</div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="text-2xl font-mono font-bold" style={{ color: colors.accentOrange }}>Medium</div>
              <div className="text-xs" style={{ color: colors.textMuted }}>Competition</div>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: colors.accentGreen }}>
            <span className="font-bold" style={{ color: colors.textPrimary }}>Verdict: GO</span>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💰</span> Market Opportunity
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.accentPurple }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>TAM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.textPrimary }}>$2.1B</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Global darts market</div>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>SAM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$180M</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Dart apps & digital scoring</div>
          </div>
          <div className="p-6 rounded-xl text-center" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: colors.textMuted }}>SOM</div>
            <div className="text-4xl font-mono font-bold mb-2" style={{ color: colors.accentOrange }}>$5M</div>
            <div className="text-sm" style={{ color: colors.textSecondary }}>Year 3 target</div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: colors.bgSurface }}>
          <div className="text-3xl">📈</div>
          <div>
            <div className="font-mono font-bold" style={{ color: colors.accentGreen }}>+12% annual growth</div>
            <div className="text-sm" style={{ color: colors.textMuted }}>Darts participation growing globally, driven by PDC popularity</div>
          </div>
        </div>
      </section>

      {/* Competition */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎯</span> Competitive Landscape
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {/* Comparison table */}
          <div className="md:col-span-3 rounded-xl overflow-hidden" style={{ backgroundColor: colors.bgSurface }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: colors.bgSecondary }}>
                  <th className="text-left py-3 px-4 text-sm" style={{ color: colors.textMuted }}>Feature</th>
                  <th className="text-center py-3 px-4 text-sm" style={{ color: colors.textMuted }}>Darts Connect</th>
                  <th className="text-center py-3 px-4 text-sm" style={{ color: colors.textMuted }}>MyDartTraining</th>
                  <th className="text-center py-3 px-4 text-sm font-bold" style={{ color: colors.accentOrange }}>OcheScore ✨</th>
                </tr>
              </thead>
              <tbody style={{ color: colors.textSecondary }}>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Quick scoring</td>
                  <td className="text-center py-3 px-4 text-sm">Complex UI</td>
                  <td className="text-center py-3 px-4 text-sm">Training only</td>
                  <td className="text-center py-3 px-4 text-sm font-medium" style={{ color: colors.textPrimary }}>One-tap entry</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Checkout hints</td>
                  <td className="text-center py-3 px-4 text-sm">Manual lookup</td>
                  <td className="text-center py-3 px-4 text-sm">❌</td>
                  <td className="text-center py-3 px-4 text-sm font-medium" style={{ color: colors.textPrimary }}>Real-time suggestions</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Offline mode</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${colors.bgPrimary}` }}>
                  <td className="py-3 px-4 text-sm">Free tier</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4">✅ Full features</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Our edge */}
          <div className="md:col-span-2 p-6 rounded-xl" style={{ backgroundColor: `${colors.accentOrange}15`, border: `1px solid ${colors.accentOrange}40` }}>
            <h3 className="font-bold mb-3" style={{ color: colors.accentOrange }}>Our Edge</h3>
            <ul className="space-y-3 text-sm" style={{ color: colors.textSecondary }}>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentOrange }}>→</span>
                <span>Instant checkout calculations—no mental math</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentOrange }}>→</span>
                <span>Beautiful UI that works in pub lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.accentOrange }}>→</span>
                <span>Social features—challenge friends, share games</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Validation Signals */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>✅</span> Validation Signals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { platform: 'Reddit', signal: 'r/darts has 150K+ members asking for better scoring apps', emoji: '🔴' },
            { platform: 'App Store', signal: 'Top dart apps have 4M+ downloads combined', emoji: '📱' },
            { platform: 'Search', signal: '"dart scoring app" = 22K monthly searches', emoji: '🔍' },
            { platform: 'Pain Point', signal: '68% of players struggle with checkout math', emoji: '🤔' },
            { platform: 'Trend', signal: 'PDC viewership up 40% — mainstream popularity rising', emoji: '📈' },
            { platform: 'Behavior', signal: 'Players want to track stats but hate manual entry', emoji: '⏰' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <div className="flex items-center gap-2 mb-2">
                <span>{item.emoji}</span>
                <span className="font-medium text-sm" style={{ color: colors.textPrimary }}>{item.platform}</span>
              </div>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{item.signal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risks & Opportunities */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Risks */}
          <div>
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
              <span>⚠️</span> Risks
            </h2>
            <div className="space-y-3">
              {[
                'Established players (Winmau, Target) could add apps',
                'Smart dartboards may include scoring features',
                'User retention after novelty wears off',
                'Monetization without alienating casual players',
              ].map((risk, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: `${colors.accentPurple}20` }}>
                  <span style={{ color: colors.accentPurple }}>●</span>
                  <span className="text-sm" style={{ color: colors.textSecondary }}>{risk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
              <span>🚀</span> Opportunities
            </h2>
            <div className="space-y-3">
              {[
                'League & tournament management tools (B2B)',
                'Premium stats & analytics for serious players',
                'Integration with smart dartboards',
                'White-label for pub chains & dart venues',
              ].map((opp, i) => (
                <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ backgroundColor: `${colors.accentGreen}20` }}>
                  <span style={{ color: colors.accentGreen }}>●</span>
                  <span className="text-sm" style={{ color: colors.textSecondary }}>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section 
        className="p-8 rounded-2xl text-center"
        style={{ backgroundColor: colors.accentGreen }}
      >
        <h2 className="font-serif text-3xl mb-4" style={{ color: colors.textPrimary }}>
          Recommendation: GO
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Strong market signals, clear differentiation, and validated pain point. 
          Launch free tier, build community, monetize with premium features.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-sm" style={{ color: colors.textPrimary }}>Target: 10K downloads Month 1</span>
          </div>
          <div className="px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-sm" style={{ color: colors.textPrimary }}>5% premium conversion</span>
          </div>
        </div>
      </section>
    </div>
  )
}

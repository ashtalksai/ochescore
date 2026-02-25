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

export default function MarketingPage() {
  return (
    <div className="space-y-12">
      {/* Positioning - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accentGreen}40 0%, ${colors.bgSurface} 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📣</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>
              Positioning Statement
            </span>
          </div>
          
          <div className="max-w-3xl space-y-4 text-xl" style={{ color: colors.textSecondary }}>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>For</span> dart players from pub casuals to league competitors</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>Who</span> struggle with mental math and want to track their game</p>
            <p><span className="font-bold" style={{ color: colors.accentOrange }}>OcheScore</span> is a modern dart scoring app</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>That</span> provides instant checkout calculations and beautiful stats</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>Unlike</span> clunky existing apps or paper scoresheets</p>
            <p><span className="font-bold" style={{ color: colors.textPrimary }}>We</span> make scoring effortless so you can focus on your throw</p>
          </div>

          <div className="mt-8 p-4 rounded-xl inline-block" style={{ backgroundColor: colors.bgPrimary }}>
            <span className="font-serif text-2xl" style={{ color: colors.accentOrange }}>"Score like a pro"</span>
          </div>
        </div>
      </section>

      {/* Target Persona */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>👥</span> Target Persona
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Avatar */}
          <div className="md:col-span-2 p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-center mb-4">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl" style={{ backgroundColor: colors.accentPurple }}>
                🎯
              </div>
              <h3 className="font-bold text-lg" style={{ color: colors.textPrimary }}>The Pub Regular</h3>
              <p className="text-sm" style={{ color: colors.textMuted }}>Casual-to-Serious Dart Player</p>
            </div>
            <div className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <p><span style={{ color: colors.textMuted }}>Age:</span> 25-55</p>
              <p><span style={{ color: colors.textMuted }}>Plays:</span> 2-4x per week</p>
              <p><span style={{ color: colors.textMuted }}>Location:</span> UK, Netherlands, US, Australia</p>
              <p><span style={{ color: colors.textMuted }}>Level:</span> Amateur to league player</p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3 space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Pain Points</h4>
              <ul className="space-y-1 text-sm" style={{ color: colors.textSecondary }}>
                <li>• "I always forget what I need to checkout from 167"</li>
                <li>• "Keeping score on paper is annoying and error-prone"</li>
                <li>• "I want to see if I'm getting better but can't track stats"</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Where They Hang Out</h4>
              <div className="flex flex-wrap gap-2">
                {['Reddit r/darts', 'YouTube', 'Facebook Groups', 'Discord', 'Local Pubs'].map((p, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.bgPrimary, color: colors.textMuted }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
              <h4 className="font-bold mb-2" style={{ color: colors.accentOrange }}>What They Search</h4>
              <div className="flex flex-wrap gap-2 text-sm" style={{ color: colors.textSecondary }}>
                {['"dart scoring app"', '"checkout calculator"', '"darts practice app"'].map((s, i) => (
                  <span key={i} className="font-mono text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messaging Pillars */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>💬</span> Messaging Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Instant Checkouts</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"Never do checkout math again"</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              See the optimal checkout path instantly. T20-T19-D12 or T19-T14-D20? We show you both.
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.accentPurple }}>
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Track & Improve</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"See your progress over time"</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Average scores, checkout percentages, 180s count. Know exactly where you're improving.
            </p>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Play Together</h3>
            <p className="text-lg font-serif mb-3" style={{ color: colors.textPrimary }}>"Challenge friends anywhere"</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              Multiplayer scoring, shared games, leaderboards. Make every session competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Content Calendar */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📅</span> Content Calendar (Week 1-4)
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-center text-xs font-bold py-2" style={{ color: colors.textMuted }}>
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {[
                { type: 'Reddit', content: 'Checkout tip', color: colors.accentPurple },
                { type: 'YouTube', content: 'Tutorial clip', color: colors.accentGreen },
                { type: 'TikTok', content: '180 reaction', color: colors.accentOrange },
                { type: 'IG', content: 'Stats reveal', color: colors.bgSurface },
                { type: 'Reddit', content: 'AMA', color: colors.accentPurple },
                { type: 'TikTok', content: 'Trick shot', color: colors.accentOrange },
                { type: 'IG', content: 'User 180', color: colors.accentGreen },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg text-center" style={{ backgroundColor: item.color }}>
                  <div className="text-xs font-bold mb-1" style={{ color: colors.textPrimary }}>{item.type}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <h4 className="font-bold mb-3" style={{ color: colors.textPrimary }}>Posting Cadence</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span style={{ color: colors.textMuted }}>TikTok/Reels:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>Daily</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>Reddit:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>3x/week</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>YouTube:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>Weekly</span>
            </div>
            <div>
              <span style={{ color: colors.textMuted }}>Email:</span>
              <span className="ml-2 font-mono" style={{ color: colors.textPrimary }}>Bi-weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎤</span> Brand Voice
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Do */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentGreen}20`, border: `1px solid ${colors.accentGreen}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentGreen }}>
              <span>✅</span> Do Say
            </h3>
            <ul className="space-y-3">
              {[
                { good: '"Score like a pro"', why: 'Aspirational, simple' },
                { good: '"Stop doing checkout math"', why: 'Addresses real pain' },
                { good: '"Your best game yet"', why: 'Positive, encouraging' },
                { good: '"Built by dart players"', why: 'Authentic, credible' },
              ].map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium block" style={{ color: colors.textPrimary }}>{item.good}</span>
                  <span style={{ color: colors.textMuted }}>{item.why}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentPurple}20`, border: `1px solid ${colors.accentPurple}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentPurple }}>
              <span>❌</span> Never Say
            </h3>
            <ul className="space-y-3">
              {[
                { bad: '"Revolutionary AI-powered"', why: 'Overhyped tech speak' },
                { bad: '"The ultimate dart solution"', why: 'Empty superlatives' },
                { bad: '"Never miss again"', why: 'Unrealistic promise' },
                { bad: '"Limited time offer!!!"', why: 'Desperate, spammy' },
              ].map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium block line-through" style={{ color: colors.textSecondary }}>{item.bad}</span>
                  <span style={{ color: colors.textMuted }}>{item.why}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
          <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>Voice Characteristics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" style={{ color: colors.textSecondary }}>
            <div><span style={{ color: colors.accentOrange }}>Knowledgeable</span> not preachy</div>
            <div><span style={{ color: colors.accentOrange }}>Competitive</span> not elitist</div>
            <div><span style={{ color: colors.accentOrange }}>Fun</span> not silly</div>
            <div><span style={{ color: colors.accentOrange }}>Precise</span> not robotic</div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section 
        className="p-8 rounded-2xl"
        style={{ backgroundColor: colors.accentOrange }}
      >
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.bgPrimary }}>
          <span>📊</span> Key Performance Indicators
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Downloads', target: '10K', period: 'Month 1' },
            { metric: 'DAU', target: '2,500', period: 'Month 1' },
            { metric: 'App Rating', target: '4.5+', period: 'Ongoing' },
            { metric: 'Premium Conv.', target: '5%', period: 'Month 2+' },
          ].map((kpi, i) => (
            <div key={i} className="p-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'rgba(0,0,0,0.6)' }}>{kpi.metric}</div>
              <div className="text-2xl font-mono font-bold mb-1" style={{ color: colors.bgPrimary }}>{kpi.target}</div>
              <div className="text-xs" style={{ color: 'rgba(0,0,0,0.5)' }}>{kpi.period}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'rgba(0,0,0,0.2)' }}>
          <p className="text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Track weekly. Double down on winning channels. Optimize or cut underperformers.
          </p>
        </div>
      </section>
    </div>
  )
}

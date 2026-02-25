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

export default function BrandPage() {
  return (
    <div className="space-y-12">
      {/* Brand Overview - Hero */}
      <section 
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.bgSecondary} 0%, ${colors.accentPurple}40 100%)`
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎨</span>
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accentOrange }}>
              Brand Specification
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: colors.textPrimary }}>
            OcheScore
          </h1>
          
          <p className="text-xl mb-4 max-w-2xl" style={{ color: colors.textSecondary }}>
            A modern, energetic aesthetic inspired by competitive gaming meets pub atmosphere — 
            bold, precise, never cluttered.
          </p>

          <p className="text-lg font-serif italic" style={{ color: colors.accentOrange }}>
            "Score like a pro"
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🎨</span> Color Palette
        </h2>

        <div className="space-y-6">
          {/* Primary Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Deep Navy', hex: '#0f1419', rgb: 'rgb(15, 20, 25)', usage: 'Background' },
                { name: 'Purple', hex: '#7C3AED', rgb: 'rgb(124, 58, 237)', usage: 'Primary accent' },
                { name: 'Green', hex: '#2d4a3e', rgb: 'rgb(45, 74, 62)', usage: 'Success states' },
                { name: 'Orange', hex: '#F97316', rgb: 'rgb(249, 115, 22)', usage: 'Highlights' },
              ].map((color, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bgSurface }}>
                  <div className="h-24" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <div className="font-bold mb-1" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-sm mb-1" style={{ color: colors.accentOrange }}>{color.hex}</div>
                    <div className="text-xs" style={{ color: colors.textMuted }}>{color.rgb}</div>
                    <div className="text-xs mt-2" style={{ color: colors.textSecondary }}>{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Surface Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Surface Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Surface', hex: '#1a2129', usage: 'Cards, panels' },
                { name: 'Elevated', hex: '#242d38', usage: 'Hover states' },
                { name: 'Border', hex: 'rgba(255,255,255,0.1)', usage: 'Dividers' },
              ].map((color, i) => (
                <div key={i} className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: colors.bgSurface }}>
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: color.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                  <div>
                    <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-xs" style={{ color: colors.textMuted }}>{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-sm uppercase tracking-wide mb-4" style={{ color: colors.textMuted }}>Text Colors</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Primary', hex: '#f5f5f0', sample: 'Aa' },
                { name: 'Secondary', hex: '#9ca3af', sample: 'Aa' },
                { name: 'Muted', hex: '#6b7280', sample: 'Aa' },
              ].map((color, i) => (
                <div key={i} className="p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: colors.bgSurface }}>
                  <div>
                    <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{color.name}</div>
                    <div className="font-mono text-xs" style={{ color: colors.textMuted }}>{color.hex}</div>
                  </div>
                  <div className="text-3xl font-serif" style={{ color: color.hex }}>{color.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🔤</span> Typography
        </h2>

        <div className="space-y-6">
          {/* Display Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>Space Grotesk</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Display / Headings</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>
                Sans-serif
              </span>
            </div>
            <div className="space-y-2 font-serif">
              <p className="text-5xl" style={{ color: colors.textPrimary }}>Score like a pro</p>
              <p className="text-3xl" style={{ color: colors.textSecondary }}>Track every throw</p>
              <p className="text-xl italic" style={{ color: colors.textMuted }}>From 501 to zero, effortlessly</p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500, 600, 700</span>
              <span>Use: H1, H2, hero text, scores</span>
            </div>
          </div>

          {/* Body Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>Inter</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Body / UI</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentGreen, color: colors.textPrimary }}>
                Sans-serif
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-lg" style={{ color: colors.textPrimary }}>
                Stop doing checkout math in your head. OcheScore shows you the optimal 
                path from any score, instantly.
              </p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                Track your games, analyze your performance, challenge your friends. 
                All from your phone, even without internet.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500, 600, 700</span>
              <span>Use: Body text, UI elements, buttons</span>
            </div>
          </div>

          {/* Mono Font */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold" style={{ color: colors.textPrimary }}>JetBrains Mono</h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>Scores / Data</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.accentOrange, color: colors.bgPrimary }}>
                Monospace
              </span>
            </div>
            <div className="space-y-2 font-mono">
              <p className="text-5xl" style={{ color: colors.accentOrange }}>180 • T20 • 501</p>
              <p className="text-lg" style={{ color: colors.textSecondary }}>AVG: 42.5 • CHECKOUT: 68%</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>D16 → T19 → D12</p>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-6 text-sm" style={{ borderColor: colors.bgPrimary, color: colors.textMuted }}>
              <span>Weights: 400, 500</span>
              <span>Use: Scores, stats, checkout paths</span>
            </div>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>🧩</span> Component Examples
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Buttons */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Buttons</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-6 rounded-lg font-medium" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>
                Primary — Start Game
              </button>
              <button className="w-full py-3 px-6 rounded-lg font-medium border" style={{ borderColor: colors.accentOrange, color: colors.accentOrange }}>
                Secondary — View Stats
              </button>
              <button className="w-full py-3 px-6 rounded-lg font-medium" style={{ backgroundColor: colors.bgPrimary, color: colors.textSecondary }}>
                Ghost — Cancel
              </button>
            </div>
          </div>

          {/* Score Cards */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Score Cards</h3>
            <div className="p-4 rounded-xl" style={{ backgroundColor: colors.bgPrimary }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🎯</span>
                <span className="font-mono text-2xl font-bold" style={{ color: colors.accentOrange }}>141</span>
              </div>
              <div className="text-sm mb-2" style={{ color: colors.textSecondary }}>
                Checkout: T20 → T19 → D12
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: colors.textMuted }}>3 darts remaining</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>
                  Your turn
                </span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Badges & Pills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentPurple, color: colors.textPrimary }}>
                🎯 501
              </span>
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentGreen, color: colors.textPrimary }}>
                ✓ Checkout
              </span>
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: colors.accentOrange, color: colors.bgPrimary }}>
                🔥 180!
              </span>
              <span className="px-3 py-1 rounded-full text-sm border" style={{ borderColor: colors.textMuted, color: colors.textMuted }}>
                👥 Multiplayer
              </span>
            </div>
          </div>

          {/* Form Elements */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.bgSurface }}>
            <h3 className="font-bold mb-4" style={{ color: colors.textPrimary }}>Score Input</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Enter score (0-180)" 
                className="w-full px-4 py-3 rounded-lg border text-center font-mono text-xl"
                style={{ backgroundColor: colors.bgPrimary, borderColor: 'rgba(255,255,255,0.1)', color: colors.textPrimary }}
              />
              <div className="grid grid-cols-3 gap-2">
                {['T20', 'T19', 'T18'].map(segment => (
                  <button 
                    key={segment}
                    className="py-2 rounded-lg font-mono text-sm"
                    style={{ backgroundColor: colors.bgPrimary, color: colors.textSecondary }}
                  >
                    {segment}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagery Style */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>📷</span> Imagery Style
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentPurple}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentPurple }}>Photography</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Dramatic pub lighting</li>
              <li>• Close-ups of dart flights</li>
              <li>• Players in action, focused</li>
              <li>• Authentic tournament vibes</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentGreen}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentGreen }}>Illustrations</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Geometric dartboard elements</li>
              <li>• Trophy/achievement icons</li>
              <li>• Minimal line art</li>
              <li>• Brand color accents</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentOrange}20` }}>
            <h3 className="font-bold mb-2" style={{ color: colors.accentOrange }}>Icons</h3>
            <ul className="text-sm space-y-1" style={{ color: colors.textSecondary }}>
              <li>• Lucide icon set</li>
              <li>• 24px default size</li>
              <li>• Stroke width: 2px</li>
              <li>• Match text color hierarchy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section>
        <h2 className="font-serif text-2xl mb-6 flex items-center gap-3" style={{ color: colors.textPrimary }}>
          <span>⚖️</span> Usage Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentGreen}20`, border: `1px solid ${colors.accentGreen}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentGreen }}>
              <span>✅</span> Do
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <li>• Use purple as primary CTA color</li>
              <li>• Use orange for scores and highlights</li>
              <li>• Use monospace for all numeric data</li>
              <li>• Keep UI minimal—focus on scores</li>
              <li>• Design for low-light pub environments</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl" style={{ backgroundColor: `${colors.accentPurple}20`, border: `1px solid ${colors.accentPurple}40` }}>
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.accentPurple }}>
              <span>❌</span> Don't
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
              <li>• Use light/white backgrounds</li>
              <li>• Clutter the scoring interface</li>
              <li>• Use small fonts for scores</li>
              <li>• Add unnecessary animations</li>
              <li>• Make checkout info hard to read</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

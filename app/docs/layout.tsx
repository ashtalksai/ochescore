'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const navItems = [
  { href: '/docs/research', label: 'Research', icon: '📊' },
  { href: '/docs/gtm', label: 'GTM Plan', icon: '🎯' },
  { href: '/docs/marketing', label: 'Marketing', icon: '📣' },
  { href: '/docs/brand', label: 'Brand', icon: '🎨' },
  { href: '/docs/pitch', label: 'Pitch Deck', icon: '📈' },
]

const externalLinks = [
  { href: 'https://ochescore.ashketing.com', label: 'Live Site', icon: '🌐' },
  { href: 'https://github.com/ashtalksai/ochescore', label: 'GitHub', icon: '💻' },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: colors.bgPrimary }}>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-3 rounded-lg"
        style={{ backgroundColor: colors.bgSurface }}
      >
        <span style={{ color: colors.textPrimary }}>{mobileOpen ? '✕' : '☰'}</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 z-40
          transform transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ backgroundColor: colors.bgSecondary }}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <Link href="/" className="mb-8">
            <span className="font-serif text-2xl" style={{ color: colors.textPrimary }}>OcheScore</span>
            <span className="block text-xs mt-1" style={{ color: colors.textMuted }}>Documentation</span>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: isActive ? colors.accentPurple : 'transparent',
                    color: isActive ? colors.textPrimary : colors.textSecondary,
                  }}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t" style={{ borderColor: colors.bgSurface }} />

          {/* External links */}
          <div className="space-y-2">
            {externalLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ color: colors.textMuted }}
              >
                <span>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                <span className="ml-auto text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 min-h-screen overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          {children}
        </div>
      </main>
    </div>
  )
}

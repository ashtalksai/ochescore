"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Target, 
  Megaphone, 
  Palette, 
  Presentation,
  Menu,
  ExternalLink,
  Home
} from "lucide-react";

const navItems = [
  { href: "/docs/research", label: "Research", icon: BarChart3 },
  { href: "/docs/gtm", label: "GTM Plan", icon: Target },
  { href: "/docs/marketing", label: "Marketing", icon: Megaphone },
  { href: "/docs/brand", label: "Brand Spec", icon: Palette },
  { href: "/docs/pitch", label: "Pitch Deck", icon: Presentation },
];

const externalLinks = [
  { href: "https://ochescore.ashketing.com", label: "Live Site", icon: ExternalLink },
  { href: "https://github.com/ashtalksai/ochescore", label: "GitHub", icon: ExternalLink },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
        <Target className="w-8 h-8 text-[#7C3AED]" />
        <span className="font-display text-xl font-bold">
          <span className="text-[#7C3AED]">Oche</span>Score
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Documentation
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? "bg-[#7C3AED] text-white"
                  : "text-text-secondary hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* External Links */}
      <div className="px-4 py-6 border-t border-white/10 space-y-2">
        <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Links
        </p>
        {externalLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-white/5 hover:text-white transition-all"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </a>
          );
        })}
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:bg-white/5 hover:text-white transition-all mt-4"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to App</span>
        </Link>
      </div>
    </div>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Target className="w-6 h-6 text-[#7C3AED]" />
            <span className="font-display font-bold">
              <span className="text-[#7C3AED]">Oche</span>Score
            </span>
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-surface border-white/10">
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col bg-surface border-r border-white/10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="pt-16 lg:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}

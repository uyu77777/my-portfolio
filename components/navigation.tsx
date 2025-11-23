"use client"

import Link from "next/link"
import siteConfig from "@/data/site.config.json"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono font-bold text-lg glow-green hover:glow-cyan transition-glow">
            $ kai
          </Link>

          <div className="flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-accent-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

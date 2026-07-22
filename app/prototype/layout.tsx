"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const tabs = [
  { label: "Board", href: "/prototype/board", icon: "◉" },
  { label: "Markets", href: "/prototype/markets", icon: "☰" },
  { label: "Bulletin", href: "/prototype/bulletin", icon: "◎" },
  { label: "Trends", href: "/prototype/trends", icon: "⚡" },
  { label: "MI", href: "/prototype/mi", icon: "✦" },
]

export default function PrototypeLayout({ children }: { children: ReactNode }) {
  const path = usePathname()
  const isAppPage = path !== "/prototype" && !path.includes("onboarding")

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top bar */}
      {isAppPage && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-4 h-14 flex items-center justify-between">
          <Link href="/prototype/board" className="text-lg font-bold tracking-tight">
            <span className="text-white">hollap</span>
            <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent ml-0.5">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/prototype/chat" className={`text-sm ${path.includes("chat") ? "text-[#0088cc]" : "text-gray-400"} hover:text-white transition-colors`}>
              💬
            </Link>
            <Link href="/prototype/board" className="relative">
              <span className="text-gray-400 hover:text-white transition-colors text-sm">🔔</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FD1D1D] rounded-full text-[10px] flex items-center justify-center font-bold">3</span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold">
              SL
            </div>
          </div>
        </header>
      )}

      {children}

      {/* Bottom tab nav */}
      {isAppPage && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 px-2 safe-area-bottom">
          <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
            {tabs.map((tab) => {
              const active = path === tab.href || path.startsWith(tab.href + "/")
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                    active ? "text-[#0088cc]" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </div>
  )
}

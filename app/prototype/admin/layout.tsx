"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const adminLinks = [
  { label: "Dashboard", href: "/prototype/admin/dashboard", icon: "📊" },
  { label: "Vendors", href: "/prototype/admin/vendors", icon: "🏪" },
  { label: "Users", href: "/prototype/admin/users", icon: "👥" },
  { label: "Transactions", href: "/prototype/admin/transactions", icon: "💳" },
  { label: "Moderation", href: "/prototype/admin/moderation", icon: "⚖️" },
  { label: "Analytics", href: "/prototype/admin/analytics", icon: "📈" },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  const path = usePathname()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-56 min-h-screen border-r border-white/5 bg-[#0a0a0a] fixed left-0 top-0">
          <div className="p-5 border-b border-white/5">
            <Link href="/prototype/admin/dashboard" className="text-lg font-bold tracking-tight">
              <span className="text-white">hollap</span>
              <span className="text-[#0088cc] ml-0.5">admin</span>
            </Link>
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {adminLinks.map((link) => {
              const active = path === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-[#0088cc]/10 text-[#0088cc] font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="p-4 border-t border-white/5">
            <Link
              href="/prototype/admin/login"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
            >
              <span>⚙️</span>
              Settings
            </Link>
          </div>
        </aside>

        <div className="flex-1 lg:ml-56">
          {/* Mobile top nav */}
          <div className="lg:hidden flex items-center gap-2 px-4 py-3 border-b border-white/5 overflow-x-auto">
            {adminLinks.map((link) => {
              const active = path === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    active ? "bg-[#0088cc] text-white" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {link.icon} {link.label}
                </Link>
              )
            })}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

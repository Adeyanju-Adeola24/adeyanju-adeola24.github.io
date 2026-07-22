"use client";
import { boardItems } from "@/lib/data";
import Link from "next/link";

const typeStyles: Record<string, string> = {
  order: "border-l-[#0088cc]",
  message: "border-l-[#833AB4]",
  review: "border-l-[#F77737]",
  trend: "border-l-[#FD1D1D]",
  alert: "border-l-[#FDC830]",
}

const typeIcons: Record<string, string> = {
  order: "📦",
  message: "💬",
  review: "⭐",
  trend: "📈",
  alert: "🤖",
}

export default function BoardPage() {
  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="py-4">
        <h1 className="text-xl font-bold">Board</h1>
        <p className="text-sm text-gray-500">Your daily command center</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Orders", value: "12", color: "from-[#0088cc] to-[#006699]" },
          { label: "Messages", value: "5", color: "from-[#833AB4] to-[#FD1D1D]" },
          { label: "Revenue", value: "₦45k", color: "from-[#F77737] to-[#FDC830]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-[10px] text-gray-500">{stat.label}</p>
            <div className={`h-1 w-full rounded-full bg-gradient-to-r ${stat.color} mt-1`} />
          </div>
        ))}
      </div>

      {/* Feed */}
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Activity Feed</h2>
      <div className="space-y-2">
        {boardItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white/5 rounded-xl p-4 border border-white/10 border-l-4 ${typeStyles[item.type]} hover:bg-white/[0.07] transition-colors cursor-pointer`}
          >
            <div className="flex items-start gap-3">
              <span className="text-lg">{typeIcons[item.type]}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-white truncate">{item.title}</p>
                  <span className="text-[10px] text-gray-500 shrink-0">{item.time}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                {item.status === "action" && (
                  <button className="mt-2 text-[10px] px-2 py-0.5 bg-[#0088cc]/20 text-[#0088cc] rounded-full font-medium">Take Action</button>
                )}
                {item.status === "unread" && <span className="mt-1 inline-block w-2 h-2 bg-[#0088cc] rounded-full" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-3">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        <Link href="/prototype/products/new" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/[0.07] transition-colors text-center">
          <span className="text-2xl">➕</span>
          <p className="text-sm font-medium mt-1">List Product</p>
        </Link>
        <Link href="/prototype/vendors/vendor-1" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/[0.07] transition-colors text-center">
          <span className="text-2xl">👤</span>
          <p className="text-sm font-medium mt-1">My Profile</p>
        </Link>
      </div>
    </div>
  )
}

"use client";
import { useState } from "react";
import { pendingVendors, platformUsers, transactions, moderationQueue, adminAnalytics } from "@/lib/data";
import Link from "next/link";

const statusColors: Record<string, string> = {
  completed: "text-green-400 bg-green-500/10",
  pending: "text-[#F77737] bg-[#F77737]/10",
  disputed: "text-[#FD1D1D] bg-[#FD1D1D]/10",
  refunded: "text-gray-400 bg-white/10",
  cancelled: "text-gray-500 bg-white/5",
}

export default function AdminDashboardPage() {
  const recentTxns = transactions.slice(0, 5)
  const pendingV = pendingVendors.filter(v => v.status === "pending")
  const pendingMod = moderationQueue.filter(m => m.status === "pending")

  const totalRevenue = transactions
    .filter(t => t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Platform overview and key metrics</p>
        </div>
        <div className="flex gap-2">
          <Link href="/prototype/admin/analytics"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition-colors">
            View Analytics
          </Link>
          <Link href="/prototype/admin/login"
            className="px-4 py-2 bg-[#0088cc] hover:bg-[#0077b3] rounded-lg text-xs font-medium transition-colors">
            Switch Account
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Users", value: platformUsers.length.toLocaleString(), change: "+42%", sub: "across 150+ universities", gradient: "from-[#0088cc] to-[#006699]" },
          { label: "Revenue (All Time)", value: `₦${(totalRevenue / 1000000).toFixed(1)}M`, change: "+34%", sub: "from 12.4K transactions", gradient: "from-[#833AB4] to-[#FD1D1D]" },
          { label: "Pending Vendors", value: pendingV.length.toString(), change: "+3 today", sub: "awaiting verification", gradient: "from-[#F77737] to-[#FDC830]" },
          { label: "Moderation Queue", value: pendingMod.length.toString(), change: "2 auto-flagged", sub: "needs review", gradient: "from-[#FD1D1D] to-[#F77737]" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${kpi.gradient} mb-3`} />
            <p className="text-xs text-gray-500 uppercase tracking-wider">{kpi.label}</p>
            <p className="text-2xl font-bold mt-1">{kpi.value}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-green-400">{kpi.change}</span>
              <span className="text-[10px] text-gray-500">· {kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Top row: Recent Transactions + Platform Health */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Transactions */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Recent Transactions</h2>
            <Link href="/prototype/admin/transactions" className="text-[10px] text-[#0088cc] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-white/5">
            {recentTxns.map((txn) => (
              <div key={txn.id} className="px-6 py-3.5 flex items-center justify-between text-sm">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{txn.product}</p>
                  <p className="text-[10px] text-gray-500">{txn.buyer} → {txn.vendor}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-sm font-medium">₦{txn.amount.toLocaleString()}</p>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${statusColors[txn.status]}`}>
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Health */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Platform Health</h2>
          </div>
          <div className="p-6 space-y-5">
            {[
              { label: "Growth Rate", value: `${adminAnalytics.growthRate}%`, sub: "Month over month", bar: 42, color: "from-[#0088cc] to-[#006699]" },
              { label: "Vendor Retention", value: `${adminAnalytics.vendorRetention}%`, sub: "Repeat vendor rate", bar: 89, color: "from-[#833AB4] to-[#FD1D1D]" },
              { label: "Avg Response Time", value: adminAnalytics.avgResponseTime, sub: "Vendor to buyer", bar: 70, color: "from-[#F77737] to-[#FDC830]" },
              { label: "Support Resolution", value: adminAnalytics.supportTickets.avgResolution, sub: `(${adminAnalytics.supportTickets.open} open tickets)`, bar: 65, color: "from-[#0088cc] to-[#00BFFF]" },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-400">{metric.label}</span>
                  <span className="font-semibold">{metric.value}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${metric.color}`} style={{ width: `${metric.bar}%` }} />
                </div>
                <p className="text-[10px] text-gray-500 mt-0.5">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row: Quick Actions + Admin Team */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Quick Actions</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-3">
            {[
              { label: "Review Vendors", href: "/prototype/admin/vendors", desc: `${pendingV.length} pending`, color: "from-[#F77737] to-[#FDC830]", emoji: "🏪" },
              { label: "Moderate Content", href: "/prototype/admin/moderation", desc: `${pendingMod.length} flagged`, color: "from-[#FD1D1D] to-[#F77737]", emoji: "⚖️" },
              { label: "View Analytics", href: "/prototype/admin/analytics", desc: "Full report", color: "from-[#833AB4] to-[#FD1D1D]", emoji: "📊" },
              { label: "Manage Users", href: "/prototype/admin/users", desc: `${platformUsers.length} total`, color: "from-[#0088cc] to-[#006699]", emoji: "👥" },
            ].map((action) => (
              <Link key={action.label} href={action.href}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/[0.07] transition-colors">
                <span className="text-2xl block mb-2">{action.emoji}</span>
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-[10px] text-gray-500">{action.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Admin Team Status */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Admin Team</h2>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { name: "David (Founder)", role: "Super Admin", avatar: "D", status: "active" as const, color: "from-[#833AB4] to-[#0088cc]" },
              { name: "Temi", role: "Admin", avatar: "T", status: "active" as const, color: "from-[#0088cc] to-[#006699]" },
              { name: "Chioma", role: "Moderator", avatar: "C", status: "active" as const, color: "from-[#833AB4] to-[#FD1D1D]" },
              { name: "Emeka", role: "Moderator", avatar: "E", status: "away" as const, color: "from-[#F77737] to-[#FDC830]" },
              { name: "Sade", role: "Support", avatar: "S", status: "offline" as const, color: "from-gray-500 to-gray-600" },
            ].map((member) => (
              <div key={member.name} className="px-6 py-3.5 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-xs font-bold`}>
                  {member.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-[10px] text-gray-500">{member.role}</p>
                </div>
                <span className={`text-[10px] ${member.status === "active" ? "text-green-400" : member.status === "away" ? "text-[#F77737]" : "text-gray-500"}`}>
                  ● {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

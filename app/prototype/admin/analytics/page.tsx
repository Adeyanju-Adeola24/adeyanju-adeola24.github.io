"use client";
import { adminAnalytics } from "@/lib/data";

function MiniBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="h-16 flex items-end gap-[2px]">
      {Array.from({ length: 30 }).map((_, i) => {
        const h = Math.max(4, (adminAnalytics.dailyActiveUsers[i] / Math.max(...adminAnalytics.dailyActiveUsers)) * 56)
        const isToday = i === 29
        return <div key={i} className={`flex-1 rounded-t-sm transition-all ${isToday ? color : "bg-white/20"}`} style={{ height: `${h}px` }} />
      })}
    </div>
  )
}

export default function AdminAnalyticsPage() {
  const maxUsers = Math.max(...adminAnalytics.dailyActiveUsers)
  const maxRevenue = Math.max(...adminAnalytics.revenueDaily)
  const maxCatRevenue = Math.max(...adminAnalytics.categoryBreakdown.map(c => c.revenue))
  const maxUni = Math.max(...adminAnalytics.usersByUniversity.map(u => u.count))

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Platform Analytics</h1>
        <p className="text-sm text-gray-500">Growth, revenue, and engagement metrics</p>
      </div>

      {/* Growth Rate Hero */}
      <div className="bg-gradient-to-r from-[#0088cc]/10 via-[#833AB4]/10 to-[#FD1D1D]/10 rounded-xl p-6 border border-white/10 mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0088cc] to-[#00BFFF]">
              {adminAnalytics.growthRate}%
            </p>
            <p className="text-xs text-gray-500 mt-1">Month-over-Month Growth</p>
          </div>
          <div className="flex-1 w-full">
            <p className="text-xs text-gray-500 mb-2">Daily Active Users (30 days)</p>
            <MiniBar value={0} max={0} color="bg-[#0088cc]" />
            <div className="flex justify-between text-[10px] text-gray-600 mt-1">
              <span>Day 1</span>
              <span>Today</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-2xl font-bold">{adminAnalytics.dailyActiveUsers[29].toLocaleString()}</p>
            <p className="text-xs text-gray-500">DAU Today</p>
            <p className="text-[10px] text-green-400">+{(adminAnalytics.dailyActiveUsers[29] / adminAnalytics.dailyActiveUsers[0] * 100 - 100).toFixed(0)}% since day 1</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Users by University */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Users by University</h2>
          </div>
          <div className="p-6 space-y-3">
            {adminAnalytics.usersByUniversity.map((uni) => (
              <div key={uni.name}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-300">{uni.name}</span>
                  <span className="text-xs text-gray-500">{uni.count.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] rounded-full" style={{ width: `${(uni.count / maxUni) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Revenue by Category</h2>
          </div>
          <div className="p-6 space-y-3">
            {adminAnalytics.categoryBreakdown.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-300">{cat.name}</span>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">₦{(cat.revenue / 1000000).toFixed(1)}M</span>
                    <span className="text-[10px] text-gray-500 ml-2">({cat.count} listings)</span>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F77737] to-[#FDC830] rounded-full" style={{ width: `${(cat.revenue / maxCatRevenue) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Trend */}
        <div className="bg-white/5 rounded-xl border border-white/10 lg:col-span-2">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Daily Revenue (30 days)</h2>
          </div>
          <div className="p-6">
            <div className="h-32 flex items-end gap-[2px]">
              {adminAnalytics.revenueDaily.map((val, i) => {
                const h = Math.max(4, (val / maxRevenue) * 120)
                const isToday = i === 29
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end group relative">
                    <div
                      className={`w-full rounded-t-sm transition-all ${isToday ? "bg-gradient-to-t from-[#F77737] to-[#FDC830]" : "bg-white/20 hover:bg-white/40"}`}
                      style={{ height: `${h}px` }}
                    />
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 mt-2">
              <span>Day 1</span>
              <span>₦{(adminAnalytics.revenueDaily.reduce((a, b) => a + b, 0) / 1000000).toFixed(1)}M total</span>
              <span>Today: ₦{(adminAnalytics.revenueDaily[29] / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>

        {/* Support + Retention */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Operations</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{adminAnalytics.vendorRetention}%</p>
              <p className="text-xs text-gray-500">Vendor Retention Rate</p>
              <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: `${adminAnalytics.vendorRetention}%` }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xl font-bold text-[#F77737]">{adminAnalytics.supportTickets.open}</p>
                <p className="text-[10px] text-gray-500">Open Tickets</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xl font-bold text-green-400">{adminAnalytics.supportTickets.resolved}</p>
                <p className="text-[10px] text-gray-500">Resolved</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-[#0088cc]">{adminAnalytics.avgResponseTime}</p>
              <p className="text-xs text-gray-500">Avg Vendor Response Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="bg-white/5 rounded-xl border border-white/10">
        <div className="px-6 py-4 border-b border-white/5">
          <h2 className="text-sm font-semibold">Platform Snapshot</h2>
        </div>
        <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Total Listings", value: adminAnalytics.categoryBreakdown.reduce((s, c) => s + c.count, 0).toLocaleString(), sub: "Across 6 categories" },
            { label: "Avg Order Value", value: "₦12,450", sub: "Per completed transaction" },
            { label: "Peak DAU", value: Math.max(...adminAnalytics.dailyActiveUsers).toLocaleString(), sub: "Record high" },
            { label: "Escrow Adoption", value: "15%", sub: "Of eligible transactions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className="text-[10px] text-gray-600">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

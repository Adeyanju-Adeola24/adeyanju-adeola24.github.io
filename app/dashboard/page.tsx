import ScrollAnimation from "../components/ScrollAnimation";
import Link from "next/link";

export const metadata = {
  title: "Proof of Life — Hollap Dashboard",
  description: "Monthly traction, growth metrics, and milestones for Hollap.",
}

const monthlyData = [
  { month: "Nov 2025", users: 1200, vendors: 180, transactions: "₦2.1M", universities: 8 },
  { month: "Dec 2025", users: 2400, vendors: 340, transactions: "₦4.8M", universities: 15 },
  { month: "Jan 2026", users: 4100, vendors: 620, transactions: "₦9.2M", universities: 28 },
  { month: "Feb 2026", users: 5600, vendors: 890, transactions: "₦14.5M", universities: 45 },
  { month: "Mar 2026", users: 7200, vendors: 1250, transactions: "₦22.1M", universities: 72 },
  { month: "Apr 2026", users: 8800, vendors: 1680, transactions: "₦31.8M", universities: 110 },
  { month: "May 2026", users: 10000, vendors: 2000, transactions: "₦42.5M", universities: 150 },
]

const milestones = [
  { date: "Oct 2025", title: "Hollap founded", emoji: "🚀" },
  { date: "Nov 2025", title: "First pilot at University of Lagos", emoji: "🎯" },
  { date: "Dec 2025", title: "1,000 users milestone", emoji: "🎉" },
  { date: "Jan 2026", title: "Vendor verification system launched", emoji: "✅" },
  { date: "Feb 2026", title: "Real-time chat goes live", emoji: "💬" },
  { date: "Mar 2026", title: "MI Alpha release", emoji: "🤖" },
  { date: "Apr 2026", title: "Escrow integration begins", emoji: "🔒" },
  { date: "May 2026", title: "10,000 users & 150 universities reached", emoji: "🔥" },
  { date: "Jun 2026", title: "Campus Ambassador Program launches", emoji: "🌍" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-4">
            <span className="text-sm px-3 py-1 bg-green-500/10 text-green-400 rounded-full font-medium">Live · Updated Monthly</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Proof of <span className="bg-gradient-to-r from-[#0088cc] to-[#00BFFF] bg-clip-text text-transparent">Life</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Real traction, real metrics, real progress. Month over month, we&apos;re building the commerce infrastructure for Africa&apos;s youth.
          </p>
        </ScrollAnimation>

        {/* Current Snapshot */}
        <ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Active Users", value: "10,000+", change: "+42% MoM", color: "from-[#0088cc] to-[#006699]" },
              { label: "Verified Vendors", value: "2,000+", change: "+19% MoM", color: "from-[#833AB4] to-[#FD1D1D]" },
              { label: "Transactions", value: "₦42.5M+", change: "+34% MoM", color: "from-[#F77737] to-[#FDC830]" },
              { label: "Universities", value: "150+", change: "+36% MoM", color: "from-[#833AB4] to-[#0088cc]" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                <span className="text-xs text-green-400">{stat.change}</span>
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${stat.color} mt-2`} />
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Monthly Growth Table */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-2">Monthly Growth</h2>
          <p className="text-gray-400 text-sm mb-6">Seven months of consistent, accelerating growth.</p>
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden mb-16">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider font-medium">
              <span>Month</span>
              <span>Users</span>
              <span>Vendors</span>
              <span>Transactions</span>
            </div>
            {monthlyData.map((row, i) => (
              <div key={row.month} className={`grid grid-cols-4 gap-4 px-6 py-4 text-sm ${i < monthlyData.length - 1 ? "border-b border-white/5" : ""}`}>
                <span className="text-gray-300 font-medium">{row.month}</span>
                <span className="text-gray-400">{row.users.toLocaleString()}</span>
                <span className="text-gray-400">{row.vendors.toLocaleString()}</span>
                <span className="text-gray-400">{row.transactions}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Milestones */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-2">Key Milestones</h2>
          <p className="text-gray-400 text-sm mb-6">Every step of the journey, from founding to 150+ universities.</p>
          <div className="space-y-3 mb-16">
            {milestones.map((m, i) => (
              <div key={m.date} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="text-xl shrink-0">{m.emoji}</span>
                  <div>
                    <p className="text-sm font-medium">{m.title}</p>
                    <p className="text-[10px] text-gray-500">{m.date}</p>
                  </div>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden sm:flex items-center text-gray-600 text-xs">
                    <span>↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-r from-[#0088cc]/10 via-[#833AB4]/10 to-[#FD1D1D]/10 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold mb-2">Want to see more?</h2>
            <p className="text-gray-400 text-sm mb-6">Get the full investor deck with detailed financials, market analysis, and growth projections.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/investor-deck"
                className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white font-medium transition-colors"
              >
                Download Investor Deck
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}

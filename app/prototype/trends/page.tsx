"use client";
import { trendItems } from "@/lib/data";

export default function TrendsPage() {
  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <div className="py-4">
        <h1 className="text-xl font-bold">Trends</h1>
        <p className="text-sm text-gray-500">What&apos;s hot on campus right now</p>
      </div>

      {/* Top Trending */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">🔥 Trending Now</h2>
        <div className="space-y-2">
          {trendItems.filter(t => t.trending).map((item, i) => (
            <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
              <span className={`text-2xl ${i === 0 ? "scale-110" : ""}`}>{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{item.title}</p>
                  {i === 0 && <span className="text-[10px]">👑</span>}
                </div>
                <p className="text-[10px] text-gray-500">{item.category}</p>
              </div>
              <span className={`text-xs font-bold ${i === 0 ? "text-[#FD1D1D]" : "text-green-400"}`}>
                {item.sales}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Also Rising */}
      <div>
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">📈 Also Rising</h2>
        <div className="grid grid-cols-2 gap-3">
          {trendItems.map((item) => (
            <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center hover:bg-white/[0.07] transition-colors">
              <span className="text-3xl block mb-2">{item.emoji}</span>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-[10px] text-gray-500">{item.category}</p>
              <span className={`text-xs font-bold ${item.trending ? "text-green-400" : "text-gray-500"}`}>
                {item.sales}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Vendors */}
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">🏪 Top Vendors This Week</h2>
      <div className="bg-white/5 rounded-xl border border-white/10 divide-y divide-white/5">
        {["Zara's Beauty Hub", "Chidi's Gadgets", "Emeka's Eats", "Amina's Fashion"].map((name, i) => (
          <div key={name} className="flex items-center gap-3 p-4">
            <span className="text-sm font-bold text-gray-500 w-5">{i + 1}</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold">
              {name.split("'")[0][0]}
            </div>
            <p className="text-sm font-medium flex-1">{name}</p>
            <span className="text-xs text-green-400">★ {[4.9, 4.8, 4.7, 4.9][i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

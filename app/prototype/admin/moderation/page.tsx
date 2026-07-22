"use client";
import { useState } from "react";
import { moderationQueue, type ModerationItem } from "@/lib/data";

const typeIcons: Record<string, string> = {
  listing: "📦",
  review: "⭐",
  moment: "📸",
  bulletin: "📢",
}

const typeColors: Record<string, string> = {
  listing: "from-[#0088cc] to-[#006699]",
  review: "from-[#F77737] to-[#FDC830]",
  moment: "from-[#833AB4] to-[#FD1D1D]",
  bulletin: "from-[#FD1D1D] to-[#F77737]",
}

export default function AdminModerationPage() {
  const [items, setItems] = useState(moderationQueue)
  const [selected, setSelected] = useState<ModerationItem | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "resolved" | "dismissed">("pending")

  const filtered = filter === "all" ? items : items.filter(m => m.status === filter)

  function handleAction(id: string, action: "resolved" | "dismissed") {
    setItems(prev => prev.map(m => m.id === id ? { ...m, status: action } : m))
    setSelected(null)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Content Moderation</h1>
        <p className="text-sm text-gray-500">{items.filter(m => m.status === "pending").length} items need review</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "pending" as const, label: "Pending", count: items.filter(m => m.status === "pending").length },
          { key: "resolved" as const, label: "Resolved", count: items.filter(m => m.status === "resolved").length },
          { key: "dismissed" as const, label: "Dismissed", count: items.filter(m => m.status === "dismissed").length },
          { key: "all" as const, label: "All", count: items.length },
        ].map((tab) => (
          <button key={tab.key} onClick={() => setFilter(tab.key)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === tab.key ? "bg-[#0088cc] text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}>
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Queue */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">Moderation Queue</h2>
          </div>
          <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto">
            {filtered.map((item) => (
              <button key={item.id} onClick={() => setSelected(item)}
                className={`w-full text-left px-6 py-4 hover:bg-white/[0.03] transition-colors ${
                  selected?.id === item.id ? "bg-[#0088cc]/5" : ""
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span>{typeIcons[item.type]}</span>
                    <p className="text-sm font-medium capitalize">{item.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.flags >= 5 && <span className="text-[10px] text-[#FD1D1D]">🔥</span>}
                    <span className="text-[10px] text-gray-500">{item.flags} flags</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 line-clamp-1">{item.content}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] text-gray-500">{item.reportedBy}</span>
                  <span className="text-[10px] text-gray-600">·</span>
                  <span className="text-[10px] text-gray-500">{item.reportedAt}</span>
                  <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-full ${
                    item.status === "pending" ? "text-[#F77737] bg-[#F77737]/10" :
                    item.status === "resolved" ? "text-green-400 bg-green-500/10" :
                    "text-gray-400 bg-white/10"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-sm text-gray-500">Queue is clear.</div>
          )}
        </div>

        {/* Detail */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          {selected ? (
            <div>
              <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${typeColors[selected.type]}`} />
                <div>
                  <h2 className="text-sm font-semibold capitalize">{selected.type} Report</h2>
                  <p className="text-[10px] text-gray-500">ID: {selected.id}</p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Content</p>
                  <div className="bg-white/10 rounded-lg p-4 text-sm text-gray-300 leading-relaxed">
                    {selected.content}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Author</p>
                    <p className="text-sm font-medium mt-0.5">{selected.author}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Reported By</p>
                    <p className="text-sm font-medium mt-0.5">{selected.reportedBy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Reason</p>
                    <p className="text-sm font-medium mt-0.5 text-[#FD1D1D]">{selected.reason}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Flags</p>
                    <p className="text-sm font-medium mt-0.5">{selected.flags} reports</p>
                  </div>
                </div>

                {selected.status === "pending" && (
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => handleAction(selected.id, "resolved")}
                      className="flex-1 px-4 py-2.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg text-sm font-medium transition-colors">
                      ✓ Remove Content
                    </button>
                    <button onClick={() => handleAction(selected.id, "dismissed")}
                      className="flex-1 px-4 py-2.5 bg-white/10 text-gray-400 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                      Dismiss Report
                    </button>
                  </div>
                )}

                {selected.status !== "pending" && (
                  <div className="px-4 py-3 bg-white/5 rounded-lg text-center">
                    <p className="text-sm text-gray-500">
                      {selected.status === "resolved" ? "✓ Content has been removed" : "◆ Report was dismissed"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full py-20">
              <div className="text-center">
                <span className="text-4xl block mb-3">⚖️</span>
                <p className="text-sm text-gray-500">Select an item to review</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

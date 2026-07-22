"use client";
import { useState } from "react";
import { platformUsers, type PlatformUser } from "@/lib/data";

export default function AdminUsersPage() {
  const [users, setUsers] = useState(platformUsers)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | "active" | "suspended" | "banned">("all")

  const filtered = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.university.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || u.status === filter
    return matchesSearch && matchesFilter
  })

  function toggleStatus(id: string) {
    setUsers(prev => prev.map(u => {
      if (u.id !== id) return u
      const next: Record<string, PlatformUser["status"]> = { active: "suspended", suspended: "active", banned: "active" }
      return { ...u, status: next[u.status] }
    }))
  }

  const counts = {
    all: users.length,
    active: users.filter(u => u.status === "active").length,
    suspended: users.filter(u => u.status === "suspended").length,
    banned: users.filter(u => u.status === "banned").length,
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-gray-500">{counts.active} active · {counts.suspended} suspended · {counts.banned} banned</p>
        </div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..."
          className="max-w-xs w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {([
          { key: "all" as const, label: "All" },
          { key: "active" as const, label: "Active" },
          { key: "suspended" as const, label: "Suspended" },
          { key: "banned" as const, label: "Banned" },
        ]).map((tab) => (
          <button key={tab.key} onClick={() => setFilter(tab.key)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === tab.key ? "bg-[#0088cc] text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}>
            {tab.label} ({counts[tab.key]})
          </button>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="hidden sm:grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider font-medium">
          <span className="col-span-2">User</span>
          <span>University</span>
          <span>Type</span>
          <span>Transactions</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-white/5">
          {filtered.map((user) => (
            <div key={user.id} className="grid grid-cols-1 sm:grid-cols-6 gap-3 px-6 py-4 items-center text-sm">
              <div className="col-span-2 flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold shrink-0">
                  {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
              <div>
                <span className="sm:hidden text-[10px] text-gray-500 mr-2">University:</span>
                <span className="text-xs text-gray-400">{user.university}</span>
              </div>
              <div>
                <span className="sm:hidden text-[10px] text-gray-500 mr-2">Type:</span>
                <span className="text-xs text-gray-400 capitalize">{user.type}</span>
              </div>
              <div>
                <span className="sm:hidden text-[10px] text-gray-500 mr-2">Txns:</span>
                <span className="text-xs text-gray-400">{user.transactions}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  user.status === "active" ? "text-green-400 bg-green-500/10" :
                  user.status === "suspended" ? "text-[#F77737] bg-[#F77737]/10" :
                  "text-[#FD1D1D] bg-[#FD1D1D]/10"
                }`}>
                  {user.status}
                </span>
                {user.reports > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#FD1D1D]/10 text-[#FD1D1D] rounded-full">{user.reports}</span>
                )}
                <button onClick={() => toggleStatus(user.id)}
                  className="ml-auto text-[10px] text-gray-500 hover:text-white transition-colors">
                  {user.status === "active" ? "Suspend" : "Reactivate"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-sm text-gray-500">No users match your search.</div>
        )}
      </div>
    </div>
  )
}

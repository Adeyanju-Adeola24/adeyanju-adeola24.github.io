"use client";
import { useState } from "react";
import { transactions as txnData } from "@/lib/data";

const statusColors: Record<string, string> = {
  completed: "text-green-400 bg-green-500/10",
  pending: "text-[#F77737] bg-[#F77737]/10",
  disputed: "text-[#FD1D1D] bg-[#FD1D1D]/10",
  refunded: "text-gray-400 bg-white/10",
  cancelled: "text-gray-500 bg-white/5",
}

export default function AdminTransactionsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "disputed" | "refunded" | "cancelled">("all")
  const [search, setSearch] = useState("")

  const filtered = txnData.filter(t => {
    const matchesSearch = t.id.toLowerCase().includes(search.toLowerCase()) ||
      t.product.toLowerCase().includes(search.toLowerCase()) ||
      t.buyer.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || t.status === filter
    return matchesSearch && matchesFilter
  })

  const totalAmount = filtered.reduce((s, t) => s + t.amount, 0)
  const completedAmount = txnData.filter(t => t.status === "completed").reduce((s, t) => s + t.amount, 0)

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-sm text-gray-500">{txnData.length} total · ₦{(completedAmount / 1000000).toFixed(1)}M completed volume</p>
        </div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by ID, product, buyer..."
          className="max-w-xs w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {[
          { label: "All", count: txnData.length, color: "from-gray-500 to-gray-600" },
          { label: "Completed", count: txnData.filter(t => t.status === "completed").length, color: "from-green-500 to-green-600" },
          { label: "Pending", count: txnData.filter(t => t.status === "pending").length, color: "from-[#F77737] to-[#FDC830]" },
          { label: "Disputed", count: txnData.filter(t => t.status === "disputed").length, color: "from-[#FD1D1D] to-[#F77737]" },
          { label: "Refunded", count: txnData.filter(t => t.status === "refunded" || t.status === "cancelled").length, color: "from-gray-400 to-gray-500" },
        ].map((s) => (
          <button key={s.label} onClick={() => setFilter(s.label.toLowerCase() as typeof filter)}
            className={`bg-white/5 rounded-xl p-4 border text-center transition-all ${
              filter === s.label.toLowerCase() ? "border-[#0088cc]/50 bg-[#0088cc]/5" : "border-white/10"
            }`}>
            <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${s.color} mx-auto mb-2`} />
            <p className="text-lg font-bold">{s.count}</p>
            <p className="text-[10px] text-gray-500">{s.label}</p>
          </button>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="hidden lg:grid grid-cols-7 gap-4 px-6 py-4 border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider font-medium">
          <span>ID</span>
          <span className="col-span-2">Product</span>
          <span>Buyer → Vendor</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-white/5">
          {filtered.map((txn) => (
            <div key={txn.id} className="grid grid-cols-1 lg:grid-cols-7 gap-3 px-6 py-4 items-center text-sm">
              <div>
                <span className="lg:hidden text-[10px] text-gray-500 mr-2">ID:</span>
                <span className="text-xs font-mono text-[#0088cc]">{txn.id}</span>
              </div>
              <div className="col-span-2">
                <span className="lg:hidden text-[10px] text-gray-500 mr-2">Product:</span>
                <span className="text-sm font-medium">{txn.product}</span>
              </div>
              <div>
                <span className="lg:hidden text-[10px] text-gray-500 mr-2">Parties:</span>
                <span className="text-xs text-gray-400">{txn.buyer} → {txn.vendor}</span>
              </div>
              <div>
                <span className="lg:hidden text-[10px] text-gray-500 mr-2">Amount:</span>
                <span className="text-sm font-medium">₦{txn.amount.toLocaleString()}</span>
              </div>
              <div>
                <span className="lg:hidden text-[10px] text-gray-500 mr-2">Date:</span>
                <span className="text-xs text-gray-500">{txn.date}</span>
              </div>
              <div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColors[txn.status]}`}>
                  {txn.status}{txn.escrow ? " 🔒" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-sm text-gray-500">No transactions found.</div>
        )}
      </div>
    </div>
  )
}

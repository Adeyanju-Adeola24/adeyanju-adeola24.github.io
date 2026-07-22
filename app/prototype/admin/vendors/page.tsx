"use client";
import { useState } from "react";
import { pendingVendors, type PendingVendor } from "@/lib/data";

export default function AdminVendorsPage() {
  const [vendors, setVendors] = useState(pendingVendors)
  const [selected, setSelected] = useState<PendingVendor | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending")

  const filtered = filter === "all" ? vendors : vendors.filter(v => v.status === filter)

  function handleAction(id: string, action: "approved" | "rejected") {
    setVendors(prev => prev.map(v => v.id === id ? { ...v, status: action } : v))
    setSelected(null)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Vendor Verification</h1>
        <p className="text-sm text-gray-500">Review and approve vendor applications</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "pending" as const, label: "Pending", count: vendors.filter(v => v.status === "pending").length },
          { key: "approved" as const, label: "Approved", count: vendors.filter(v => v.status === "approved").length },
          { key: "rejected" as const, label: "Rejected", count: vendors.filter(v => v.status === "rejected").length },
          { key: "all" as const, label: "All", count: vendors.length },
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
        {/* Vendor List */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-sm font-semibold">{filter === "all" ? "All" : filter === "pending" ? "Pending" : filter === "approved" ? "Approved" : "Rejected"} Applications</h2>
          </div>
          <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto">
            {filtered.map((vendor) => (
              <button key={vendor.id} onClick={() => setSelected(vendor)}
                className={`w-full text-left px-6 py-4 hover:bg-white/[0.03] transition-colors ${
                  selected?.id === vendor.id ? "bg-[#0088cc]/5" : ""
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">{vendor.shopName}</p>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    vendor.status === "pending" ? "text-[#F77737] bg-[#F77737]/10" :
                    vendor.status === "approved" ? "text-green-400 bg-green-500/10" :
                    "text-[#FD1D1D] bg-[#FD1D1D]/10"
                  }`}>
                    {vendor.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{vendor.ownerName} · {vendor.university}</p>
                <p className="text-[10px] text-gray-600 mt-1">Submitted {vendor.submittedAt} · {vendor.categories.join(", ")}</p>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-sm text-gray-500">No vendors found.</div>
          )}
        </div>

        {/* Vendor Detail */}
        <div className="bg-white/5 rounded-xl border border-white/10">
          {selected ? (
            <div>
              <div className="px-6 py-4 border-b border-white/5">
                <h2 className="text-sm font-semibold">{selected.shopName}</h2>
                <p className="text-xs text-gray-500">Application Details</p>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Owner</p>
                    <p className="text-sm font-medium mt-0.5">{selected.ownerName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium mt-0.5 truncate">{selected.email}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">University</p>
                    <p className="text-sm font-medium mt-0.5">{selected.university}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Categories</p>
                    <p className="text-sm font-medium mt-0.5">{selected.categories.join(", ")}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Submitted Documents</p>
                  <div className="space-y-2">
                    {selected.documents.map((doc) => (
                      <div key={doc} className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-xs">
                        <span>📄</span>
                        <span className="text-gray-300">{doc}</span>
                        <span className="ml-auto text-[#0088cc]">View</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selected.status === "pending" && (
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => handleAction(selected.id, "approved")}
                      className="flex-1 px-4 py-2.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg text-sm font-medium transition-colors">
                      ✓ Approve Vendor
                    </button>
                    <button onClick={() => handleAction(selected.id, "rejected")}
                      className="flex-1 px-4 py-2.5 bg-[#FD1D1D]/20 text-[#FD1D1D] hover:bg-[#FD1D1D]/30 rounded-lg text-sm font-medium transition-colors">
                      ✕ Reject
                    </button>
                  </div>
                )}

                {selected.status !== "pending" && (
                  <div className="px-4 py-3 bg-white/5 rounded-lg text-center">
                    <p className="text-sm text-gray-500">
                      {selected.status === "approved" ? "✓ Vendor has been approved" : "✕ Vendor application was rejected"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full py-20">
              <div className="text-center">
                <span className="text-4xl block mb-3">🏪</span>
                <p className="text-sm text-gray-500">Select a vendor application to review</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

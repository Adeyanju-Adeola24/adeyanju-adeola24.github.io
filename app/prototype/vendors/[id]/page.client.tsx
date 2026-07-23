"use client";
import { vendors, products } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function VendorProfilePage() {
  const params = useParams()
  const vendor = vendors.find((v) => v.id === params.id)
  const vendorProducts = products.filter((p) => p.vendor.id === vendor?.id)

  if (!vendor) {
    return (
      <div className="pt-14 pb-20 px-4 max-w-lg mx-auto text-center py-20">
        <p className="text-4xl mb-4">🔍</p>
        <h2 className="text-lg font-semibold mb-2">Vendor not found</h2>
        <Link href="/prototype/markets" className="text-[#0088cc] text-sm hover:underline">Back to Markets</Link>
      </div>
    )
  }

  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <Link href="/prototype/markets" className="text-sm text-gray-500 hover:text-white transition-colors inline-block mb-4">← Back to Markets</Link>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 rounded-2xl p-6 border border-white/10 text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#833AB4] to-[#F77737] flex items-center justify-center text-xl font-bold mx-auto mb-3">{vendor.avatar}</div>
        <h1 className="text-xl font-bold">{vendor.shop}</h1>
        <p className="text-sm text-gray-400">{vendor.name} · {vendor.university}</p>
        <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-400">
          <span>⭐ {vendor.rating}</span>
          <span>📦 {vendor.products} products</span>
          <span>⚡ {vendor.responseTime}</span>
        </div>
        {vendor.badges.map((badge: string) => (
          <span key={badge} className="inline-block mt-2 mx-0.5 text-[10px] px-2 py-0.5 rounded-full bg-[#0088cc]/10 text-[#0088cc]">{badge}</span>
        ))}
      </div>

      {/* Products */}
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Products ({vendorProducts.length})</h2>
      <div className="space-y-3">
        {vendorProducts.map((p) => (
          <Link
            key={p.id}
            href={`/prototype/markets/${p.id}`}
            className="flex items-center gap-4 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#833AB4]/20 to-[#0088cc]/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">{p.images[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{p.title}</p>
              <p className="text-xs text-gray-500">{p.condition}</p>
            </div>
            <p className="text-sm font-bold text-[#0088cc]">₦{p.price.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

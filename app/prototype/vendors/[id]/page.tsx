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
    <div className="pt-14 pb-20 max-w-lg mx-auto px-4">
      {/* Vendor Header */}
      <div className="text-center py-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {vendor.avatar}
        </div>
        <h1 className="text-xl font-bold">{vendor.shop}</h1>
        <p className="text-sm text-gray-400">{vendor.university}</p>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-sm">★ {vendor.rating}</span>
          <span className="text-xs text-gray-500">({vendor.reviews} reviews)</span>
          {vendor.verified && <span className="px-2 py-0.5 bg-[#0088cc]/20 text-[#0088cc] rounded-full text-[10px] font-medium">Verified</span>}
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {vendor.badges.map((badge) => (
          <span key={badge} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">{badge}</span>
        ))}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-400 text-center leading-relaxed mb-6">{vendor.description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <p className="text-lg font-bold">{vendor.products}</p>
          <p className="text-[10px] text-gray-500">Products</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <p className="text-lg font-bold">{vendor.responseTime}</p>
          <p className="text-[10px] text-gray-500">Response</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
          <p className="text-lg font-bold">{vendor.joined}</p>
          <p className="text-[10px] text-gray-500">Joined</p>
        </div>
      </div>

      {/* Chat Button */}
      <Link
        href="/prototype/chat"
        className="block text-center px-4 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl text-sm font-medium transition-colors mb-6"
      >
        Chat with {vendor.shop}
      </Link>

      {/* Products */}
      <h2 className="text-sm font-semibold mb-3">Products ({vendorProducts.length})</h2>
      <div className="space-y-3">
        {vendorProducts.map((product) => (
          <Link
            key={product.id}
            href={`/prototype/markets/${product.id}`}
            className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/[0.07] transition-colors"
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center text-2xl shrink-0">
              {product.images[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{product.title}</p>
              <p className="text-xs text-gray-400">★ {product.rating} · {product.reviewCount} reviews</p>
              <p className="text-sm font-bold text-[#0088cc] mt-0.5">₦{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>

      {vendorProducts.length === 0 && (
        <p className="text-center text-gray-500 py-8">No products listed yet.</p>
      )}
    </div>
  )
}

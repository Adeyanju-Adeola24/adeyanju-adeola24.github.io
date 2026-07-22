"use client";
import { products, vendors } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const reviews = [
  { id: "r1", user: "Michael O.", avatar: "MO", rating: 5, text: "Exactly as described. Fast delivery too!", time: "2 days ago" },
  { id: "r2", user: "Sarah K.", avatar: "SK", rating: 5, text: "Great quality! Will buy again.", time: "1 week ago" },
  { id: "r3", user: "Tunde A.", avatar: "TA", rating: 4, text: "Good product, communication was smooth.", time: "2 weeks ago" },
]

export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="pt-14 pb-20 px-4 max-w-lg mx-auto text-center py-20">
        <p className="text-4xl mb-4">🔍</p>
        <h2 className="text-lg font-semibold mb-2">Product not found</h2>
        <Link href="/prototype/markets" className="text-[#0088cc] text-sm hover:underline">Back to Markets</Link>
      </div>
    )
  }

  const vendor = vendors.find((v) => v.id === product.vendor.id)

  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      {/* Back */}
      <Link href="/prototype/markets" className="text-sm text-gray-500 hover:text-white transition-colors inline-block mb-4">← Back to Markets</Link>

      {/* Image Placeholder */}
      <div className="w-full aspect-square bg-gradient-to-br from-[#833AB4]/20 to-[#0088cc]/20 rounded-2xl mb-4 flex items-center justify-center">
        <span className="text-6xl">{product.emoji}</span>
      </div>

      {/* Title & Price */}
      <h1 className="text-2xl font-bold mb-1">{product.title}</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-bold text-[#0088cc]">₦{product.price.toLocaleString()}</p>
        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-gray-400">{product.condition}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{product.desc}</p>

      {/* Vendor */}
      {vendor && (
        <Link href={`/prototype/vendors/${vendor.id}`} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 mb-6 hover:bg-white/[0.07] transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#F77737] flex items-center justify-center text-sm font-bold">{vendor.avatar}</div>
          <div>
            <p className="text-sm font-medium">{vendor.shop}</p>
            <p className="text-[10px] text-gray-500">{vendor.university}</p>
          </div>
          <span className="ml-auto text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full">{product.vendor.rating} ★</span>
        </Link>
      )}

      {/* Quantity & Buy */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center bg-white/5 rounded-xl border border-white/10">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">−</button>
          <span className="px-3 py-2 text-sm font-medium">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">+</button>
        </div>
        <button className="flex-1 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl text-sm font-medium transition-colors">Add to Cart — ₦{(product.price * qty).toLocaleString()}</button>
      </div>

      {/* Reviews */}
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Reviews</h2>
      <div className="space-y-3">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0088cc] to-[#833AB4] flex items-center justify-center text-[10px] font-bold">{r.avatar}</div>
              <div>
                <p className="text-sm font-medium">{r.user}</p>
                <p className="text-[10px] text-gray-500">{r.time}</p>
              </div>
              <span className="ml-auto text-yellow-400 text-xs">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
            </div>
            <p className="text-sm text-gray-400">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

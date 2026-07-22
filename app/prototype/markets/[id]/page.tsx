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

  return (
    <div className="pt-14 pb-20 max-w-lg mx-auto">
      {/* Image */}
      <div className="h-64 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center text-6xl">
        {product.images[0]}
      </div>

      <div className="px-4">
        {/* Back */}
        <Link href="/prototype/markets" className="inline-block text-xs text-gray-500 hover:text-white mt-4 mb-3 transition-colors">
          ← Back to Markets
        </Link>

        {/* Title & Price */}
        <h1 className="text-xl font-bold leading-tight">{product.title}</h1>
        <p className="text-2xl font-bold text-[#0088cc] mt-2">₦{product.price.toLocaleString()}</p>

        {/* Tags */}
        <div className="flex gap-2 mt-3">
          <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-400">{product.condition}</span>
          <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-400">{product.category}</span>
          {product.inStock && (
            <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full text-[10px]">In Stock</span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">{product.description}</p>

        {/* Vendor Info */}
        <Link
          href={`/prototype/vendors/${product.vendor.id}`}
          className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 mt-6 hover:bg-white/[0.07] transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-sm font-bold">
            {product.vendor.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{product.vendor.shop}</p>
            <p className="text-xs text-gray-500">★ {product.vendor.rating} · {product.vendor.reviews} reviews</p>
          </div>
          <span className="text-xs text-[#0088cc]">View →</span>
        </Link>

        {/* Quantity + Chat */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex items-center bg-white/10 rounded-lg">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-sm hover:text-white text-gray-400">−</button>
            <span className="px-3 py-2 text-sm font-medium border-x border-white/10">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-sm hover:text-white text-gray-400">+</button>
          </div>
          <Link
            href={`/prototype/chat/chat-1`}
            className="flex-1 text-center px-4 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] rounded-lg text-sm font-medium transition-colors"
          >
            Chat with Vendor
          </Link>
        </div>

        {/* Reviews */}
        <h3 className="text-base font-semibold mt-8 mb-3">Reviews ({product.reviewCount})</h3>
        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.user}</p>
                  <p className="text-[10px] text-gray-500">{review.time}</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="text-sm text-gray-400">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

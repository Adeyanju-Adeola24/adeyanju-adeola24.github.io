"use client";
import { useState } from "react";
import { products, categories } from "@/lib/data";
import Link from "next/link";

export default function MarketsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <div className="py-4">
        <h1 className="text-xl font-bold">Markets</h1>
        <p className="text-sm text-gray-500">Discover products on campus</p>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? "bg-[#0088cc] text-white"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/prototype/markets/${product.id}`}
            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all"
          >
            <div className="h-32 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center text-4xl">
              {product.images[0]}
            </div>
            <div className="p-3">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{product.vendor.shop}</p>
              <h3 className="text-sm font-medium mt-0.5 line-clamp-2 leading-tight">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm font-bold text-[#0088cc]">₦{product.price.toLocaleString()}</p>
                <span className="text-[10px] text-gray-500">★ {product.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No products in this category yet.</p>
      )}
    </div>
  )
}

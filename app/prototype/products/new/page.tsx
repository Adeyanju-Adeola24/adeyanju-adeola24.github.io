"use client";
import { useState } from "react";
import Link from "next/link";

const categories = ["Electronics", "Fashion", "Food", "Beauty", "Books", "Services"]
const conditions = ["New", "Like New", "Good", "Fair"]

export default function NewProductPage() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [condition, setCondition] = useState("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, category, condition, description }),
      })
      if (!res.ok) throw new Error("Failed to list product")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="pt-14 pb-20 px-4 max-w-lg mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        <span className="text-6xl mb-6">🎉</span>
        <h1 className="text-2xl font-bold mb-2">Product Listed!</h1>
        <p className="text-gray-400 mb-8">Your product is now live on Markets.</p>
        <div className="flex gap-3">
          <Link href="/prototype/markets" className="px-5 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl text-sm font-medium transition-colors">
            View in Markets
          </Link>
          <button onClick={() => { setSubmitted(false); setTitle(""); setPrice(""); setCategory(""); setCondition(""); setDescription(""); }}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors">
            List Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <Link href="/prototype/board" className="text-xs text-gray-500 hover:text-white transition-colors">← Back to Board</Link>
      <h1 className="text-xl font-bold mt-4 mb-1">List a Product</h1>
      <p className="text-sm text-gray-500 mb-6">Fill in the details below to list your product on Markets.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 block mb-1">Product Title *</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. iPhone 14 Pro Max 256GB"
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Price (₦) *</label>
            <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="850000"
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Condition *</label>
            <select required value={condition} onChange={(e) => setCondition(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0088cc] transition-colors">
              <option value="">Select</option>
              {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-1">Category *</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  category === cat ? "bg-[#0088cc] text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-1">Description *</label>
          <textarea required value={description} onChange={(e) => setDescription(e.target.value)} rows={4}
            placeholder="Describe your product, condition, what's included..."
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors resize-none" />
        </div>

        {error && <p className="text-xs text-[#FD1D1D]">{error}</p>}

        <button type="submit"
          disabled={!title || !price || !category || !condition || !description || loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] disabled:opacity-50 rounded-xl text-white font-medium transition-all hover:opacity-90">
          {loading ? "Listing..." : "List Product"}
        </button>
      </form>
    </div>
  )
}

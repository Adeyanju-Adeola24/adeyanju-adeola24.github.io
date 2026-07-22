"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Become a Vendor 🏪",
    desc: "Turn your campus side hustle into a real business. Set up your shop, list products, and start selling to thousands of students.",
    emoji: "🚀",
  },
  {
    title: "Build Trust Instantly",
    desc: "Get verified, collect reviews, and use escrow protection. Buyers trust verified vendors — and that means more sales for you.",
    emoji: "✅",
  },
  {
    title: "Sell Smarter with MI",
    desc: "Let MI automate replies, suggest prices, analyze your sales data, and help you manage orders — all in one place.",
    emoji: "🤖",
  },
  {
    title: "Start Selling Today!",
    desc: "Set up your shop in minutes. Hollap makes it easy to reach every student on your campus.",
    emoji: "💰",
  },
]

const categories = ["Electronics", "Fashion", "Food", "Beauty", "Books", "Services"]

export default function VendorOnboardingPage() {
  const [step, setStep] = useState(0)
  const [shopName, setShopName] = useState("")
  const [fullName, setFullName] = useState("")
  const [selectedCats, setSelectedCats] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    try {
      await fetch("/api/onboarding/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shopName, fullName, categories: selectedCats }),
      })
      setDone(true)
    } catch {
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white flex flex-col items-center justify-center px-4 text-center">
        <span className="text-6xl mb-6">🎉</span>
        <h1 className="text-2xl font-bold mb-2">Your Shop is Ready!</h1>
        <p className="text-gray-400 max-w-md mb-2">Welcome to the vendor community, {shopName}.</p>
        <p className="text-xs text-gray-500 mb-8">We'll review your details and verify your shop within 24 hours.</p>
        <Link
          href="/prototype/board"
          className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl text-white font-medium transition-colors"
        >
          Go to Dashboard →
        </Link>
      </div>
    )
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <button onClick={() => setShowForm(false)} className="text-sm text-gray-500 hover:text-white mb-6 transition-colors">← Back</button>
          <h1 className="text-2xl font-bold mb-2">Set Up Your Shop</h1>
          <p className="text-gray-400 text-sm mb-8">Enter your details to get started selling.</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Shop Name</label>
              <input type="text" value={shopName} onChange={(e) => setShopName(e.target.value)} placeholder="e.g. Chidi's Gadgets"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Your Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your legal name"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-2">What do you sell?</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCats(prev =>
                      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                    )}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      selectedCats.includes(cat)
                        ? "bg-[#0088cc] text-white"
                        : "bg-white/10 text-gray-400 hover:bg-white/20"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!shopName.trim() || !fullName.trim() || selectedCats.length === 0 || loading}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] disabled:opacity-50 rounded-xl text-white font-medium transition-all"
            >
              {loading ? "Submitting..." : "Submit for Verification"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step < steps.length) {
    const current = steps[step]
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span className="text-7xl block mb-8">{current.emoji}</span>
          <h1 className="text-3xl font-bold mb-4">{current.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{current.desc}</p>

          <div className="flex justify-center gap-2 mt-10 mb-8">
            {steps.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${
                i === step ? "w-8 bg-[#833AB4]" : i < step ? "w-2 bg-[#833AB4]/50" : "w-2 bg-white/20"
              }`} />
            ))}
          </div>

          <button
            onClick={() => {
              if (step === steps.length - 1) {
                setShowForm(true)
              } else {
                setStep(step + 1)
              }
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl text-white font-medium hover:opacity-90 transition-all"
          >
            {step === steps.length - 1 ? "Set Up Shop" : "Continue"}
          </button>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="block mx-auto mt-4 text-sm text-gray-500 hover:text-white transition-colors">
              ← Back
            </button>
          )}
        </div>
      </div>
    )
  }

  return null
}

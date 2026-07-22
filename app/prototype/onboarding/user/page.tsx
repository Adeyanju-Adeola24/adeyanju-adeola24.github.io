"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Welcome to Hollap 🎉",
    desc: "The trusted campus commerce platform. Buy, sell, and connect with students at your university.",
    emoji: "👋",
  },
  {
    title: "Find What You Need",
    desc: "Browse Markets for products from verified vendors on your campus. Read reviews, chat before you buy, and pay with confidence.",
    emoji: "🔍",
  },
  {
    title: "Stay in the Loop",
    desc: "Get campus updates on Bulletin, discover trending products, and let MI help you make smarter decisions.",
    emoji: "📬",
  },
  {
    title: "You're All Set!",
    desc: "Start exploring Hollap. Your campus community is waiting.",
    emoji: "🚀",
  },
]

const interests = ["Electronics", "Fashion", "Food", "Beauty", "Books", "Services"]

export default function UserOnboardingPage() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState("")
  const [university, setUniversity] = useState("")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    try {
      await fetch("/api/onboarding/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, university, interests: selectedInterests }),
      })
      setDone(true)
    } catch {
      // Fallback: complete locally
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white flex flex-col items-center justify-center px-4 text-center">
        <span className="text-6xl mb-6">🎉</span>
        <h1 className="text-2xl font-bold mb-2">Welcome aboard, {name || "Student"}!</h1>
        <p className="text-gray-400 max-w-md mb-8">You're now part of the Hollap campus community. Start exploring!</p>
        <Link
          href="/prototype/board"
          className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-xl text-white font-medium transition-colors"
        >
          Go to Board →
        </Link>
      </div>
    )
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <button onClick={() => setShowForm(false)} className="text-sm text-gray-500 hover:text-white mb-6 transition-colors">← Back</button>
          <h1 className="text-2xl font-bold mb-2">Create Your Profile</h1>
          <p className="text-gray-400 text-sm mb-8">Just a few details to get started.</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">University</label>
              <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} placeholder="Your university"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-2">Interests</label>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => setSelectedInterests(prev =>
                      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
                    )}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      selectedInterests.includes(interest)
                        ? "bg-[#0088cc] text-white"
                        : "bg-white/10 text-gray-400 hover:bg-white/20"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!name.trim() || !university.trim() || loading}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] disabled:opacity-50 rounded-xl text-white font-medium transition-all"
            >
              {loading ? "Setting up..." : "Complete Setup"}
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
                i === step ? "w-8 bg-[#0088cc]" : i < step ? "w-2 bg-[#0088cc]/50" : "w-2 bg-white/20"
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
            {step === steps.length - 1 ? "Let's Go!" : "Continue"}
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

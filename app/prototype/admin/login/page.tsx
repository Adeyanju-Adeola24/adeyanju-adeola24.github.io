"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.")
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    if (email === "admin@hollap.com" && password === "admin123") {
      router.push("/prototype/admin/dashboard")
    } else {
      setError("Invalid credentials. Try admin@hollap.com / admin123")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold tracking-tight">
            <span className="text-white">hollap</span>
            <span className="text-[#0088cc] ml-0.5">admin</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Sign in to the management console</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@hollap.com"
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
          </div>

          {error && (
            <p className="text-xs text-[#FD1D1D] bg-[#FD1D1D]/10 rounded-lg px-3 py-2">{error}</p>
          )}

          <button type="submit" disabled={loading}
            className="w-full px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] disabled:opacity-50 rounded-xl text-white font-medium transition-colors">
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-[10px] text-gray-500 text-center">
            Demo: admin@hollap.com / admin123
          </p>
        </form>

        <div className="text-center mt-6">
          <a href="/prototype/board" className="text-xs text-gray-500 hover:text-white transition-colors">
            ← Back to Prototype
          </a>
        </div>
      </div>
    </div>
  )
}

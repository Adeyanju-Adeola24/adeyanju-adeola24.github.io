"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl mb-2">You&apos;re on the list! 🎉</p>
        <p className="text-gray-400">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <div className="flex-1 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="hidden sm:block w-full sm:w-auto px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
        />
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-md text-white font-medium transition-opacity disabled:opacity-50"
      >
        {loading ? "Sending..." : "Join Waitlist"}
      </button>
      {error && <p className="text-xs text-[#FD1D1D] mt-2">{error}</p>}
    </form>
  );
}

"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">hollap</span>
            <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent ml-1">.</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            The trusted commerce infrastructure for Africa&apos;s youth economy.
          </p>
          {subscribed ? (
            <p className="text-sm text-green-400 mt-3">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 mt-4 max-w-xs">
              <input
                type="email"
                required
                placeholder="Get updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-3 py-2 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white text-sm font-medium transition-colors shrink-0"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/prototype/markets" className="hover:text-white transition-colors">Markets</Link></li>
            <li><Link href="/prototype/bulletin" className="hover:text-white transition-colors">Bulletin</Link></li>
            <li><Link href="/prototype/mi" className="hover:text-white transition-colors">MI</Link></li>
            <li><Link href="/prototype/trends" className="hover:text-white transition-colors">Trends</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/ambassadors" className="hover:text-white transition-colors">Ambassadors</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/security" className="hover:text-white transition-colors">Security & Trust</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-3 text-gray-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">𝕏</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">IG</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">in</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="TikTok">TT</a>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hollap
          </p>
        </div>
      </div>
    </footer>
  );
}

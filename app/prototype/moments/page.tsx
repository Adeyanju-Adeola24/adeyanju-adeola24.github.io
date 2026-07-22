"use client";
import { useState } from "react";
import { moments } from "@/lib/data";
import Link from "next/link";

export default function MomentsPage() {
  const [feed, setFeed] = useState(moments)
  const [showShare, setShowShare] = useState(false)
  const [shareText, setShareText] = useState("")
  const [shared, setShared] = useState(false)

  function toggleLike(id: string) {
    setFeed((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, likes: m.liked ? m.likes - 1 : m.likes + 1, liked: !m.liked } : m
      )
    )
  }

  function handleShare(e: React.FormEvent) {
    e.preventDefault()
    if (!shareText.trim()) return
    const newMoment = {
      id: `mom-${Date.now()}`,
      user: "You",
      avatar: "YO",
      university: "Your University",
      time: "Just now",
      image: "✨",
      caption: shareText.trim(),
      likes: 0,
      comments: 0,
      liked: false,
    }
    setFeed((prev) => [newMoment, ...prev])
    setShareText("")
    setShowShare(false)
    setShared(true)
    setTimeout(() => setShared(false), 3000)
  }

  return (
    <div className="pt-14 pb-20 max-w-lg mx-auto">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Moments</h1>
          <p className="text-sm text-gray-500">Campus life, shared</p>
        </div>
        <button
          onClick={() => setShowShare(true)}
          className="px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl text-xs font-medium hover:opacity-90 transition-opacity"
        >
          + Share a Moment
        </button>
      </div>

      {/* Share toast */}
      {shared && (
        <div className="mx-4 mb-3 px-4 py-2.5 bg-green-500/20 border border-green-500/30 rounded-xl text-xs text-green-400 flex items-center gap-2">
          <span>✓</span> Your moment is live! Your campus can see it.
        </div>
      )}

      {/* Share Modal */}
      {showShare && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-4">
          <div className="bg-[#12121a] border border-white/10 rounded-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Share a Moment</h2>
              <button onClick={() => setShowShare(false)} className="text-gray-500 hover:text-white text-sm">✕</button>
            </div>
            <form onSubmit={handleShare}>
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-sm font-bold shrink-0">
                  YO
                </div>
                <textarea
                  value={shareText}
                  onChange={(e) => setShareText(e.target.value)}
                  placeholder="What's happening on your campus?"
                  rows={3}
                  maxLength={280}
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500">{shareText.length}/280</span>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setShowShare(false)} className="px-4 py-2 text-xs text-gray-400 hover:text-white transition-colors">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!shareText.trim()}
                    className="px-5 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] disabled:opacity-50 rounded-xl text-xs font-medium transition-all hover:opacity-90"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Feed */}
      <div className="space-y-4 px-4">
        {feed.map((moment) => (
          <Link
            key={moment.id}
            href={`/prototype/moments/${moment.id}`}
            className="block bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all"
          >
            {/* User info */}
            <div className="flex items-center gap-3 px-4 pt-4 pb-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold">
                {moment.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{moment.user}</p>
                <p className="text-[10px] text-gray-500">{moment.university} · {moment.time}</p>
              </div>
            </div>

            {/* Image/Emoji */}
            <div className="mx-4 h-48 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl flex items-center justify-center text-5xl">
              {moment.image}
            </div>

            {/* Caption */}
            <div className="px-4 py-3">
              <p className="text-sm text-gray-200 leading-relaxed">{moment.caption}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 px-4 pb-4 pt-1">
              <button
                onClick={(e) => { e.preventDefault(); toggleLike(moment.id) }}
                className={`flex items-center gap-1.5 text-xs transition-colors ${
                  moment.liked ? "text-[#FD1D1D]" : "text-gray-500 hover:text-[#FD1D1D]"
                }`}
              >
                {moment.liked ? "❤️" : "🤍"} <span>{moment.likes}</span>
              </button>
              <button
                onClick={(e) => { e.preventDefault() }}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0088cc] transition-colors"
              >
                💬 <span>{moment.comments}</span>
              </button>
              <button
                onClick={(e) => { e.preventDefault() }}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors ml-auto"
              >
                ↪ Share
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {feed.length === 0 && (
        <div className="text-center py-20 px-4">
          <span className="text-5xl block mb-4">📸</span>
          <p className="text-gray-400">No moments yet. Be the first to share!</p>
        </div>
      )}
    </div>
  )
}

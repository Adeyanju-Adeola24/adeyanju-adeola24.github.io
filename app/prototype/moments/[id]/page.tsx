"use client";
import { moments } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function MomentDetailPage() {
  const params = useParams()
  const moment = moments.find((m) => m.id === params.id)
  const [liked, setLiked] = useState(moment?.liked || false)
  const [likes, setLikes] = useState(moment?.likes || 0)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<{ text: string; user: string }[]>([])

  function toggleLike() {
    setLiked(!liked)
    setLikes((prev) => liked ? prev - 1 : prev + 1)
  }

  function addComment(e: React.FormEvent) {
    e.preventDefault()
    if (!comment.trim()) return
    setComments((prev) => [...prev, { text: comment.trim(), user: "You" }])
    setComment("")
  }

  if (!moment) {
    return (
      <div className="pt-14 pb-20 px-4 max-w-lg mx-auto text-center py-20">
        <p className="text-4xl mb-4">📸</p>
        <h2 className="text-lg font-semibold mb-2">Moment not found</h2>
        <Link href="/prototype/moments" className="text-[#0088cc] text-sm hover:underline">Back to Moments</Link>
      </div>
    )
  }

  return (
    <div className="pt-14 pb-20 max-w-lg mx-auto">
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
        <Link href="/prototype/moments" className="text-gray-400 hover:text-white transition-colors text-sm">←</Link>
        <p className="text-sm font-medium">Moment</p>
      </div>

      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden mx-4 mt-4">
        <div className="flex items-center gap-3 px-4 pt-4 pb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold">
            {moment.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{moment.user}</p>
            <p className="text-[10px] text-gray-500">{moment.university} · {moment.time}</p>
          </div>
        </div>

        <div className="mx-4 h-48 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl flex items-center justify-center text-5xl">
          {moment.image}
        </div>

        <div className="px-4 py-3">
          <p className="text-sm text-gray-200 leading-relaxed">{moment.caption}</p>
        </div>

        <div className="flex items-center gap-4 px-4 pb-4 pt-1">
          <button onClick={toggleLike}
            className={`flex items-center gap-1.5 text-xs transition-colors ${liked ? "text-[#FD1D1D]" : "text-gray-500 hover:text-[#FD1D1D]"}`}>
            {liked ? "❤️" : "🤍"} <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0088cc] transition-colors">
            💬 <span>{moment.comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors ml-auto">
            ↪ Share
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="px-4 mt-6">
        <h3 className="text-sm font-semibold mb-3">Comments ({comments.length})</h3>
        {comments.length === 0 && (
          <p className="text-xs text-gray-500 mb-4">No comments yet. Be the first!</p>
        )}
        <div className="space-y-3 mb-4">
          {comments.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-[10px] font-bold shrink-0">
                {c.user[0]}
              </div>
              <div>
                <p className="text-xs font-medium">{c.user}</p>
                <p className="text-xs text-gray-400">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={addComment} className="flex gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
          />
          <button type="submit" disabled={!comment.trim()}
            className="px-4 py-2 bg-[#0088cc] hover:bg-[#0077b3] disabled:opacity-50 rounded-xl text-xs font-medium transition-colors">
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

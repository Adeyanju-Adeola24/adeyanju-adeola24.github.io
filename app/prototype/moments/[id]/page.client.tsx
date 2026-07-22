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
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <Link href="/prototype/moments" className="text-sm text-gray-500 hover:text-white transition-colors inline-block mb-4">← Back to Moments</Link>

      {/* Post */}
      <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#F77737] flex items-center justify-center text-sm font-bold">{moment.user[0]}</div>
          <div>
            <p className="text-sm font-medium">{moment.user}</p>
            <p className="text-[10px] text-gray-500">{moment.handle} · {moment.time}</p>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="aspect-square bg-gradient-to-br from-[#FD1D1D]/10 to-[#FDC830]/10 flex items-center justify-center">
          <span className="text-6xl">📸</span>
        </div>

        {/* Actions */}
        <div className="px-4 pt-3 pb-2 flex items-center gap-4">
          <button onClick={toggleLike} className={`text-lg transition-colors ${liked ? "text-[#FD1D1D]" : "text-gray-400 hover:text-white"}`}>
            {liked ? "❤️" : "🤍"}
          </button>
          <span className="text-sm text-gray-400">{likes} likes</span>
        </div>

        {/* Caption */}
        <div className="px-4 pb-3">
          <p className="text-sm">
            <span className="font-medium">{moment.user}</span> {moment.caption}
          </p>
        </div>

        {/* Comments */}
        <div className="px-4 pb-3 space-y-1">
          {moment.comments?.map((c, i) => (
            <p key={i} className="text-sm text-gray-400"><span className="font-medium text-gray-300">{c.user}</span> {c.text}</p>
          ))}
          {comments.map((c, i) => (
            <p key={`new-${i}`} className="text-sm text-gray-400"><span className="font-medium text-[#0088cc]">{c.user}</span> {c.text}</p>
          ))}
        </div>

        {/* Comment Input */}
        <form onSubmit={addComment} className="border-t border-white/5 flex">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="px-4 py-3 text-sm font-medium text-[#0088cc] disabled:opacity-30 hover:text-[#0077b3] transition-colors"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  )
}

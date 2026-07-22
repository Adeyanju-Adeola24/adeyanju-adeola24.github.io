"use client";
import { bulletinPosts } from "@/lib/data";

const badgeColors: Record<string, string> = {
  Official: "bg-[#0088cc]/20 text-[#0088cc]",
  Alert: "bg-[#FD1D1D]/20 text-[#FD1D1D]",
  Event: "bg-[#F77737]/20 text-[#F77737]",
  Vendor: "bg-[#833AB4]/20 text-[#833AB4]",
  Promotion: "bg-[#FDC830]/20 text-[#FDC830]",
}

export default function BulletinPage() {
  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <div className="py-4">
        <h1 className="text-xl font-bold">Bulletin</h1>
        <p className="text-sm text-gray-500">Your campus pulse</p>
      </div>

      <div className="space-y-4">
        {bulletinPosts.map((post) => (
          <div key={post.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0088cc] flex items-center justify-center text-xs font-bold">
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{post.author}</p>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${badgeColors[post.badge] || "bg-white/10 text-gray-400"}`}>
                    {post.badge}
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">{post.time}</p>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-sm font-semibold mb-1">{post.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{post.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#FD1D1D] transition-colors">
                ❤️ <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0088cc] transition-colors">
                💬 <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors ml-auto">
                ↪ Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

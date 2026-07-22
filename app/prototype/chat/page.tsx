"use client";
import { chatThreads } from "@/lib/data";
import Link from "next/link";

export default function ChatListPage() {
  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <div className="py-4">
        <h1 className="text-xl font-bold">Messages</h1>
        <p className="text-sm text-gray-500">Chat with vendors and buyers</p>
      </div>

      <div className="space-y-1">
        {chatThreads.map((thread) => (
          <Link
            key={thread.id}
            href={`/prototype/chat/${thread.id}`}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.05] transition-colors"
          >
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-sm font-bold">
                {thread.avatar}
              </div>
              {thread.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0a0a] rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{thread.user}</p>
                <span className="text-[10px] text-gray-500">{thread.time}</span>
              </div>
              <p className="text-xs text-gray-400 truncate mt-0.5">{thread.lastMessage}</p>
            </div>
            {thread.unread && <span className="w-2.5 h-2.5 bg-[#0088cc] rounded-full shrink-0" />}
          </Link>
        ))}
      </div>
    </div>
  )
}

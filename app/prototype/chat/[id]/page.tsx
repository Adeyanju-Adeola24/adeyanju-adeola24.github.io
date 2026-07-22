"use client";
import { chatThreads, chatMessages } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function ChatDetailPage() {
  const params = useParams()
  const thread = chatThreads.find((t) => t.id === params.id)
  const existingMsgs = thread ? chatMessages[thread.id] || [] : []
  const [messages, setMessages] = useState(existingMsgs)
  const [newMsg, setNewMsg] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend() {
    if (!newMsg.trim()) return
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    setMessages((prev) => [...prev, { text: newMsg.trim(), sent: true, time: timeStr }])
    setNewMsg("")
  }

  if (!thread) {
    return (
      <div className="pt-14 pb-20 px-4 max-w-lg mx-auto text-center py-20">
        <p className="text-4xl mb-4">💬</p>
        <h2 className="text-lg font-semibold mb-2">Chat not found</h2>
        <Link href="/prototype/chat" className="text-[#0088cc] text-sm hover:underline">Back to Messages</Link>
      </div>
    )
  }

  return (
    <div className="pt-14 pb-20 max-w-lg mx-auto flex flex-col h-screen">
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
        <Link href="/prototype/chat" className="text-gray-400 hover:text-white transition-colors text-sm">←</Link>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-sm font-bold">
            {thread.avatar}
          </div>
          {thread.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a0a0a] rounded-full" />}
        </div>
        <div>
          <p className="text-sm font-medium">{thread.user}</p>
          <p className="text-[10px] text-green-400">{thread.online ? "Online" : "Offline"}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.sent
                  ? "bg-[#0088cc] text-white rounded-br-md"
                  : "bg-white/10 text-gray-200 rounded-bl-md"
              }`}
            >
              {msg.text}
              <p className={`text-[10px] mt-1 ${msg.sent ? "text-white/60" : "text-gray-500"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 pb-4 pt-2 border-t border-white/5">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend() }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
          />
          <button
            type="submit"
            disabled={!newMsg.trim()}
            className="px-4 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-sm font-medium transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

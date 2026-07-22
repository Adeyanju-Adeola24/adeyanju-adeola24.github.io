"use client";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "Summarize my unread messages",
  "What products are trending today?",
  "Suggest a price for my listing",
  "Draft a reply to Amina",
]

const initialMessages = [
  { text: "👋 Hey! I'm MI, your AI operating assistant.", from: "mi" },
  { text: "I can help you manage orders, draft replies, analyze trends, and automate your campus business. Try asking me something!", from: "mi" },
]

export default function MiPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSend(text: string) {
    if (!text.trim() || loading) return
    const userMsg = text.trim()
    setMessages((prev) => [...prev, { text: userMsg, from: "user" }])
    setInput("")
    setLoading(true)

    await new Promise((r) => setTimeout(r, 800 + Math.random() * 1200))

    let reply = ""
    const lower = userMsg.toLowerCase()
    if (lower.includes("summar") || lower.includes("unread")) {
      reply = "You have **5 unread messages**. Top highlights:\n1. Amina asked about MacBook availability\n2. Kofi confirmed textbook price\n3. Zara sent a thank-you note\n4. Emeka: order being prepared\n5. Campus security: safety notice"
    } else if (lower.includes("trend") || lower.includes("hot")) {
      reply = "🔥 **Today's Top Trends:**\n• AirPods Pro 2 — sales up 340%\n• Jollof Rice Combo — up 280%\n• Streetwear Hoodie — up 310%\n\nShould I adjust your pricing based on these trends?"
    } else if (lower.includes("price") || lower.includes("listing")) {
      reply = "Based on market analysis, I recommend listing your item at **₦165,000** — that's 8% below the average to move it fast while maximizing profit. Current competitors are priced between ₦170k–₦195k."
    } else if (lower.includes("draft") || lower.includes("reply")) {
      reply = "Here's a draft reply to Amina:\n\n> Hey Amina! 👋\n> Yes, the MacBook Air M3 is still available. It's brand new, sealed box with full warranty. You're welcome to come see it today — I'm in the engineering building. Free delivery to your hostel too!\n\nWant me to send this?"
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      reply = "Hey there! 👋 What can I help you with today? I can summarize messages, suggest prices, analyze trends, or draft replies."
    } else {
      reply = "Good question! I'm still learning about that topic. Here's what I know: **Hollap** is building commerce infrastructure for Africa's youth economy. Want me to look into something else?"
    }

    setMessages((prev) => [...prev, { text: reply, from: "mi" }])
    setLoading(false)
  }

  return (
    <div className="pt-14 pb-20 max-w-lg mx-auto flex flex-col h-screen">
      {/* Header */}
      <div className="px-4 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-sm">
            ✦
          </div>
          <div>
            <h1 className="text-lg font-bold">MI</h1>
            <p className="text-[10px] text-green-400">● Online · AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                msg.from === "user"
                  ? "bg-[#0088cc] text-white rounded-br-md"
                  : "bg-white/10 text-gray-200 rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-3">
          <p className="text-[10px] text-gray-500 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4 pt-2 border-t border-white/5">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(input) }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask MI anything..."
            disabled={loading}
            className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-sm font-medium transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

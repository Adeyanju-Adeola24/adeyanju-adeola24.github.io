import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const entry = {
      id: `ct-${Date.now()}`,
      name,
      email,
      subject: subject || "general",
      message,
      receivedAt: new Date().toISOString(),
    }

    console.log("[Contact] New message:", entry)

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll get back to you within 24 hours.",
      entry,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

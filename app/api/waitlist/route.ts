import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, university } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const entry = {
      id: `wl-${Date.now()}`,
      email,
      name: name || "",
      university: university || "",
      joinedAt: new Date().toISOString(),
    }

    console.log("[Waitlist] New signup:", entry)

    return NextResponse.json({
      success: true,
      message: "You're on the list!",
      entry,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

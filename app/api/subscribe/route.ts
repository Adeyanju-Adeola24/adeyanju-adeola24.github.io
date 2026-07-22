import { NextResponse } from "next/server"

export const dynamic = "force-static";

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const entry = {
      id: `sub-${Date.now()}`,
      email,
      subscribedAt: new Date().toISOString(),
    }

    console.log("[Subscribe] New subscriber:", entry)

    return NextResponse.json({
      success: true,
      message: "Thanks for subscribing!",
      entry,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

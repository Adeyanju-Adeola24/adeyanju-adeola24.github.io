import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, university, interests } = body

    if (!name || !university) {
      return NextResponse.json({ error: "Name and university are required" }, { status: 400 })
    }

    const profile = {
      id: `user-${Date.now()}`,
      name,
      university,
      interests: interests || [],
      type: "student",
      joinedAt: new Date().toISOString(),
    }

    console.log("[Onboarding] New user:", profile)

    return NextResponse.json({
      success: true,
      message: "Welcome aboard!",
      profile,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

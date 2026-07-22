import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { shopName, fullName, categories } = body

    if (!shopName || !fullName || !categories || categories.length === 0) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const shop = {
      id: `vendor-${Date.now()}`,
      shopName,
      ownerName: fullName,
      categories,
      status: "pending",
      submittedAt: new Date().toISOString(),
    }

    console.log("[Onboarding] New vendor:", shop)

    return NextResponse.json({
      success: true,
      message: "Shop submitted for verification!",
      shop,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

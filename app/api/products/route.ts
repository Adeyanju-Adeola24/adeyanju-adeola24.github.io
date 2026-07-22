import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, price, category, condition, description } = body

    if (!title || !price || !category || !condition || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const product = {
      id: `prod-${Date.now()}`,
      title,
      price: Number(price),
      category,
      condition,
      description,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    console.log("[Products] New listing:", product)

    return NextResponse.json({
      success: true,
      message: "Product listed successfully!",
      product,
    })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

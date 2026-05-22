import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  return NextResponse.json({
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}

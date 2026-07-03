import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name: "CML Admin",
        email: "admin@cmlwindows.com",
        password: "admin123456",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin account created",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

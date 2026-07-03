import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await auth.api.signUpEmail({
      body: {
        name: "CML Admin",
        email: "admin@cmlwindows.com",
        password: "admin123456",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin account created",
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { auth } = await import("@/lib/auth");

    const result = await auth.api.signUpEmail({
      body: {
        name: "CML Admin",
        email: "admin@cmlwindows.com",
        password: "admin123456",
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json(
      {
        error: String(error),
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // Clear the access_token cookie
    const response = NextResponse.json({
      message: "Log out successful",
      success: true,
    });
    response.cookies.set("access_token", "", { httpOnly: true });
    return response
  } catch (error) {
    console.error("Error in logout GET handler:", error);
    return NextResponse.error(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

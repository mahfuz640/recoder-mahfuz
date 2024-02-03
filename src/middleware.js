import { NextResponse } from "next/server";

export async function middleware(req) {
  const isAuthenticated = req.cookies.get("access_token");

  // If the user is not authenticated and trying to access the "/profile" page
  if (!isAuthenticated && req.url.pathname === "/profile") {
    return NextResponse.redirect("/signin");
  }
}

// Configuring paths for the middleware
export const config = {
  matcher: ["/profile"],
};

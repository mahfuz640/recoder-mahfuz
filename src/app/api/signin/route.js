import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"; // Correct import statement

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User with this email does not exist" },
        { status: 401 }
      );
    }

    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    const token = sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        isAdmin: existingUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Set to 1 day
    );

    const { password: newUserPassword, ...rest } = existingUser;

    const response = NextResponse.json(
      { user: rest },
      { message: "Login successful" },
      { status: 200 }
    );
    response.cookies.set("access_token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.error("Error in login POST handler:", error);
    return NextResponse.error(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

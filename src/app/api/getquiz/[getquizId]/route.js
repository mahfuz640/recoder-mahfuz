import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const id = req.url.split("getquiz/")[1];
    const quiz = await prisma.quiz.findUnique({ where: { id: parseInt(id) } });
    if (!quiz) {
      return NextResponse.json({ message: "Quiz not found" }, { status: 404 });
    }

    return NextResponse.json(
      { quiz: quiz },
      { message: "Quiz data fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET handler:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

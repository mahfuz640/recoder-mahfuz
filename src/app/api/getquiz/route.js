import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Retrieve all quiz data from the database
    const allQuizzes = await prisma.quiz.findMany();

    return NextResponse.json(
      { quizzes: allQuizzes },
      { message: "Quiz data fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in GET handler:", error.message);
  }
}

import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { question, answer } = await req.json();
    console.log(question);
    console.log(answer);

    // Validate input

    // Create new quiz
    const newQuiz = await prisma.quiz.create({
      data: {
        question,
        answer,
      },
    });

    return NextResponse.json(
      { quiz: newQuiz },
      { message: "Question created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new NextResponse(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

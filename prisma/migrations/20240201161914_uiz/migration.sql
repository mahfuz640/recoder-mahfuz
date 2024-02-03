/*
  Warnings:

  - You are about to drop the column `authorId` on the `Quiz` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_authorId_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "authorId";

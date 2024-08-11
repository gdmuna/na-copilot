/*
  Warnings:

  - You are about to alter the column `name` on the `Test` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `school` on the `Test` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `professional` on the `Test` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Test" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "school" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "professional" SET DATA TYPE VARCHAR(100);

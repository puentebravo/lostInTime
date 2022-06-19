/*
  Warnings:

  - You are about to drop the column `content` on the `posts` table. All the data in the column will be lost.
  - Added the required column `route` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `content`,
    ADD COLUMN `route` VARCHAR(10) NOT NULL;

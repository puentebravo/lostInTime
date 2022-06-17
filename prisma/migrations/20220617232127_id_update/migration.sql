/*
  Warnings:

  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `posts` DROP PRIMARY KEY,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- RenameIndex
ALTER TABLE `posts` RENAME INDEX `ID` TO `posts_ID_key`;

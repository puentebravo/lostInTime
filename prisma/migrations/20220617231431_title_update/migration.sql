-- CreateTable
CREATE TABLE `posts` (
    `ID` CHAR(36) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `tags` VARCHAR(20) NULL,

    UNIQUE INDEX `ID`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

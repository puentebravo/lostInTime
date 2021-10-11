CREATE database timeLost_db;

USE timeLost_db;

CREATE TABLE posts(
id INTEGER auto_increment NOT NULL,
content LONGTEXT NOT NULL,
tags varchar(255),
primary key(id)
)

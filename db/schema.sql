CREATE database timeLost_db;

USE timeLost_db;

CREATE TABLE posts(
ID char(36) Unique,
content LONGTEXT NOT NULL,
tags varchar(20),
primary key(ID)
);

DELIMITER ;;
CREATE TRIGGER before_insert_posts
BEFORE INSERT ON posts
FOR EACH ROW 
BEGIN 
	if new.ID IS NULL THEN
     SET new.ID = uuid();
	END IF;
END
;;
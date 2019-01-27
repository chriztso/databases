DROP DATABASE IF EXISTS chat; 
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username VARCHAR(35), 
  message VARCHAR(35),
  roomname VARCHAR(35)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  /* Describe your table here.*/
  id VARCHAR(35), 
  roomname VARCHAR(35)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id VARCHAR(35), 
  username VARCHAR(35)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


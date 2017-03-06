CREATE DATABASE burgers_db;

CREATE TABLE burgers(
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(250),
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY(id)
);


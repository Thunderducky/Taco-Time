-- DROP DATABASE IF EXISTS tacosDB;

-- CREATE DATABASE tacosDB;

USE tacosDB;

CREATE TABLE tacos(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    taco_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

INSERT INTO tacos (taco_name, devoured)
VALUES ("Carne Asada", false), ("Al Pastor", false), ("Pollo Tinga", false);



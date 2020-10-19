-- Create database
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Use database created
USE burgers_db;

-- Drop table if it already exists
DROP TABLE IF EXISTS burgers

-- Create table
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
);

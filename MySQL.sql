CREATE DATABASE kleur_db;

USE kleur_db;

CREATE TABLE kleuren (
    id INT AUTO_INCREMENT PRIMARY KEY,
    buttonId VARCHAR(50) NOT NULL,
    color VARCHAR(20) DEFAULT 'lightgray'
);

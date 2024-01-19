CREATE TABLE IF NOT EXISTS user(
    user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_first_name VARCHAR(255),
    user_last_name VARCHAR(255),
    password VARCHAR(255),
    points INTEGER,
    level VARCHAR(45),
    dob DATE,
    region VARCHAR(45),
    timezone VARCHAR(45)
);
CREATE TABLE IF NOT EXISTS user(
    user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    user_first_name VARCHAR,
    user_last_name VARCHAR,
    password VARCHAR,
    points INTEGER,
    level VARCHAR,
    dob INTEGER,
    region VARCHAR,
    timezone VARCHAR
);
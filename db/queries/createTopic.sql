CREATE TABLE IF NOT EXISTS topic(
    topic_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    topic_name VARCHAR(255), 
    topic_desc TEXT,
    q1 TEXT,
    q1_options TEXT,
    q2 TEXT,
    q2_options TEXT,
    q3 TEXT,
    q3_options TEXT
);
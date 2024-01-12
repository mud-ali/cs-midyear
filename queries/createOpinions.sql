CREATE TABLE IF NOT EXISTS opinions(
    user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    topic_id INTEGER PRIMARY KEY NOT NULL,
    opinion1 TEXT NOT NULL,
    opinion2 TEXT NOT NULL,
    opinion3 TEXT NOT NULL, 
    FOREIGN KEY(topic_id) REFERENCES topic(topic_id),
    FOREIGN KEY(user_id2) REFERENCES user(user_id)
);
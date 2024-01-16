CREATE TABLE IF NOT EXISTS debate_private(
    debate_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    topic_id INTEGER NOT NULL,
    user_id1 INTEGER NOT NULL, 
    user_id2 INTEGER NOT NULL, 
    score_1 INTEGER,
    score_2 INTEGER,
    debate_date DATE,
    status INTEGER,
    FOREIGN KEY(topic_id) REFERENCES topic(topic_id),
    FOREIGN KEY(user_id1) REFERENCES opinions(user_id),
    FOREIGN KEY(user_id2) REFERENCES user(user_id)
);
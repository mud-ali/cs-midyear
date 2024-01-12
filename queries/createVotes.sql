CREATE TABLE IF NOT EXISTS topic(
    debate_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
    debate_count INTEGER,
    FOREIGN KEY(debate_count) REFERENCES debate_public(debate_count)
);
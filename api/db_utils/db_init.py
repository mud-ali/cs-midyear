import sqlite3


def create_tables():
    db = sqlite3.connect('db/debate.db')
    create_queries = [
        # """
        # DROP TABLE IF EXISTS user
        # """,
        # """
        # DROP TABLE IF EXISTS topic
        # """,
        # """
        # DROP TABLE IF EXISTS opinions
        # """,
        # """
        # DROP TABLE IF EXISTS debate_private
        # """,
        """CREATE TABLE IF NOT EXISTS user (
                user_id INTEGER PRIMARY KEY,
                username VARCHAR,
                user_first_name VARCHAR,
                user_last_name VARCHAR,
                password VARCHAR,
                points INTEGER,
                dob DATE
            )
        """,
        """CREATE TABLE IF NOT EXISTS topic(
                topic_id INTEGER PRIMARY KEY,
                topic_name VARCHAR, 
                topic_desc TEXT,
                q1 TEXT,
                q1_options TEXT,
                q2 TEXT,
                q2_options TEXT,
                q3 TEXT,
                q3_options TEXT
            )
        """,
        """CREATE TABLE IF NOT EXISTS opinions(
                user_id INTEGER PRIMARY KEY NOT NULL,
                topic_id INTEGER NOT NULL,
                opinion1 TEXT NOT NULL,
                opinion2 TEXT NOT NULL,
                opinion3 TEXT NOT NULL, 
                FOREIGN KEY(topic_id) REFERENCES topic(topic_id),
                FOREIGN KEY(user_id) REFERENCES user(user_id)
            )
        """,
        """CREATE TABLE IF NOT EXISTS debate_private(
            debate_id INTEGER PRIMARY KEY,
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
            )
        """
    ]

    for create_query in create_queries:
        db.execute(create_query)
    db.commit()
    db.close()
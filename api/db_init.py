import sqlite3

def create_tables(db):
    create_queries = [
        """CREATE TABLE IF NOT EXISTS user(
                user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
                user_first_name VARCHAR,
                user_last_name VARCHAR,
                password VARCHAR,
                points INTEGER,
                level VARCHAR,
                dob INTEGER,
                region VARCHAR,
                timezone VARCHAR
            )
        """, 
        """CREATE TABLE IF NOT EXISTS topic(
                topic_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
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
                user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT,
                topic_id INTEGER PRIMARY KEY NOT NULL,
                opinion1 TEXT NOT NULL,
                opinion2 TEXT NOT NULL,
                opinion3 TEXT NOT NULL, 
                FOREIGN KEY(topic_id) REFERENCES topic(topic_id),
                FOREIGN KEY(user_id2) REFERENCES user(user_id)
            )
        """
    ]

    for create_query in create_queries:
        db.execute(create_query)
    db.commit()

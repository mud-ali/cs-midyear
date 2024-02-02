import sqlite3

def create_tables():
    # consider reading these from the files just for separation
    db_master = sqlite3.connect('db/debate.db')
    db = db_master.cursor()
    db.execute("DROP TABLE IF EXISTS  debate_private;")
    db.execute("DROP TABLE IF EXISTS  opinions;")
    db.execute("DROP TABLE IF EXISTS  topic;")
    db.execute("DROP TABLE IF EXISTS  user;")
    db_master.commit()
    create_queries = [
        """CREATE TABLE IF NOT EXISTS user (
                user_id INTEGER PRIMARY KEY,
                user_first_name VARCHAR,
                user_last_name VARCHAR,
                password VARCHAR,
                points INTEGER,
                level VARCHAR,
                dob DATE,
                region VARCHAR,
                timezone VARCHAR
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
        """
    ]

    for create_query in create_queries:
        db.execute(create_query)
    
    db_master.commit()
    db.close()
    db_master.close()

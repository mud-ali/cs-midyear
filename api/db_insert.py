import sqlite3

def insert_topic_details(db, topic_name, topic_desc, q1, a1, q2, a2, q3, a3):
    db_cursor = db.cursor()
    db_cursor.execute(
        """ INSERT INTO topic 
        (topic_name, topic_desc, q1, q1_options, q2, q2_options, q3, q3_options) VALUES (?, ?, ?, ?, ?, ?, ?, ?)""", 
        (topic_name, topic_desc, q1, a1, q2, a2, q3, a3)
    )
    db.commit()
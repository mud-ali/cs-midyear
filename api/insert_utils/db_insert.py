import sqlite3
from datetime import datetime

def insert_topic_details(topic_name, topic_desc, q1, a1, q2, a2, q3, a3):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    db_cursor.execute(
        """ INSERT INTO topic 
        (topic_name, topic_desc, q1, q1_options, q2, q2_options, q3, q3_options) VALUES (?, ?, ?, ?, ?, ?, ?, ?)""", 
        (topic_name, topic_desc, q1, a1, q2, a2, q3, a3)
    )
    db.commit()
    db.close()

def insert_opinion_details(user_id, topic_name, opinion1, opinion2, opinion3):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    db_cursor.execute(
        "SELECT topic_id FROM topic WHERE topic_name = ?", 
        (topic_name,)
    )
    topic_id = db_cursor.fetchone()[0]
    # assert opinion1[0] == "red", user_id 
    
    db_cursor.execute(
        """ INSERT INTO opinions 
        (user_id, topic_id, opinion1, opinion2, opinion3) VALUES (?, ?, ?, ?, ?)""", 
        (user_id[0], topic_id, opinion1, opinion2, opinion3)
    )
    db.commit()
    db.close()

def create_debate(user_id1, user_id2, topic_id):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    db_cursor.execute(
        """ INSERT INTO debate_private 
        (topic_id, user_id1, user_id2, score_1, score_2, debate_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)""", 
        (topic_id, user_id1, user_id2, 0, 0, datetime.today().strftime("%Y-%m-%d"), 1)
    )
    db.commit()
    db.close()


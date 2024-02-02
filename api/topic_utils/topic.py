import sqlite3
import json

def get_topic_by_name(topic_name):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    db_cursor.execute(
        "SELECT topic_id FROM topic WHERE topic_name LIKE ?", (topic_name,)
    )
    topics_info1 = db_cursor.fetchall()
    topic_id = topics_info1[0][0]

    db_cursor.execute(
        '''SELECT q1, q2, q3, q1_options, q2_options, q3_options FROM topic WHERE topic_id = ?''', 
        (topic_id,)
    )
    topics_info2 = db_cursor.fetchall()
    assert len(topics_info2[0]) == 6
    q1, q2, q3, q1_options, q2_options, q3_options = topics_info2[0]
    db.close()
    # return q2_options
    return {
        'q1': [q1,q1_options.split("[|]")],
        'q2': [q2,q2_options.split("[|]")],
        'q3': [q3,q3_options.split("[|]")]
    }
import sqlite3
import random

def calculate_match_debate(user_id1, user_id2):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    query = """
        SELECT topic_id, COUNT(*) AS disagreement_count
        FROM (
            SELECT topic_id, opinion1, opinion2, opinion3
            FROM opinions
            WHERE user_id = ? 
            UNION
            SELECT topic_id, opinion1, opinion2, opinion3
            FROM opinions
            WHERE user_id = ?
        )
        GROUP BY topic_id
    """
    db_cursor.execute(query, (user_id1, user_id2))
    result_set = db_cursor.fetchall()
    least_matching_topic = min(result_set, key=lambda x: x[1])[0]
    db_cursor.execute(""" SELECT topic.topic_name from topic where topic_id = ?""", (least_matching_topic,))
    topic_name_return = db_cursor.fetchall()[0][0]
    db_cursor.close()
    db.close()
    return topic_name_return

print(calculate_match_debate(6, 7))

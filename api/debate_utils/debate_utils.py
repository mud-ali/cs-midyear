import sqlite3
import random

def calculate_match_debate(user_id, topic_id):
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    
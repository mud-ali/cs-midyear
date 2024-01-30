import sqlite3
import hashlib

def add_user(user_uname, user_first_name, user_last_name, password, dob):
    db = sqlite3.connect('db/debate.db')
    db.cursor().execute(
        """
        INSERT INTO user (
            username,
            user_first_name,
            user_last_name,
            password,
            points, 
            dob
        ) VALUES (?, ?, ?, ?, ?, ?)
        """, (user_uname, user_first_name, user_last_name, hashlib.sha256(password.encode()).hexdigest(), 0, dob))
    db.commit()
    db.close()
    return get_uid(user_uname)

def get_uid(username):
    db = sqlite3.connect('db/debate.db')
    a= db.cursor().execute(
        """
        SELECT user_id FROM user WHERE username = ?
        """, (username,)).fetchone()
    db.close()
    return a
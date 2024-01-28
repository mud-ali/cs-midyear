import sqlite3
import hashlib

def add_user(db : sqlite3.Connection, user_uname, user_first_name, user_last_name, password, dob):
    db.cursor().execute(
        """
        INSERT INTO user (
            username,
            user_first_name,
            user_last_name,
            password,
            points, 
            dob
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (user_uname, user_first_name, user_last_name, hashlib.sha256(password).hexdigest(), 0, dob))
    db.commit()
    return get_uid(db, user_uname)

def get_uid(db : sqlite3.Connection, username):
    return db.cursor().execute(
        """
        SELECT uid FROM user WHERE username = ?
        """, (username)).fetchone()[0]
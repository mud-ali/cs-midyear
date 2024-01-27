import hashlib
import sqlite3

def verify_user(db : sqlite3.Connection, username : str, password : str) -> bool:
    user = db.execute(
        """
        SELECT * FROM user WHERE username = ?
        """, (username)).fetchone()
    if user is None:
        return False
    return user['password'] == hashlib.sha256(password).hexdigest()
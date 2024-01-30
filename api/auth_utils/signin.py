import hashlib
import sqlite3

def verify_user(username : str, password : str) -> bool:
    db = sqlite3.connect('db/debate.db')
    user = db.cursor().execute(
        """
        SELECT * FROM user WHERE username = ?
        """, (username,)).fetchone()
    if user is None:
        return False
    return user['password'] == hashlib.sha256(password.encode()).hexdigest()
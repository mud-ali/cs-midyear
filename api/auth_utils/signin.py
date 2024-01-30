import hashlib
import sqlite3

from api.auth_utils.signup import get_uid

def verify_user(username : str, password : str):
    db = sqlite3.connect('db/debate.db')
    user = db.cursor().execute(
        """
        SELECT * FROM user WHERE user_id = ?
        """, (get_uid(username),)).fetchone()
    db.close()
    if user is None:
        return "no user found"
        return False
    return user['password'] == hashlib.sha256(password.encode()).hexdigest()
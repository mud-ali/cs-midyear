from flask import Flask, request, redirect, url_for, session, jsonify
from flask_session import Session
import sqlite3
import json

from db_utils.db_init import create_tables
from insert_utils.db_insert import insert_topic_details, insert_opinion_details
from auth_utils.signin import verify_user
from auth_utils.signup import add_user, get_uid
from debate_utils.debate_utils import match_debaters
from insert_utils import create_debate

app = Flask(__name__)


app.secret_key = "incredibly_very_secret_key_rblijreq2wienewr" #TODO change to ENV var
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db = sqlite3.connect('db/debate.db')
create_tables(db)

@app.route("/submit_topic", methods=["GET","POST"])
def submit_topic():
    if request.method == "POST":
        topic_name = request.form['topic_name']
        topic_desc = request.form['topic_desc']
        q1 = request.form['q1']
        a1 = request.form['a1']
        q2 = request.form['q2']
        a2 = request.form['a2']
        q3 = request.form['q3']
        a3 = request.form['a3']

        insert_topic_details(db, topic_name, topic_desc, q1, a1, q2, a2, q3, a3)

        return redirect(url_for('/'), code=200)


@app.route("/store_opinion", methods = ["GET", "POST"])
def store_opinion():
    # make sure to add names of opinion form fields in jsx same as these or change them if not
    if request.method == "POST":
        user_id = "XXXXX" # how do we get this?
        topic_name = request.form['topic'] # for Search Topics Page, should be dropdown of topics for user to choose, maybe even use searchbar
        opinion1 = request.form['opinion1']
        opinion2 = request.form['opinion2']
        opinion3 = request.form['opinion3']

        insert_opinion_details(db, user_id, topic_name, opinion1, opinion2, opinion3)
    
    return redirect(url_for('/'))

@app.route("/api/signin", methods=["POST", "GET"])
def sign_in():
    if request.method == "POST":
        try:
            username = request.form['username']
            password = request.form['password']
            if verify_user(db, username, password):
                session['uid'] = get_uid(db, username)
            else:
                return "401 - Unauthorized", 401
        except Exception as e:
            return "422 - Unprocessable Entity", 422
    return json.dumps({"redirect": "/"})

@app.route("/api/signup", methods=["POST","GET"])
def sign_up():
    if request.method == "POST":
        try:
            username = request.form['username']
            password = request.form['password']
            first_name = request.form['first_name']
            last_name = request.form['last_name']
            # todo format date properly
            dob = request.form['dob']
            add_user(db, username, first_name, last_name, password, dob)
            session['uid'] = get_uid(db, username)
        except Exception as e:
            return "422 - Unprocessable Entity"
    return json.dumps({"redirect": "/"})

@app.route("/api/join", methods=["GET", "POST"])
def join_debate():
    user_id = "XXXXX"
    topic_name = request.form['topic']
    db_cursor = db.cursor()
    db_cursor.execute (
        ''' SELECT topic_id from topic where topic_name = ? ''', (topic_name)
    )
    topics_info1 = db_cursor.fetchall()
    topic_id = topics_info1[0][0]
    
    matching_message, topic, user_id1, user_id2, comp_found  = match_debaters(db, user_id, topic_id)
    if comp_found:
        create_debate(db, user_id1, user_id2, topic_id)
        return redirect("http://127.0.0.1:3000/debate/", code=302)
    else:
        return matching_message

@app.route("/api/isloggedin", methods=["GET", "POST"])
def is_logged_in():
    print(session)
    if 'uid' in session.keys():
        return json.dumps({"is_logged_in": True})
    else:
        return json.dumps({"is_logged_in": False})

@app.route("/api/logout", methods=["GET", "POST"])
def logout():
    session.pop('uid', None)
    return json.dumps({"redirect": "/"})

@app.route("/get_topic_questions", methods=["GET", "POST"])
def get_topic_questions():
    topic_name = request.form['topic']
    db_cursor = db.cursor()
    db_cursor.execute (
        ''' SELECT topic_id from topic where topic_name = ? ''', (topic_name)
    )
    topics_info1 = db_cursor.fetchall()
    topic_id = topics_info1[0][0]

    db_cursor.execute(
        '''SELECT q1, q2, q3, q1_options, q2_options, q3_options FROM topic WHERE topic_id = ?''', 
        (topic_id)
    )
    topics_info2 = db.cursor.fetchall()
    q1, q2, q3, q1_options, q2_options, q3_options = topics_info2[0][0]
    return jsonify({
            'q1': q1,
            'q2': q2,
            'q3': q3,
            'q1_options': q1_options,
            'q2_options': q2_options,
            'q3_options': q3_options
    })
from flask import Flask, request, redirect, url_for, session, jsonify
from flask_session import Session
import sqlite3
import json

from db_utils.db_init import create_tables
from insert_utils.db_insert import insert_topic_details, insert_opinion_details
from auth_utils.signin import verify_user
from auth_utils.signup import add_user, get_uid
from debate_utils.debate_utils import match_debaters
from insert_utils.db_insert import create_debate
from topic_utils.topic import get_topic_by_name
from flask_socketio import SocketIO

app = Flask(__name__)

app.secret_key = "incredibly_very_secret_key_rblijreq2wienewr" #TODO change to ENV var
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

create_tables()

@app.route("/api/submit_topic", methods=["GET","POST"])
def submit_topic():
    if request.method == "POST":
        topic_name = request.form['topic_name']
        topic_desc = request.form['topic_desc']
        q1 = request.form['q1']
        a1 = request.form['a1'].replace("\n","[|]")
        q2 = request.form['q2']
        a2 = request.form['a2'].replace("\n","[|]")
        q3 = request.form['q3']
        a3 = request.form['a3'].replace("\n","[|]")

        insert_topic_details(topic_name, topic_desc, q1, a1, q2, a2, q3, a3)

        return json.dumps({'redirect':'/create_topic'})


@app.route("/api/store_opinion", methods = ["GET", "POST"])
def store_opinion():
    # make sure to add names of opinion form fields in jsx same as these or change them if not
    if request.method == "POST":
        user_id = session["uid"] if "uid" in session.keys() else 0
        topic_name = request.form['topic'] # for Search Topics Page, should be dropdown of topics for user to choose, maybe even use searchbar
        opinion1 = request.form['opinion1']
        opinion2 = request.form['opinion2']
        opinion3 = request.form['opinion3']

        insert_opinion_details(user_id, topic_name, opinion1, opinion2, opinion3)
    
    return redirect(url_for('/'))

@app.route("/api/signin", methods=["POST", "GET"])
def sign_in():
    if request.method == "POST":
        try:
            username = request.form['username']
            password = request.form['password']
            if verify_user(username, password) != "no user found":
                session['uid'] = get_uid(username)
            else:
                return "401 - Unauthorized", 401
        except Exception as e:
            return "422 - Unprocessable Entity "+str(e)
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
            add_user(username, first_name, last_name, password, dob)
            session['uid'] = get_uid(username)
        except Exception as e:
            return "422 - Unprocessable Entity: "+str(e)
    return json.dumps({"redirect": "/"})

@app.route("/api/join", methods=["GET", "POST"])
def join_debate():
    user_id = session["uid"] if "uid" in session.keys() else 0
    topic_name = request.form['topic']
    db = sqlite3.connect('db/debate.db')
    db_cursor = db.cursor()
    db_cursor.execute (
        ''' SELECT topic_id from topic where topic_name = ? ''', (topic_name)
    )
    topics_info1 = db_cursor.fetchall()
    topic_id = topics_info1[0][0]
    # return topic_id
    db.close()
    matching_message, topic, user_id1, user_id2, comp_found  = match_debaters(user_id, topic_id)
    if comp_found:
        create_debate(user_id1, user_id2, topic_id)
        return redirect("http://127.0.0.1:3000/debate/", code=302)
    else:
        return matching_message

@app.route("/api/isloggedin", methods=["GET", "POST"])
def is_logged_in():
    if 'uid' in session.keys():
        return json.dumps({"is_logged_in": "true"}), 200
    else:
        return json.dumps({"is_logged_in": "false"}), 200

@app.route("/api/logout", methods=["GET", "POST"])
def logout():
    session.pop('uid', None)
    return json.dumps({"redirect": "/"})

@app.route("/api/get_topic_questions", methods=["POST", "GET"])
def get_topic_questions():
    if request.method == "POST":
        
        topic_name = request.form['topic']
        
        try:
            stuff = get_topic_by_name(topic_name) 
            return stuff
        except Exception as e:
            return {
                "q1": ["What is your opinion on the topic?", ["Yes", "No", "Maybe"]],
                "q2": ["What is your opinion on the topic?", ["Yes", "No", "Maybe"]],
                "q3": ["What is your opinion on the topic?", ["Yes", "No", "Maybe"]]
            }
    
    return "405 - Method Not Allowed", 405
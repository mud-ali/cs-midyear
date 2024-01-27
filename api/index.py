from flask import Flask, request, redirect, url_for, session
from flask_session import Session
import sqlite3
import json

from db_utils.db_init import create_tables
from insert_utils.db_insert import insert_topic_details, insert_opinion_details

app = Flask(__name__)


app.secret_key = "incredibly_very_secret_key_rblijreq2wienewr"
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

@app.route("/signin", methods=["POST"])
def sign_in():
    # todo check stuff
    return redirect(url_for("/"))

@app.route("/api/join", methods=["GET", "POST"])
def join_debate():
    # TODO  match people
    print("hello")
    return redirect("http://127.0.0.1:3000/debate/", code=302)

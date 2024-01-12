from flask import Flask, request
import sqlite3
import json

from utils.executeQueries import create_tables, insert_topic_details

app = Flask(__name__)

db = sqlite3.connect('../db/debate.db')
create_tables(db)

@app.route("/submit_topic", methods=["GET","POST"])
def submit_topic():
    if request.method == "POST":
        topic_name = request.form['topic_name']
    insert_topic_details(db, topic_name)


@app.route("/store_opinion", methods = ["GET", "POST"])
def store_opinion():
    return

@app.route("/match_debater", methods = ["GET", "POST"])
def match_debater():
    return

@app.route("/create_debate",methods = ["GET", "POST"])
def create_debate():
    return


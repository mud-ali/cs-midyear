from flask import Flask
import json

app = Flask(__name__)

@app.route("/quiztaken", methods=["GET","POST"])
def hello_world():
    return "ack"


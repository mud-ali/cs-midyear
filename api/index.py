from flask import Flask
app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, sad!</p>"

app.run('0.0.0.0', 8348)
from flask import Flask, render_template, url_for, request
from flask import send_from_directory

app = Flask(__name__)
app.debug = True



@app.route('/')
def index():
    return render_template('home.html')

if __name__ == "__main__":
    app.run()

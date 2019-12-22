from flask import Flask, render_template, url_for, request
from flask import send_from_directory

app = Flask(__name__)
app.debug = True



@app.route('/')
def index():
    return render_template('home.html')


@app.route('/object_viewer')
def object_viewer():
    return render_template('object_viewer.html')

if __name__ == "__main__":
    app.run()

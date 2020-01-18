from flask import Flask, render_template, url_for, request
from flask import send_from_directory
from py import main


app = Flask(__name__)
app.debug = True



@app.route('/')
def index():
    return render_template('home.html')


@app.route('/object_viewer')
def object_viewer():
    return render_template('object_viewer.html')

@app.route('/download')
def download():
    return send_from_directory('./static/images', filename='bridgers.obj', as_attachment=True)

@app.route('/generate', methods=["GET", "POST"])
def generate():
    coordinates = request.form
    elevations = main.main(coordinates)
    return "Bruce"

if __name__ == "__main__":
    app.run()

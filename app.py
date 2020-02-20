from flask import Flask, render_template, url_for, request
from flask import send_from_directory
from py import main


app = Flask(__name__)
app.debug = True
coordinates = [0,0,0,0]


@app.route('/')
def index():
    return render_template('home.html')


@app.route('/object_viewer')
def object_viewer():
    # if coordinates == [0,0,0,0]:
    #     return render_template('no_coordinates.html')
    # else:
    return render_template('object_viewer.html')

@app.route('/download')
def download():
    return send_from_directory('./static/images', filename='bridgers.obj', as_attachment=True)

@app.route('/set_coordinates', methods=["GET", "POST"])
def set_coordinates():
    global coordinates
    coordinates = request.form
    return "success"

@app.route('/get_coordinates', methods=["GET", "POST"])
def get_coordinates():
    elevations_with_shape = main.main(coordinates)
    return str(elevations_with_shape)


if __name__ == "__main__":
    app.run()

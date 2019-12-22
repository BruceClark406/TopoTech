from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>It"s Bruce coming at you from bozeman mt</h1><p>He is rooteness tooteness<p>'

# if __name__ == "__main__":
#     app.run()

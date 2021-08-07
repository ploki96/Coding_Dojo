from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def helloWorld():
    return "Hello"

@app.route('/play')
def play1():
    return render_template("index.html", phrase = "Welcome", num = 3, color = 'blue')

@app.route('/play/<int:x>')
def play2(x):
    return render_template("index.html", phrase = "Welcome", num = x, color = 'blue')

@app.route('/play/<int:x>/<color>')
def play3(x, color):
    return render_template("index.html", phrase = "Welcome", num = x, color = color)

if __name__=="__main__":
    app.run(debug=True)                   
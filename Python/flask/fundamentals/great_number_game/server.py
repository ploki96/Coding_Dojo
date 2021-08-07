from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():
    if 'attempts' not in session:
        session['attempts'] = 0
    return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guess():
    print(request.form)
    guess = request.form["number_input"]
    session['attempts'] += 1
    if 'random_num' not in session:
        session['random_num'] = random.randint(1,100)
    if 'message' not in session:
        session['message'] = ""
    if int(guess) == session['random_num']:
        session['message'] = "right_answer"
    elif int(guess) > session['random_num']:
        session['message'] = "high_answer"
    elif int(guess) < session['random_num']:
        session['message'] = "low_answer"
    return redirect('/')

@app.route('/newgame')
def new_game():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   



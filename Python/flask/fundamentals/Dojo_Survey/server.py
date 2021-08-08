from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():
    
    return render_template("index.html")

@app.route('/results', methods=['GET'])
def guess():
    if 'user_name' not in session:
        session['user_name'] = request.form['user_name']
    if 'location' not in session:
        session['location'] = request.form['location']
    if 'language' not in session:
        session['language'] = request.form['language']
    if 'comment' not in session:
        session['comment'] = request.form['comment']
    
    return render_template('results.html')

@app.route('/newform')
def new_form():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   
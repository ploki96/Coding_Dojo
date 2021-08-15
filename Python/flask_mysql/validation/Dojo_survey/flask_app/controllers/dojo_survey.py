from flask import render_template, request, redirect, session

from flask_app import app

from flask_app.models.survey import Dojo



@app.route('/')
def index():
    if 'user_name' not in session:
        session['user_name'] = ""
    if 'location' not in session:
        session['location'] = ""
    if 'language' not in session:
        session['language'] = ""
    if 'comment' not in session:
        session['comment'] = ""
    return render_template("index.html")

@app.route('/input', methods=['POST'])
def results():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    data = {
        'name': session['name'],
        'location': session['location'],
        'language': session['language'],
        'comment': session['comment']
    }
    if not Dojo.validate_input(data):
        return redirect ('/')
    Dojo.add(data)
    return redirect ('/results')

@app.route('/results')
def display():
    return render_template('results.html')

@app.route('/newform')
def new_form():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   
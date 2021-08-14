from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():
    if 'user_name' not in session:
        session['user_name'] = ""
    if 'location' not in session:
        session['location'] = ""
    if 'language' not in session:
        session['language'] = ""
    if 'nuggies' not in session:
        session['nuggies'] = ""
    if 'comment' not in session:
        session['comment'] = ""
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def results():
    session['user_name'] = request.form['user_name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    # if request.form['nuggies'] != 'Yes':
    #     request.form['nuggies'] = 'No'
    
    session['nuggies'] = request.form.getlist('nuggies')
    # if request.form['nuggies'] == 'Yes':
    #     session['nuggies'] = request.form['nuggies']
    #     print('ttt')
    # else:
    #     session['nuggies'] = 'No'
    session['comment'] = request.form['comment']
    return render_template('results.html')

@app.route('/newform')
def new_form():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():
    if 'counter' not in session:
        session['counter'] = 0
    if 'visits' not in session:
        session['visits'] = -1
    session['visits'] += 1
    return render_template("index.html")

@app.route('/visits')
def visits():

    print("Page visited" + str(session['visits']) + "times")
    return render_template('visits.html')

@app.route('/increase')
def increment_counter():
    print(request.form)
    session['counter'] += 1
    return redirect('/')

@app.route('/increase2')
def increment_counter_by_2():
    print(request.form)
    session['counter'] += 2
    return redirect('/')

@app.route('/increase_var/', methods=['POST'])
def increment_counter_by_var():
    print(request.form)
    input = request.form["number_input"]
    session['counter'] += input
    return redirect('/')

@app.route('/reset')
def reset_counters():
    session.pop('counter')
    return redirect('/')

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   







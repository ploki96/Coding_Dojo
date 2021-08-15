from flask import render_template, request, redirect, session, flash

from flask_app import app

from flask_app.models.email import Email



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/input', methods=['POST'])
def results():
    data = {
        'email': request.form['email']
    }
    if not Email.validate_email(data):
        return redirect ('/')
    Email.add(data)
    return redirect ('/success')

@app.route('/success')
def display():
    flash('Your email address is valid!')
    emails = Email.get_all()
    return render_template('success.html', emails = emails)

@app.route('/delete/<int:num>')
def delete(num):
    data= {
        "id": num
    }
    Email.delete(data)
    return redirect('/success')

@app.route('/newform')
def new_form():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)   
from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)



@app.route("/")
def index():
    return redirect ('/login')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/login/process', methods=['POST'])
def login_process():
    data = {
        'username': request.form['username']
    }
    user = User.check_username(data)
    if not user:
        print("******************************")
        flash('WRONG USERNAME YOU DUMMY')
        return redirect ('/login')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        print("+++++++++++++++++++++++++++++++++")
        flash('WRONG PASSWORD YOU DUMMY')
        return redirect ('/login')
    if "username" not in session:
        session['username'] = ""
    session['username'] = request.form['username']
    # session['username'] = user.username  ASK RYAN OR TA
    return redirect('/success')

@app.route('/add')
def create():
    return render_template('registration.html')

@app.route('/success')
def successful_login():
    return render_template('mainPage.html')

@app.route('/add/process', methods=['POST'])
def creating_user():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'username': request.form['username'],
        'password': request.form['password']
    }
    if request.form['password'] != request.form['confirmation']:
        flash("Password don't match")
        return redirect('/add')
        # wuv u Justin
    if not User.validate_user(data):
        return redirect('/add')
    data['password'] = bcrypt.generate_password_hash(request.form['password'])
    User.add_user(data)
    return redirect('/login')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')







# @app.route("/users/new")
# def form():
#     return render_template("form.html")


# @app.route("/users/<int:num>")
# def single(num):
#     data = { 
#         "id":num
#     }
    
#     return render_template("singleuser.html",userinfo=User.getuser(data))


# @app.route("/users/<int:num2>/edit")
# def edit(num2):
#     data = {'id': num2}
#     userinfo = User.getuser(data)
#     return render_template("edit.html", userinfo = userinfo)

# @app.route('/editinfo/<int:num3>', methods=['POST'])
# def actually_editting_info_and_not_rendering_page(num3):
#     data = {
#         "id": num3,
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "email" : request.form["email"]
#     }
#     User.edit(data)
#     return redirect ('/users')

# @app.route("/delete/<int:num3>")
# def delete(num3):
#     data = {'id': num3}
#     User.delete(data)
#     return redirect ('/users')

# @app.route('/create_user', methods=["POST"])
# def create_user():
#     data = {
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "email" : request.form["email"]
#     }
#     User.adduser(data)
#     lastmade = User.selectid()
#     id = lastmade[0]['id']
#     s = f'/users/{id}'
#     return redirect(s)
            
# if __name__ == "__main__":
#     app.run(debug=True)
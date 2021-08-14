from flask import render_template, request, redirect
from flask import User
from user import User
app = Flask(__name__)

@app.route("/")
def index():
    return redirect("/users")

@app.route("/users")
def users():
    users = User.get_all()
    print(users)
    return render_template("index.html", users = users)

@app.route("/users/new")
def form():
    return render_template("form.html")


@app.route("/users/<int:num>")
def single(num):
    data = { 
        "id":num
    }
    
    return render_template("singleuser.html",userinfo=User.getuser(data))


@app.route("/users/<int:num2>/edit")
def edit(num2):
    data = {'id': num2}
    userinfo = User.getuser(data)
    return render_template("edit.html", userinfo = userinfo)

@app.route('/editinfo/<int:num3>', methods=['POST'])
def actually_editting_info_and_not_rendering_page(num3):
    data = {
        "id": num3,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.edit(data)
    return redirect ('/users')

@app.route("/delete/<int:num3>")
def delete(num3):
    data = {'id': num3}
    User.delete(data)
    return redirect ('/users')

@app.route('/create_user', methods=["POST"])
def create_user():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.adduser(data)
    lastmade = User.selectid()
    id = lastmade[0]['id']
    s = f'/users/{id}'
    return redirect(s)
            
if __name__ == "__main__":
    app.run(debug=True)
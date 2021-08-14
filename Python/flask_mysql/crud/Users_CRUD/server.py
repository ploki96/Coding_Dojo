from flask import Flask, render_template, request, redirect
from users import User
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

@app.route('/create_user', methods=["POST"])
def create_user():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.save(data)
    return redirect('/')
            
if __name__ == "__main__":
    app.run(debug=True)
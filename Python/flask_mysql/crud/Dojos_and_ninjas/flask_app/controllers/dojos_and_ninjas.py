from flask import render_template, request, redirect

from flask_app import app

from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja



@app.route("/")
def index():
    return redirect("/dojos")

@app.route("/dojos")
def dojos():
    dojos = Dojo.get_all()
    return render_template("both.html", dojos = dojos)

@app.route("/ninjas")
def users():
    dojos = Dojo.get_all()
    return render_template("ninjas.html", dojos = dojos)

@app.route("/dojos/<int:num>")
def single_dojo(num):
    data = {
        "id": num
    }
    dojo = Dojo.single_dojo_w_ninjas(data)
    print(dojo)
    return render_template("dojos.html", dojo = dojo)

@app.route('/ninjas/add', methods=['POST'])
def create_ninja():
    data = {
        "dojo_id": request.form["dojo_id"],
        "first_name" : request.form["first_name"],
        "last_name" : request.form['last_name'],
        "age" : request.form["age"]
    }
    Ninja.add_ninja(data)
    dojo_id = request.form["dojo_id"]
    link = f'/dojos/{dojo_id}'
    return redirect(link)

@app.route('/dojos/add', methods=['POST'])
def create_dojo():
    data = {
        "name": request.form['new_dojo']
    }
    Dojo.add_dojo(data)
    return redirect("/dojos")




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
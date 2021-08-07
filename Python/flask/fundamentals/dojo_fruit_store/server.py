from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    num_strawberries = request.form['strawberry']
    num_raspberries = request.form['raspberry']
    num_apples = request.form['apple']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    student_id = request.form['student_id']
    if student_id == "":
        student_id = 'None'
    count = int(num_strawberries) + int(num_apples) + int(num_raspberries)
    print(f'Charging {first_name} {last_name} for {count} fruits.')
    return render_template("checkout.html", num_apples = num_apples, num_raspberries = num_raspberries, num_strawberries = num_strawberries, first_name = first_name, last_name = last_name, student_id = student_id, count = count)

@app.route('/fruits')         
def fruits():
    images = []
    for filename in os.listdir('static/img'):
        images.append('static/img/'+ filename)
    return render_template("fruits.html", images = images)

if __name__=="__main__":   
    app.run(debug=True)     


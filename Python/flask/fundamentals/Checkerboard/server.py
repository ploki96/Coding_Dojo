from flask import Flask, render_template

app = Flask(__name__)

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def checker_board(x, y, color1, color2):
    the_very_board_itself = []
    for i in range (0, x):
        row = []
        for j in range (0, y):
            if (i + j) % 2 == 0:
                row.append(0)
            else:
                row.append(1)
        the_very_board_itself.append(row)
        row = []
    print(str(the_very_board_itself))
    return render_template("index.html", x = x, y = y , checker_board = the_very_board_itself, color1 = color1, color2 = color2)

@app.route('/<int:x>/<int:y>')
def checker_board3(x, y):
    the_very_board_itself = []
    for i in range (0, x):
        row = []
        for j in range (0, y):
            if (i + j) % 2 == 0:
                row.append(0)
            else:
                row.append(1)
        the_very_board_itself.append(row)
        row = []
    print(str(the_very_board_itself))
    return render_template("index.html", x = x, y = y , checker_board = the_very_board_itself, color1 = "red", color2 = "black")

@app.route('/')
def checker_board2():
    x = 8
    y = 8
    the_very_board_itself = []
    for i in range (0, x):
        row = []
        for j in range (0, y):
            if (i + j) % 2 == 0:
                row.append(0)
            else:
                row.append(1)
        the_very_board_itself.append(row)
        row = []
    print(str(the_very_board_itself))
    return render_template("index.html", x = x, y = y , checker_board = the_very_board_itself, color1 = "red", color2 = "black")

if __name__=="__main__":
    app.run(debug=True)   

    
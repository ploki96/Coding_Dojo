from flask import Flask, render_template

app = Flask(__name__)

@app.route('/<int:x>/<int:y>')
def checker_board(x, y):
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
    return render_template("index.html", x = x, y = y , checker_board = the_very_board_itself)

if __name__=="__main__":
    app.run(debug=True)   

    
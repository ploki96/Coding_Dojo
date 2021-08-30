from flask_app import app
from flask_app.controllers import authors_and_books


if __name__ == "__main__":
    app.run(debug=True)
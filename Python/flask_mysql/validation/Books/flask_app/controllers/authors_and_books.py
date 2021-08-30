from flask import render_template, session, redirect, request, flash
from flask_app import app
from flask_app.models.authors import Author
from flask_app.models.books import Book

@app.route('/')
def index():
    
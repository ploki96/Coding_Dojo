from flask import render_template, session, redirect, request, flash
from flask_app import app
from flask_app.models.replace import REPLACE

@app.route('/')
def index():
    
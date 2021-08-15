from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails"
        results = connectToMySQL('email_validation_schema').query_db(query)
        emails = []
        for email in results:
            emails.append(cls(email))
        return connectToMySQL('email_validation_schema').query_db(query)

    @classmethod
    def add(cls, data):
        query = "INSERT INTO emails (email) VALUES (%(email)s);"
        return connectToMySQL('email_validation_schema').query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s;"
        return connectToMySQL('email_validation_schema').query_db(query, data)
    

    @staticmethod
    def validate_email(input):
        is_valid = True
        query = "SELECT email FROM emails WHERE email = %(email)s"
        results = connectToMySQL('email_validation_schema').query_db(query, input)
        # possibiliity = []
        # for tyler in results:
        #     possibiliity.append(tyler)

        if len(results) >= 1:
            flash('Email address already used.')
            is_valid = False
        if len(input['email']) < 1:
            flash("Email Adress cannot be left blank.")
            is_valid = False
        if len(input['email']) > 255:
            flash("Email Adress is too long.")
            is_valid = False
        if not EMAIL_REGEX.match(input['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid



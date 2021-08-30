from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from .message import Message


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]{8,255}$')
NAME_REGEX = re.compile(r"^[A-Z]{1}[\w. '-]{1,254}$") 


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.messages_for_user = []
    
    @classmethod
    def get_all(cls):
        query =  "SELECT * FROM users;"
        results = connectToMySQL('private_wall_schema').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    
    @classmethod
    def single_user(cls, data):
        query = "SELECT first_name FROM users WHERE users.id = %(id)s;"
        results = connectToMySQL('private_wall_schema').query_db(query, data)
        user = cls(results[0])
        return user

    @classmethod
    def single_user_w_messages(cls, data):
        query = "SELECT * FROM users LEFT JOIN messages ON users.id = messages.user_id WHERE users.id = %(id)s;"
        results = connectToMySQL('private_wall_schema').query_db(query, data)
        user = cls(results[0])
        for row in results:
            message = {
                'id': row['id'],
                'text': row['text'],
                'user_id': row['user_id'],
                'user_id_sent': row['user_id_sent'],
                'created_at': row['messages.created_at'],
                'updated_at': row['messages.updated_at'],
                'deleted': row['deleted']
            }
            user.messages_for_user.append(Message(message))
        return user


    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL('private_wall_schema').query_db(query, data)

    @classmethod
    def check_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('private_wall_schema').query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])
    
    @staticmethod
    def validate_user(input):
        is_valid = True

        query = "SELECT * FROM users WHERE email = %(email)s;"
        results_email = connectToMySQL('private_wall_schema').query_db(query, input)
        if len(results_email) >= 1:
            flash('Email address already used.')
            is_valid = False

        # query = "SELECT * FROM users WHERE username = %(username)s;"
        # results_username = connectToMySQL('login_and_registration_schema').query_db(query, input)
        # if len(results_username) >= 1:
        #     flash('Username is already taken.')
        #     is_valid = False

        if not NAME_REGEX.match(input['first_name']): 
            flash("Invalid first name!")
            is_valid = False

        if not NAME_REGEX.match(input['last_name']): 
            flash("Invalid last name!")
            is_valid = False

        if not EMAIL_REGEX.match(input['email']): 
            flash("Invalid email!")
            is_valid = False

        # if not USERNAME_REGEX.match(input['username']): 
        #     flash("Invalid username!")
        #     is_valid = False
        
        if not PASSWORD_REGEX.match(input['password']): 
            flash("Invalid password, are you a Justin?!")
            is_valid = False
        return is_valid
        



from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.recipe import Recipe
from flask import flash
import re
        


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]{8,255}$')
USERNAME_REGEX = re.compile(r'^[a-zA-Z0-9._-]{2,255}$')
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
        self.recipes = []
    
    @classmethod
    def single_user(cls, data):
        query = "SELECT * FROM users WHERE users.id = %(id)s;"
        user = connectToMySQL('recipes_schema').query_db(query, data)
        print("***************************************")
        print(user)
        return user
        

    @classmethod
    def single_user_w_recipes(cls, data):
        query = "SELECT * FROM users LEFT JOIN recipes ON users.id = recipes.user_id WHERE users.id = %(id)s;"
        results = connectToMySQL('recipes_schema').query_db(query, data)
        user = cls(results[0])
        for row in results:
            recipe = {
                'id': row['recipes.id'],
                'name': row['name'],
                'description': row['description'],
                'instructions': row['instructions'],
                'thirtymin': row['thirtymin'],
                'date': row['date'],
                'created_at': row['recipes.created_at'],
                'updated_at': row['recipes.updated_at'],
                'user_id': row['user_id']
            }
            user.recipes.append(Recipe(recipe))
        print("***************************************")
        print(user)
        return user

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL('recipes_schema').query_db(query, data)

    @classmethod
    def check_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('recipes_schema').query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])
    
    @staticmethod
    def validate_user(input):
        is_valid = True

        query = "SELECT * FROM users WHERE email = %(email)s;"
        results_email = connectToMySQL('recipes_schema').query_db(query, input)
        if len(results_email) >= 1:
            flash('Email address already used.')
            is_valid = False

        if not NAME_REGEX.match(input['first_name']): 
            flash("Invalid first name!")
            is_valid = False

        if not NAME_REGEX.match(input['last_name']): 
            flash("Invalid last name!")
            is_valid = False

        if not EMAIL_REGEX.match(input['email']): 
            flash("Invalid email!")
            is_valid = False
        
        if not PASSWORD_REGEX.match(input['password']): 
            flash("Invalid password, are you a Justin?!")
            is_valid = False
        return is_valid
        

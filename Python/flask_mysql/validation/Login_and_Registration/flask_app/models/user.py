from flask_app.config.mysqlconnection import connectToMySQL
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
    
    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL('login_and_registration_schema').query_db(query, data)

    @classmethod
    def check_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('login_and_registration_schema').query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])
    
    @staticmethod
    def validate_user(input):
        is_valid = True

        query = "SELECT * FROM users WHERE email = %(email)s;"
        results_email = connectToMySQL('login_and_registration_schema').query_db(query, input)
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
        

        


        

        



#     @classmethod
#     def get_all(cls):
#         query =  "SELECT * FROM dojos;"
#         results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
#         dojos = []
#         for dojo in results:
#             dojos.append(cls(dojo))
#         return dojos
    
#     @classmethod
#     def single_dojo_w_ninjas(cls, data):
#         query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
#         results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
#         dojo = cls(results[0])
#         for row in results:
#             ninja = {
#                 'id': row['id'],
#                 'first_name': row['first_name'],
#                 'last_name': row['last_name'],
#                 'age': row['age'],
#                 'dojo_id': row['dojo_id'],
#                 'created_at': row['ninjas.created_at'],
#                 'updated_at': row['ninjas.updated_at']
#             }
#             dojo.ninjas.append(Ninja(ninja))
#         return dojo

#     @classmethod
#     def add_dojo(cls, data):
#         query = "INSERT INTO dojos (name) VALUES (%(name)s);"
#         return connectToMySQL('dojos_and_ninjas_schema').query_db( query, data )



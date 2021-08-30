from flask_app.config.mysqlconnection import connectToMySQL
from .books import Book
from flask import flash

class Author:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorite_books = []
    
    @classmethod
    def get_all(cls):
        query =  "SELECT * FROM authors;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos
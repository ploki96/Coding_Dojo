from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add(cls, data):
        query = "INSERT INTO dojos (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"
        return connectToMySQL('dojo_survey_schema').query_db(query, data)

    @staticmethod
    def validate_input(input):
        is_valid = True # we assume this is true
        if len(input['name']) < 3 or len(input['name']) > 45:
            flash("Name must be between 3 and 45 characters long.")
            is_valid = False
        if input['location'] == '-1':
            flash("Location must be selected.")
            is_valid = False
        if input['language'] == '-1':
            flash("Language must be selected.")
            is_valid = False
        return is_valid



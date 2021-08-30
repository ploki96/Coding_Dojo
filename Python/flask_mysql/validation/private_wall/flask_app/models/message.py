from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re




class Message:
    def __init__(self, data):
        self.id = data['id']
        self.text = data['text']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.user_id_sent = data['user_id_sent']
        self.deleted = data['deleted']

    @classmethod
    def send_message(cls, data):
        query = "INSERT INTO messages (text, user_id, user_id_sent) VALUES(%(text)s, %(user_id)s, %(user_id_sent)s);"
        return connectToMySQL('private_wall_schema').query_db(query, data)   

    # @classmethod
    # def get_all_messages(cls):
    #     query = "SELECT * FROM users LEFT JOIN"
    @classmethod
    def delete_message(cls, data):
        query = "UPDATE messages SET deleted = 'Y' WHERE id = %(id)s"

    @classmethod
    def count_messages(cls, data):
        query = "SELECT COUNT(messages.user.id) FROM messages LEFT JOIN users ON users.id = messages.user_id WHERE users.id = %(id)s"
        result = connectToMySQL('private_wall_schema').query_db(query, data) 
        return result

        user.message_for_user.user_id_sent
        
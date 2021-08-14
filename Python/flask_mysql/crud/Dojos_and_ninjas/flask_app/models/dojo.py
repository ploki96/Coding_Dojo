from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninja

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []
    
    @classmethod
    def get_all(cls):
        query =  "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos
    
    @classmethod
    def single_dojo_w_ninjas(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        dojo = cls(results[0])
        for row in results:
            ninja = {
                'id': row['id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'age': row['age'],
                'dojo_id': row['dojo_id'],
                'created_at': row['ninjas.created_at'],
                'updated_at': row['ninjas.updated_at']
            }
            dojo.ninjas.append(Ninja(ninja))
        return dojo

    @classmethod
    def add_dojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        return connectToMySQL('dojos_and_ninjas_schema').query_db( query, data )



# from flask_app.config.mysqlconnection import connectToMySQL


        # query = "SELECT * FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id ORDER BY dojo.id DESC;"
        # results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        # dojos = []
        
        # for data in results:
        #     if len(dojos) == 0:
        #         new_dojo = Dojo(data)
        #         dojos.append(new_dojo)
        #     elif data['id'] != dojos[-1].id:
        #         new_dojo = Dojo(data)
        #         dojos.append(new_dojo)
        #       if data['ninja.id'] != None:
        #         new_ninja = {
        #             'id': data['id'],
        #             'first_name': data['first_name'],
        #             'last_name': data['last_name'],
        #             'age': data['age'],
        #             'dojo_id': data['dojo_id'],
        #             'created_at': data['created_at'],
        #             'updated_at': data['updated_at']
        #         }
        #         new_dojo.ninjas.append(ninja.Ninja(new_ninja))
        # return dojos

    
    
    
    
    
    
    # @classmethod
    # def adduser(cls, data ):
    #     query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(email)s , NOW() , NOW() );"
    #     # data is a dictionary that will be passed into the save method from server.py
    #     return connectToMySQL('users_schema').query_db( query, data )

    # # @classmethod
    # # def getuser(cls, data):
    # #     query = "SELECT * FROM users WHERE id = %(id)s"
    # #     return connectToMySQL('users_schema').query_db(query, data) 
    
    # @classmethod
    # def getuser(cls, data):
    #     query  = "SELECT * FROM users WHERE id = %(id)s;"
    #     result = connectToMySQL('users_schema').query_db(query,data)
    #     return cls(result[0])

    #     # return connectToMySQL('users_schema').query_db(query, data)
    
    # @classmethod 
    # def selectid(cls):
    #     query = "SELECT * FROM users WHERE id = (SELECT MAX(id) FROM users);"
    #     id = connectToMySQL('users_schema').query_db(query)
    #     return id
            
    # @classmethod
    # def edit(cls, data):
    #     query = "UPDATE users SET first_name =  %(fname)s, last_name = %(lname)s , email = %(email)s WHERE id= %(id)s;"
    #     return connectToMySQL('users_schema').query_db( query, data )

    # @classmethod
    # def delete(cls, data):
    #     query = "DELETE FROM users WHERE id = %(id)s"
    #     return connectToMySQL('users_schema').query_db( query, data )



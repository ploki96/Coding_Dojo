from flask_app.config.mysqlconnection import connectToMySQL


class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        ninjas = []
        for ninja in ninjas:
            ninjas.append( cls(ninja) )
        return ninjas

    

    @classmethod
    def add_ninja(cls, data):
        print('*********************')
        query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES(%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
    






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


# from flask_app.config.mysqlconnection import connectToMySQL
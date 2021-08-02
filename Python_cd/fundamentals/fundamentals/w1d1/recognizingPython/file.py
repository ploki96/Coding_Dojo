num1 = 42 # variable declaration
num2 = 2.3 # variable declaration
boolean = True # boolean
string = 'Hello World' # string declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # strings in a list declaration
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # dictionaries
fruit = ('blueberry', 'strawberry', 'banana') # tuple declaration
print(type(fruit)) # output of tuple
print(pizza_toppings[1]) # output of string,  output:Sausage
pizza_toppings.append('Mushrooms') # adding an element to pizza_toppings
print(person['name']) # outputting an element of dictionary, output: John
person['name'] = 'George' # changes dictionary value of name to George
person['eye_color'] = 'blue' # adds a dictionary value for eye_color
print(fruit[2]) # prints an element from fruit output: banana

if num1 > 45: # conditional statement, if else
    print("It's greater") 
else:
    print("It's lower") # output: It's lower

if len(string) < 5: # conditional statement: if else if else
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!") # output: Just right!

for x in range(5): #for loop
    print(x) # output: 0, 1, 2, 3, 4
for x in range(2,5): #for loop
    print(x) # output: 2, 3, 4
for x in range(2,10,3): #for loop
    print(x) # output: 2, 5, 8
x = 0 # variable declaration
while(x < 5): # while loop
    print(x)
    x += 1 # output: 0, 1, 2, 3, 4

pizza_toppings.pop() #pop function, no value given so pops final element out, pops out Olives
pizza_toppings.pop(1) # pop function, pops out Sausage

print(person) #output: {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
person.pop('eye_color') # pops out eye color elemnt from dictionary
print(person) #output: {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings: # for loop with nested if statements
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break # output: 

def print_hello_ten_times(): # function declaration
    for num in range(10): 
        print('Hello') 

print_hello_ten_times() # output: HelloHelloHelloHelloHelloHelloHelloHelloHelloHello

def print_hello_x_times(x):  # function declaration
    for num in range(x):
        print('Hello')

print_hello_x_times(4) # output: HelloHelloHelloHello

def print_hello_x_or_ten_times(x = 10): # function declaration
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)
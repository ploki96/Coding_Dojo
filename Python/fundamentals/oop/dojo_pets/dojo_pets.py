class Ninja:
    def __init__ (self, first_name, last_name, name, type, tricks, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = Pet(name, type, tricks)
        self.treats = treats
        self.pet_food = pet_food

    def walk(self):
        print('walk much wow')
        self.pet.play()
    def feed(self):
        print('feed too much wow')
        self.pet.eat()
    def bathe(self):
        print('cleaning the pet')
        self.pet.noise()
        

class Pet:
    def __init__ (self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 40
        self.energy = 20

    def sleep(self):
        print('zzzzzzz')
        self.energy += 25
        return self
    def eat(self):
        print('yummy yummy in my tummy')
        self.energy += 5
        self.health += 10
        return self
    def play(self):
        print('wow much play')
        self.health += 5
        return self
    def noise(self):
        if self.type == 'dog':
            print('woof')
            return self
        elif self.type == 'cat':
            print('meow')
            return self

ninja1 = Ninja('Justin', 'Shin', 'Tyler', 'dog', 'beg', 'bone', 'great value')

ninja1.bathe()
ninja1.walk()
ninja1.feed()
ninja1.pet.sleep()



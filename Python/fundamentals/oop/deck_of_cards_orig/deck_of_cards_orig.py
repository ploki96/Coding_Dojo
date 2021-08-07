from random import randint

class Deck():
    def __init__(self):
        self.suits = ['diamonds', 'clubs', 'hearts', 'spades']
        self.rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        self.contents = []
        for suits in self.suits:
            for rank in self.rank:
                self.contents.append(Card(suits, rank))
        print(self.contents)
        # self.shuffle()

    # def shuffle(self):
    #     for i in range(0, len(self.contents)):
    #         x = randint(0, len(self.contents) - 1)
    #         self.contents[i], self.contents[x] = self.contents[x], self.contents[i] 


class Card():
    def __init__ (self, suits, rank):
        self.suits = suits
        self.rank = rank
        if self.rank == 11:
            self.face_value = 'Jack'
        elif self.rank == 12:
            self.face_value = 'Queen'
        elif self.rank == 13:
            self.face_value = 'King'
        elif self.rank == 1:
            self.face_value = 'Ace'
        else:
            self.face_value = self.rank

    def __repr__(self):
        return f"{self.suits[0]}{self.face_value}"
    

class BlackJack():
    def __init__(self):
        self.play_deck = Deck()
        self.shuffle(self.play_deck.contents)
        self.dealer = []
        self.player = []

    def shuffle(self, contents):
        for i in range(0, len(contents)):
            x = randint(0, len(contents) - 1)
            contents[i], contents[x] = contents[x], contents[i] 
    print(self.play_deck.contents)
    
    
    # def deal_card()



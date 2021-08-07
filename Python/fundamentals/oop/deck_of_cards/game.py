from classes.deck import Deck

# bicycle = Deck()

# bicycle.shuffle()

# bicycle.show_cards()


class BlackJack():
    def __init__(self):
        play_game()

def play_game():
    play_input = input('Would you like to start a game of blackjack?: (Y/N)\n')
    # print(play_input)
    if play_input.upper() == "Y":
        print('Yay')
    elif play_input.upper() == "N":
        print('Whelp sorry I bothered you')
    else:
        return None

    
play_game()



# class BlackJack():
#     def __init__(self):
#         self.bicycle = Deck()
#         self.shuffle(self.bicycle.contents)
#         self.dealer = []
#         self.player = []
#         self.player.append(self.bicycle.deal_card())
#         self.dealer.append(self.bicycle.deal_card())
#         self.player.append(self.bicycle.deal_card())
#         self.dealer.append(self.bicycle.deal_card())
#         print(self.player)
#         print(self.dealer)


#     def shuffle(self, contents):
#         for i in range(0, len(contents)):
#             x = randint(0, len(contents) - 1)
#             contents[i], contents[x] = contents[x], contents[i] 
    
    
#     def deal_card(self):
#         return self.contents.pop()


# dealer = []
# player = []
class User:
    def __init__(self, name, email_address, account_balance):
        self.name = name
        self.email = email_address
        self.account_balance = account_balance
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, other_self, amount):
        self.account_balance -= amount
        other_self.account_balance += amount
        return self

Timothy = User('Timothy', 'Timothy@codingdojo.com', 7500)
Justin = User('Justin', 'Justin@codingdojo.com', 10000)
Tyler = User('Tyler', 'Tyler@codingdojo.com', 6800)

# User 1 Making 1 withdrawals and 3 deposits (withdraw $1200, deposit 5000 total)
Timothy.display_user_balance().make_withdrawal(1200).make_deposit(700).make_deposit(1300).make_deposit(3000).display_user_balance()

# User 2 Making 2 withdrawals and 2 deposits (withdraw $2000, deposit 2400 total)
Justin.display_user_balance().make_withdrawal(1200).make_withdrawal(800).make_deposit(1100).make_deposit(1300).display_user_balance()

# User 3 Making 3 withdrawals and 1 deposits (withdraw $4000, deposit 1500 total)
Tyler.display_user_balance().make_withdrawal(1200).make_withdrawal(800).make_withdrawal(2000).make_deposit(1500).display_user_balance()

#transferring money from user 1 to user 2
Timothy.display_user_balance()
Justin.display_user_balance()
Timothy.transfer_money(Justin, 3000)
Timothy.display_user_balance()
Justin.display_user_balance()
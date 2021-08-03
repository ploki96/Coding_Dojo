class BankAccount:
    # don't forget to add some default values for these parameters!
    all_accounts = []
    def __init__(self, int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"Int Rate: {self.int_rate}%  Balance: ${self.balance}")
        return self
    def yield_interest(self):
        if self.balance > 0:
            self.balance *= (1 + self.int_rate/100)
        return self
    @classmethod
    def p_account(cls):
        print(cls.all_accounts)

primary = BankAccount(4, 7500)
secondary = BankAccount(7, 3200)

# First Account Making 1 withdrawals, 3 deposits, interest yield and output (withdraw $1200, deposit 5000 total)
primary.display_account_info().withdraw(1200).deposit(700).deposit(1300).deposit(3000).yield_interest().display_account_info()

# Second Account Making 4 withdrawals, 2 deposits, interest yield and output (withdraw $3100, deposit 2000 total)
secondary.display_account_info().withdraw(1200).withdraw(300).withdraw(1000).withdraw(600).deposit(700).deposit(1300).yield_interest().display_account_info()

#NINJA BONUS: use a classmethod to print all instances of a Bank Account's info
BankAccount.p_account()
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
    def __repr__(self):
        print(f"Int Rate: {self.int_rate}%  Balance: ${self.balance}")
        return f"Int Rate: {self.int_rate}%  Balance: ${self.balance}"
        

class User:
    def __init__(self, name, email_address, int_rate=0.02, balance=0):
        self.name = name
        self.email = email_address
        self.account_balance = BankAccount(int_rate, balance)
    
    def make_withdrawal(self, amount):
        self.account_balance.withdraw(amount)
        return self

    def make_deposit(self, amount):
        self.account_balance.deposit(amount)
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance.balance}")
        return self

    def transfer_money(self, other_self, amount):
        self.account_balance.balance -= amount
        other_self.account_balance.balance += amount
        return self

    def __repr__(self):
        print(f"Username: {self.name}  Email: {self.email},  Bank Account: {self.account_balance}" )
        return f"Username: {self.name}  Email: {self.email}"

Timothy = User('Timothy', 'Timothy@codingdojo.com', 2, 6000)
Justin = User('Justin', 'Justin@codingdojo.com', 4, 5000)
Tyler = User('Tyler', 'Tyler@codingdojo.com', 3, 2500)

# Timothy.display_user_balance()
# Justin.display_user_balance()
# Timothy.transfer_money(Justin, 3000)
# Timothy.display_user_balance()
# Justin.display_user_balance()

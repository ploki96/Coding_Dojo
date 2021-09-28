public class BankAccount {
    private String accountNumber;
    private double checkingBalance;
    private double savingsBalance;
    public static int numberOfAccounts = 0;
    public static int totalAmountStored = 0;

    public Item (double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        numberOfAccounts++;
        totalAmountStored += checkingBalance;
        totalAmountStored += savingsBalance;
    }

    public Double getCheckingBalance () {
        return this.checkingBalance;
    }

    public Double getSavingsBalance(){
        return this.savingsBalance;
    }

    public void depositChecking (double deposit) {
        this.checkingBalance += deposit;
        totalAmountStored += deposit;
    }

    public void depositSavings (double deposit) {
        this.savingsBalance += deposit;
        totalAmountStored += deposit;
    }
}

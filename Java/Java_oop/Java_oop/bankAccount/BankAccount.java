import java.util.Random;

public class BankAccount {
    private String accountNumber;
    private double checkingBalance;
    private double savingsBalance;
    public static int numberOfAccounts = 0;
    public static int totalAmountStored = 0;

    public BankAccount (double checkingBalance, double savingsBalance) {
        this.accountNumber = this.MakeAcctNumber();
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        numberOfAccounts++;
        totalAmountStored += checkingBalance;
        totalAmountStored += savingsBalance;
    }

    private String MakeAcctNumber() {
        Random random = new Random();
        String acctNumber = "";
        for (int i = 0; i < 10; i++) {
            acctNumber += random.nextInt(10);
        }
        return acctNumber;
    }

    public Double getCheckingBalance() {
        return this.checkingBalance;
    }

    public Double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void depositChecking(double deposit) {
        this.checkingBalance += deposit;
        totalAmountStored += deposit;
    }

    public void depositSavings(double deposit) {
        this.savingsBalance += deposit;
        totalAmountStored += deposit;
    }

    public void withdrawChecking(double withdrawal) {
        this.checkingBalance -= withdrawal;
        totalAmountStored -= withdrawal;
    }

    public void withdrawSavings(double withdrawal) {
        this.savingsBalance -= withdrawal;
        totalAmountStored -= withdrawal;
    }

    public void seeBothBalances() {
        System.out.printf("Checkings Account Balance: %.2f \nSavings Account Balance: %.2f \n Total Balance: %.2f \n",
                this.getCheckingBalance(), this.getSavingsBalance(),
                (this.getCheckingBalance() + this.getSavingsBalance()));
    }

    public String showAcctNumber() {
        System.out.println("in show acct number");
        return this.accountNumber;
    }
}

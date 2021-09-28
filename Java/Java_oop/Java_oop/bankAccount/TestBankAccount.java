public class TestBankAccount {
    public static void main(String[] args) {
        BankAccount bankAccount1 = new BankAccount(300, 600);
        bankAccount1.depositChecking(25000);
        bankAccount1.depositSavings(30000);
        bankAccount1.withdrawChecking(15000);
        bankAccount1.withdrawSavings(22000);
        bankAccount1.seeBothBalances();
        System.out.println(bankAccount1.showAcctNumber());
    }
}

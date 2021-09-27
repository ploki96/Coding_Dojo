import java.util.ArrayList;
public class CafeUtil {
    
    public String getStreakGoal(int numweeks){
        int sum = 0;
        for (int i = 0; i <= numweeks; i++){
            sum += i;
        }
        return ("Purchases needed by week " + numweeks + ": " + sum);
    }

    public void printPriceChart(String drink, double price, int max){
        double sum = 0;
        System.out.println(drink);
        for (int i =1; i<=max; i++){
            sum += price;
            if (max > 1 && i == 1){
                price -= 0.50;
            }
            String output = String.format("%o - $%.2f",i, sum);
            System.out.println(output);
        }
    }

    public double getOrderTotal(double[] lineItems) {
        double sum = 0;
        for (int i =0; i<lineItems.length;i++){  //.size()
            sum += lineItems[i];
        }
        return sum;
    }
    
    public void displayMenu(ArrayList<String> menu, ArrayList<Double> prices){
        for (int i =0; i< menu.size(); i++){
            System.out.printf("%o %s -- $%.2f \n", i, menu.get(i), prices.get(i));
        }
    }

    public ArrayList<String> addCustomer(ArrayList<String> customers, String userName){
        customers.add(userName);
        return customers;
    }
}

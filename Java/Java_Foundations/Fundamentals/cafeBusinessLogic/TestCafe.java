import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class TestCafe {
    
	public static void main(String[] args) {
	    // TO-DO:
	    // Create an instance of the CafeUtil class        
	    // in order to use the CafeUtil class' methods.
    
	    // Hint: it will need to correspond with the variable name
	    // used in your test code.
    
	    // Given Test Cases Here

        CafeUtil cafeBusinessLogic = new CafeUtil();
        // getStreakGoal
        System.out.println("----- Streak Goal Test -----");
        String streakGoalOutput = cafeBusinessLogic.getStreakGoal(10);
        System.out.println(streakGoalOutput);

        // printPriceChart
        System.out.println("----- Price Chart Test-----");
        cafeBusinessLogic.printPriceChart("Chai Latte Mix", 4.5, 3);
        cafeBusinessLogic.printPriceChart("Specialty Coaster", 2.0, 5);

        // getOrderTotal
        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n",cafeBusinessLogic.getOrderTotal(lineItems));

        // displayMenu
        System.out.println("----- Display Menu Test-----");
        List<String> loadMenu = Arrays.asList( "drip coffee", "cappucino", "latte", "mocha" );
        List<Double> loadPrices = Arrays.asList(1.5, 3.5, 4.5, 3.5);
        ArrayList<String> menu = new ArrayList<String>();
        ArrayList<Double> prices = new ArrayList<Double>();
        menu.addAll(loadMenu);
        prices.addAll(loadPrices);
        cafeBusinessLogic.displayMenu(menu, prices);

        // addCustomer
        // System.out.println("Enter a name: ");
        // String userName = System.console().readLine();

        // System.out.println("----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();  
        // cafeBusinessLogic.addCustomer(customers, userName);

        // for(int i=0;i<customers.size();i++){
        //     System.out.println(customers.get(i));
        // }

        // addCustomers
        String newUserName = "";
        while (!newUserName.equals("q")){
            System.out.println("Enter a name: \n Type q to exit");
            newUserName = System.console().readLine(); 
            if (!newUserName.equals("q")){
                cafeBusinessLogic.addCustomer(customers, newUserName);
            }
        }

        System.out.println("----- Add Customer Test-----");
        for(int i=0;i<customers.size();i++){
            System.out.println(customers.get(i));
        }
    
	}
}
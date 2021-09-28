import java.util.ArrayList; 

public class TestOrders {
    public static void main(String[] args) {
        Items item1 = new Items();
        item1.name = "mocha";
        item1.price = 1.0;

        Items item2 = new Items();
        item2.name = "latte";
        item2.price = 2.0;

        Items item3 = new Items();
        item3.name = "drip coffee";
        item3.price = 3.0;

        Items item4 = new Items();
        item4.name = "cappuccino";
        item4.price = 4.0;

        System.out.println(item1);
        System.out.println(item1.price);


        Orders order1 = new Orders();
        order1.name = "Cindhuri";
        order1.ready = false;

        Orders order2 = new Orders();
        order2.name = "Jimmy";
        order2.ready = false;

        Orders order3 = new Orders();
        order3.name = "Noah";
        order3.ready = false;

        Orders order4 = new Orders();
        order4.name = "Sam";
        order4.ready = false;

        System.out.println(order1);

        order2.items.add(item1);
        order2.total += item1.price;

        order3.items.add(item4);
        order3.total += item4.price;

        order4.items.add(item2);
        order4.total += item2.price;

        order1.ready = true;

        order4.items.add(item2);
        order4.items.add(item2);
        order4.total += (item2.price * 2);

        System.out.printf("Order1 name: %s, total: %.2f, ready: %b \n", order1.name, order1.total, order1.ready);
        System.out.printf("Order2 name: %s, total: %.2f, ready: %b \n", order2.name, order2.total, order2.ready);
        System.out.printf("Order3 name: %s, total: %.2f, ready: %b \n", order3.name, order3.total, order3.ready);
        System.out.printf("Order4 name: %s, total: %.2f, ready: %b", order4.name, order4.total, order4.ready);
    }
}
public class TestBarista {
    public static void main(String[] args){
        Item item1 = new Item("item1", 1.00);
        Item item2 = new Item("item2", 2.00);
        Item item3 = new Item("item3", 3.00);
        Item item4 = new Item("item4", 4.00);
        
        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Shawn");
        Order order4 = new Order("Jordan");
        Order order5 = new Order("Tyler");
        
        order1.addItem(item1);
        order1.addItem(item2);
        order2.addItem(item3);
        order2.addItem(item4);
        order3.addItem(item1);
        order3.addItem(item3);
        order4.addItem(item2);
        order4.addItem(item4);
        order5.addItem(item2);
        order5.addItem(item3);

        System.out.println(order1.getStatusMessage());
        System.out.println(order1.getOrderTotal());
        order3.display();

    }
}

import java.util.ArrayList; 

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();

    public Order (){
        this.name = "guest";
        this.ready = false;
    }

    public Order (String name) {
        this.name = name;
        this.ready = false;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setReady(Boolean ready){
        this.ready = ready;
    }

    public Boolean getReady() {
        return this.ready;
    }

    public void setItem(ArrayList<Item> items){
        this.items = items;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void addItem(Item Item){
        this.items.add(Item);
    }

    public String getStatusMessage() {
        if (this.ready == true){
            return "Your order is ready.";
        } else {
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public double getOrderTotal(){
        double total = 0;
        for(Item i: this.items){
            total += i.getPrice();
        }
        return total;
    }

    public void display(){
        System.out.printf("Customer Name: %s ", this.getName());
        for (Item i : this.items){
            System.out.printf("%s - $%.2f ", i.getName(), i.getPrice());
        }
    }

}

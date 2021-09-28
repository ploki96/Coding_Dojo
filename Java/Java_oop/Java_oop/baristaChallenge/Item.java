public class Item {
    private String name;
    private double price;
    public Item (String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void setName(String phrase) {
        this.name = phrase;
    }

    public String getName () {
        return this.name;
    }

    public void setPrice(double num) {
        this.price = num;
    }

    public Double getPrice() {
        return this.price;
    }
}

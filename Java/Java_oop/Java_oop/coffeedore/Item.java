public class Item {
    private String name;
    private Double price;
    private Integer index;

    public Item(String name, Double Price){
        this.name = name;
        this.price = price;
    }

    public String getName () {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice () {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getIndex () {
        return this.index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }
}
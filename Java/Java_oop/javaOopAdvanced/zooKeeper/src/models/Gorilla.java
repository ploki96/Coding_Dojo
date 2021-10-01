package models;

public class Gorilla extends Mammal {

	public Gorilla(int energyLevel) {
		super(energyLevel);
		// TODO Auto-generated constructor stub
	}
	
	public Gorilla () {
		super();
	}
	
	public void throwSomething() {
		System.out.println("Get hit by my banana");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy - 5);
	}
	
	public void eatBananas() {
		System.out.println("OOH OOH AHH AAH BANANA TASTY ME TYLER");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy + 10);
	}
	
	public void climb() {
		System.out.println("ME TYLER ME SIT IN TREE");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy - 10);
	}
}

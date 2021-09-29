package models;

public class Bat extends Mammal{

	public Bat() {
		super();
		super.setEnergyLevel(300);
		// TODO Auto-generated constructor stub
	}
	
	
	
	public void fly() {
		System.out.println("Look at me. I'm a bat. I am flying");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy - 50); 
	}
	
	public void eathumans() {
		System.out.println("Look at me. I'm a bat. I eat humans");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy + 25); 
		
	}
	
	public void attackTown() {
		System.out.println("Look at me. I'm not a bat. I'm a a dirty warmongerer like Jordan.");
		int currentEnergy = this.getEnergyLevel();
		this.setEnergyLevel(currentEnergy - 100); 
	}


	
}

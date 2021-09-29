package models;

public class BatTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bat bat1 = new Bat();
		
		bat1.attackTown();
		System.out.println(bat1.getEnergyLevel());
		bat1.attackTown();
		System.out.println(bat1.getEnergyLevel());
		bat1.attackTown();
		System.out.println(bat1.getEnergyLevel());
		
		bat1.eathumans();
		System.out.println(bat1.getEnergyLevel());
		bat1.eathumans();
		System.out.println(bat1.getEnergyLevel());
		
		bat1.fly();
		System.out.println(bat1.getEnergyLevel());
		bat1.fly();
		System.out.println(bat1.getEnergyLevel());
	}

}

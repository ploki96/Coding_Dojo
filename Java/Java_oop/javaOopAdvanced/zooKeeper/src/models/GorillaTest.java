package models;

public class GorillaTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gorilla gorilla1 = new Gorilla(10);
		gorilla1.throwSomething();
		System.out.println(gorilla1.getEnergyLevel());
		gorilla1.throwSomething();
		System.out.println(gorilla1.getEnergyLevel());
		gorilla1.throwSomething();
		System.out.println(gorilla1.getEnergyLevel());
		
		gorilla1.eatBananas();
		System.out.println(gorilla1.getEnergyLevel());
		gorilla1.eatBananas();
		System.out.println(gorilla1.getEnergyLevel());
		
		gorilla1.climb();
		System.out.println(gorilla1.getEnergyLevel());
	}

}

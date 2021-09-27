import java.util.Random;
import java.util.ArrayList;
public class PuzzleJava {
    Random randmachine = new Random();

    public ArrayList<Integer> getTenRolls (){
        ArrayList<Integer> returned = new ArrayList<Integer>();
        for (int i =0; i<10;i++){
            returned.add(randmachine.nextInt(20) + 1);
        }
        return returned;
    }

    public String getRandomLetter (){
        String[] alphabet = {"a", "b", "c", "d", "e", "f", "g", 
                            "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                            "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        String output = alphabet[randmachine.nextInt(26)];
        return output;
    }

    public String generatePassword (){
        String password = "";
        for (int i=0; i<8;i++){
            password = password + getRandomLetter();
        }
        return password;
    }

    public ArrayList<String> getNewPasswordSet (int num) {
        ArrayList<String> passwordArray = new ArrayList<String>();
        for (int i =0; i<num; i++){
            passwordArray.add(generatePassword());
        }
        return passwordArray;
    }
}

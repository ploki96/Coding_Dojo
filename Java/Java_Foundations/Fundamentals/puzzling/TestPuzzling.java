public class TestPuzzling {
    public static void main(String[] args) {
        PuzzleJava puzzleJava = new PuzzleJava();

        System.out.println("Get 10 Rolls");
        System.out.println(puzzleJava.getTenRolls());
        System.out.println("\n Get Random Letter");
        System.out.println(puzzleJava.getRandomLetter());
        System.out.println("\n Generate Password");
        System.out.println(puzzleJava.generatePassword());
        System.out.println("\n Get New Password Set");
        System.out.println(puzzleJava.getNewPasswordSet(10));

    }
}

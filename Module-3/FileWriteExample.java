import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriteExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            FileWriter fw = new FileWriter("output.txt");
            System.out.print("Enter text to write to file: ");
            String input = sc.nextLine();
            fw.write(input);
            fw.close();
            System.out.println("Data written to file.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

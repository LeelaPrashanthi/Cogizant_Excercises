import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Nandini", "Zoya", "Amit", "John");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        names.forEach(System.out::println);
    }
}

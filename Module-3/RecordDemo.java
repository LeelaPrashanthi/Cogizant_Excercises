import java.util.*;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Nandini", 21),
            new Person("Raj", 18),
            new Person("Sara", 25)
        );

        people.stream()
            .filter(p -> p.age() > 20)
            .forEach(System.out::println);
    }
}

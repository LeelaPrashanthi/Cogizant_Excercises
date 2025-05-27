public class MethodOverloading {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Sum of 5 and 3: " + add(5, 3));
        System.out.println("Sum of 4.5 and 3.2: " + add(4.5, 3.2));
        System.out.println("Sum of 1, 2, and 3: " + add(1, 2, 3));
    }
}

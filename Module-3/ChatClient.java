import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("localhost", 1234);
        BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
        PrintWriter out = new PrintWriter(s.getOutputStream(), true);
        BufferedReader kb = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while ((line = kb.readLine()) != null) {
            out.println(line);
            System.out.println("Server: " + in.readLine());
        }
    }
}

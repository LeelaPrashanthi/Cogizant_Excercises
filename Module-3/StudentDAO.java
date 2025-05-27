import java.sql.*;

public class StudentDAO {
    public static void insertStudent(int id, String name) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = con.prepareStatement("INSERT INTO students VALUES (?, ?)");
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.executeUpdate();
        con.close();
    }

    public static void updateStudent(int id, String newName) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = con.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        ps.setString(1, newName);
        ps.setInt(2, id);
        ps.executeUpdate();
        con.close();
    }
}

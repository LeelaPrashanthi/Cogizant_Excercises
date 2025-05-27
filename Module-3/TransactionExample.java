import java.sql.*;

public class TransactionExample {
    public static void transfer(int fromId, int toId, int amount) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:sqlite:bank.db");
        con.setAutoCommit(false);
        try {
            PreparedStatement ps1 = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            ps1.setInt(1, amount);
            ps1.setInt(2, fromId);
            ps1.executeUpdate();

            PreparedStatement ps2 = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            ps2.setInt(1, amount);
            ps2.setInt(2, toId);
            ps2.executeUpdate();

            con.commit();
        } catch (Exception e) {
            con.rollback();
            throw e;
        }
        con.close();
    }
}

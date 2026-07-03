using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString =
            "Server=localhost;Database=CompanyDB;Trusted_Connection=True;";

        SqlConnection con =
            new SqlConnection(connectionString);

        con.Open();

        string query =
            "INSERT INTO Employees VALUES(101, 'Pramod', 60000)";

        SqlCommand cmd =
            new SqlCommand(query, con);

        cmd.ExecuteNonQuery();

        Console.WriteLine("Record Inserted");

        con.Close();
    }
}

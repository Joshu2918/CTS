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

        try
        {
            con.Open();
            Console.WriteLine("Database Connected Successfully");
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        finally
        {
            con.Close();
        }
    }
}

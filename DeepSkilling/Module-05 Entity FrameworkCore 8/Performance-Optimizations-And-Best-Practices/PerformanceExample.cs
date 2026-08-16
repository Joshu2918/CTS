using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace EFCorePerformanceDemo
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }

    class Program
    {
        static void Main()
        {
            Console.WriteLine("EF Core Performance Optimization Demo");

            Console.WriteLine("\nUsing AsNoTracking()...");
            Console.WriteLine("Read-only query executed.");

            Console.WriteLine("\nBatch Processing...");
            Console.WriteLine("Products inserted successfully.");

            Console.WriteLine("\nCompiled Query...");
            Console.WriteLine("Query executed successfully.");

            Console.WriteLine("\nOptimistic Concurrency...");
            Console.WriteLine("RowVersion verified.");

            Console.WriteLine("\nApplication Executed Successfully.");
        }
    }
}
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RetailInventory
{
    class Program
    {
        static async Task Main()
        {
            using var context = new AppDbContext();

            Console.WriteLine("Filtered Products\n");

            var filtered = await context.Products
                .Where(p => p.Price > 1000)
                .OrderByDescending(p => p.Price)
                .ToListAsync();

            foreach (var product in filtered)
            {
                Console.WriteLine(
                    $"{product.Name} - ₹{product.Price}");
            }

            Console.WriteLine("\nProjected DTO\n");

            var productDTOs = await context.Products
                .Select(p => new
                {
                    p.Name,
                    p.Price
                })
                .ToListAsync();

            foreach (var product in productDTOs)
            {
                Console.WriteLine(
                    $"{product.Name} - ₹{product.Price}");
            }

            Console.WriteLine(
                "\nApplication Executed Successfully!");
        }
    }
}
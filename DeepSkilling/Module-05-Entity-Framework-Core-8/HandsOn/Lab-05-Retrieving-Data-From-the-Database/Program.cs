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

            Console.WriteLine("All Products\n");

            var products =
                await context.Products.ToListAsync();

            foreach (var p in products)
            {
                Console.WriteLine(
                    $"{p.Name} - ₹{p.Price}");
            }

            Console.WriteLine();

            var product =
                await context.Products.FindAsync(1);

            Console.WriteLine(
                $"Found : {product?.Name}");

            Console.WriteLine();

            var expensive =
                await context.Products
                .FirstOrDefaultAsync(
                    p => p.Price > 50000);

            Console.WriteLine(
                $"Expensive Product : {expensive?.Name}");
        }
    }
}
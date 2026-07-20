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

            // Update Product
            var product = await context.Products
                .FirstOrDefaultAsync(p => p.Name == "Laptop");

            if (product != null)
            {
                product.Price = 70000;

                await context.SaveChangesAsync();

                Console.WriteLine("Laptop price updated successfully.");
            }

            // Delete Product
            var toDelete = await context.Products
                .FirstOrDefaultAsync(p => p.Name == "Rice Bag");

            if (toDelete != null)
            {
                context.Products.Remove(toDelete);

                await context.SaveChangesAsync();

                Console.WriteLine("Rice Bag deleted successfully.");
            }

            Console.WriteLine("\nRemaining Products:");

            var products = await context.Products.ToListAsync();

            foreach (var item in products)
            {
                Console.WriteLine($"{item.Name} - ₹{item.Price}");
            }
        }
    }
}
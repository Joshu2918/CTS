using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EFCoreRelationshipDemo
{
    public class Category
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public List<Product> Products { get; set; }
            = new List<Product>();
    }

    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }

    public class StoreContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }
    }

    class Program
    {
        static void Main()
        {
            // Eager Loading
            // context.Categories.Include(c => c.Products);

            // Lazy Loading
            // category.Products;

            // Explicit Loading
            // context.Entry(category).Collection(c => c.Products).Load();
        }
    }
}
using System;

namespace RetailInventory
{
    public class Category
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }
    }

    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public int StockQuantity { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }

    class Program
    {
        static void Main()
        {
            Product product = new Product
            {
                ProductId = 1,
                ProductName = "Laptop",
                StockQuantity = 25
            };

            Console.WriteLine(
                $"Product: {product.ProductName}, Stock: {product.StockQuantity}");
        }
    }
}
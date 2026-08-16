using System;

class ProductSearch
{
    static void Main()
    {
        string[] products =
        {
            "Laptop",
            "Mobile",
            "Headphones",
            "Keyboard",
            "Mouse"
        };

        string searchProduct = "Keyboard";

        bool found = false;

        for(int i = 0; i < products.Length; i++)
        {
            if(products[i] == searchProduct)
            {
                Console.WriteLine(
                    "Product Found at Position : "
                    + (i + 1));

                found = true;
                break;
            }
        }

        if(!found)
        {
            Console.WriteLine(
                "Product Not Found");
        }
    }
}
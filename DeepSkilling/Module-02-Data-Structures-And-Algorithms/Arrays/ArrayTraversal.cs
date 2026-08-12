using System;

class ArrayTraversal
{
    static void Main()
    {
        int[] numbers = {10,20,30,40,50};

        Console.WriteLine("Array Elements:");

        foreach(int num in numbers)
        {
            Console.WriteLine(num);
        }
    }
}

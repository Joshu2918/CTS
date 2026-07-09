using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 10, 20, 30, 40, 50 };

        var result = numbers.Where(number => number > 25);

        foreach (var number in result)
        {
            Console.WriteLine(number);
        }
    }
}

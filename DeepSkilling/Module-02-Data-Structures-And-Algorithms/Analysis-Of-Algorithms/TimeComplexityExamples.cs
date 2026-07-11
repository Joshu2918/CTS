using System;

class TimeComplexityExamples
{
    static void Main()
    {
        int n = 5;

        Console.WriteLine("===== Time Complexity Examples =====");

        Console.WriteLine("\nO(1) - Constant Time");
        Console.WriteLine("Value of n = " + n);

        Console.WriteLine("\nO(n) - Linear Time");
        for (int i = 1; i <= n; i++)
        {
            Console.Write(i + " ");
        }

        Console.WriteLine();

        Console.WriteLine("\nO(n²) - Quadratic Time");
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                Console.Write("(" + i + "," + j + ") ");
            }
            Console.WriteLine();
        }
    }
}

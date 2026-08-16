using System;

class TimeComplexityExamples
{
    static void ConstantTime()
    {
        int number = 100;
        Console.WriteLine(number);
    }

    static void LinearTime(int[] arr)
    {
        foreach (int value in arr)
        {
            Console.Write(value + " ");
        }
    }

    static void QuadraticTime(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            for (int j = 0; j < arr.Length; j++)
            {
                Console.Write("* ");
            }
        }
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };

        ConstantTime();

        Console.WriteLine();

        LinearTime(numbers);

        Console.WriteLine();

        QuadraticTime(numbers);
    }
}
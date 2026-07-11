using System;

class LinearSearchArray
{
    static void Main()
    {
        int[] numbers = {12,25,18,40,7,30};

        Console.Write("Enter element to search: ");

        int key = Convert.ToInt32(Console.ReadLine());

        int position = -1;

        for(int i=0;i<numbers.Length;i++)
        {
            if(numbers[i]==key)
            {
                position=i;
                break;
            }
        }

        if(position!=-1)
            Console.WriteLine("Element found at index " + position);
        else
            Console.WriteLine("Element not found");
    }
}

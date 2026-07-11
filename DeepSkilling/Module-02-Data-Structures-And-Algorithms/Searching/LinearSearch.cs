using System;

class LinearSearch
{
    static void Main()
    {
        int[] arr = {12, 25, 18, 40, 7, 30};

        Console.Write("Enter element to search: ");

        int key = Convert.ToInt32(Console.ReadLine());

        int index = -1;

        for(int i = 0; i < arr.Length; i++)
        {
            if(arr[i] == key)
            {
                index = i;
                break;
            }
        }

        if(index != -1)
            Console.WriteLine("Element found at index " + index);
        else
            Console.WriteLine("Element not found.");
    }
}

using System;

class LinearSearchArray
{
    static void Main()
    {
        int[] arr = {10,20,30,40,50};

        int target = 40;

        for(int i=0;i<arr.Length;i++)
        {
            if(arr[i] == target)
            {
                Console.WriteLine(
                    "Element Found at Index " + i);

                return;
            }
        }

        Console.WriteLine("Element Not Found");
    }
}
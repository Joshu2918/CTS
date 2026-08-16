using System;

class LinearSearch
{
    static void Main()
    {
        int[] arr = {5,10,15,20,25};

        int target = 20;

        for(int i=0;i<arr.Length;i++)
        {
            if(arr[i] == target)
            {
                Console.WriteLine(
                    "Found at Index " + i);
                return;
            }
        }

        Console.WriteLine("Not Found");
    }
}
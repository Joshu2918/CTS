using System;

class BinarySearch
{
    static void Main()
    {
        int[] arr = {10,20,30,40,50,60};

        int target = 40;

        int left = 0;
        int right = arr.Length - 1;

        while(left <= right)
        {
            int mid = (left + right) / 2;

            if(arr[mid] == target)
            {
                Console.WriteLine(
                    "Found at Index " + mid);
                return;
            }

            if(arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }

        Console.WriteLine("Not Found");
    }
}
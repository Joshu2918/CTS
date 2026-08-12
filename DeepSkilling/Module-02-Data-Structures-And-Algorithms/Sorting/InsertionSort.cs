using System;

class InsertionSort
{
    static void Sort(int[] arr)
    {
        for(int i = 1; i < arr.Length; i++)
        {
            int key = arr[i];
            int j = i - 1;

            while(j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }

    static void Main()
    {
        int[] arr = {12,11,13,5,6};

        Sort(arr);

        Console.WriteLine("Sorted Array:");

        foreach(int item in arr)
            Console.Write(item + " ");
    }
}

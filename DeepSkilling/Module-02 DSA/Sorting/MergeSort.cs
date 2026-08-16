using System;

class MergeSort
{
    static void Merge(int[] arr, int left, int mid, int right)
    {
        int[] temp = new int[right - left + 1];

        int i = left;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= right)
        {
            if (arr[i] < arr[j])
            {
                temp[k++] = arr[i++];
            }
            else
            {
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid)
        {
            temp[k++] = arr[i++];
        }

        while (j <= right)
        {
            temp[k++] = arr[j++];
        }

        for (int x = 0; x < temp.Length; x++)
        {
            arr[left + x] = temp[x];
        }
    }

    static void Sort(int[] arr, int left, int right)
    {
        if (left < right)
        {
            int mid = (left + right) / 2;

            Sort(arr, left, mid);
            Sort(arr, mid + 1, right);

            Merge(arr, left, mid, right);
        }
    }

    static void Main()
    {
        int[] arr = { 38, 27, 43, 3, 9, 82, 10 };

        Sort(arr, 0, arr.Length - 1);

        Console.WriteLine("Sorted Array:");

        foreach (int num in arr)
        {
            Console.Write(num + " ");
        }
    }
}
using System;

class Node
{
    public int Data;
    public Node Next;

    public Node(int data)
    {
        Data = data;
        Next = null;
    }
}

class SinglyLinkedList
{
    static void Main()
    {
        Node head = new Node(10);
        head.Next = new Node(20);
        head.Next.Next = new Node(30);

        Console.WriteLine("Singly Linked List:");

        Node temp = head;

        while (temp != null)
        {
            Console.Write(temp.Data + " ");
            temp = temp.Next;
        }
    }
}

using System;

class Node
{
    public int Data;
    public Node Next;

    public Node(int data)
    {
        Data = data;
    }
}

class CircularLinkedList
{
    Node head;

    public void Insert(int data)
    {
        Node newNode = new Node(data);

        if (head == null)
        {
            head = newNode;
            head.Next = head;
            return;
        }

        Node temp = head;

        while (temp.Next != head)
        {
            temp = temp.Next;
        }

        temp.Next = newNode;
        newNode.Next = head;
    }

    public void Traverse()
    {
        if (head == null)
            return;

        Node temp = head;

        do
        {
            Console.Write(temp.Data + " ");
            temp = temp.Next;
        }
        while (temp != head);
    }

    static void Main()
    {
        CircularLinkedList list =
            new CircularLinkedList();

        list.Insert(1);
        list.Insert(2);
        list.Insert(3);

        Console.WriteLine(
            "Circular Linked List:");

        list.Traverse();
    }
}
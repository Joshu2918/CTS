using System;

class Node
{
    public int Data;
    public Node Next;
    public Node Prev;

    public Node(int data)
    {
        Data = data;
    }
}

class DoublyLinkedList
{
    Node head;

    public void Insert(int data)
    {
        Node newNode = new Node(data);

        if (head == null)
        {
            head = newNode;
            return;
        }

        Node temp = head;

        while (temp.Next != null)
        {
            temp = temp.Next;
        }

        temp.Next = newNode;
        newNode.Prev = temp;
    }

    public void Traverse()
    {
        Node temp = head;

        while (temp != null)
        {
            Console.Write(temp.Data + " ");
            temp = temp.Next;
        }
    }

    static void Main()
    {
        DoublyLinkedList list =
            new DoublyLinkedList();

        list.Insert(100);
        list.Insert(200);
        list.Insert(300);

        Console.WriteLine("Doubly Linked List:");

        list.Traverse();
    }
}
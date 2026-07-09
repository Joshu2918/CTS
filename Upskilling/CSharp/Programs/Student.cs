using System;

class Student
{
    public string Name;
    public int Age;

    public void Display()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Age: {Age}");
    }

    static void Main()
    {
        Student student = new Student();
        student.Name = "Pramod";
        student.Age = 22;
        student.Display();
    }
}

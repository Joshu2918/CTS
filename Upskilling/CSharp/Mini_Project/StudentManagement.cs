using System;
using System.Collections.Generic;

class Student
{
    public int Id;
    public string Name;
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student
            {
                Id = 101,
                Name = "Pramod"
            },
            new Student
            {
                Id = 102,
                Name = "Rahul"
            }
        };

        foreach (var student in students)
        {
            Console.WriteLine($"{student.Id}: {student.Name}");
        }
    }
}

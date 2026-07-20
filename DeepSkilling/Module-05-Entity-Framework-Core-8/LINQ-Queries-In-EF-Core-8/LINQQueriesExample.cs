
---

# LINQQueriesExample.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQQueriesDemo
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }
    }

    class Program
    {
        static void Main()
        {
            List<Student> students = new List<Student>
            {
                new Student{StudentId=1,Name="Pramod",Age=22},
                new Student{StudentId=2,Name="Rahul",Age=20},
                new Student{StudentId=3,Name="Anjali",Age=24}
            };

            // Where
            var filtered =
                students.Where(s => s.Age > 21);

            Console.WriteLine("Students Age > 21");

            foreach (var student in filtered)
            {
                Console.WriteLine(
                    $"{student.Name} - {student.Age}");
            }

            // OrderBy
            var ordered =
                students.OrderBy(s => s.Name);

            Console.WriteLine("\nSorted Students");

            foreach (var student in ordered)
            {
                Console.WriteLine(student.Name);
            }

            // Select
            var names =
                students.Select(s => s.Name);

            Console.WriteLine("\nStudent Names");

            foreach (var name in names)
            {
                Console.WriteLine(name);
            }

            Console.WriteLine($"\nTotal Students : {students.Count}");
            Console.WriteLine($"Average Age : {students.Average(s => s.Age)}");
        }
    }
}
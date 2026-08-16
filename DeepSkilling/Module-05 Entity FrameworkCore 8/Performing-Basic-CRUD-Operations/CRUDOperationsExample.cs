
---

# CRUDOperationsExample.cs

```csharp
using System;
using System.Collections.Generic;

namespace EFCoreCRUDDemo
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; }
    }

    class Program
    {
        static void Main()
        {
            List<Student> students =
                new List<Student>();

            // CREATE
            students.Add(
                new Student
                {
                    StudentId = 1,
                    Name = "Pramod"
                });

            Console.WriteLine("Student Added");

            // READ
            foreach (var student in students)
            {
                Console.WriteLine(
                    $"{student.StudentId} - {student.Name}");
            }

            // UPDATE
            students[0].Name = "Pramod Kumar";

            Console.WriteLine(
                "Student Updated");

            // DELETE
            students.RemoveAt(0);

            Console.WriteLine(
                "Student Deleted");
        }
    }
}
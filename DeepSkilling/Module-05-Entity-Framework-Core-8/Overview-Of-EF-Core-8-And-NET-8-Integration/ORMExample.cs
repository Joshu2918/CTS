using System;

namespace EFCoreDemo
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
            Student student = new Student();

            student.StudentId = 101;
            student.Name = "Pramod";

            Console.WriteLine(
                $"ID: {student.StudentId}, Name: {student.Name}");
        }
    }
}
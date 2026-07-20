using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EFCoreRelationships
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; }

        public int CourseId { get; set; }

        public Course Course { get; set; }
    }

    public class Course
    {
        public int CourseId { get; set; }

        public string CourseName { get; set; }

        public ICollection<Student> Students { get; set; }
    }

    public class AppDbContext : DbContext
    {
        public AppDbContext(
            DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }

        public DbSet<Course> Courses { get; set; }
    }
}
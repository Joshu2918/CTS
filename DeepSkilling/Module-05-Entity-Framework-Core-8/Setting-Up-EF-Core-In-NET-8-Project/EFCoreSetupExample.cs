using Microsoft.EntityFrameworkCore;

namespace EFCoreSetupDemo
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; }
    }

    public class AppDbContext : DbContext
    {
        public AppDbContext(
            DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
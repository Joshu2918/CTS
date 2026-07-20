using Microsoft.EntityFrameworkCore;

namespace EFCoreMigrationDemo
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }

    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(

                new Category
                {
                    Id = 1,
                    Name = "Electronics"
                },

                new Category
                {
                    Id = 2,
                    Name = "Furniture"
                }

            );
        }
    }
}
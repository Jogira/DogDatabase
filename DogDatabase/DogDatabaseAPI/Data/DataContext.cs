using Microsoft.EntityFrameworkCore;

namespace DogDatabaseAPI
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Dog> Dogs { get; set; }

    }
}
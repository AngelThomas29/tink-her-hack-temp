using Microsoft.EntityFrameworkCore;
using Internship.Server.Models;

namespace Internship.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Internship.Server.Models.Internship> Internships { get; set; }

    }
}

using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<UserInfo> UserInfo { get; set; }
        public DbSet<CompanyInfo> CompanyInfo { get; set; }
        public DbSet<UserCompany> UserCompany { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserCompany>().HasNoKey();
        }
    }
}
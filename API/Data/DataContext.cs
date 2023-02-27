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
        public DbSet<Receipt> Receipt { get; set; }
        public DbSet<ReceiptPosition> ReceiptPosition { get; set; }
        public DbSet<VatRate> VatRate { get; set; }
        public DbSet<PaymentInfo> PaymentInfo { get; set; }
        public DbSet<Browser> Browser { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Receipt>()
            //    .Navigation(e => e.AppUser).AutoInclude(); // for fun
        }
    }
}
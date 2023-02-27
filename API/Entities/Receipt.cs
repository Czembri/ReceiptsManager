namespace API.Entities
{
    public class Receipt
    {
        public int Id { get; set; }
        public string ReceiptNumber { get; set; }
        public CompanyInfo Shop { get; set; }
        public string Total { get; set; }
        public DateTime Created { get; set; }
        public ICollection<ReceiptPosition> ReceiptPositions { get; set; }
        public PaymentInfo PaymentInfo { get; set; }
        public AppUser AppUser { get; set; }
    }
}
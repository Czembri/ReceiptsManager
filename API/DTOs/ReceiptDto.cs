namespace API.DTOs
{
    public class ReceiptDto
    {
        public int Id { get; set; }
        public string ReceiptNumber { get; set; }
        public CompanyDto Shop { get; set; }
        public List<ReceiptPositionDto> Positions { get; set; }
        public string Total { get; set; }
        public PaymentInfoDto PaymentInfo { get; set; }
        public DateTime Created { get; set; }
    }
}
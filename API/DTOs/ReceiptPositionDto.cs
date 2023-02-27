namespace API.DTOs
{
    public class ReceiptPositionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Amount { get; set; }
        public VatRateDto VatRate { get; set; }
        public int Quantity { get; set; }
    }
}
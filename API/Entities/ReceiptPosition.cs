namespace API.Entities
{
    public class ReceiptPosition
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Amount { get; set; }
        public int Quantity { get; set; }
        public VatRate VatRate { get; set; }
        public Receipt Receipt { get; set; }
    }
}
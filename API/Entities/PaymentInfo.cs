using API.Enums;

namespace API.Entities
{
    public class PaymentInfo
    {
        public int Id { get; set; }
        public PaymentType PaymentType { get; set; }
    }
}
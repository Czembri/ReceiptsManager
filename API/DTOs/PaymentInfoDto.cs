using API.Enums;

namespace API.DTOs
{
    public class PaymentInfoDto
    {
        public int Id { get; set; }
        public PaymentType PaymentType { get; set; }
    }
}
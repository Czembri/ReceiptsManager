using API.DTOs;
using API.Entities;

namespace API.Mappers
{
    public static class ReceiptPositionsMapper
    {
        public static ReceiptPositionDto MapToReceiptPostionDto(ReceiptPosition receiptPosition)
        {
            return new ReceiptPositionDto {
                Id = receiptPosition.Id,
                Amount = receiptPosition.Amount,
                Description = receiptPosition.Description,
                Name = receiptPosition.Name,
                VatRate = new VatRateDto {
                    Id = receiptPosition.VatRate.Id,
                    Name = receiptPosition.VatRate.Name,
                    Percent = receiptPosition.VatRate.Percent
                },
                Quantity = receiptPosition.Quantity
            };
        }
    }
}
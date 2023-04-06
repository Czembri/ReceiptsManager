using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using API.Company;
using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Authorization;
using static API.Mappers.ReceiptPositionsMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace API.Controllers
{
    public class ReceiptsController : BaseApiController
    {
        private readonly ILogger<ReceiptsController> _logger;
        private readonly DataContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        public ReceiptsController(ILogger<ReceiptsController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        // [Authorize]
        [HttpGet]
        public async Task<ActionResult<IList<ReceiptDto>>> GetReceipts()
        {
            var user = User.FindFirst(ClaimTypes.Name)?.Value;
            var userId = User.FindFirst(JwtRegisteredClaimNames.NameId)?.Value;
            // var positions = new List<ReceiptPositionDto>{};
            //dev - add condition for user auth
            var receipts = await _context.Receipt
                .Include(e => e.Shop)
                .Include(e => e.ReceiptPositions)
                .ThenInclude(e => e.VatRate)
                .Include(e => e.PaymentInfo)
                .Include(e => e.AppUser)
                .ToListAsync();
            return receipts.Select(x => new ReceiptDto {
                Id = x.Id,
                Created = x.Created,
                ReceiptNumber = x.ReceiptNumber,
                Shop = new CompanyDto {
                    Id = x.Shop.Id,
                    Address = x.Shop.Address,
                    City = x.Shop.City,
                    CompanyName = x.Shop.CompanyName,
                    CompanyType = ((CompanyType)x.Shop.CompanyType).ToString(),
                    Nip = x.Shop.Nip,
                    PostalCode = x.Shop.PostalCode
                },
                Total = x.Total,
                Positions = x.ReceiptPositions.Select(MapToReceiptPostionDto).ToList(),
                PaymentInfo = new PaymentInfoDto {
                    Id = x.PaymentInfo.Id,
                    PaymentType = x.PaymentInfo.PaymentType,
                },
            }).ToList();
        } 

    }
}
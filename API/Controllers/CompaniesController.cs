using API.Company;
using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CompaniesController : BaseApiController
    {
        private readonly DataContext _context;
        public CompaniesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<CompanyDto>> GetCompanyByNumber([FromQuery] string nip)
        {
            var companies = await _context.CompanyInfo.ToListAsync();
            return companies.Where(x => x.Nip == nip).Select(c => new CompanyDto {
                Id = c.Id,
                Address = c.Address,
                City = c.City,
                CompanyName = c.CompanyName, 
                CompanyType = ((CompanyType)c.CompanyType).ToString(),
                Nip = c.Nip,
                PostalCode = c.PostalCode
            }).FirstOrDefault();
        } 
    }

    internal class UserCompanyPositionData 
    {
        internal int Id { get; set; }
        internal string Position { get; set; } 
    }
}
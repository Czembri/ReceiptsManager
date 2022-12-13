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
        public async Task<ActionResult<IEnumerable<UserCompanyDto>>> GetCompanies([FromQuery] string username)
        {
            var userCompanyPositionData = await GetCompanyIdsByUsername(username);
            var companies = await _context.CompanyInfo.ToListAsync();
            var ids = userCompanyPositionData.Select(x => x.Id).ToList();
            return companies.Where(x => ids.Contains(x.Id)).Select(c => new UserCompanyDto {
                Id = c.Id,
                Address = c.Address,
                City = c.City,
                CompanyName = c.CompanyName, 
                CompanyType = ((CompanyType)c.CompanyType).ToString(),
                Nip = c.Nip,
                Position = userCompanyPositionData.Where(x => x.Id == c.Id).First().Position,
                PostalCode = c.PostalCode
            }).ToList();
        } 

        private async Task<IEnumerable<UserCompanyPositionData>> GetCompanyIdsByUsername(string username)
        {
            return await _context.UserCompany
                .Where(uc => uc.User.UserName == username)
                .Select(uc => new UserCompanyPositionData {
                    Id = uc.Company.Id,
                    Position = ((UserCompanyPosition)uc.Position).ToString()
                }).ToListAsync();
        }
    }

    internal class UserCompanyPositionData 
    {
        internal int Id { get; set; }
        internal string Position { get; set; } 
    }
}
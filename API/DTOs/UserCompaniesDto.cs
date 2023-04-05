using API.Entities;

namespace API.DTOs
{
    public class UserCompaniesDto
    {
        public CompanyDto Company { get; set; }
        public UserInfo UserInfo { get; set; }
    }
}
using API.Company;

namespace API.Entities
{
    public class UserCompany
    {
        public virtual AppUser User { get; set; }
        public virtual CompanyInfo Company { get; set; }
        public virtual UserCompanyPosition Position { get; set; }
    }
}
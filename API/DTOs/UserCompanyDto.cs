using API.Company;

namespace API.DTOs
{
    public class UserCompanyDto
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyType { get; set; }
        public string Address { get; set; } 
        public string City { get; set; } 
        public string PostalCode { get; set; }
        public string Nip { get; set; }
        public string Position { get; set; }

    }
}
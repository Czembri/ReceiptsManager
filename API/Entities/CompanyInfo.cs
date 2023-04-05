using API.Company;

namespace API.Entities
{
    public class CompanyInfo
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public CompanyType CompanyType { get; set; }
        public string Address { get; set; } 
        public string City { get; set; } 
        public string PostalCode { get; set; }
        public string Nip { get; set; }
        public DateTime Created { get; set; }
    }
}
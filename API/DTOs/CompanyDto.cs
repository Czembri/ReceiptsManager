using API.Entities;

namespace API.DTOs
{
    public class CompanyDto
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyType { get; set; }
        public string Address { get; set; } 
        public string City { get; set; } 
        public string PostalCode { get; set; }
        public string Nip { get; set; }
        public DateTime Created { get; set; }
        public UserDto User { get; set; }
    }
}
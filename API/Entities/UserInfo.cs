namespace API.Entities
{
    public class UserInfo
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; } 
        public string City { get; set; } 
        public string PostalCode { get; set; }
        public virtual AppUser User { get; set; }
    }
}
namespace API.Entities
{
    public class UserCompanies
    {
        public int Id { get; set; }
        public CompanyInfo Company { get; set; }
        public UserInfo UserInfo { get; set; }
    }
}
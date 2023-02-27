namespace API.DTOs
{
    public class BrowserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ColumnDefinitionsDto> ColumnDefinitions { get; set; }
        public GridOptionsDto GridOptions { get; set; }
    }
}
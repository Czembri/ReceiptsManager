using System.Text.Json;
using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BrowserController : BaseApiController
    {
        private readonly ILogger<BrowserController> _logger;
        private readonly DataContext _context;
        public BrowserController(ILogger<BrowserController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<BrowserDto>> GetBrowserInfoByName([FromQuery] string browserName) 
        {
            var browser = await _context.Browser.Where(x => x.Name == browserName).FirstOrDefaultAsync();
            if (browser == null)
                return NotFound();
            // var gridOptions = JsonSerializer.Deserialize<GridOptionsDto>(browser.GridOptions, new JsonSerializerOptions {
            //     PropertyNameCaseInsensitive = true
            // });
            // var columnDefinitions = JsonSerializer.Deserialize<List<ColumnDefinitionsDto>>(browser.ColumnDefinitions, new JsonSerializerOptions {
            //     PropertyNameCaseInsensitive = true
            // });
            return new BrowserDto {
                Id = browser.Id,
                ColumnDefinitions = browser.ColumnDefinitions,
                GridOptions = browser.GridOptions,
                Name = browserName
            };
        }
    }
}
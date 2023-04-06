using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DogDatabaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogDatabaseController : ControllerBase
    {
        private readonly DataContext _context;

        public DogDatabaseController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Dog>>> GetDogs()
        {
            return Ok(await _context.Dogs.ToListAsync());
            {
            };
        }
    }
}

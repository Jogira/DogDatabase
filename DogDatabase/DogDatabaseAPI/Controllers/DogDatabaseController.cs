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
        }

        [HttpPost]
        public async Task<ActionResult<List<Dog>>> CreateDog(Dog dog)
        {
            _context.Dogs.Add(dog);
            await _context.SaveChangesAsync();

            return Ok(await _context.Dogs.ToListAsync());
        }


        [HttpPut]
        public async Task<ActionResult<List<Dog>>> UpateDog(Dog dog)
        {
            var dbDog = await _context.Dogs.FindAsync(dog.Id);
            if (dbDog == null)
            {
                return BadRequest("Dog not found.");
            }

            dbDog.Name = dog.Name;
            dbDog.FirstName = dog.FirstName;
            dbDog.LastName = dog.LastName;
            dbDog.Breed = dog.Breed;

            await _context.SaveChangesAsync();

            return Ok(await _context.Dogs.ToListAsync());
        }

        [HttpDelete("id")]
        public async Task<ActionResult<List<Dog>>> DeleteDog(int id)
        {
            var dbDog = await _context.Dogs.FindAsync(id);
            if (dbDog == null)
            {
                return BadRequest("Dog not found.");
            }

            _context.Dogs.Remove(dbDog);
            await _context.SaveChangesAsync();

            return Ok(await _context.Dogs.ToListAsync());
        }
    }
}

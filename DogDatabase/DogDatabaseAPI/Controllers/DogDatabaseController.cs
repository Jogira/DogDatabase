using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogDatabaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogDatabaseController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Dog>>> GetDogs()
        {
            return new List<Dog>
            {
                new Dog
                {
                    Name = "Bolt Barcardi",
                    FirstName = "Odyssesus",
                    LastName = "Apollo",
                    Breed = "Morkie"
                }
            };
        }
    }
}

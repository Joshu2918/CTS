using Microsoft.AspNetCore.Mvc;

namespace MicroserviceDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(new[]
            {
                new
                {
                    Id = 1,
                    Name = "Laptop",
                    Price = 75000
                },
                new
                {
                    Id = 2,
                    Name = "Mouse",
                    Price = 800
                }
            });
        }
    }
}
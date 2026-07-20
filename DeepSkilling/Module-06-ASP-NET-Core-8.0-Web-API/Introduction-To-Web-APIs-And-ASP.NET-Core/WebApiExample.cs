using Microsoft.AspNetCore.Mvc;

namespace ProductAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new[]
            {
                new
                {
                    Id = 1,
                    Name = "Laptop",
                    Price = 70000
                },
                new
                {
                    Id = 2,
                    Name = "Mouse",
                    Price = 800
                }
            };

            return Ok(products);
        }
    }
}
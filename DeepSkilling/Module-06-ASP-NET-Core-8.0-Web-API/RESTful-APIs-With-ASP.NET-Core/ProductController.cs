using Microsoft.AspNetCore.Mvc;

namespace ProductAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new[]
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
            });
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok("Product Added Successfully");
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id)
        {
            return Ok($"Product {id} Updated Successfully");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok($"Product {id} Deleted Successfully");
        }
    }
}
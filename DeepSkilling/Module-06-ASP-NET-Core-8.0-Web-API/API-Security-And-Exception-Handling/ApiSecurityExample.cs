using Microsoft.AspNetCore.Mvc;

namespace ApiSecurityDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(new[]
            {
                new { Id = 1, Name = "Pramod" },
                new { Id = 2, Name = "Rahul" }
            });
        }

        [HttpGet("secure")]
        public IActionResult SecureEndpoint(
            [FromHeader(Name = "X-API-KEY")] string apiKey)
        {
            if (apiKey != "abc123xyz")
                return Unauthorized("Invalid API Key");

            return Ok("Authorized Access");
        }

        [HttpGet("error")]
        public IActionResult Error()
        {
            throw new Exception("Sample exception");
        }
    }
}
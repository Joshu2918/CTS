using Microsoft.AspNetCore.Mvc;

namespace CommunicationDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public OrderController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            // Simulate communication with Product Service
            var response = await _httpClient.GetAsync("https://localhost:5001/api/product");

            if (!response.IsSuccessStatusCode)
                return BadRequest("Unable to communicate with Product Service.");

            return Ok($"Order {id} processed successfully.");
        }
    }
}
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AdvancedApiDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        // Route Parameter
        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            return Ok($"Employee Id : {id}");
        }

        // Query Parameter
        [HttpGet]
        public IActionResult GetByDepartment(string department)
        {
            return Ok($"Department : {department}");
        }

        // JWT Protected API
        [Authorize]
        [HttpPost]
        public IActionResult AddEmployee()
        {
            return Ok("Employee Added Successfully");
        }

        // Role-Based Authorization
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            return Ok($"Employee {id} Deleted Successfully");
        }
    }
}
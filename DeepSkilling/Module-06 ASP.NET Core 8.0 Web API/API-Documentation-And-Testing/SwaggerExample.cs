using Microsoft.AspNetCore.Mvc;

namespace ApiDocumentationDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetEmployees()
        {
            return Ok(new[]
            {
                new { Id = 1, Name = "Pramod", Department = "IT" },
                new { Id = 2, Name = "Rahul", Department = "HR" }
            });
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AddEmployee([FromBody] object employee)
        {
            return Created("", employee);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id)
        {
            return Ok($"Employee {id} Updated Successfully");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            return Ok($"Employee {id} Deleted Successfully");
        }
    }
}
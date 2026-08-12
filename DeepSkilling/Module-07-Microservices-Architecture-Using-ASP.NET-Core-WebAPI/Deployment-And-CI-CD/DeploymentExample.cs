// Health Check Endpoint

[AllowAnonymous]
[HttpGet("health")]
public IActionResult Health()
{
    return Ok("Healthy");
}

// Metrics Endpoint

[AllowAnonymous]
[HttpGet("metrics")]
public IActionResult Metrics()
{
    return Ok(new
    {
        Requests = 1250,
        ActiveUsers = 48,
        AverageResponseTime = "120 ms"
    });
}
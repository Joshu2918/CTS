# API Security and Exception Handling

## Overview

Security and exception handling are essential aspects of ASP.NET Core Web API development. They ensure APIs are secure, reliable, and easy to maintain. This topic covers global exception handling, logging using Serilog, API Key authentication, OAuth authentication, and CORS.

---

# Learning Objectives

After completing this topic, you will be able to:

- Understand Global Exception Handling.
- Implement Exception Filters.
- Configure Logging using Serilog.
- Secure APIs using API Keys.
- Understand OAuth Authentication.
- Configure Cross-Origin Resource Sharing (CORS).

---

# Global Exception Handling

Global exception handling catches all unhandled exceptions and returns a standardized error response.

Benefits

- Centralized error handling
- Consistent responses
- Better debugging
- Improved security

Example

```csharp
app.UseExceptionHandler("/error");
```

---

# Exception Filters

Exception filters intercept exceptions thrown by controllers.

Example

```csharp
public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        context.Result = new ObjectResult("Internal Server Error")
        {
            StatusCode = 500
        };
    }
}
```

---

# Logging

Logging records application events for debugging and monitoring.

Types

- Information
- Warning
- Error
- Critical

Example

```csharp
_logger.LogInformation("Employee retrieved successfully");
```

---

# Serilog

Serilog is a structured logging library for .NET.

Installation

```
Serilog.AspNetCore
```

Configuration

```csharp
builder.Host.UseSerilog();
```

Advantages

- File Logging
- Database Logging
- JSON Logging
- Console Logging

---

# API Key Authentication

API Keys restrict access to authorized clients.

Example Header

```
X-API-KEY: abc123xyz
```

Validation Process

1. Client sends API Key.
2. API validates the key.
3. Access is granted or denied.

---

# OAuth Authentication

OAuth allows secure delegated authorization.

Flow

Client

↓

Authorization Server

↓

Access Token

↓

Web API

Advantages

- Secure
- Scalable
- Industry Standard

---

# CORS

Cross-Origin Resource Sharing allows controlled access from different domains.

Configuration

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});
```

Middleware

```csharp
app.UseCors("AllowAll");
```

---

# Best Practices

- Use HTTPS.
- Validate all requests.
- Store secrets securely.
- Enable structured logging.
- Return generic error messages.
- Use JWT or OAuth for authentication.
- Rotate API Keys regularly.

---

# Conclusion

ASP.NET Core provides powerful features such as exception handling, logging, API Key authentication, OAuth, and CORS to build secure and maintainable Web APIs.
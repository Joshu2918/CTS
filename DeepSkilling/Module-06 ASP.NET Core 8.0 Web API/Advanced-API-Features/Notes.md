# Advanced API Features in ASP.NET Core 8.0

## Overview

ASP.NET Core provides several advanced features that help developers build secure, scalable, and maintainable Web APIs. These include attribute routing, query parameters, middleware, filters, and JWT authentication.

---

# Learning Objectives

After completing this topic, you will be able to:

- Understand Attribute Routing.
- Pass data using Query Parameters.
- Create and configure Middleware.
- Understand Custom Filters.
- Implement JWT Authentication.
- Implement Role-Based Authorization.

---

# Attribute Routing

Attribute routing maps URLs directly to controller actions using attributes.

Example

```csharp
[Route("api/[controller]")]
```

```csharp
[HttpGet("{id}")]
```

Example URL

```
https://localhost:5001/api/employee/1
```

---

# Query Parameters

Query parameters pass additional information in the URL.

Example

```
https://localhost:5001/api/employee?department=IT
```

Controller

```csharp
[HttpGet]
public IActionResult Get(string department)
{
    return Ok();
}
```

---

# Middleware

Middleware processes every HTTP request and response.

Common Middleware

- Authentication
- Authorization
- Exception Handling
- Logging
- CORS

Example

```csharp
app.UseAuthentication();

app.UseAuthorization();
```

---

# Filters

Filters execute before or after controller actions.

Types of Filters

- Authorization Filter
- Action Filter
- Exception Filter
- Result Filter

Example

```csharp
public class LogActionFilter : IActionFilter
{
}
```

---

# JWT Authentication

JWT (JSON Web Token) is used for secure authentication.

Structure

Header

Payload

Signature

Workflow

User Login

↓

JWT Token Generated

↓

Client Stores Token

↓

Token Sent in Authorization Header

↓

API Validates Token

↓

Access Granted

---

# Authorization Header

```
Authorization: Bearer <JWT_TOKEN>
```

---

# Role-Based Authorization

```csharp
[Authorize(Roles="Admin")]
```

Only users having the Admin role can access the API.

---

# Advantages

- Secure APIs
- Stateless Authentication
- Better Performance
- Easy Scalability
- Industry Standard

---

# Conclusion

Advanced ASP.NET Core features such as routing, middleware, filters, and JWT authentication help build secure, maintainable, and scalable Web APIs.
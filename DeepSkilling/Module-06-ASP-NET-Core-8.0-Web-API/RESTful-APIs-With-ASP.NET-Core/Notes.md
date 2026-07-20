# RESTful APIs with ASP.NET Core

## Introduction

RESTful APIs in ASP.NET Core allow applications to communicate over HTTP using REST principles. Controllers define endpoints that clients use to perform Create, Read, Update, and Delete (CRUD) operations.

---

# What is a RESTful API?

A RESTful API follows the REST architectural style and uses HTTP methods to perform operations on resources.

Example

Client
        │
 HTTP Request
        │
ASP.NET Core Web API
        │
 SQL Server
        │
 HTTP Response (JSON)

---

# Controllers

Controllers handle incoming HTTP requests and return HTTP responses.

Example

```csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
}
```

---

# Action Methods

Action methods perform specific operations.

Example

```csharp
[HttpGet]
public IActionResult Get()
{
    return Ok();
}
```

---

# Routing

Routing maps URLs to controller actions.

Example

```csharp
[Route("api/[controller]")]
```

URL

```
/api/products
```

---

# CRUD Operations

## GET

Retrieve records.

```csharp
[HttpGet]
```

---

## POST

Insert a new record.

```csharp
[HttpPost]
```

---

## PUT

Update an existing record.

```csharp
[HttpPut("{id}")]
```

---

## DELETE

Delete an existing record.

```csharp
[HttpDelete("{id}")]
```

---

# Entity Framework Core

Entity Framework Core is used to communicate with SQL Server.

Example

```csharp
_context.Products.Add(product);

await _context.SaveChangesAsync();
```

---

# JSON Formatting

ASP.NET Core automatically serializes objects into JSON.

Example Response

```json
{
    "id":1,
    "name":"Laptop",
    "price":70000
}
```

---

# Advantages

- Lightweight
- Fast
- Secure
- Platform Independent
- Easy Integration

---

# Conclusion

ASP.NET Core provides a simple and efficient way to build RESTful APIs using controllers, routing, Entity Framework Core, and JSON serialization.
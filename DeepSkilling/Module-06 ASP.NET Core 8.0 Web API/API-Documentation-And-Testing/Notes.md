# API Documentation and Testing

## Overview

API documentation and testing are essential for developing reliable and maintainable Web APIs. Swagger/OpenAPI automatically generates interactive API documentation, while Postman and REST Client help test API endpoints manually and automatically.

---

# Learning Objectives

After completing this topic, you will be able to:

- Understand API Documentation.
- Configure Swagger/OpenAPI.
- Test APIs using Swagger UI.
- Test APIs using Postman.
- Automate API testing using REST Client.
- Understand HTTP request and response structures.

---

# What is Swagger?

Swagger (OpenAPI) is a framework that automatically generates interactive API documentation.

Benefits

- Interactive API documentation
- Built-in API testing
- Request and Response visualization
- Easy API debugging

---

# Configure Swagger

Install

```
Swashbuckle.AspNetCore
```

Program.cs

```csharp
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

app.UseSwagger();
app.UseSwaggerUI();
```

Swagger URL

```
https://localhost:5001/swagger
```

---

# OpenAPI

OpenAPI is the specification used by Swagger to describe REST APIs.

It includes

- Endpoints
- HTTP Methods
- Parameters
- Responses
- Authentication

---

# Using Postman

Postman is an API testing tool.

Supported Methods

- GET
- POST
- PUT
- DELETE
- PATCH

Example Request

```
GET

https://localhost:5001/api/employee
```

Common Tabs

- Params
- Authorization
- Headers
- Body
- Tests

---

# REST Client

REST Client is a Visual Studio Code extension used for API testing without leaving the editor.

Example

```http
GET https://localhost:5001/api/employee
```

Execute using

```
Send Request
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Best Practices

- Document every endpoint.
- Use meaningful response codes.
- Test all HTTP methods.
- Validate request payloads.
- Keep Swagger documentation updated.

---

# Advantages

- Easy API testing
- Better collaboration
- Faster debugging
- Improved developer experience
- Automatic documentation

---

# Conclusion

Swagger, Postman, and REST Client simplify API documentation and testing, making Web APIs easier to develop, maintain, and debug.
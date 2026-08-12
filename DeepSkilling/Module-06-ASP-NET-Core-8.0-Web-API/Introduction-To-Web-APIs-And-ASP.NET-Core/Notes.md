# Introduction to Web APIs and ASP.NET Core

## What is a Web API?

A Web API (Application Programming Interface) allows applications to communicate over HTTP. It exposes data and functionality that can be consumed by clients such as web browsers, mobile apps, desktop applications, and other services.

Example:

```
Client
   │
HTTP Request
   │
ASP.NET Core Web API
   │
Database
```

---

# Features of Web APIs

- Platform Independent
- Lightweight
- High Performance
- Secure Communication
- Supports JSON and XML
- Easy Integration

---

# REST Architecture

REST (Representational State Transfer) is an architectural style for designing web services.

HTTP Methods

| Method | Purpose |
|---------|---------|
| GET | Retrieve Data |
| POST | Create Data |
| PUT | Update Data |
| DELETE | Delete Data |

Example

```
GET /api/products

POST /api/products

PUT /api/products/1

DELETE /api/products/1
```

---

# SOAP

SOAP (Simple Object Access Protocol) is a protocol that exchanges XML messages.

Characteristics

- XML Based
- More Secure
- Heavyweight
- Complex

---

# REST vs SOAP

| Feature | REST | SOAP |
|----------|------|------|
| Protocol | HTTP | XML Protocol |
| Format | JSON/XML | XML |
| Performance | Fast | Slower |
| Simplicity | Easy | Complex |
| Mobile Friendly | Yes | Limited |

---

# Setting up .NET 8 Development Environment

Required Software

- .NET 8 SDK
- Visual Studio 2022
- Visual Studio Code
- Postman
- SQL Server

Verify Installation

```bash
dotnet --version
```

Create a Web API Project

```bash
dotnet new webapi -n ProductAPI

cd ProductAPI

dotnet run
```

---

# ASP.NET Core Web API Project Structure

```
ProductAPI
│
├── Controllers
├── Models
├── Program.cs
├── appsettings.json
├── Properties
├── wwwroot
└── ProductAPI.csproj
```

### Controllers

Contains API endpoints.

### Models

Contains entity classes.

### Program.cs

Application startup and service configuration.

### appsettings.json

Stores configuration such as connection strings.

### Properties

Contains launch settings.

### wwwroot

Stores static files.

---

# Advantages of ASP.NET Core Web API

- Cross Platform
- High Performance
- Dependency Injection
- Middleware Pipeline
- Open Source
- Cloud Ready

---

# Conclusion

ASP.NET Core Web API provides a modern, scalable, and secure framework for building RESTful services using .NET 8.
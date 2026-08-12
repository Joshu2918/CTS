# Question 1: Implement JWT Authentication in ASP.NET Core Web API

## Objective

This hands-on demonstrates how to implement JWT (JSON Web Token) authentication in an ASP.NET Core Web API microservice. It also covers securing endpoints, implementing role-based authorization, and handling expired or invalid tokens.

---

## Learning Objectives

- Create an ASP.NET Core Web API project.
- Configure JWT authentication.
- Generate JWT tokens.
- Secure endpoints using `[Authorize]`.
- Implement role-based authorization.
- Handle expired or invalid JWT tokens gracefully.

---

## Prerequisites

- Visual Studio 2022
- .NET 8 SDK
- ASP.NET Core Web API
- Postman

### Required NuGet Package

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

---

## Project Structure

- appsettings.json
- Program.cs
- AuthController.cs
- SecureController.cs
- AdminController.cs

---

## Exercise 1

Generate JWT Token using Login API.

---

## Exercise 2

Protect API endpoints using `[Authorize]`.

---

## Exercise 3

Implement Role-Based Authorization.

```csharp
[Authorize(Roles="Admin")]
```

---

## Exercise 4

Handle Expired JWT Tokens.

```csharp
OnAuthenticationFailed
```

---

## Expected Results

- Login returns JWT token.
- Authorized users access secure endpoints.
- Admin role accesses admin dashboard.
- Expired token returns Unauthorized (401).

---

## Conclusion

Successfully implemented JWT authentication, authorization, role-based access control, and token validation in ASP.NET Core Web API.
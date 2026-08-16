# Setting Up EF Core in a .NET 8 Project

## Introduction

Entity Framework Core (EF Core) is Microsoft's modern ORM framework for .NET applications. Before working with databases using EF Core, the required packages must be installed and configured properly.

---

## Installing EF Core Packages via NuGet

The following packages are commonly required:

### SQL Server Provider

```powershell
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

### EF Core Tools

```powershell
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

### Design Package

```powershell
dotnet add package Microsoft.EntityFrameworkCore.Design
```

These packages enable database connectivity, migrations, and development tools.

---

## Configuring DbContext

DbContext acts as a bridge between the application and the database.

Responsibilities:

* Managing database connections
* Tracking entity changes
* Executing queries
* Saving data

Example:

```csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Student> Students { get; set; }
}
```

---

## Connecting to SQL Server

Connection strings are stored in appsettings.json.

Example:

```json
{
  "ConnectionStrings": {
    "DefaultConnection":
    "Server=localhost;Database=StudentDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

Register DbContext in Program.cs:

```csharp
builder.Services.AddDbContext<AppDbContext>(
    options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));
```

---

## EF Core CLI Commands

### Create Migration

```powershell
dotnet ef migrations add InitialCreate
```

Creates migration files based on model changes.

### Update Database

```powershell
dotnet ef database update
```

Applies migrations to SQL Server.

### Remove Migration

```powershell
dotnet ef migrations remove
```

Removes the latest migration.

### List Migrations

```powershell
dotnet ef migrations list
```

Displays all migrations.

---

## Advantages of EF Core

* Faster development
* Reduced SQL code
* Object-oriented approach
* Automatic migrations
* Cross-platform support

## Conclusion

EF Core simplifies database access in .NET 8 applications by providing a modern ORM solution with migration support and easy database connectivity.

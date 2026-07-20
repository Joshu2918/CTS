# EF Core Migrations and Database Updates

## Introduction

Entity Framework Core Migrations allow developers to keep the database schema synchronized with changes made in C# entity classes. Instead of manually modifying database tables, EF Core automatically generates migration files and updates the database.

---

## What are Migrations?

A migration is a set of instructions that describes changes to the database schema.

Examples:

- Creating tables
- Adding columns
- Removing columns
- Renaming tables
- Modifying relationships

---

## Adding a Migration

Generate a migration after modifying entity classes.

```powershell
dotnet ef migrations add InitialCreate
```

Example:

```powershell
dotnet ef migrations add AddProductTable
```

This creates a new migration inside the **Migrations** folder.

---

## Updating the Database

Apply all pending migrations to SQL Server.

```powershell
dotnet ef database update
```

This creates or updates database tables automatically.

---

## Removing a Migration

If the latest migration is no longer required:

```powershell
dotnet ef migrations remove
```

---

## Listing Migrations

View all migrations.

```powershell
dotnet ef migrations list
```

---

## Seeding Data During Migrations

Seed initial data using **HasData()**.

Example:

```csharp
modelBuilder.Entity<Category>().HasData(
    new Category
    {
        Id = 1,
        Name = "Electronics"
    },
    new Category
    {
        Id = 2,
        Name = "Furniture"
    }
);
```

Benefits:

- Initial database data
- Automatic insertion
- Consistent environment

---

## Managing Database Schema Changes

Whenever entity classes change:

1. Modify Entity Classes
2. Add Migration
3. Update Database

Workflow:

Entity Changes
      ↓
Add Migration
      ↓
Migration File Created
      ↓
Update Database
      ↓
Database Updated

---

## Advantages

- Automatic schema updates
- Version control for database
- Easy rollback
- Better collaboration
- Reduced manual SQL

---

## Conclusion

EF Core Migrations simplify database management by tracking schema changes, generating migration files, seeding data, and updating SQL Server automatically.
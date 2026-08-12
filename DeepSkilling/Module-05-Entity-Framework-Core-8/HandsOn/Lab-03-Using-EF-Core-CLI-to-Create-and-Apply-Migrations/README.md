# Lab 3: Using EF Core CLI to Create and Apply Migrations

## Scenario

The retail store database needs to be created from the entity models using Entity Framework Core 8. Instead of manually creating tables, EF Core CLI generates migration files and applies them to SQL Server.

---

## Objective

- Install EF Core CLI
- Create an Initial Migration
- Apply the migration to SQL Server
- Verify database tables

---

## Step 1: Install EF Core CLI

```bash
dotnet tool install --global dotnet-ef
```

---

## Step 2: Create Initial Migration

```bash
dotnet ef migrations add InitialCreate
```

This command creates a **Migrations** folder containing migration files.

---

## Step 3: Update Database

```bash
dotnet ef database update
```

EF Core creates the database and required tables.

---

## Step 4: Verify Database

Open SQL Server Management Studio (SSMS).

Expand:

```
RetailStoreDB
    Tables
        Categories
        Products
```

---

## Expected Result

- Database created successfully
- Products table created
- Categories table created
- Migration history table created

---

## Learning Outcome

Understand how EF Core CLI automates database schema creation and updates.
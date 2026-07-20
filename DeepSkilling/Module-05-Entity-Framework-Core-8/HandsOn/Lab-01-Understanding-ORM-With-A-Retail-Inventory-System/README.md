# Lab 1: Understanding ORM with a Retail Inventory System

## Scenario

A retail store needs an inventory management system to track products, categories, and stock levels. The system should store information in a SQL Server database while allowing developers to work with C# objects instead of writing SQL queries manually.

---

## Objective

Understand Object Relational Mapping (ORM) and how Entity Framework Core 8.0 connects C# classes with relational database tables.

---

## Step 1: What is ORM?

ORM (Object Relational Mapping) is a technique that maps C# classes to database tables.

Example:

| C# Class | Database Table |
| -------- | -------------- |
| Product  | Products       |
| Category | Categories     |

Benefits:

* Improved productivity
* Better maintainability
* Reduced SQL code
* Object-oriented development

---

## Step 2: EF Core vs Entity Framework

| Feature             | EF Core 8 | EF Framework 6 |
| ------------------- | --------- | -------------- |
| Cross Platform      | Yes       | No             |
| Performance         | High      | Moderate       |
| Open Source         | Yes       | Yes            |
| Cloud Support       | Excellent | Limited        |
| Modern .NET Support | Yes       | No             |

---

## Step 3: New Features in EF Core 8

### JSON Column Mapping

Supports storing JSON data directly inside database columns.

### Compiled Models

Improves application startup and query performance.

### Interceptors

Provides hooks for monitoring and modifying database operations.

### Better Bulk Operations

Improves performance when inserting or updating large amounts of data.

---

## Step 4: Create .NET Console Application

```bash
dotnet new console -n RetailInventory

cd RetailInventory
```

---

## Step 5: Install EF Core Packages

```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer

dotnet add package Microsoft.EntityFrameworkCore.Design
```

---

## Outcome

Successfully understood ORM concepts and the role of Entity Framework Core 8.0 in modern .NET applications.

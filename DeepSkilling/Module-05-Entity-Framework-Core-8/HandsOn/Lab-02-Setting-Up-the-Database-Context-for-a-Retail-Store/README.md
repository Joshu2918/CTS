# Lab 2: Setting Up the Database Context for a Retail Store

## Scenario

A retail store wants to store product and category information in a SQL Server database using Entity Framework Core 8.

---

## Objective

Configure Entity Framework Core DbContext and establish a connection to SQL Server.

---

## Step 1: Create Entity Models

Create two entity classes:

- Category
- Product

These represent the database tables.

---

## Step 2: Create AppDbContext

Create a class that inherits from DbContext.

Responsibilities:

- Manage database connection
- Track entity changes
- Execute queries
- Save data

---

## Step 3: Configure SQL Server Connection

Configure SQL Server using:

```csharp
optionsBuilder.UseSqlServer(connectionString);
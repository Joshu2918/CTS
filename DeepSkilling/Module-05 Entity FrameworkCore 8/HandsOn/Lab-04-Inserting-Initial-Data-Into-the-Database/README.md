# Lab 4: Inserting Initial Data into the Database

## Scenario

The retail store manager wants to populate the database with initial categories and products before the application is used by customers.

---

## Objective

Learn how to insert records into SQL Server using Entity Framework Core 8 asynchronous methods.

---

## Concepts Covered

- AddAsync()
- AddRangeAsync()
- SaveChangesAsync()
- Entity Relationships
- SQL Server Integration

---

## Step 1: Create Categories

```csharp
var electronics = new Category
{
    Name = "Electronics"
};

var groceries = new Category
{
    Name = "Groceries"
};

await context.Categories.AddRangeAsync(
    electronics,
    groceries);
```

---

## Step 2: Create Products

```csharp
var product1 = new Product
{
    Name = "Laptop",
    Price = 75000,
    Category = electronics
};

var product2 = new Product
{
    Name = "Rice Bag",
    Price = 1200,
    Category = groceries
};

await context.Products.AddRangeAsync(
    product1,
    product2);
```

---

## Step 3: Save Changes

```csharp
await context.SaveChangesAsync();
```

---

## Step 4: Run the Application

```bash
dotnet run
```

---

## Step 5: Verify Database

Open SQL Server Management Studio (SSMS).

Verify the following tables:

- Categories
- Products
- __EFMigrationsHistory

Ensure that the inserted records are available.

---

## Expected Result

Categories Inserted

| Id | Name |
|----|------|
|1|Electronics|
|2|Groceries|

Products Inserted

| Id | Name | Price |
|----|--------|---------|
|1|Laptop|75000|
|2|Rice Bag|1200|

---

## Learning Outcome

Successfully inserted initial data into SQL Server using Entity Framework Core asynchronous methods and verified the inserted records.
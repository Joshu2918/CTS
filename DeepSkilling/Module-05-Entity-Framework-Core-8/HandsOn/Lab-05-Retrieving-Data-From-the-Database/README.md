# Lab 6: Retrieving Data from the Database

## Scenario

The retail store wants to display product details on its dashboard. Entity Framework Core is used to retrieve product information efficiently from the SQL Server database.

---

## Objective

Learn how to retrieve records using:

- ToListAsync()
- FindAsync()
- FirstOrDefaultAsync()

---

## Step 1: Retrieve All Products

```csharp
var products = await context.Products.ToListAsync();

foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}
```

---

## Step 2: Find Product by ID

```csharp
var product = await context.Products.FindAsync(1);

Console.WriteLine($"Found: {product?.Name}");
```

---

## Step 3: Retrieve First Matching Record

```csharp
var expensive =
await context.Products
.FirstOrDefaultAsync(p => p.Price > 50000);

Console.WriteLine($"Expensive Product: {expensive?.Name}");
```

---

## Expected Output

```
Laptop - ₹75000
Rice Bag - ₹1200

Found: Laptop

Expensive Product: Laptop
```

---

## Learning Outcome

Successfully retrieved data from SQL Server using Entity Framework Core asynchronous query methods.
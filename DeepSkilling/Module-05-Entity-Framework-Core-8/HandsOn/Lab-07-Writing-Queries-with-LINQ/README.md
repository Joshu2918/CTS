# Lab 7: Writing Queries with LINQ

## Scenario

The retail store wants to generate reports by filtering, sorting, and selecting product information using LINQ queries in Entity Framework Core.

---

## Objective

Learn how to use:

- Where()
- OrderByDescending()
- Select()
- ToListAsync()
- LINQ Projection (DTO)

---

## Step 1: Filter and Sort Products

```csharp
var filtered = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();
```

Display the result:

```csharp
foreach (var product in filtered)
{
    Console.WriteLine($"{product.Name} - ₹{product.Price}");
}
```

---

## Step 2: Project into DTO

```csharp
var productDTOs = await context.Products
    .Select(p => new
    {
        p.Name,
        p.Price
    })
    .ToListAsync();
```

Display the DTOs:

```csharp
foreach (var product in productDTOs)
{
    Console.WriteLine($"{product.Name} - ₹{product.Price}");
}
```

---

## Step 3: Run the Application

```bash
dotnet run
```

---

## Expected Output

```
Filtered Products

Laptop - ₹70000
Rice Bag - ₹1200

Projected DTO

Laptop - ₹70000
Rice Bag - ₹1200

Application Executed Successfully!
```

---

## Learning Outcome

Successfully used LINQ methods to filter, sort, and project data using Entity Framework Core 8.
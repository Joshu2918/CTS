# Lab 6: Updating and Deleting Records

## Scenario

The retail store periodically updates product prices and removes discontinued products from its inventory. Entity Framework Core is used to perform update and delete operations efficiently.

---

## Objective

Learn how to:

- Retrieve a record using `FirstOrDefaultAsync()`
- Update an existing record
- Delete a record
- Save changes using `SaveChangesAsync()`

---

## Step 1: Update a Product

```csharp
var product = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Laptop");

if (product != null)
{
    product.Price = 70000;

    await context.SaveChangesAsync();
}
```

---

## Step 2: Delete a Product

```csharp
var toDelete = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Rice Bag");

if (toDelete != null)
{
    context.Products.Remove(toDelete);

    await context.SaveChangesAsync();
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
Updating Product...

✔ Laptop price updated successfully.

Deleting Product...

✔ Rice Bag deleted successfully.

Remaining Products

Laptop - ₹70000

Application Executed Successfully!
```

---

## Learning Outcome

Successfully updated and deleted records using Entity Framework Core 8 and verified the changes in SQL Server.
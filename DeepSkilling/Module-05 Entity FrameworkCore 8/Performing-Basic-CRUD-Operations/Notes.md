# Performing Basic CRUD Operations in EF Core 8

## Introduction

CRUD stands for:

- Create
- Read
- Update
- Delete

These are the most common operations performed on a database.

Entity Framework Core simplifies CRUD operations by allowing developers to work with C# objects instead of writing SQL queries.

---

## Create (Insert Records)

### AddAsync()

Used to add new records into the database.

Example:

```csharp
var student = new Student
{
    Name = "Pramod"
};

await context.Students.AddAsync(student);

await context.SaveChangesAsync();
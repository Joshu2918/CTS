# LINQ Queries in EF Core 8

## Introduction

Language Integrated Query (LINQ) is a feature of C# that allows developers to query collections and databases using a consistent syntax. Entity Framework Core translates LINQ queries into SQL statements.

---

## Why LINQ?

- Simple syntax
- Strongly typed queries
- Compile-time checking
- IntelliSense support
- Automatic SQL generation

---

## Using Where()

Filters records based on a condition.

Example:

```csharp
var students = context.Students
                      .Where(s => s.Age > 20)
                      .ToList();
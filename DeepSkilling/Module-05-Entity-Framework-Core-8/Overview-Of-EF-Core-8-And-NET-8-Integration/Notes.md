# Overview of EF Core 8 and .NET 8 Integration

## What is ORM?

ORM (Object Relational Mapping) is a technique that maps database tables to C# classes.

Instead of writing SQL queries manually, developers interact with objects and EF Core automatically generates SQL statements.

### Benefits of ORM

* Reduces database code
* Improves productivity
* Better maintainability
* Strong type safety
* Faster development

## Entity Framework Core

Entity Framework Core is Microsoft's lightweight, cross-platform ORM framework for .NET applications.

It supports:

* SQL Server
* MySQL
* PostgreSQL
* SQLite
* Oracle

## EF Core vs Entity Framework

| Feature             | EF Core 8 | Entity Framework 6 |
| ------------------- | --------- | ------------------ |
| Cross Platform      | Yes       | No                 |
| Performance         | Faster    | Slower             |
| Cloud Support       | Excellent | Limited            |
| Modern .NET Support | Yes       | No                 |
| Open Source         | Yes       | Yes                |

## New Features in EF Core 8

### Improved Performance

Better query execution and optimized SQL generation.

### JSON Column Mapping

Allows JSON data to be stored and queried efficiently.

### Enhanced LINQ Translation

More LINQ expressions are translated directly into SQL.

### Better Raw SQL Support

Improved support for raw SQL queries.

### .NET 8 Integration

EF Core 8 works seamlessly with .NET 8, providing better performance and long-term support.

## Conclusion

EF Core 8 is a powerful ORM framework that simplifies database operations and improves developer productivity in modern .NET applications.

# Creating a Simple Database Model

## Introduction

In Entity Framework Core, a database model is created using classes called Entities. These entities represent database tables, while class properties represent table columns.

The Code-First approach allows developers to create the database structure directly from C# classes.

---

## Defining Entities

An Entity is a C# class that maps to a database table.

Example:

```csharp
public class Student
{
    public int StudentId { get; set; }

    public string Name { get; set; }
}
```

Entity Framework Core automatically creates a table named Students.

---

## Primary Keys

A Primary Key uniquely identifies each record in a table.

Example:

```csharp
public int StudentId { get; set; }
```

By convention, EF Core treats:

```text
Id
StudentId
CourseId
```

as Primary Keys.

---

## Foreign Keys

A Foreign Key establishes a relationship between two tables.

Example:

```csharp
public int CourseId { get; set; }
```

This connects Student records with Course records.

---

## Navigation Properties

Navigation Properties allow easy navigation between related entities.

Example:

```csharp
public Course Course { get; set; }
```

Benefits:

* Simplifies querying related data
* Supports eager loading
* Supports lazy loading

---

## One-to-Many Relationship

One Course can have many Students.

```text
Course
------
CourseId (PK)

Student
-------
StudentId (PK)
CourseId (FK)
```

---

## Example Relationship

Student belongs to one Course.

Course contains many Students.

```csharp
public class Student
{
    public int StudentId { get; set; }

    public string Name { get; set; }

    public int CourseId { get; set; }

    public Course Course { get; set; }
}
```

```csharp
public class Course
{
    public int CourseId { get; set; }

    public string CourseName { get; set; }

    public ICollection<Student> Students { get; set; }
}
```

---

## Code-First Approach

Code-First allows developers to:

1. Create entity classes.
2. Configure DbContext.
3. Generate migrations.
4. Create database automatically.

Workflow:

```text
Create Entity Classes
        ↓
Create DbContext
        ↓
Add Migration
        ↓
Update Database
        ↓
Database Created
```

---

## Code-First vs Database-First

| Feature           | Code-First   | Database-First    |
| ----------------- | ------------ | ----------------- |
| Database Creation | From Code    | Existing Database |
| Flexibility       | High         | Medium            |
| Best For          | New Projects | Existing Systems  |
| Development Speed | Fast         | Moderate          |

---

## Advantages of Code-First

* Faster development
* Strong typing
* Easy maintenance
* Automatic migrations
* Better integration with .NET

## Conclusion

Entity Framework Core uses entities, primary keys, foreign keys, and navigation properties to model real-world relationships. The Code-First approach simplifies database creation and maintenance.

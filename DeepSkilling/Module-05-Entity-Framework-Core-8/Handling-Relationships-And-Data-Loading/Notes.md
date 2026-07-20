# Handling Relationships and Data Loading in EF Core 8

## Introduction

Entity Framework Core provides different ways to load related data and manage relationships between entities. Choosing the appropriate loading strategy improves application performance and readability.

---

# Data Loading Techniques

## 1. Eager Loading

Eager Loading loads related entities together with the main entity using the Include() method.

Example:

```csharp
var categories = context.Categories
                        .Include(c => c.Products)
                        .ToList();
```

Advantages

- Loads all required data in a single query.
- Reduces multiple database calls.
- Best when related data is always required.

---

## 2. Lazy Loading

Lazy Loading loads related data only when it is accessed.

Example:

```csharp
var category = context.Categories.First();

var products = category.Products;
```

Advantages

- Loads data only when needed.
- Saves memory.

Disadvantages

- Can generate multiple database queries.
- May reduce performance if overused.

---

## 3. Explicit Loading

Explicit Loading loads related data manually.

Example:

```csharp
var category = context.Categories.Find(1);

context.Entry(category)
       .Collection(c => c.Products)
       .Load();
```

Advantages

- Full control over loading.
- Efficient when only specific related data is required.

---

# Entity Relationships

## One-to-One Relationship

One record in one table corresponds to exactly one record in another table.

Example

Person ↔ Passport

---

## One-to-Many Relationship

One parent can have multiple child records.

Example

Category → Products

One Category contains many Products.

---

## Many-to-Many Relationship

Multiple records from one table relate to multiple records in another table.

Example

Students ↔ Courses

One Student can enroll in many Courses.

One Course can contain many Students.

---

# Configuring Relationships

EF Core supports relationships using:

- Primary Keys
- Foreign Keys
- Navigation Properties
- Fluent API

---

# Circular References

Circular references occur when two entities reference each other.

Example

Category
    ↓
Products
    ↑
Category

Problems

- Infinite JSON serialization
- Increased memory usage

Solutions

- DTOs
- Ignore properties during serialization
- Configure JSON options

---

# Advantages

- Better data organization
- Easy navigation
- Optimized queries
- Strong object-oriented design

---

# Conclusion

EF Core provides flexible relationship management and multiple loading strategies to efficiently retrieve and manage related data.
# Single Responsibility Principle (SRP)

## Definition

A class should have only one reason to change.

In simple terms, a class should focus on a single responsibility instead of handling multiple unrelated tasks.

## Why SRP?

When a class performs many responsibilities:

* Code becomes difficult to maintain.
* Small changes may affect unrelated functionality.
* Testing becomes harder.
* Reusability decreases.

## Example Problem

Consider a Student class that:

1. Stores student details.
2. Calculates grades.
3. Saves data to a database.

If database requirements change, the Student class changes.

If grading logic changes, the same class changes again.

This violates SRP because the class has multiple responsibilities.

## Solution

Separate responsibilities into different classes:

* Student → Stores student information.
* GradeCalculator → Calculates grades.
* StudentRepository → Handles database operations.

## Benefits

* Better maintainability
* Easier testing
* Reduced coupling
* Improved readability

## Real World Example

A restaurant waiter takes orders.

The waiter should not cook food and manage accounting at the same time.

Each role has a single responsibility.

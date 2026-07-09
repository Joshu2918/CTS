# Single Responsibility Principle (SRP)

## Definition

A class should have one responsibility and therefore one reason to change.

## Why SRP?

When a class performs many unrelated tasks:

- Code becomes difficult to maintain.
- Small changes may affect unrelated functionality.
- Testing becomes harder.
- Reusability decreases.

## Example Problem

A `Student` class that stores details, calculates grades, and saves data has multiple reasons to change.

## Solution

Separate the responsibilities:

- `Student` stores student information.
- `GradeCalculator` calculates grades.
- `StudentRepository` handles persistence.

## Benefits

- Better maintainability
- Easier testing
- Reduced coupling
- Improved readability

## Real-World Example

A restaurant waiter takes orders; the waiter should not also cook food and manage accounting. Each role has one focused responsibility.

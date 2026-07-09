# Dependency Inversion Principle (DIP)

## Definition

High-level modules should not depend on low-level modules. Both should depend on abstractions.

Abstractions should not depend on details; details should depend on abstractions.

## Why DIP?

When classes directly depend on concrete implementations, changing one component often requires changes elsewhere. DIP reduces this tight coupling and creates flexible, maintainable applications.

## Example Problem

Consider a notification service that may send messages through email, SMS, or another provider. If `UserManager` directly creates `EmailService`, switching providers requires changing its business logic.

## Solution

Create a common `NotificationService` abstraction and inject the required implementation into `UserManager`.

## Benefits

- Loose coupling
- Better maintainability
- Easier testing
- Improved scalability

## Real-World Example

A mobile charger depends on a power-socket interface rather than how electricity is generated. The power source can change without affecting the charger.

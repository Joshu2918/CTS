# Dependency Inversion Principle (DIP)

## Definition

High-level modules should not depend on low-level modules.

Both should depend on abstractions.

Abstractions should not depend on details. Details should depend on abstractions.

## Why DIP?

When classes directly depend on concrete implementations, changing one component often requires changes in other components.

This creates tight coupling.

DIP helps create flexible and maintainable applications.

## Example Problem

Consider a Notification Service.

The service may send notifications through:

* Email
* SMS
* WhatsApp

If the NotificationService directly creates an EmailService object, switching to SMS requires modifying existing code.

## Solution

Create a common abstraction.

NotificationService depends on the abstraction rather than specific implementations.

New notification methods can be added without changing existing business logic.

## Benefits

* Loose coupling
* Better maintainability
* Easier testing
* Improved scalability

## Real World Example

A mobile charger uses a power socket.

The charger depends on the socket interface, not on how electricity is generated.

The power source can change without affecting the charger.

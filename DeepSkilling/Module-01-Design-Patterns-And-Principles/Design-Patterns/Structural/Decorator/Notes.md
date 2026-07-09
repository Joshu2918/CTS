# Decorator Pattern

## Definition

The Decorator pattern adds new functionality to an object dynamically without modifying its structure. It wraps an existing object and extends its behavior.

## Why Use Decorator?

Inheritance can create many subclasses. Decorator provides a flexible alternative by adding features at runtime.

## Participants

- **Component:** Declares the common interface.
- **Concrete Component:** Provides the original behavior.
- **Decorator:** Stores and delegates to a component.
- **Concrete Decorator:** Adds new behavior.

## Advantages

- Flexible functionality extension
- Follows the Open/Closed Principle
- Reduces subclass explosion
- Allows features to be combined

## Real-World Example

A coffee order begins with a base coffee. Milk, sugar, or chocolate decorators can then wrap it, with each add-on extending the original description.

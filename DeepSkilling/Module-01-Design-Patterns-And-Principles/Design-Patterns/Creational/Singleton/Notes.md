# Singleton Pattern

## Definition

The Singleton pattern ensures that only one instance of a class exists throughout an application and provides a shared access point to it.

## Why Use Singleton?

Some resources commonly need one coordinated instance:

- Configuration manager
- Logger
- Cache manager
- Connection manager

## Advantages

- Controlled access to one object
- Lazy initialization
- Consistent shared state

## Disadvantages

- Global state can increase coupling
- Hidden dependencies make testing harder
- Overuse can violate the Single Responsibility Principle

## Real-World Example

An application can use one configuration manager to read and expose application settings.

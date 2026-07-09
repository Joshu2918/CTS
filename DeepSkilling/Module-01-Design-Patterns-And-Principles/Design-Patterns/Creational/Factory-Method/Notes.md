# Factory Method Pattern

## Definition

The Factory Method pattern provides an interface for creating objects while allowing a factory or subclass to decide which concrete object should be created.

## Why Use Factory?

Object-creation logic should be separated from business logic. This reduces coupling and makes new implementations easier to introduce.

## Advantages

- Loose coupling
- Centralized object creation
- Easier extension
- Better scalability

## Real-World Example

An online payment system can create UPI, card, or net-banking payment handlers without changing the client code.

# Adapter Pattern

## Definition

The Adapter pattern converts one interface into another interface expected by the client.

## Why Use Adapter?

It allows existing or third-party code to work with a new system without modifying the original class.

## Participants

- **Target:** Interface expected by the client
- **Adaptee:** Existing class with an incompatible interface
- **Adapter:** Translates target operations into adaptee operations
- **Client:** Uses the target interface

## Advantages

- Reuses existing code
- Keeps compatibility logic in one place
- Follows the Open/Closed Principle

## Real-World Example

A printer adapter lets modern application code use a legacy printer with a different method name.

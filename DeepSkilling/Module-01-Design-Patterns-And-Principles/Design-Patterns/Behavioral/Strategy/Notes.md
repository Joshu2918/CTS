# Strategy Pattern

## Definition

The Strategy pattern defines a family of interchangeable algorithms and lets the client select one at runtime.

## Participants

- **Strategy:** Declares a common operation.
- **Concrete Strategy:** Implements one algorithm or behavior.
- **Context:** Uses a strategy through its common interface.

## Why Use Strategy?

Strategy removes large conditional blocks and keeps each algorithm in a separate, focused class.

## Advantages

- Changes behavior at runtime
- Follows the Open/Closed Principle
- Keeps algorithms independently testable
- Replaces complex conditional logic

## Real-World Example

A payment processor can complete a purchase using UPI, a card, or another payment method without changing its core processing logic.

# Liskov Substitution Principle (LSP)

## Definition

Objects of a derived class should be able to replace objects of a base class without affecting program correctness.

In simple terms, a subtype must honor the behavior promised by its parent type.

## Why LSP?

Inheritance should represent a true “is-a” relationship. If a child changes expected behavior, client code becomes unreliable and difficult to maintain.

## Example Problem

Credit-card and UPI payments should both process payments consistently. If one implementation rejects otherwise valid operations or changes the contract, substitution is broken.

## Solution

Define a clear `PaymentMethod` contract and ensure every payment implementation follows it. `PaymentProcessor` can then use any implementation without special-case logic.

## Benefits

- Predictable behavior
- Better code reuse
- Safer inheritance
- Easier maintenance

## Real-World Example

Debit and credit cards can both be used at a payment terminal. The terminal should rely on their shared payment contract rather than card-specific logic.

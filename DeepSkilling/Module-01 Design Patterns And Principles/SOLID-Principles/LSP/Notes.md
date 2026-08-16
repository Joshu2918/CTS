# Liskov Substitution Principle (LSP)

## Definition

Objects of a derived class should be able to replace objects of a base class without affecting the correctness of the program.

In simple words, if class B extends class A, then class B should behave in a way that does not break the expectations of class A.

## Why LSP?

Inheritance should represent a true "is-a" relationship.

If a child class changes expected behavior, code becomes unreliable and difficult to maintain.

## Example Problem

Consider a Payment class.

Different payment methods such as Credit Card and UPI should process payments in a consistent way.

If one implementation throws unexpected exceptions or behaves differently, the substitution principle is violated.

## Solution

Ensure all child classes follow the contract defined by the parent class or interface.

Any derived object should work correctly wherever the base type is expected.

## Benefits

* Predictable behavior
* Better code reuse
* Safer inheritance
* Easier maintenance

## Real World Example

A debit card and a credit card can both be used at a payment terminal.

The terminal should not need special logic to determine which card is being used.

Both should follow the same payment contract.

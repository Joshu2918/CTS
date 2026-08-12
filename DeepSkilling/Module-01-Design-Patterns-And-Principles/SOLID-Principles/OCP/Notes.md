# Open/Closed Principle (OCP)

## Definition

Software entities should be open for extension but closed for modification. New behavior should be added without repeatedly changing tested code.

## Why OCP?

When requirements change, editing the same conditional-heavy class can introduce bugs. Interfaces and polymorphism allow behavior to grow through new implementations.

## Example Problem

A billing application initially supports a student discount, then gains employee and festival discounts. Adding each type directly to one class makes it increasingly difficult to maintain.

## Solution

Create a `Discount` abstraction. Every new discount implements that contract, while `BillingService` remains unchanged.

## Benefits

- Easier maintenance
- Better scalability
- Lower regression risk
- Extensible design

## Real-World Example

A checkout system can accept new promotion strategies without changing its core billing workflow.

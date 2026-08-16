# Open Closed Principle (OCP)

## Definition

Software entities should be open for extension but closed for modification.

This means we should be able to add new functionality without changing existing code.

## Why OCP?

When requirements change, modifying old code can introduce bugs.

Instead of changing existing classes repeatedly, we should extend behavior through inheritance, interfaces, or polymorphism.

## Example Problem

Suppose an application calculates discounts.

Initially it supports:

* Student Discount

Later the company adds:

* Employee Discount
* Festival Discount

If we keep modifying the same class every time a new discount type is introduced, the class becomes difficult to maintain.

## Solution

Create a common abstraction and allow new discount types to implement it.

New functionality can then be added without modifying existing code.

## Benefits

* Easier maintenance
* Better scalability
* Reduced risk of bugs
* Cleaner architecture

## Real World Example

A mobile charger follows OCP.

You can charge different phones using adapters without changing the charger itself.

The charger remains unchanged while functionality is extended.

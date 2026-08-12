# Breaking External Dependencies

## Loosely Coupled Design

Loosely coupled systems reduce dependencies between components and improve maintainability.

## Dependency Injection

Dependency Injection supplies required objects from outside a class.

Types:

### Method Injection

Dependencies are passed as method parameters.

### Property Injection

Dependencies are assigned through properties.

### Constructor Injection

Dependencies are passed through constructors.

Constructor injection is the most commonly used approach.

## Mocking Frameworks

Mocking frameworks create fake implementations of dependencies during testing.

Benefits:

* Faster tests
* No database dependency
* No external service dependency

## Moq Framework

Moq is a popular .NET mocking framework.

Features:

* Mock interfaces
* Verify method calls
* Simulate external systems

## State Based Testing

Validates final state after execution.

## Interaction Testing

Validates communication between objects.

## Benefits of Moq

* Isolated unit testing
* Better test reliability
* Improved maintainability
* Faster execution

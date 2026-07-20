# Fundamentals of Unit Testing

## Characteristics of Good Unit Tests

* Fast
* Independent
* Repeatable
* Self-validating
* Maintainable

## What to Test

* Business logic
* Calculations
* Validation rules

## What Not to Test

* Third-party libraries
* Framework internals
* Database engine functionality

## Naming Tests

A good naming convention:

MethodName_Condition_ExpectedResult

Example:

CalculateTotal_ValidInput_ReturnsCorrectTotal

## Black Box Testing

Testing functionality without knowing internal implementation details.

## Setup and TearDown

Setup executes before every test.

TearDown executes after every test.

Used for initialization and cleanup.

## Parameterized Tests

Allow multiple inputs to be tested using a single test method.

## Ignoring Tests

Temporary exclusion of tests using attributes.

## Trustworthy Tests

Reliable tests should:

* Produce consistent results
* Avoid external dependencies
* Be easy to understand

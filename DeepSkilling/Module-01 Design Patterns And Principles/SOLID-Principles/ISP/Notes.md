# Interface Segregation Principle (ISP)

## Definition

Clients should not be forced to depend on methods they do not use.

Instead of creating one large interface, it is better to create multiple smaller and specific interfaces.

## Why ISP?

Large interfaces often force classes to implement unnecessary methods.

This leads to unused code and makes maintenance difficult.

## Example Problem

Consider an Employee Management System.

Some employees can:

* Work on projects
* Attend meetings

Some employees can only:

* Work on projects

If a single interface contains both responsibilities, every class must implement methods that may not be relevant.

## Solution

Create separate interfaces for separate responsibilities.

Classes implement only the interfaces they actually need.

## Benefits

* Cleaner design
* Better maintainability
* Reduced code duplication
* Easier testing

## Real World Example

In a company, not every employee is a manager.

Regular employees perform project tasks.

Managers perform project tasks and attend meetings.

It is better to separate these responsibilities rather than forcing every employee to attend meetings.

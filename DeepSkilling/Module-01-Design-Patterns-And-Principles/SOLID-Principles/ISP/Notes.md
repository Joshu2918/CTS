# Interface Segregation Principle (ISP)

## Definition

Clients should not be forced to depend on methods they do not use. Prefer multiple small, focused interfaces over one large interface.

## Why ISP?

Large interfaces force classes to implement unnecessary methods, producing unused code and making maintenance difficult.

## Example Problem

In an employee-management system, all employees work on projects, but only some attend management meetings. One large employee interface would force every employee to implement both operations.

## Solution

Create separate `ProjectWork` and `MeetingParticipant` interfaces. Each class implements only the capabilities it needs.

## Benefits

- Cleaner design
- Better maintainability
- Reduced coupling
- Easier testing

## Real-World Example

A regular employee performs project tasks, while a manager performs project tasks and attends meetings. Their contracts should reflect those different responsibilities.

# Command Pattern

## Definition

The Command pattern encapsulates a request as an object. This allows requests to be queued, logged, delayed, or undone.

## Participants

- **Command:** Declares the operation to execute.
- **Concrete Command:** Connects a receiver to an action.
- **Receiver:** Performs the actual work.
- **Invoker:** Requests execution without knowing the implementation.
- **Client:** Creates and connects the objects.

## Why Use Command?

It separates the sender of a request from the receiver and improves flexibility and extensibility.

## Advantages

- Decouples sender and receiver
- Supports undo operations
- Supports request logging
- Makes commands easy to queue or schedule

## Real-World Example

A remote control does not need to know how a light or television works. It sends commands such as:

- Turn on
- Turn off
- Change channel

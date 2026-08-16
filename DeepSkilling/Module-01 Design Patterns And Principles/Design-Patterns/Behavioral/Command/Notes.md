# Command Pattern

## Definition

The Command Pattern encapsulates a request as an object.

This allows requests to be queued, logged, or executed later.

## Why Use Command?

Separates the sender of a request from the receiver.

Improves flexibility and extensibility.

## Advantages

* Decouples sender and receiver
* Supports undo operations
* Supports request logging

## Real World Example

A TV remote does not directly know how a TV works.

The remote simply sends commands such as:

* Turn On
* Turn Off
* Change Channel

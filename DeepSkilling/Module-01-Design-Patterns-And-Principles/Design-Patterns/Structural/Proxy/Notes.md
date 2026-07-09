# Proxy Pattern

## Definition

The Proxy pattern provides a placeholder or representative object that controls access to another object. The proxy can perform additional operations before delegating a request.

## Why Use Proxy?

Proxies are useful for:

- Security
- Access control
- Logging
- Lazy loading
- Caching
- Performance optimization

## Participants

- **Subject:** Common interface shared by proxy and real object.
- **Real Subject:** Performs the actual operation.
- **Proxy:** Controls access and delegates approved requests.

## Advantages

- Controlled access
- Improved security
- Better resource management
- Adds cross-cutting behavior without changing the real object

## Real-World Example

An ATM acts as a proxy between a customer and a bank account, validating access before forwarding operations.

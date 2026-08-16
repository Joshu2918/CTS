# Microservice Communication and Data Management

## Overview

Microservices communicate with each other using lightweight communication protocols such as HTTP, gRPC, and messaging systems like RabbitMQ or Kafka. Each microservice owns its data, ensuring loose coupling and independent scalability.

---

# Learning Objectives

After completing this topic, you will be able to:

- Understand inter-service communication.
- Learn HTTP, Messaging, and gRPC communication.
- Understand Service Discovery.
- Implement communication in ASP.NET Core Web API.
- Compare Database per Service and Shared Database patterns.
- Use Entity Framework Core in Microservices.
- Understand data consistency and distributed transactions.

---

# Inter-Service Communication

Microservices exchange information using APIs or messaging.

Communication Methods

- HTTP REST APIs
- gRPC
- Message Brokers (RabbitMQ, Kafka)
- Event-Driven Communication

---

# HTTP Communication

Uses REST APIs over HTTP.

Example

```
Order Service
      │
      ▼
Product Service
```

Advantages

- Simple
- Widely Supported
- Easy to Debug

---

# Messaging Communication

Uses asynchronous communication through message brokers.

Examples

- RabbitMQ
- Apache Kafka
- Azure Service Bus

Advantages

- Loose Coupling
- Reliable Delivery
- Better Scalability

---

# gRPC Communication

gRPC is a high-performance communication framework using HTTP/2 and Protocol Buffers.

Advantages

- Fast
- Lightweight
- Strongly Typed
- Streaming Support

---

# Service Discovery

Service Discovery helps microservices locate each other dynamically.

Popular Tools

- Consul
- Eureka
- Kubernetes DNS

Benefits

- Dynamic Discovery
- Load Balancing
- High Availability

---

# Communication in ASP.NET Core

Typical Flow

Client

↓

API Gateway

↓

Order Service

↓

Product Service

↓

Inventory Service

---

# Database Patterns

## Database Per Service

Each microservice has its own database.

Advantages

- Loose Coupling
- Independent Deployment
- Independent Scaling

---

## Shared Database

Multiple services share a single database.

Advantages

- Simpler Queries

Disadvantages

- Tight Coupling
- Difficult Scaling

---

# Entity Framework Core

Entity Framework Core is commonly used for data access in microservices.

Features

- ORM
- LINQ Queries
- Migrations
- Change Tracking

---

# Data Consistency

Approaches

- Eventual Consistency
- Saga Pattern
- Outbox Pattern

---

# Distributed Transactions

Traditional transactions are avoided in microservices.

Instead use

- Saga Pattern
- Compensation Transactions

---

# Best Practices

- One database per service.
- Prefer asynchronous messaging.
- Keep services loosely coupled.
- Avoid distributed transactions.
- Use API Gateway.
- Monitor communication.

---

# Conclusion

Microservice communication and data management ensure scalability, resilience, and maintainability by using independent services, dedicated databases, and efficient communication mechanisms.
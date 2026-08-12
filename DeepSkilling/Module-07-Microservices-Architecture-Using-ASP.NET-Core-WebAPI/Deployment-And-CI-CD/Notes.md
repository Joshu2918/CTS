---

# Logging Strategies in ASP.NET Core Web API

Logging helps monitor application behavior, diagnose issues, and audit important events.

## Log Levels

- Trace
- Debug
- Information
- Warning
- Error
- Critical

Example

```csharp
_logger.LogInformation("Employee retrieved successfully.");

_logger.LogError("Database connection failed.");
```

---

# Structured Logging

Structured logging records logs in a searchable format.

Popular Libraries

- Serilog
- NLog
- Microsoft.Extensions.Logging

Benefits

- Better debugging
- Centralized log management
- Performance monitoring

---

# Health Checks

Health checks determine whether a microservice is running correctly.

Program.cs

```csharp
builder.Services.AddHealthChecks();

app.MapHealthChecks("/health");
```

Health Endpoint

```
https://localhost:5001/health
```

Typical Response

```json
Healthy
```

---

# Metrics Endpoints

Metrics help monitor system performance.

Common Metrics

- Request Count
- Response Time
- CPU Usage
- Memory Usage
- Error Rate

Monitoring Tools

- Prometheus
- Grafana
- Azure Monitor

---

# Deployment Strategies

## Rolling Update

Gradually replaces old instances with new ones.

Advantages

- No downtime
- Safer deployment
- Easy rollback

---

## Blue-Green Deployment

Two production environments are maintained.

Blue → Current Version

Green → New Version

Traffic switches after successful validation.

Advantages

- Zero downtime
- Easy rollback
- Reduced deployment risk

---

# CI/CD Pipelines

Continuous Integration (CI)

Automatically builds and tests code after every commit.

Continuous Deployment (CD)

Automatically deploys applications after successful builds.

Benefits

- Faster delivery
- Reduced manual work
- Reliable deployments

---

# Azure DevOps Pipeline

Typical Flow

Developer

↓

Git Repository

↓

Build Pipeline

↓

Run Unit Tests

↓

Publish Artifacts

↓

Deploy to Azure

---

# GitHub Actions

GitHub Actions automate build, test, and deployment workflows.

Example Workflow

```yaml
name: Build

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
```

Advantages

- Built into GitHub
- Easy automation
- Supports multiple platforms

---

# Docker

Docker packages applications into lightweight containers.

Advantages

- Portability
- Fast Deployment
- Consistent Environment

Basic Commands

```bash
docker build -t employee-api .

docker run -p 8080:80 employee-api
```

---

# Kubernetes

Kubernetes manages containerized applications.

Features

- Auto Scaling
- Load Balancing
- Self Healing
- Rolling Updates

Common Commands

```bash
kubectl apply -f deployment.yaml

kubectl get pods

kubectl get services
```

---

# Deployment Workflow

Developer

↓

GitHub

↓

GitHub Actions / Azure DevOps

↓

Docker Image

↓

Container Registry

↓

Kubernetes Cluster

↓

Microservices

---

# Best Practices

- Use centralized logging.
- Enable health checks.
- Monitor metrics continuously.
- Use rolling updates.
- Automate deployments.
- Containerize applications with Docker.
- Orchestrate services using Kubernetes.
- Secure CI/CD pipelines.

---

# Summary

Microservices become more reliable and scalable by combining structured logging, health checks, monitoring, CI/CD pipelines, Docker containers, Kubernetes orchestration, and modern deployment strategies such as rolling updates and blue-green deployments.
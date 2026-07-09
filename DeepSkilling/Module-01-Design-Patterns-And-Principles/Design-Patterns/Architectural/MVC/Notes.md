# Model View Controller (MVC)

## Definition

MVC (Model View Controller) is an architectural pattern that separates an application into three components:

1. Model
2. View
3. Controller

This separation improves maintainability, scalability, and testability.

## Components

### Model

Responsible for:

- Managing data
- Business logic
- Application state

### View

Responsible for:

- Displaying information to users
- The user interface

### Controller

Responsible for:

- Receiving user input
- Processing requests
- Updating the Model and View

## Why MVC?

Without MVC, business logic and user-interface code can become tightly coupled. MVC separates responsibilities and makes applications easier to maintain.

## Advantages

- Better code organization
- Easier maintenance
- Improved scalability
- Reusable components

## Real-World Example

In an online shopping application:

- **Model:** Product, customer, and order data
- **View:** Web page or mobile screen
- **Controller:** Handles actions such as adding items to the cart and checking out

# Observer Pattern

## Definition

The Observer pattern defines a one-to-many relationship between objects. When the subject changes, all registered observers are notified automatically.

## Participants

- **Subject:** Stores observers and sends notifications.
- **Observer:** Declares the update operation.
- **Concrete Subject:** Produces the state or event being observed.
- **Concrete Observer:** Reacts when it receives an update.

## Why Use Observer?

Observer keeps the subject independent from the concrete objects that react to its events.

## Advantages

- Loosely couples publishers and subscribers
- Supports any number of observers
- Makes event-driven behavior easy to extend
- Allows observers to subscribe and unsubscribe dynamically

## Real-World Example

A video channel notifies every subscriber when a new video is uploaded. The channel does not need to know what each subscriber does with the notification.

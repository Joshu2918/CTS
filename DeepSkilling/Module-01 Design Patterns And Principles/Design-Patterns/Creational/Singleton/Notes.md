# Singleton Pattern

## Definition

The Singleton Pattern ensures that only one instance of a class exists throughout the application and provides a global access point to that instance.

## Why Use Singleton?

Some resources should have only one instance:

* Database Connection
* Logger
* Configuration Manager
* Cache Manager

Creating multiple instances may waste resources or create inconsistent behavior.

## Advantages

* Controlled access to a single object
* Reduced memory usage
* Global accessibility

## Disadvantages

* Difficult to test
* Global state may increase coupling

## Real World Example

An application should use only one configuration manager to read application settings.

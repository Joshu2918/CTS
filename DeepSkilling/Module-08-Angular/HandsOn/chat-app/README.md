# ChatFlow Mini Project

A deliberately small Angular chat application for learning only the most important concepts.

## 7 concepts covered

1. **Standalone Angular Components** — components, templates, `@if`, `@for`, inputs.
2. **Routing + Route Guard** — login route, lazy-loaded chat, `CanActivateFn`.
3. **Services + Dependency Injection** — `AuthService` and `ChatService`.
4. **Signals** — current user, theme, messages and computed room messages.
5. **RxJS** — `Subject`, `Observable`, `debounceTime`, `distinctUntilChanged`, `delay`.
6. **Reactive Forms** — login form, message form, validation and search.
7. **Component-driven UI** — login, layout, room navigation and chat window separated into components.

## What the app does

- Simulated login (no backend/password)
- Protected chat route
- Multiple chat rooms
- Search rooms with RxJS
- Send messages
- Mock real-time bot response using RxJS `Subject` + `delay`
- Light/dark theme using a Signal
- Responsive layout

## What is intentionally NOT included

- Real WebSocket server
- Database
- ASP.NET Core backend
- JWT authentication
- Complex state-management libraries
- Typing indicators
- File uploads
- Message editing/deleting
- Notifications

These can be added later, but they are not needed for this mini project.

## Run

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Suggested learning order

1. Login → understand Reactive Forms + Service + Guard.
2. Room navigation → understand Routing.
3. ChatService → understand Signals.
4. `incomingMessage$` → understand RxJS Subject.
5. Search → understand `valueChanges`, `debounceTime`, `distinctUntilChanged`.
6. Send a message → understand the complete Angular → Service → Signal → UI flow.

## Project goal

Keep this as a **small college mini project**, not a production chat system. The goal is to understand Angular + RxJS fundamentals through one practical application.

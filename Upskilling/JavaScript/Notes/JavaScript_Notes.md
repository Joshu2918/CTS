# JavaScript Notes

## Variables

```javascript
let name = "Pramod";
const age = 22;
```

Use `const` when a binding should not be reassigned and `let` when it must change.

## Functions

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Arrays

```javascript
const numbers = [1, 2, 3];
```

Common array methods include `forEach`, `map`, `filter`, and `find`.

## DOM

```javascript
const demo = document.getElementById("demo");
```

The DOM allows JavaScript to read and update page elements.

## Events

```javascript
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

## Fetch API

```javascript
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
```

Always handle failed responses and network errors when calling an API.

## ES6 Basics

Modern JavaScript includes template literals, destructuring, arrow functions, modules, and promises.

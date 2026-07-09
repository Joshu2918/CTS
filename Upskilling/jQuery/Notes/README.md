# jQuery Notes

## Setup

Add jQuery before code that uses the `$` function:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

## Selectors

```javascript
$("#demo")
$(".card")
$("button")
```

jQuery selectors use CSS selector syntax.

## Events

```javascript
$("#button").on("click", function () {
    console.log("Clicked");
});
```

## DOM Manipulation

- `.text()` reads or changes text.
- `.html()` reads or changes HTML.
- `.css()` changes styles.
- `.addClass()` and `.removeClass()` manage CSS classes.
- `.val()` reads or changes form values.

## Form Validation

Use the form's `submit` event, call `event.preventDefault()`, validate values, and display a clear error or success message.

# CSS3 Notes

## What is CSS?

CSS (Cascading Style Sheets) controls the presentation of HTML documents, including colors, spacing, typography, and layout.

## Selectors

- **Element selector:** targets every matching HTML element, such as `p`.
- **Class selector:** targets elements with a class, such as `.card`.
- **ID selector:** targets one uniquely identified element, such as `#about`.

## Box Model

Every element is made of four layers:

`content → padding → border → margin`

Using `box-sizing: border-box` keeps padding and borders inside the declared width.

## Layout

- **Flexbox** is useful for arranging items in a row or column.
- **Grid** is useful for layouts with rows and columns.

## Responsive Design

Media queries adjust a layout for different screen sizes. A mobile-first design starts with small-screen styles and adds enhancements for larger screens.

## Good Practices

- Use meaningful class names.
- Keep colors and spacing consistent.
- Prefer reusable rules over repeated inline styles.
- Include visible focus styles for keyboard users.

# Changelog

- Overall
  1. **Style Separation**: Instead of using inline CSS in each component file, we should create a separate styles file for each component, using either CSS or JS (for example, with styled-components or CSS modules).
- AppRoot.js
  1. **Type checking with PropTypes**: Use PropTypes to make the code more robust and easy to debug. It also serves as an in-code documentation of sorts.
  2. **Context API**: Using the Context API to manage state for billboardId since it seems to be a piece of state that needs to be shared across multiple components.

# SDUI vs CDUI

Pros of Server-Driven UI:

- Simplified client development
- Rapid changes and A/B testing
- Consistency across platforms
- Less load on client side

Cons of Server-Driven UI:

- Dependence on network connectivity
- High server load
- Potential security risks
- Less flexibility for offline scenarios

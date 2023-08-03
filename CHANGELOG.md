# Changelog

1. **Style Separation**: Instead of using inline CSS in each component file, we should create a separate styles file for each component, using either CSS or JS (for example, with styled-components or CSS modules).
2. **SEO optimization and Accessibility**: Adding meta tags for SEO, using semantic HTML for better accessibility, etc.
3. **Code Splitting**: Code splitting will divide the code into smaller chunks that can then be loaded on demand. React supports this out-of-the-box with React.lazy() and Suspense. Given the size of the current application, there might not be a huge benefit to introducing code splitting as the components seem fairly lightweight. However, assuming this is a simplified version of the real application and/or the application may grow in the future, code splitting might still be useful. This way, the initial load of the page will be faster, which results in a better user experience, especially for users with slower internet connections.
4. **Use React.memo**: If the components render the same result given the same props, we can wrap them in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.
5. **Use HTTP/2**: Make sure your server supports HTTP/2. This protocol allows multiple files to be transferred simultaneously, reducing the amount of time it takes to get all the files.
6.  **Avoid Inline Function Definition**: In your Billboard and Rows component props, avoid inline function definitions. These can cause unnecessary re-renders because a new function is created at each render, which would cause the child component to believe that there's a change in the props. Consider defining these functions beforehand.
7. **Type checking with PropTypes**: Use PropTypes to make the code more robust and easy to debug. It also serves as an in-code documentation of sorts.
8. **Context API**: Using the Context API to manage state for billboardId since it seems to be a piece of state that needs to be shared across multiple components.
9. **Error Boundaries**: Since this is the root component, we need to wrap it in an error boundary for better error handling. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
10. **Component Testing**: Implement tests for all the components to ensure they're working as expected. This can be done using testing libraries such as Jest and Testing Library.

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

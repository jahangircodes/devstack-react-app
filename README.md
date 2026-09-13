# DevStack React App

## Description
DevStack React App is a modern web application built to display, filter, and manage technology stacks for developers. It helps users explore various frontend, backend, and database tools seamlessly.

## Technologies Used
- React
- Vite
- TypeScript
- Tailwind CSS

## Key Features
- Dynamic filtering and tracking of selected tech stacks.
- Responsive design with smooth UI components (Navbar, Hero, Cards, Sidebar, Footer).
- Simulated data fetching using JSON files.

---

## React Questions & Answers

### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. It makes writing and understanding React UI components much easier.

### ii. What is the difference between props and state?
- **Props**: Short for properties, passed from a parent component to a child component (read-only).
- **State**: Managed internally within a component to handle dynamic data that changes over time.

### iii. What does the `useState` hook do, and where did you use it in this project?
`useState` allows components to create and update local state data. In this project, it was used in `App.tsx` to store the list of technologies and track selected stack items.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` performs side-effects in components. It was used to simulate an asynchronous API request to fetch tech stack data from the static JSON file when the app loads.

### v. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or removed. It optimizes rendering performance and maintains state accuracy during updates.

### vi. What is conditional rendering? Show one place you used it.
Conditional rendering displays different UI elements based on specific conditions. In this project, it was used to display an empty stack message when no technology items were selected.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child**: Data is passed down using `props`.
- **Child to Parent**: The parent passes a callback function via `props`, and the child executes that function with arguments to send data back.
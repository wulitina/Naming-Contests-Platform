import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/app";

// Define your App component


// Get the container element
const container = document.getElementById("app");

// Ensure the container exists before rendering
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error("Element with id 'app' not found");
}

import { createRoot } from 'react-dom/client';
import App from "./components/app";
import axios from  "axios";
import { API_SERVER_URL } from "./public-config";

// Get the container element
const container = document.getElementById("app");

// Ensure the container exists before rendering

const root = createRoot(container);
    // Fetch data from API
root.render(<App initialData = {(window as any).initialData} />);




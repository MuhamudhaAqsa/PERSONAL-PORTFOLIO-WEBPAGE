// Import StrictMode to help highlight potential problems in an application
import { StrictMode } from 'react';

// Import createRoot to render the React app in the DOM
import { createRoot } from 'react-dom/client';

// Import global styles
import './index.css';

// Import the root App component
import App from './App.jsx';

// Import custom fonts
import "@fontsource/outfit";
import "@fontsource/roboto";

// Mount the React app to the root DOM node
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

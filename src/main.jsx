import { ChakraProvider } from '@chakra-ui/react'; // Import Chakra UI provider for styling
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // Import the root App component

// Render the App component inside the 'root' div of the index.html, wrapped in ChakraProvider for styling
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

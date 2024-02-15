import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { reportWebVitals, customReportWebVitals } from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </React.StrictMode>
);

// Call reportWebVitals with the custom reporting function
reportWebVitals(customReportWebVitals);

// Remove the call to reportWebVitals with console.log
// reportWebVitals(console.log);

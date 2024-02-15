import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = onPerfEntry => {
  // If an onPerfEntry callback is provided by the user, call it with the performance metrics
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

// Custom reporting function
function customReportWebVitals(metric) {
  console.log(metric);
}

export { reportWebVitals, customReportWebVitals };

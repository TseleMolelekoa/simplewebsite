module.exports = {
    // Other ESLint configurations...
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    globals: {
      // Add Axios to recognized global variables
      axios: 'readonly',
    },
    // Other ESLint configurations...
  };
  
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Add 'node' environment for Jest compatibility
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Recommended React rules
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Ensure sourceType is set to 'module' for ES module support
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add or adjust rules as needed
    'react/prop-types': 'off', // Disable prop-types validation (if using TypeScript)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types for functions
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};

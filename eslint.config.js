import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        $: 'readonly', // for jQuery
        signalR: 'readonly',
      },
    },
    rules: {
      // Add custom rules here
    },
  },
];
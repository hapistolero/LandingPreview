module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": 0 , // Enforce no semicolons
    'no-unused-vars': 'error', // Enforce no unused variables
    'no-unused-expressions': 'error', // Enforce no unused expressions
    'react/jsx-indent': ['error', 2], // Enforce 2 spaces for JSX indentation
    'react/jsx-indent-props': ['error', 2], // Enforce 2 spaces for JSX props indentation
    'react/jsx-boolean-value': ['error', 'always'], // Enforce boolean attributes
    'react/jsx-curly-spacing': ['error', 'never'], // Enforce no spaces within curly braces
    'react/jsx-props-no-multi-spaces': 'error', // Enforce no multiple spaces between props
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // Enforce space before self-closing tag
    'react/self-closing-comp': 'error', // Enforce self-closing tags
    'react-hooks/rules-of-hooks': 'error', // Enforce Hooks rules
    'react-hooks/exhaustive-deps': 'warn', // Enforce dependency array for Hooks
    '@typescript-eslint/no-unused-vars': 'error', // TypeScript-specific no unused vars rule
     // Turn off empty function warnings if needed
    'no-trailing-spaces': 'error',
    "no-undef": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],

  },
    
}

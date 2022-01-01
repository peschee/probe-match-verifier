module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:wc/recommended', 'plugin:lit/recommended'],
  overrides: [
    {
      files: '.eslintrc.js',
      env: {
        node: true,
      },
    },
  ],
  settings: {
    wc: {
      elementBaseClasses: ['LitElement'],
    },
  },
};

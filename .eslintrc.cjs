module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended','plugin:@typescript-eslint/eslint-recommended','prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','prettier'],
    root: true,
    rules: {
      "no-console": 1,       
      "prettier/prettier": 2 
    }
  };
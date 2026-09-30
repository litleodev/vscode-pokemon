// @ts-check
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');

module.exports = tseslint.config(
  {
    ignores: ['out', 'dist', 'node_modules', '.vscode', 'src/test'],
  },
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      ...prettierConfig.rules,
      '@typescript-eslint/naming-convention': 'warn',
      semi: 'warn',
      curly: 'warn',
      eqeqeq: 'warn',
      'no-throw-literal': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-var': 'off',
      'no-fallthrough': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);

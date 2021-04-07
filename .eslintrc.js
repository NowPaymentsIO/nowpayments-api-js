module.exports = {
  env: {
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 11,
    project: './tsconfig.json'
  },
  ignorePatterns: ['*.d.ts'],
  rules: {
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': [0],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    'no-void': [0],
    'import/order': ['error', {
      'newlines-between': 'always-and-inside-groups'
    }]
  }
}

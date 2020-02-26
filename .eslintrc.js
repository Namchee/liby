module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'jsdoc',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'linebreak-style': [ // change this accordingly
      'warn',
      'windows',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        'requireForBlockBody': true,
      },
    ],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'new-cap': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-invalid-this': 'off',
    'require-atomic-updates': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
};

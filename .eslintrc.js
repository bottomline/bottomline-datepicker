module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb'],
  plugins: ['react-hooks'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': 'off',
    'react/destructuring-assignment': 'off',
    'quote-props': ["error", "as-needed"],
    'jsx-a11y/label-has-for': 'off'
  },
  overrides: [
    {
      files: ['*.spec.jsx', '*.spec.js'],
      env: { jest: true }
    },
    {
      files: ['.storybook/**', 'stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};

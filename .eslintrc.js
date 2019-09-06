module.exports = {
  env: {
    browser: true
  },
  extends: ['@glu/eslint-config'],
  parser: 'babel-eslint',
  rules: {
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

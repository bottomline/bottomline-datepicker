const { declare } = require('@babel/helper-plugin-utils');

function getEnvOption(envOptions, env, preset) {
  return envOptions[env] ? envOptions[env][preset] : {};
}

module.exports = declare((api, presetOptions = {}) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const { env: envOptions = {}, ...options } = presetOptions;

  return {
    presets: [
      ['@babel/preset-env', {
        modules: false,
        ...options['@babel/preset-env']
      }],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      ['@babel/plugin-proposal-object-rest-spread', {
        useBuiltIns: true,
        ...options['@babel/plugin-proposal-object-rest-spread']
      }]
    ],
    env: {
      test: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              node: 'current'
            },
            ...getEnvOption(envOptions, 'test', '@babel/preset-env')
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          ['@babel/plugin-proposal-object-rest-spread', {
            useBuiltIns: true,
            ...getEnvOption(envOptions, 'test', '@babel/plugin-proposal-object-rest-spread')
          }]
        ]
      }
    }
  };
});

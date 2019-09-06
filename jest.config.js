module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', '!src/**/*.styles.js', '!src/index.js', '!src/locale/*'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/__test__/jest.setup.js'],
  moduleNameMapper: {
    '@glu/theming/?(.*)': '<rootDir>/node_modules/@glu/theming/umd/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePathIgnorePatterns: ['dist']
};

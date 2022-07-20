const jestConfig = {
  verbose: true,
  testMatch: ['**/tests/*.test.js'],
  coverageReporters: [
    'json-summary', 
    'text',
    'lcov'
  ]
}

module.exports = jestConfig
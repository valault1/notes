/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
    "^domains(.*)$": "<rootDir>/src/domains$1",
    "^components(.*)$": "<rootDir>/src/components$1",
  } 
};


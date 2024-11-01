/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/styleMock.js",
    "\\.(jpg|png)$": "<rootDir>/src/tests/imageMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.js"],
};

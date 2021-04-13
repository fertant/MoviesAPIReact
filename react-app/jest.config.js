const {defaults} = require('jest-config');

module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  setupFiles: [
    "<rootDir>/src/tests/setup.ts"
  ],
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/__mock__/fileTransformer.js"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};

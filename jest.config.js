module.exports = {
    moduleFileExtensions: ["js", "json", "vue"],
    watchman: false,
    moduleNameMapper: {
      "^~/(.*)$": "<rootDir>/$1",
      "^~~/(.*)$": "<rootDir>/$1",
      "^@/(.*)$": "<rootDir>/$1"
    },
    transform: {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    collectCoverage: true,
    collectCoverageFrom: [
      "<rootDir>/components/**/*.vue",
      "<rootDir>/pages/*.vue"
    ]
  };
  
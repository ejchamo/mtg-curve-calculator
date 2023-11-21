module.exports = {
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/src/boot/environments/test.js"],
  moduleFileExtensions: ["js", "json", "mjs", "node"],
  transform: {
    "^.+\\.c?[t|j]sx?$": "babel-jest",
  },
};

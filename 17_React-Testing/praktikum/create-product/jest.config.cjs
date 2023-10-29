module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.png$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.p?ng$"],
};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "babel-jest", // 使用默认配置即可
  },
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text"],
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
/** @type {import('jest').Config} */



module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: ["default",
    ["jest-html-reporters", {
      "pageTitle": "HTML Report for MyApp",
      "outputPath": "reports/index.html",
      "includeFailureMsg": true,
      "publicPath": "./reports",
      "filename": "report.html",
      "openReport": false
    }]]


}

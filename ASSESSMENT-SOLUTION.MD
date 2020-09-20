# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Rolando de Boer
(rolando.de.boer@the-future-group.com)

## Remarks

## Solution
The solution is based on a BDD approach using the following tools:
* Webstorm IDE
* Protractor
* Cucumber

The system that was used is:
* MacBook Pro
* macOS Catalina 10.15.6
* Chrome

1. The 'E2E' folder already contained a 'features' and 'steps' folder
2. To the 'E2E' folder I have added a 'pages' folder that is used for the pageobjects
3. The 'search-people.feature' and 'search-planets.feature' are added to the 'features' folder
4. The 'searchpage.po.ts' is added to the 'pages' folder
5. Based on the main features the feature files are enriched with scenarios
6. Based on the steps in the scenarios, the step definition files are enriched
7. Based on the frontend of the application the pageobject file is enriched with element locators
8. Created the folder 'test-reports' because I got an error that this folder was expected
9. The 'protractor.conf.js' contained an incorrect path to the specs. This has been changed from `./e2e/features/*/*.feature` to `'./e2e/features/*.feature'`
10. Running the 'E2E' test then resulted in the following error `Error: When config.framework is custom, config.frameworkPath is required.`. This has been fixed by installing `Protractor Cucumber Framework` and adding the correct path to the file 'protractor.conf.js'.

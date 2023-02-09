<h1 align="center">My Cypress Test</h1></br>

<p align="center">
:sparkles: Web Automation Testing using Cypress, Javascript, and Mochawesome library for HTML Report. :sparkles:
</p>

## Preparation

What will to be used on this project

| Item           | Source                                                         |
| -------------- | ------------------------------------------------------------ |
| Editor         | VS Code (https://code.visualstudio.com/download) |
| Package Manager| NPM (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| UI Test Tools  | Cypress (https://docs.cypress.io/guides/getting-started/installing-cypress) |
| Test Reporter  | Mochawesome (https://www.npmjs.com/package/mochawesome) |
| Browser        | Latest version of Chrome / Mozilla Firefox / Edge  |

## Installation

Install VS Code Editor and NPM.

To check wheter you already installed NPM & Node.js

```Bash
npm --version
```
```Bash
node --version
```

## Setting up Project

### Clone

**👉 [Clone this Repository](https://github.com/Fatimazza/MyCypressTest/)** through Terminal or Command Prompt

### Open the Project on Editor

Open this Automation Project using VS Code Editor.

### Run the Automation Project 

Change to Project directory on Terminal or Command Prompt

```Bash
cd MyCypressTest
```

Install Cypress

```Bash
npm install cypress --save-dev
```

Run Test Execution on Terminal

```Bash
npx cypress run 
```

Video of the Test Execution available on <b> MyCypressTest/cypress/videos/ </b>

Run Test Execution via Browser

```Bash
npx cypress open
```

### Generate Test Execution HTML Report

Install Mochawesome Reporter

```Bash
npm install mocha
npm install mochawesome --save-dev
npm install mochawesome-merge --save-dev
```

Run Cypress with the Reporter

> Note: Please wait until all test execution finished

```Bash
npx cypress run --reporter mochawesome
```

Merge the reports into a single one

```Bash
npx mochawesome-merge cypress/report/mochawesome-report/*.json > cypress/report/output.json
```

Convert the JSON into HTML Report

```Bash
npx marge cypress/report/output.json --reportDir ./ --inline
```

Test Execution HTML Report available on <b> MyCypressTest/output.html </b>



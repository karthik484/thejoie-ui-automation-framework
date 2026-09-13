# The Joie - Playwright UI Automation Framework

 Project Overview

This project is a UI test automation framework developed using Playwright with JavaScript to automate and validate key user workflows of The Joie web application.

The framework follows the Page Object Model (POM) design pattern and uses reusable fixtures and external JSON test data to improve maintainability, scalability, and test coverage.



 Tech Stack

Automation Tool:Playwright
Programming Language:JavaScript
Test Framework: Playwright Test
Design Pattern:Page Object Model (POM)
Test Data:JSON
Package Manager:npm
CI/CD: GitHub Actions
Version Control:Git & GitHub



Framework Structure

```text
thejoie-ui-automation-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── base.js
│
├── POM/
│   ├── CartPage.js
│   ├── FrancheisPage.js
│   ├── HomePage.js
│   ├── MenuPage.js
│   └── SummaryPage.js
│
├── tests/
│   ├── AddMultipleProducts.spec.js
│   ├── CancelPayment.spec.js
│   ├── CategorySearch.spec.js
│   ├── EmptyCart.spec.js
│   ├── PaymentFailureInvalid.spec.js
│   ├── UpdateQuantityMultipleTimes.spec.js
│   ├── VerifyTheDeliveryCharges.spec.js
│   │
│   ├── Francheis-test/
│   │   ├── SendEnquiryWithDetails.spec.js
│   │   ├── SendEnquiryWithInvalidPhNum.spec.js
│   │   └── SendEnquiryWithOutDetails.spec.js
│   │
│   └── Orders-test/
│       ├── NameWithSplChar.spec.js
│       ├── OrderWithInvalidphNo.spec.js
│       └── SheduleOrder.spec.js
│
├── Utils/
│   ├── AddMultipleTestData.json
│   ├── EmptyCartTestData.json
│   ├── NamewithSPLcharTD.json
│   ├── OrderTestData.json
│   ├── SearchProductTestData.json
│   ├── SheduleLaterTD.json
│   ├── UpdateQuantityTestData.json
│   ├── orderwithinvalidphNo.json
│   └── sendwithdetails.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js

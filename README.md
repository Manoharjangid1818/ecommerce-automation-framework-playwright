E-Commerce Automation Framework - Playwright
🚀 Project Overview

This project automates key user flows of an e-commerce website (https://automationexercise.com/
) using Playwright with JavaScript.
It covers real-world actions like user registration, login, product search, viewing details, and adding products to cart.

📂 Project Structure

*pages/*
LoginPage.js – Handles login actions using Page Object Model (POM).
RegisterPage.js – Handles new user registration and form submission.
ProductsPage.js – Handles product navigation, viewing details, and adding products to cart.

*tests/*
login.spec.js – Test scenario for user login.
register.spec.js – Test scenario for user registration.
products.spec.js – Test scenario for product flow: view & add to cart.

*autoPush.bat*
Script to automatically commit and push all changes to GitHub.
Run by .\autoPush.bat in terminal.

*package.json*
Contains project dependencies like Playwright and scripts.
⚡ How to Run

*Install dependencies:*
npm install
Run all tests:
npx playwright test

*View HTML report:*
npx playwright show-report
Optional: Run auto-push to commit & push changes:
.\autoPush.bat

🛠 Tech Stack
JavaScript
Playwright
Node.js
Git & GitHub

💡 Notes
Uses Page Object Model (POM) for better maintainability.
All locators and flows simulate real-world scenarios similar to Amazon/Flipkart.
Auto push script helps commit changes automatically without manual Git commands.
# Playwright Booking POC 🏨

This is a **Proof of Concept (POC)** project that demonstrates how to use [Playwright](https://playwright.dev/) for end-to-end test automation against a booking-style web application.

## 🎯 Project Goal
Automate key user journeys on a demo hotel booking site:
- Viewing available rooms
- Making a booking
- Validating booking confirmation

The project is meant for practice, portfolio showcase, and as a starting point for larger automation frameworks.

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)
- [Playwright Test](https://playwright.dev/docs/intro)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/playwright-booking-poc.git
cd playwright-booking-poc

2. Install dependencies

npm install
npx playwright install

3. Run the tests
npx playwright test

4. Open the HTML report
npx playwright show-report

🌍 Target Application

All tests run against the Hotel Booking demo site:
https://automationintesting.online/

📂 Project Structure
playwright-booking-poc/
│-- tests/         # Test specs live here
│-- playwright.config.ts
│-- package.json
│-- README.md

# playwright-booking-poc
A playwright testing poc for the page https://automationintesting.online/

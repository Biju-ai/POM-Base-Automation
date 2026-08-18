# Playwright Automation

Automated end-to-end testing framework using **Playwright** with JavaScript/TypeScript.

## 🛠️ Requirements

Make sure the following are installed:

* Node.js (LTS recommended)
* npm
* Git
* VS Code (recommended)

Check installation:

```bash
node --version
npm --version
git --version
```

## 📥 Setup

### 1. Clone the repository

```bash
git clone https://github.com/Biju-ai/POM-Base-Automation.git
cd POM-Base-Automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment

If the project contains `.env.example`, create `.env`:

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

Update `.env` with the required application URL and credentials.

> Do not commit `.env` or any credentials to Git.

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests using Chromium:

```bash
npx playwright test --project=chromium
```

Run tests with browser visible:

```bash
npx playwright test --headed
```

If the project uses an authentication/setup project:

```bash
npx playwright test --project=setup
npx playwright test --project=chromium
```

## 📊 Test Report

After execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

## 📁 Project Structure

```text
project/
├── tests/                 # Test cases
├── pages/                 # Page Objects (if used)
├── test-data/             # Test data (if used)
├── playwright.config.ts   # Playwright configuration
├── package.json            # Dependencies and scripts
├── .env.example            # Environment variable template
├── .gitignore
└── README.md
```

## ⚠️ Important

* Do not commit passwords, API keys, tokens, or `.env` files.
* Make sure the application is accessible before running tests.
* Make sure required test accounts are available.

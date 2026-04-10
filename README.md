# Playwright CLI SauceDemo Project

Playwright automation for validating key flows on `https://www.saucedemo.com/`.

## ✅ What is included

- `tests/example.spec.ts` — basic Playwright smoke sample
- `tests/saucedemo.spec.ts` — SauceDemo login, add-to-cart, and checkout validation
- `.github/workflows/playwright.yml` — GitHub Actions CI pipeline

## 🚀 Getting started

```powershell
npm ci
npx playwright install
```

## ▶️ Run tests

### Run CI-safe smoke tests

```powershell
npm run test:ci
```

### Run headless in Chromium

```powershell
npm run test:headless
```

### Run all configured tests

```powershell
npm test
```

### Run the SauceDemo flow locally

```powershell
npm run test:saucedemo
```

## 📁 Artifacts

Artifacts captured during SauceDemo automation:

- `trace.zip` — Playwright trace (open with `npx playwright show-trace trace.zip`)
- `login-success.png` — Screenshot after login
- `checkout-complete.png` — Screenshot after checkout
- `saucedemo.webm` — Video recording of the full checkout flow

## 🔄 CI/CD

The GitHub Actions workflow (`.github/workflows/playwright.yml`):

1. Checks out the code
2. Installs Node.js dependencies
3. Installs Playwright Chromium
4. Runs `npm run test:ci`
5. Uploads the Playwright report and test results as artifacts

## 🔗 GitHub Repository

[https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT](https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT)

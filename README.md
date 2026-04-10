# Playwright CLI KENT Project

Playwright automation for validating key flows on `https://kent.ca/en/`.

## ✅ What is included

- `tests/example.spec.ts` — basic Playwright smoke sample
- `tests/kent.spec.ts` — local-only Kent account and About Us validation
- `.github/workflows/playwright.yml` — GitHub Actions CI pipeline

## ⚠️ Important note about Kent login

Kent protects sign-in with reCAPTCHA. Because of that, the login scenario is tagged `@local-only` and is **excluded from CI/headless pipeline runs**.

Use it locally with environment variables:

```powershell
$env:KENT_EMAIL="your-email@example.com"
$env:KENT_PASSWORD="your-password"
npm run test:kent
```

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

### Run all configured tests

```powershell
npm test
```

### Run the Kent flow locally in headed Chromium

```powershell
$env:KENT_EMAIL="your-email@example.com"
$env:KENT_PASSWORD="your-password"
npm run test:kent
```

## 📁 Artifacts

When the Kent test is run locally, artifacts are saved under:

- `test-results/.../kent-artifacts/trace.zip`
- `test-results/.../kent-artifacts/account-dashboard.png`
- `test-results/.../kent-artifacts/about-us.png`
- `test-results/.../kent-artifacts/KENT.WEBM`

## 🔄 CI/CD

The GitHub Actions workflow:

1. Checks out the code
2. Installs Node.js dependencies
3. Installs Playwright Chromium
4. Runs `npm run test:ci`
5. Uploads the Playwright report and test results as artifacts

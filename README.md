# Playwright CLI SauceDemo Project

> End-to-end automated test suite for [SauceDemo (Swag Labs)](https://www.saucedemo.com) — built with **Playwright**, **TypeScript**, and **GitHub Actions CI**, generated and healed using **GitHub Copilot MCP agents**.

[![Playwright Tests](https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT/actions/workflows/playwright.yml/badge.svg)](https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT/actions/workflows/playwright.yml)

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Test Results Summary](#2-test-results-summary)
3. [Test Suite Coverage](#3-test-suite-coverage)
4. [Known Defects Discovered](#4-known-defects-discovered)
5. [Project Structure](#5-project-structure)
6. [Getting Started](#6-getting-started)
7. [Running Tests](#7-running-tests)
8. [Reports & Artifacts](#8-reports--artifacts)
9. [CI/CD Pipeline](#9-cicd-pipeline)
10. [Test Accounts](#10-test-accounts)

---

## 1. Project Overview

This project provides a comprehensive Playwright automation suite for validating all major user flows on SauceDemo, including:

- **Authentication** — Login (all users + edge cases), Logout, session protection
- **Product Inventory** — Page content, product cards, images, sorting
- **Shopping Cart** — Add/remove products, cart persistence
- **Checkout** — End-to-end order flow from cart to confirmation

Tests are written in **TypeScript** using the `@playwright/test` framework and run headlessly on **Chromium**. Test generation and healing was performed using **GitHub Copilot MCP playwright agents** (`playwright-test-generator`, `playwright-test-healer`, `playwright-test-planner`).

---

## 2. Test Results Summary

**Last run: April 21, 2026 — All 23 tests passed in 18.0 seconds**

```
Running 23 tests using 6 workers

  ✓  example.spec.ts › has title                                          (905ms)
  ✓  example.spec.ts › get started link                                   (1.3s)
  ✓  seed.spec.ts › Test group › seed                                     (228ms)
  ✓  saucedemo.spec.ts › SauceDemo full checkout flow                     (2.3s)
  ✓  Authentication — Login › TC-AUTH-001: Successful login (standard_user) (1.7s)
  ✓  Authentication — Login › TC-AUTH-002: locked_out_user is blocked     (1.9s)
  ✓  Authentication — Login › TC-AUTH-003: Login with empty username      (1.0s)
  ✓  Authentication — Login › TC-AUTH-004: Login with empty password      (1.0s)
  ✓  Authentication — Login › TC-AUTH-005: Both fields empty              (1.0s)
  ✓  Authentication — Login › TC-AUTH-006: Invalid credentials            (1.2s)
  ✓  Authentication — Login › TC-AUTH-007: Correct username, wrong password (1.4s)
  ✓  Authentication — Login › TC-AUTH-008: Error message can be dismissed (1.3s)
  ✓  Authentication — Login › TC-AUTH-009: Login page elements present    (1.2s)
  ✓  Authentication — Login › TC-AUTH-010: performance_glitch_user succeeds (6.5s)
  ✓  Authentication — Logout › TC-LOGOUT-001: Successful logout via burger menu (2.5s)
  ✓  Authentication — Logout › TC-LOGOUT-002: Cannot access inventory after logout (2.6s)
  ✓  Authentication — Logout › TC-LOGOUT-003: Cart cleared after logout/re-login (7.9s) [expected failure — known defect]
  ✓  Authentication — Logout › TC-LOGOUT-004: Logout from cart page      (2.7s)
  ✓  Product Inventory Page › TC-INV-001: Displays 6 products            (1.6s)
  ✓  Product Inventory Page › TC-INV-002: Product cards show all fields  (1.1s)
  ✓  Product Inventory Page › TC-INV-003: All cards have Add to cart     (1.3s)
  ✓  Product Inventory Page › TC-INV-004: Page title is "Products"       (1.2s)
  ✓  Product Inventory Page › TC-INV-005: Product images load correctly  (1.2s)

  23 passed (18.0s)
```

---

## 3. Test Suite Coverage

### Spec Files

| File | Test Group | # Tests | Status |
|---|---|:---:|:---:|
| `tests/example.spec.ts` | Playwright smoke tests | 2 | ✅ Pass |
| `tests/seed.spec.ts` | Seed / scaffold test | 1 | ✅ Pass |
| `tests/saucedemo.spec.ts` | Full checkout E2E flow | 1 | ✅ Pass |
| `tests/tc-auth-001-successful-login-standard-user.spec.ts` | Auth — Login TC-001 | 1 | ✅ Pass |
| `tests/tc-auth-002-010-login-validation.spec.ts` | Auth — Login TC-002 to 010 | 9 | ✅ Pass |
| `tests/tc-logout-inv.spec.ts` | Auth — Logout + Inventory | 9 | ✅ Pass |
| **Total** | | **23** | **23/23 ✅** |

### Test Case Coverage by Area

#### Authentication — Login (TC-AUTH-001 → TC-AUTH-010)

| ID | Scenario | Result |
|---|---|:---:|
| TC-AUTH-001 | Successful login with `standard_user` | ✅ |
| TC-AUTH-002 | `locked_out_user` is blocked with error | ✅ |
| TC-AUTH-003 | Empty username shows validation error | ✅ |
| TC-AUTH-004 | Empty password shows validation error | ✅ |
| TC-AUTH-005 | Both fields empty shows username error | ✅ |
| TC-AUTH-006 | Invalid credentials show error message | ✅ |
| TC-AUTH-007 | Correct username, wrong password stays on login page | ✅ |
| TC-AUTH-008 | Error banner can be dismissed with ✕ button | ✅ |
| TC-AUTH-009 | All login page elements are visible | ✅ |
| TC-AUTH-010 | `performance_glitch_user` logs in (eventually) | ✅ |

#### Authentication — Logout (TC-LOGOUT-001 → TC-LOGOUT-004)

| ID | Scenario | Result |
|---|---|:---:|
| TC-LOGOUT-001 | Logout via burger menu → redirected to login | ✅ |
| TC-LOGOUT-002 | Access `/inventory.html` after logout → redirected | ✅ |
| TC-LOGOUT-003 | Cart cleared after logout + re-login | ⚠️ Known Defect |
| TC-LOGOUT-004 | Logout from cart page → redirected to login | ✅ |

#### Product Inventory Page (TC-INV-001 → TC-INV-005)

| ID | Scenario | Result |
|---|---|:---:|
| TC-INV-001 | Inventory displays exactly 6 products | ✅ |
| TC-INV-002 | Each card has name, description, price, image | ✅ |
| TC-INV-003 | Every card has an "Add to cart" button | ✅ |
| TC-INV-004 | Page title is "Products" | ✅ |
| TC-INV-005 | All 6 product images render (non-broken src) | ✅ |

#### End-to-End Checkout Flow

| Scenario | Result |
|---|:---:|
| Login → Add to cart → Checkout → Fill info → Confirm → "Thank you for your order!" | ✅ |

---

## 4. Known Defects Discovered

### BUG-001: Cart persists across logout/re-login (TC-LOGOUT-003)

- **Severity:** Medium
- **Affected user:** `standard_user` (all users)
- **Steps to reproduce:**
  1. Login as `standard_user`
  2. Add "Sauce Labs Backpack" to cart (badge shows `1`)
  3. Open burger menu → Logout
  4. Login again as `standard_user`
  5. Observe: cart badge still shows `1`
- **Expected:** Cart should be empty (badge absent) after logout + re-login
- **Actual:** Cart badge shows `1` — items persist in `localStorage` and are not cleared on logout
- **Root cause:** SauceDemo does not clear `localStorage` on logout
- **Test status:** Marked `test.fail()` as expected failure to document the defect

### QUIRK-001: Burger menu button intercepts clicks on `[data-test="open-menu"]`

- The open menu icon has `data-test="open-menu"` on an `<img>` element, but the clickable element is `<button id="react-burger-menu-btn">` which overlays it
- **Correct selector:** `#react-burger-menu-btn`

### QUIRK-002: Product images use SVG/data-URI — `naturalWidth` is always 0

- SauceDemo product images use SVG/data-URI sources; `HTMLImageElement.naturalWidth` returns `0` for these even when displayed correctly
- **Correct assertion:** check `img` is visible and `src` attribute is non-empty

---

## 5. Project Structure

```
Playwright-CLI-SauceDemo-PROJECT/
├── .github/
│   └── workflows/
│       ├── playwright.yml           # Main CI pipeline
│       └── copilot-setup-steps.yml # Copilot agent setup
├── tests/
│   ├── example.spec.ts              # Playwright smoke tests
│   ├── seed.spec.ts                 # Empty scaffold for code generation
│   ├── saucedemo.spec.ts            # Full E2E checkout flow
│   ├── tc-auth-001-successful-login-standard-user.spec.ts
│   ├── tc-auth-002-010-login-validation.spec.ts  # 9 login edge cases
│   └── tc-logout-inv.spec.ts        # 4 logout + 5 inventory tests
├── playwright-report/
│   └── index.html                   # HTML test report (open in browser)
├── test-results/
│   └── .last-run.json               # Last run metadata
├── playwright.config.ts             # Playwright config (Chromium)
├── playwright.video.config.ts       # Config with video recording
├── SAUCEDEMO_TEST_PLAN.md           # Full test plan (16 sections, 80+ TCs)
├── run-saucedemo-cli.ps1            # PowerShell CLI runner script
├── login-success.png                # Screenshot artifact
├── checkout-complete.png            # Screenshot artifact
├── saucedemo.webm                   # Video recording of checkout flow
├── trace.zip                        # Playwright trace file
├── package.json
├── tsconfig.json
└── README.md
```

---

## 6. Getting Started

### Prerequisites

- **Node.js** 18+ (Node 20 recommended)
- **npm** 8+

### Install dependencies

```powershell
npm ci
```

### Install Playwright browsers

```powershell
npx playwright install chromium
```

---

## 7. Running Tests

### Run all tests

```powershell
npm test
# or
npx playwright test
```

### Run with visible browser (headed mode)

```powershell
npm run test:headed
```

### Run only the SauceDemo checkout flow

```powershell
npm run test:saucedemo
```

### Run CI-safe tests (headless Chromium)

```powershell
npm run test:ci
```

### Run a specific spec file

```powershell
npx playwright test tests/tc-auth-002-010-login-validation.spec.ts
```

### Run a specific test by name

```powershell
npx playwright test --grep "TC-AUTH-002"
```

### Open the interactive Playwright UI

```powershell
npx playwright test --ui
```

---

## 8. Reports & Artifacts

### HTML Report

After running tests, open the HTML report in your browser:

```powershell
npx playwright show-report
```

Or open `playwright-report/index.html` directly.

### Playwright Trace

Open the trace viewer to inspect step-by-step test execution:

```powershell
npx playwright show-trace trace.zip
```

### Screenshots

| File | Description |
|---|---|
| `login-success.png` | Screenshot captured immediately after successful login |
| `checkout-complete.png` | Screenshot of the "Thank you for your order!" confirmation page |

### Video Recording

`saucedemo.webm` — Full video recording of the end-to-end checkout flow. Recorded using `playwright.video.config.ts`.

---

## 9. CI/CD Pipeline

The GitHub Actions workflow at `.github/workflows/playwright.yml` runs automatically on every push or pull request to `main`.

### Pipeline steps

```
push / pull_request → main
        │
        ▼
  Checkout repository
        │
        ▼
  Setup Node.js 20
        │
        ▼
  npm ci
        │
        ▼
  npx playwright install --with-deps chromium
        │
        ▼
  npm run test:ci
        │
        ▼
  Upload playwright-report/ + test-results/ as artifacts
```

### Viewing CI artifacts

In the GitHub Actions run page, expand the **Artifacts** section and download `playwright-report` to open the HTML report locally.

---

## 10. Test Accounts

SauceDemo provides the following test credentials (password for all: `secret_sauce`):

| Username | Behavior |
|---|---|
| `standard_user` | Normal full access — all tests run against this user |
| `locked_out_user` | Blocked at login — verified by TC-AUTH-002 |
| `problem_user` | UI defects (wrong images, broken fields) |
| `performance_glitch_user` | Slow login response — verified by TC-AUTH-010 |
| `error_user` | Specific functional errors |
| `visual_user` | Visual / layout inconsistencies |

---

## 🔗 Links

- **GitHub Repository:** [https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT](https://github.com/jithin768/Playwright-CLI-SauceDemo-PROJECT)
- **SauceDemo App:** [https://www.saucedemo.com](https://www.saucedemo.com)
- **Playwright Docs:** [https://playwright.dev](https://playwright.dev)
- **Full Test Plan:** [SAUCEDEMO_TEST_PLAN.md](SAUCEDEMO_TEST_PLAN.md)

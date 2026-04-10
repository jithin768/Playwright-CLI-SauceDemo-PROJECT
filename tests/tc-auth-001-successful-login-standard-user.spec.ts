// spec: SAUCEDEMO_TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication — Login', () => {
  test('TC-AUTH-001: Successful login with standard_user', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter `standard_user` in the Username field
    await page.locator('[data-test="username"]').fill('standard_user');

    // 3. Enter `secret_sauce` in the Password field
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 4. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify - URL matches /inventory.html
    await expect(page).toHaveURL(/inventory\.html/);

    // Verify - "Products" heading is visible on the page
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
});

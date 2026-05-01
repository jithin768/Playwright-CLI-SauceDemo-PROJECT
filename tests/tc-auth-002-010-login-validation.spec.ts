// spec: SAUCEDEMO_TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication — Login', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to https://www.saucedemo.com/ for each test
    await page.goto('https://www.saucedemo.com/');
  });

  //Adding a comment here to test commit and push functionality of GitHub
  test('TC-AUTH-002: Login with locked_out_user is blocked', async ({ page }) => {
    // Enter locked_out_user in the Username field
    await page.locator('[data-test="username"]').fill('locked_out_user');

    // Enter secret_sauce in the Password field  
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message containing "Sorry, this user has been locked out."
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.');
  });

  test('TC-AUTH-003: Login with empty username', async ({ page }) => {
    // Leave username blank, enter secret_sauce as password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message containing "Username is required"
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('TC-AUTH-004: Login with empty password', async ({ page }) => {
    // Enter standard_user as username, leave password blank
    await page.locator('[data-test="username"]').fill('standard_user');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message containing "Password is required"
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
  });

  test('TC-AUTH-005: Login with both fields empty', async ({ page }) => {
    // Click Login with both fields empty (no fill)
    await page.locator('[data-test="login-button"]').click();

    // Verify error message containing "Username is required"
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('TC-AUTH-006: Login with invalid credentials', async ({ page }) => {
    // Enter wrong_user / wrong_pass
    await page.locator('[data-test="username"]').fill('wrong_user');
    await page.locator('[data-test="password"]').fill('wrong_pass');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message containing "Username and password do not match any user"
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user');
  });

  test('TC-AUTH-007: Login with correct username, wrong password', async ({ page }) => {
    // Enter standard_user / wrong_password
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');

    // Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // Verify error message visible, URL stays on https://www.saucedemo.com/
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('TC-AUTH-008: Error message can be dismissed', async ({ page }) => {
    // Enter wrong credentials to get error
    await page.locator('[data-test="username"]').fill('wrong_user');
    await page.locator('[data-test="password"]').fill('wrong_pass');
    await page.locator('[data-test="login-button"]').click();

    // Verify error is visible
    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // Click the X button (data-test="error-button")
    await page.locator('[data-test="error-button"]').click();

    // Verify error banner is no longer visible
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });

  test('TC-AUTH-009: Login page elements are present', async ({ page }) => {
    // Verify username field (data-test="username") is visible
    await expect(page.locator('[data-test="username"]')).toBeVisible();

    // Verify password field (data-test="password") is visible
    await expect(page.locator('[data-test="password"]')).toBeVisible();

    // Verify Login button (data-test="login-button") is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    // Verify logo (.login_logo) is visible
    await expect(page.locator('.login_logo')).toBeVisible();
  });

  test('TC-AUTH-010: Login with performance_glitch_user succeeds eventually', async ({ page }) => {
    // Enter performance_glitch_user / secret_sauce
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click Login (with timeout of 10s)
    await page.locator('[data-test="login-button"]').click();

    // Verify redirected to /inventory.html, no error shown (with extended timeout)
    await expect(page).toHaveURL(/inventory\.html/, { timeout: 10000 });
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });
});

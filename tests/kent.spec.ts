import { test, expect } from '@playwright/test';

// @local-only — excluded from CI pipeline (Kent uses reCAPTCHA)
test.describe('Kent website validation @local-only', () => {
  test.beforeEach(async () => {
    if (!process.env.KENT_EMAIL || !process.env.KENT_PASSWORD) {
      test.skip(true, 'KENT_EMAIL and KENT_PASSWORD environment variables are required');
    }
    if (process.env.CI) {
      test.skip(true, 'Kent test is excluded from CI due to reCAPTCHA');
    }
  });

  test('Login and verify Account Dashboard', async ({ page }) => {
    await page.goto('https://kent.ca/en/customer/account/login/');

    await page.locator('#email').fill(process.env.KENT_EMAIL!);
    await page.locator('#pass').fill(process.env.KENT_PASSWORD!);
    await page.locator('button[name="send"]').click();

    await expect(page.getByText('Account Dashboard')).toBeVisible({ timeout: 15000 });
  });

  test('About Us page shows Welcome to KENT', async ({ page }) => {
    await page.goto('https://kent.ca/en/about-us');
    await expect(page.getByText('Welcome to KENT')).toBeVisible({ timeout: 10000 });
  });
});

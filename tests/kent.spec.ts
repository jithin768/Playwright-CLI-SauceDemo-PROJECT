import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('login to Kent and verify dashboard and about page @local-only', async ({ browser }, testInfo) => {
  test.setTimeout(120000);

  test.skip(
    !process.env.KENT_EMAIL || !process.env.KENT_PASSWORD,
    'Set KENT_EMAIL and KENT_PASSWORD before running the Kent login scenario.',
  );

  const artifactDir = path.join(testInfo.outputDir, 'kent-artifacts');
  fs.mkdirSync(artifactDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: artifactDir,
      size: { width: 1440, height: 900 },
    },
  });

  const page = await context.newPage();
  const video = page.video();

  await context.tracing.start({ screenshots: true, snapshots: true });

  try {
    await page.goto('https://kent.ca/en/customer/account/login/', {
      waitUntil: 'domcontentloaded',
    });

    await expect(
      page.getByRole('heading', { name: 'Sign in or Create an Account' }),
    ).toBeVisible();

    await page.getByRole('textbox', { name: /\*Email Address:/ }).fill(
      process.env.KENT_EMAIL!,
    );
    await page.getByRole('textbox', { name: 'Password' }).fill(
      process.env.KENT_PASSWORD!,
    );
    await page.getByRole('button', { name: 'Sign In' }).click();

    const recaptchaError = page.getByText(/reCAPTCHA/i);
    if (await recaptchaError.isVisible({ timeout: 10000 }).catch(() => false)) {
      throw new Error(
        'Kent blocks automated headless sign-in with reCAPTCHA. Run this test headed or reuse a pre-authenticated storage state.',
      );
    }

    await page.waitForURL(/.*\/customer\/account\/?$/, { timeout: 30000 });
    await expect(page.getByText('Account Dashboard')).toBeVisible({ timeout: 30000 });
    await page.screenshot({
      path: path.join(artifactDir, 'account-dashboard.png'),
      fullPage: true,
    });

    const aboutUsLink = page.locator('a', { hasText: 'About Us' }).last();
    await aboutUsLink.scrollIntoViewIfNeeded();
    await aboutUsLink.click();

    await expect(page.getByText('Welcome to KENT')).toBeVisible({ timeout: 30000 });
    await page.screenshot({
      path: path.join(artifactDir, 'about-us.png'),
      fullPage: true,
    });
  } finally {
    await context.tracing.stop({ path: path.join(artifactDir, 'trace.zip') });
    await context.close();

    if (video) {
      const recordedVideoPath = await video.path();
      const finalVideoPath = path.join(artifactDir, 'KENT.WEBM');
      fs.copyFileSync(recordedVideoPath, finalVideoPath);
    }
  }
});

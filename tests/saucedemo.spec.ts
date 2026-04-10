import { test, expect } from '@playwright/test';

test('SauceDemo full checkout flow', async ({ page }) => {
  // Login
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText('Products')).toBeVisible();

  // Add to cart
  await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart.html/);

  // Checkout
  await page.locator('button[data-test="checkout"]').click();
  await page.locator('input[data-test="firstName"]').fill('Jithin');
  await page.locator('input[data-test="lastName"]').fill('YT');
  await page.locator('input[data-test="postalCode"]').fill('12345');
  await page.locator('input[data-test="continue"]').click();
  await page.locator('button[data-test="finish"]').click();

  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

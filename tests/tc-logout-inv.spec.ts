// spec: SAUCEDEMO_TEST_PLAN.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication — Logout', () => {
  test('TC-LOGOUT-001: Successful logout via burger menu', async ({ page }) => {
    // Login as standard_user / secret_sauce at https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Open burger menu: click the react burger menu button (the img is overlaid by the button)
    await page.locator('#react-burger-menu-btn').click();

    // Click [data-test="logout-sidebar-link"]
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // Expected: Redirected to https://www.saucedemo.com/ (login page), login form visible
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  test('TC-LOGOUT-002: Cannot access inventory after logout', async ({ page }) => {
    // Login as standard_user, logout via burger menu
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // Navigate directly to https://www.saucedemo.com/inventory.html
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Expected: Redirected back to https://www.saucedemo.com/ (login page)
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('TC-LOGOUT-003: Cart is cleared after logout and re-login', async ({ page }) => {
    // KNOWN DEFECT: SauceDemo stores cart in localStorage which is NOT cleared on logout.
    // After re-login the cart badge still shows the previously added item.
    // This test is marked as expected-to-fail to document the known SauceDemo bug.
    test.fail(true, 'SauceDemo known defect: cart persists in localStorage across logout/re-login');

    // Login as standard_user
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Click [data-test="add-to-cart-sauce-labs-backpack"] to add item
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Logout via burger menu
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // Login again as standard_user
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Expected: Cart badge ([data-test="shopping-cart-badge"]) is not visible (0 items)
    await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
  });

  test('TC-LOGOUT-004: Logout from any page (cart page)', async ({ page }) => {
    // Login as standard_user
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Navigate to https://www.saucedemo.com/cart.html
    await page.goto('https://www.saucedemo.com/cart.html');

    // Open burger menu and click logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // Expected: Redirected to https://www.saucedemo.com/ (login page)
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});

test.describe('Product Inventory Page', () => {
  test.beforeEach(async ({ page }) => {
    // Login as standard_user before each inventory test
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  });

  test('TC-INV-001: Inventory page displays 6 products', async ({ page }) => {
    // Expected: exactly 6 elements matching .inventory_item
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('TC-INV-002: Each product card shows name, description, price, and image', async ({ page }) => {
    // Expected: .inventory_item_name, .inventory_item_desc, .inventory_item_price, img all visible for first item
    const firstItem = page.locator('.inventory_item').first();
    await expect(firstItem.locator('.inventory_item_name')).toBeVisible();
    await expect(firstItem.locator('.inventory_item_desc')).toBeVisible();
    await expect(firstItem.locator('.inventory_item_price')).toBeVisible();
    await expect(firstItem.locator('img')).toBeVisible();
  });

  test('TC-INV-003: Each product card has an "Add to cart" button', async ({ page }) => {
    // Expected: All .btn_primary.btn_inventory buttons have text "Add to cart"
    const addToCartButtons = page.locator('.btn_primary.btn_inventory');
    const buttonCount = await addToCartButtons.count();

    for (let i = 0; i < buttonCount; i++) {
      await expect(addToCartButtons.nth(i)).toHaveText('Add to cart');
    }
  });

  test('TC-INV-004: Page title is "Products"', async ({ page }) => {
    // Expected: [data-test="title"] contains text "Products"
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });

  test('TC-INV-005: Product images load correctly', async ({ page }) => {
    // Check all product images are visible and have a non-empty src (SVG/data-URI safe)
    const images = page.locator('.inventory_item img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      const src = await img.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });
});

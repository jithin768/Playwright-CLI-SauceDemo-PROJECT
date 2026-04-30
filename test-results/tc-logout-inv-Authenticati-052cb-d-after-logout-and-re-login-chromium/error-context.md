# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-logout-inv.spec.ts >> Authentication — Logout >> TC-LOGOUT-003: Cart is cleared after logout and re-login
- Location: tests\tc-logout-inv.spec.ts:44:7

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[data-test="shopping-cart-badge"]')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="shopping-cart-badge"]')
    9 × locator resolved to <span class="shopping_cart_badge" data-test="shopping-cart-badge">1</span>
      - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "1"
      - generic [ref=e15]:
        - generic [ref=e16]: Products
        - generic [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Name (A to Z)
          - combobox [ref=e20]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e24]:
      - generic [ref=e25]:
        - link "Sauce Labs Backpack" [ref=e27] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - link "Sauce Labs Backpack" [ref=e31] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e32]: Sauce Labs Backpack
            - generic [ref=e33]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e34]:
            - generic [ref=e35]: $29.99
            - button "Remove" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - link "Sauce Labs Bike Light" [ref=e39] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e40]
        - generic [ref=e41]:
          - generic [ref=e42]:
            - link "Sauce Labs Bike Light" [ref=e43] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e44]: Sauce Labs Bike Light
            - generic [ref=e45]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e46]:
            - generic [ref=e47]: $9.99
            - button "Add to cart" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e51] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e55] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e56]: Sauce Labs Bolt T-Shirt
            - generic [ref=e57]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e58]:
            - generic [ref=e59]: $15.99
            - button "Add to cart" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - link "Sauce Labs Fleece Jacket" [ref=e63] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - link "Sauce Labs Fleece Jacket" [ref=e67] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e68]: Sauce Labs Fleece Jacket
            - generic [ref=e69]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e70]:
            - generic [ref=e71]: $49.99
            - button "Add to cart" [ref=e72] [cursor=pointer]
      - generic [ref=e73]:
        - link "Sauce Labs Onesie" [ref=e75] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]:
            - link "Sauce Labs Onesie" [ref=e79] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e80]: Sauce Labs Onesie
            - generic [ref=e81]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e82]:
            - generic [ref=e83]: $7.99
            - button "Add to cart" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e87] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e91] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e92]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e93]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e94]:
            - generic [ref=e95]: $15.99
            - button "Add to cart" [ref=e96] [cursor=pointer]
  - contentinfo [ref=e97]:
    - list [ref=e98]:
      - listitem [ref=e99]:
        - link "Twitter" [ref=e100] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e101]:
        - link "Facebook" [ref=e102] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e103]:
        - link "LinkedIn" [ref=e104] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e105]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | // spec: SAUCEDEMO_TEST_PLAN.md
  2   | // seed: tests/seed.spec.ts
  3   | 
  4   | import { test, expect } from '@playwright/test';
  5   | 
  6   | test.describe('Authentication — Logout', () => {
  7   |   test('TC-LOGOUT-001: Successful logout via burger menu', async ({ page }) => {
  8   |     // Login as standard_user / secret_sauce at https://www.saucedemo.com/
  9   |     await page.goto('https://www.saucedemo.com/');
  10  |     await page.locator('[data-test="username"]').fill('standard_user');
  11  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  12  |     await page.locator('[data-test="login-button"]').click();
  13  | 
  14  |     // Open burger menu: click the react burger menu button (the img is overlaid by the button)
  15  |     await page.locator('#react-burger-menu-btn').click();
  16  | 
  17  |     // Click [data-test="logout-sidebar-link"]
  18  |     await page.locator('[data-test="logout-sidebar-link"]').click();
  19  | 
  20  |     // Expected: Redirected to https://www.saucedemo.com/ (login page), login form visible
  21  |     await expect(page).toHaveURL('https://www.saucedemo.com/');
  22  |     await expect(page.locator('[data-test="username"]')).toBeVisible();
  23  |     await expect(page.locator('[data-test="password"]')).toBeVisible();
  24  |     await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  25  |   });
  26  | 
  27  |   test('TC-LOGOUT-002: Cannot access inventory after logout', async ({ page }) => {
  28  |     // Login as standard_user, logout via burger menu
  29  |     await page.goto('https://www.saucedemo.com/');
  30  |     await page.locator('[data-test="username"]').fill('standard_user');
  31  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  32  |     await page.locator('[data-test="login-button"]').click();
  33  | 
  34  |     await page.locator('#react-burger-menu-btn').click();
  35  |     await page.locator('[data-test="logout-sidebar-link"]').click();
  36  | 
  37  |     // Navigate directly to https://www.saucedemo.com/inventory.html
  38  |     await page.goto('https://www.saucedemo.com/inventory.html');
  39  | 
  40  |     // Expected: Redirected back to https://www.saucedemo.com/ (login page)
  41  |     await expect(page).toHaveURL('https://www.saucedemo.com/');
  42  |   });
  43  | 
  44  |   test('TC-LOGOUT-003: Cart is cleared after logout and re-login', async ({ page }) => {
  45  |     // KNOWN DEFECT: SauceDemo stores cart in localStorage which is NOT cleared on logout.
  46  |     // After re-login the cart badge still shows the previously added item.
  47  |     // This test is marked as expected-to-fail to document the known SauceDemo bug.
  48  |     test.fail(true, 'SauceDemo known defect: cart persists in localStorage across logout/re-login');
  49  | 
  50  |     // Login as standard_user
  51  |     await page.goto('https://www.saucedemo.com/');
  52  |     await page.locator('[data-test="username"]').fill('standard_user');
  53  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  54  |     await page.locator('[data-test="login-button"]').click();
  55  | 
  56  |     // Click [data-test="add-to-cart-sauce-labs-backpack"] to add item
  57  |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  58  | 
  59  |     // Logout via burger menu
  60  |     await page.locator('#react-burger-menu-btn').click();
  61  |     await page.locator('[data-test="logout-sidebar-link"]').click();
  62  | 
  63  |     // Login again as standard_user
  64  |     await page.locator('[data-test="username"]').fill('standard_user');
  65  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  66  |     await page.locator('[data-test="login-button"]').click();
  67  | 
  68  |     // Expected: Cart badge ([data-test="shopping-cart-badge"]) is not visible (0 items)
> 69  |     await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
      |                                                                         ^ Error: expect(locator).not.toBeVisible() failed
  70  |   });
  71  | 
  72  |   test('TC-LOGOUT-004: Logout from any page (cart page)', async ({ page }) => {
  73  |     // Login as standard_user
  74  |     await page.goto('https://www.saucedemo.com/');
  75  |     await page.locator('[data-test="username"]').fill('standard_user');
  76  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  77  |     await page.locator('[data-test="login-button"]').click();
  78  | 
  79  |     // Navigate to https://www.saucedemo.com/cart.html
  80  |     await page.goto('https://www.saucedemo.com/cart.html');
  81  | 
  82  |     // Open burger menu and click logout
  83  |     await page.locator('#react-burger-menu-btn').click();
  84  |     await page.locator('[data-test="logout-sidebar-link"]').click();
  85  | 
  86  |     // Expected: Redirected to https://www.saucedemo.com/ (login page)
  87  |     await expect(page).toHaveURL('https://www.saucedemo.com/');
  88  |   });
  89  | });
  90  | 
  91  | test.describe('Product Inventory Page', () => {
  92  |   test.beforeEach(async ({ page }) => {
  93  |     // Login as standard_user before each inventory test
  94  |     await page.goto('https://www.saucedemo.com/');
  95  |     await page.locator('[data-test="username"]').fill('standard_user');
  96  |     await page.locator('[data-test="password"]').fill('secret_sauce');
  97  |     await page.locator('[data-test="login-button"]').click();
  98  |   });
  99  | 
  100 |   test('TC-INV-001: Inventory page displays 6 products', async ({ page }) => {
  101 |     // Expected: exactly 6 elements matching .inventory_item
  102 |     await expect(page.locator('.inventory_item')).toHaveCount(6);
  103 |   });
  104 | 
  105 |   test('TC-INV-002: Each product card shows name, description, price, and image', async ({ page }) => {
  106 |     // Expected: .inventory_item_name, .inventory_item_desc, .inventory_item_price, img all visible for first item
  107 |     const firstItem = page.locator('.inventory_item').first();
  108 |     await expect(firstItem.locator('.inventory_item_name')).toBeVisible();
  109 |     await expect(firstItem.locator('.inventory_item_desc')).toBeVisible();
  110 |     await expect(firstItem.locator('.inventory_item_price')).toBeVisible();
  111 |     await expect(firstItem.locator('img')).toBeVisible();
  112 |   });
  113 | 
  114 |   test('TC-INV-003: Each product card has an "Add to cart" button', async ({ page }) => {
  115 |     // Expected: All .btn_primary.btn_inventory buttons have text "Add to cart"
  116 |     const addToCartButtons = page.locator('.btn_primary.btn_inventory');
  117 |     const buttonCount = await addToCartButtons.count();
  118 | 
  119 |     for (let i = 0; i < buttonCount; i++) {
  120 |       await expect(addToCartButtons.nth(i)).toHaveText('Add to cart');
  121 |     }
  122 |   });
  123 | 
  124 |   test('TC-INV-004: Page title is "Products"', async ({ page }) => {
  125 |     // Expected: [data-test="title"] contains text "Products"
  126 |     await expect(page.locator('[data-test="title"]')).toContainText('Products');
  127 |   });
  128 | 
  129 |   test('TC-INV-005: Product images load correctly', async ({ page }) => {
  130 |     // Check all product images are visible and have a non-empty src (SVG/data-URI safe)
  131 |     const images = page.locator('.inventory_item img');
  132 |     const count = await images.count();
  133 |     expect(count).toBeGreaterThan(0);
  134 | 
  135 |     for (let i = 0; i < count; i++) {
  136 |       const img = images.nth(i);
  137 |       await expect(img).toBeVisible();
  138 |       const src = await img.getAttribute('src');
  139 |       expect(src).toBeTruthy();
  140 |     }
  141 |   });
  142 | });
  143 | 
```
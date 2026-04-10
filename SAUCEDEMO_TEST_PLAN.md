# SauceDemo (Swag Labs) — Comprehensive Test Plan

**Application URL:** https://www.saucedemo.com  
**Date:** April 10, 2026  
**Coverage:** All user-facing features and scenarios

---

## Table of Contents

1. [Test Accounts](#1-test-accounts)
2. [Authentication — Login](#2-authentication--login)
3. [Authentication — Logout](#3-authentication--logout)
4. [Product Inventory Page](#4-product-inventory-page)
5. [Product Detail Page](#5-product-detail-page)
6. [Shopping Cart — Add Products](#6-shopping-cart--add-products)
7. [Shopping Cart — Remove Products](#7-shopping-cart--remove-products)
8. [Shopping Cart Page](#8-shopping-cart-page)
9. [Checkout — Step 1 (Customer Info)](#9-checkout--step-1-customer-info)
10. [Checkout — Step 2 (Order Review)](#10-checkout--step-2-order-review)
11. [Checkout — Complete](#11-checkout--complete)
12. [Sorting & Filtering](#12-sorting--filtering)
13. [Navigation & Header](#13-navigation--header)
14. [Burger Menu](#14-burger-menu)
15. [Special User Behavior](#15-special-user-behavior)
16. [Accessibility & Visual](#16-accessibility--visual)

---

## 1. Test Accounts

| Username | Expected Behavior |
|---|---|
| `standard_user` | Normal full access |
| `locked_out_user` | Blocked at login |
| `problem_user` | UI defects (wrong images, broken fields) |
| `performance_glitch_user` | Slow responses |
| `error_user` | Specific functional errors |
| `visual_user` | Visual/layout inconsistencies |
| **Password (all):** `secret_sauce` | — |

---

## 2. Authentication — Login

### TC-AUTH-001: Successful login with standard_user
- **Steps:** Navigate to `/`, enter `standard_user` / `secret_sauce`, click Login
- **Expected:** Redirected to `/inventory.html`, "Products" heading visible

### TC-AUTH-002: Login with locked_out_user is blocked
- **Steps:** Enter `locked_out_user` / `secret_sauce`, click Login
- **Expected:** Error message "Sorry, this user has been locked out."

### TC-AUTH-003: Login with empty username
- **Steps:** Leave username blank, enter password, click Login
- **Expected:** Error "Username is required"

### TC-AUTH-004: Login with empty password
- **Steps:** Enter username, leave password blank, click Login
- **Expected:** Error "Password is required"

### TC-AUTH-005: Login with both fields empty
- **Steps:** Click Login with both fields empty
- **Expected:** Error "Username is required"

### TC-AUTH-006: Login with invalid credentials
- **Steps:** Enter `wrong_user` / `wrong_pass`, click Login
- **Expected:** Error "Username and password do not match any user..."

### TC-AUTH-007: Login with correct username, wrong password
- **Steps:** Enter `standard_user` / `wrong_password`, click Login
- **Expected:** Error message displayed, stay on login page

### TC-AUTH-008: Error message can be dismissed
- **Steps:** Trigger a login error, click the ✕ button on the error banner
- **Expected:** Error banner disappears

### TC-AUTH-009: Login page elements are present
- **Steps:** Navigate to `/`
- **Expected:** Username field, password field, Login button, and Swag Labs logo all visible

### TC-AUTH-010: Login with performance_glitch_user succeeds (eventually)
- **Steps:** Enter `performance_glitch_user` / `secret_sauce`, click Login
- **Expected:** Eventually redirected to inventory (may be slow); no error shown

---

## 3. Authentication — Logout

### TC-LOGOUT-001: Successful logout via burger menu
- **Steps:** Login as `standard_user`, open burger menu, click "Logout"
- **Expected:** Redirected to `/`, login form visible

### TC-LOGOUT-002: Cannot access inventory after logout
- **Steps:** Logout, navigate directly to `/inventory.html`
- **Expected:** Redirected back to `/` (login page)

### TC-LOGOUT-003: Cart is cleared after logout and re-login
- **Steps:** Add items to cart, logout, login again
- **Expected:** Cart badge shows 0 or is absent; cart is empty

### TC-LOGOUT-004: Logout from any page
- **Steps:** Navigate to cart page, open burger menu, click Logout
- **Expected:** Redirected to login page regardless of current page

---

## 4. Product Inventory Page

### TC-INV-001: Inventory page displays 6 products
- **Steps:** Login as `standard_user`
- **Expected:** Exactly 6 product cards are visible

### TC-INV-002: Each product card shows name, description, price, and image
- **Steps:** Inspect each product card
- **Expected:** All four elements present for every card

### TC-INV-003: Each product card has an "Add to cart" button
- **Steps:** Inspect product cards before adding any to cart
- **Expected:** All buttons labeled "Add to cart"

### TC-INV-004: Page title is "Products"
- **Steps:** Login and land on inventory
- **Expected:** Header text "Products" is visible

### TC-INV-005: Product images load correctly
- **Steps:** Login as `standard_user`
- **Expected:** All 6 product images are rendered (no broken image icons)

---

## 5. Product Detail Page

### TC-DETAIL-001: Clicking product name navigates to detail page
- **Steps:** Click on "Sauce Labs Backpack" product name
- **Expected:** Navigated to `/inventory-item.html?id=4`, product details displayed

### TC-DETAIL-002: Product detail page shows correct information
- **Steps:** Navigate to any product detail
- **Expected:** Correct name, description, price, and image displayed

### TC-DETAIL-003: "Add to cart" works from product detail page
- **Steps:** On detail page, click "Add to cart"
- **Expected:** Button changes to "Remove", cart badge shows 1

### TC-DETAIL-004: "Remove" works from product detail page
- **Steps:** Add item from detail page, click "Remove"
- **Expected:** Button reverts to "Add to cart", cart badge decreases

### TC-DETAIL-005: Back button returns to inventory
- **Steps:** Navigate to a product detail, click "Back to products"
- **Expected:** Navigated back to `/inventory.html`

---

## 6. Shopping Cart — Add Products

### TC-CART-ADD-001: Add a single product to cart
- **Steps:** Click "Add to cart" on any product
- **Expected:** Button changes to "Remove", cart badge shows 1

### TC-CART-ADD-002: Add multiple products to cart
- **Steps:** Click "Add to cart" on 3 different products
- **Expected:** Cart badge shows 3, all 3 buttons show "Remove"

### TC-CART-ADD-003: Add all 6 products to cart
- **Steps:** Click "Add to cart" on all 6 products
- **Expected:** Cart badge shows 6

### TC-CART-ADD-004: Cart badge count increments with each addition
- **Steps:** Add products one by one; check badge after each
- **Expected:** Badge increments by 1 each time (1 → 2 → 3 ...)

### TC-CART-ADD-005: Cart persists after navigating away and back
- **Steps:** Add 2 items, navigate to a product detail page, return to inventory
- **Expected:** Added items still show "Remove", badge count unchanged

### TC-CART-ADD-006: Cart persists after page refresh
- **Steps:** Add items to cart, refresh the browser
- **Expected:** Cart badge and "Remove" states are retained

---

## 7. Shopping Cart — Remove Products

### TC-CART-REM-001: Remove a product from inventory page
- **Steps:** Add a product, then click "Remove" on same product
- **Expected:** Button reverts to "Add to cart", cart badge decreases by 1

### TC-CART-REM-002: Remove all products from inventory page
- **Steps:** Add all 6 products, click "Remove" on all
- **Expected:** Cart badge disappears (0), all buttons show "Add to cart"

### TC-CART-REM-003: Remove a product from the cart page
- **Steps:** Add items, go to cart, click "Remove" on one item
- **Expected:** Item removed from cart list, cart total updates

### TC-CART-REM-004: Remove the last item from cart page
- **Steps:** Have 1 item in cart, navigate to cart, click "Remove"
- **Expected:** Cart is empty, "Your cart is empty" or similar state shown; badge gone

### TC-CART-REM-005: Continue shopping after removing item
- **Steps:** Remove item from cart page, click "Continue Shopping"
- **Expected:** Returned to inventory, product shows "Add to cart"

---

## 8. Shopping Cart Page

### TC-CART-PAGE-001: Cart page shows correct item count
- **Steps:** Add 2 items, click cart icon
- **Expected:** 2 line items listed in cart

### TC-CART-PAGE-002: Cart page shows correct product details
- **Steps:** Add specific product, open cart
- **Expected:** Product name, description, quantity (1), and price displayed correctly

### TC-CART-PAGE-003: "Continue Shopping" returns to inventory
- **Steps:** Navigate to cart, click "Continue Shopping"
- **Expected:** Redirected back to `/inventory.html`

### TC-CART-PAGE-004: "Checkout" button is present and navigates to checkout
- **Steps:** Have items in cart, click "Checkout"
- **Expected:** Navigated to `/checkout-step-one.html`

### TC-CART-PAGE-005: Cannot checkout with empty cart (UI state)
- **Steps:** Navigate to cart with no items, observe Checkout button
- **Expected:** Checkout button visible (edge case: verify behavior when clicked with empty cart)

### TC-CART-PAGE-006: Cart badge reflects cart page contents
- **Steps:** Add 3 items, navigate to cart
- **Expected:** Badge count matches number of items in cart list

---

## 9. Checkout — Step 1 (Customer Info)

### TC-CHK1-001: All three fields are required
- **Steps:** Click Checkout, click Continue without filling any fields
- **Expected:** Error "First Name is required"

### TC-CHK1-002: First Name field is required
- **Steps:** Fill Last Name and Postal Code only, click Continue
- **Expected:** Error "First Name is required"

### TC-CHK1-003: Last Name field is required
- **Steps:** Fill First Name and Postal Code only, click Continue
- **Expected:** Error "Last Name is required"

### TC-CHK1-004: Postal Code field is required
- **Steps:** Fill First Name and Last Name only, click Continue
- **Expected:** Error "Postal Code is required"

### TC-CHK1-005: Successful form submission proceeds to step 2
- **Steps:** Fill all fields with valid data, click Continue
- **Expected:** Navigated to `/checkout-step-two.html`

### TC-CHK1-006: Cancel button returns to cart
- **Steps:** On checkout step 1, click "Cancel"
- **Expected:** Navigated back to `/cart.html`

### TC-CHK1-007: Error can be dismissed with ✕ button
- **Steps:** Trigger a validation error, click ✕
- **Expected:** Error banner dismissed

---

## 10. Checkout — Step 2 (Order Review)

### TC-CHK2-001: Order summary shows correct items
- **Steps:** Proceed through checkout with known items
- **Expected:** All added items listed with correct names, quantities, and prices

### TC-CHK2-002: Item total is correct (sum of items)
- **Steps:** Checkout with 2 known-price items
- **Expected:** "Item total: $X.XX" matches sum of individual prices

### TC-CHK2-003: Tax is displayed
- **Steps:** Reach checkout step 2
- **Expected:** Tax line item is visible

### TC-CHK2-004: Total = item total + tax
- **Steps:** Verify numeric values on page
- **Expected:** "Total: $X.XX" equals item total + tax amount

### TC-CHK2-005: "Finish" button completes the order
- **Steps:** Click "Finish" on step 2
- **Expected:** Navigated to `/checkout-complete.html`

### TC-CHK2-006: "Cancel" from step 2 returns to inventory
- **Steps:** Click "Cancel" on step 2
- **Expected:** Navigated back to `/inventory.html`

---

## 11. Checkout — Complete

### TC-CHK-DONE-001: Confirmation page displays success message
- **Steps:** Complete full checkout flow
- **Expected:** "Thank you for your order!" visible

### TC-CHK-DONE-002: Pony Express image is displayed
- **Steps:** Complete checkout
- **Expected:** Confirmation image rendered

### TC-CHK-DONE-003: "Back Home" button returns to inventory
- **Steps:** On confirmation page, click "Back Home"
- **Expected:** Navigated to `/inventory.html`

### TC-CHK-DONE-004: Cart is empty after order completion
- **Steps:** Complete checkout, return to inventory
- **Expected:** Cart badge is absent, cart page is empty

---

## 12. Sorting & Filtering

### TC-SORT-001: Default sort is "Name (A to Z)"
- **Steps:** Login, observe product order
- **Expected:** Products listed alphabetically A–Z by default

### TC-SORT-002: Sort by "Name (Z to A)"
- **Steps:** Select "Name (Z to A)" from sort dropdown
- **Expected:** Products reorder to reverse alphabetical

### TC-SORT-003: Sort by "Price (low to high)"
- **Steps:** Select "Price (low to high)"
- **Expected:** Products ordered from cheapest to most expensive

### TC-SORT-004: Sort by "Price (high to low)"
- **Steps:** Select "Price (high to low)"
- **Expected:** Products ordered from most expensive to cheapest

### TC-SORT-005: Sort persists when adding item to cart
- **Steps:** Apply a sort, add an item to cart
- **Expected:** Sort order unchanged after cart interaction

### TC-SORT-006: Sort is reset after logout and login
- **Steps:** Apply non-default sort, logout, login
- **Expected:** Default sort (A to Z) is restored

---

## 13. Navigation & Header

### TC-NAV-001: Shopping cart icon is always visible on inventory
- **Steps:** Login and inspect header
- **Expected:** Cart icon present in top-right

### TC-NAV-002: Cart icon navigates to cart page
- **Steps:** Click the cart icon
- **Expected:** Navigated to `/cart.html`

### TC-NAV-003: Swag Labs logo is visible on all pages
- **Steps:** Visit inventory, cart, checkout pages
- **Expected:** Logo present on every page

### TC-NAV-004: Cart badge updates are reflected in header
- **Steps:** Add items, verify badge in header matches count
- **Expected:** Badge count is accurate across all pages

---

## 14. Burger Menu

### TC-MENU-001: Burger menu opens on click
- **Steps:** Click the ☰ hamburger icon
- **Expected:** Side menu slides open with options

### TC-MENU-002: Burger menu contains expected links
- **Steps:** Open burger menu
- **Expected:** Links: "All Items", "About", "Logout", "Reset App State" present

### TC-MENU-003: "All Items" navigates to inventory
- **Steps:** Open menu, click "All Items"
- **Expected:** Navigated to `/inventory.html`

### TC-MENU-004: "About" navigates to Sauce Labs website
- **Steps:** Open menu, click "About"
- **Expected:** Navigated to `https://saucelabs.com`

### TC-MENU-005: "Reset App State" clears cart
- **Steps:** Add items to cart, open menu, click "Reset App State"
- **Expected:** Cart badge disappears, all buttons revert to "Add to cart"

### TC-MENU-006: Burger menu can be closed with ✕ button
- **Steps:** Open burger menu, click the ✕ close button
- **Expected:** Menu closes without navigation

---

## 15. Special User Behavior

### TC-SPECIAL-001: locked_out_user cannot log in
- **Steps:** Login as `locked_out_user`
- **Expected:** "Sorry, this user has been locked out." error displayed

### TC-SPECIAL-002: problem_user sees broken/wrong product images
- **Steps:** Login as `problem_user`, inspect product images
- **Expected:** Some or all images show incorrect content (known defect)

### TC-SPECIAL-003: problem_user cannot type in Last Name field at checkout
- **Steps:** Login as `problem_user`, add item, proceed to checkout step 1, try typing Last Name
- **Expected:** Last Name field does not accept input (known defect)

### TC-SPECIAL-004: performance_glitch_user experiences slow login
- **Steps:** Login as `performance_glitch_user`, measure time to land on inventory
- **Expected:** Login takes several seconds but ultimately succeeds

### TC-SPECIAL-005: error_user encounters errors on specific actions
- **Steps:** Login as `error_user`, attempt to add items and checkout
- **Expected:** Functional errors occur (e.g., cart icon error, form errors)

### TC-SPECIAL-006: visual_user sees visual inconsistencies
- **Steps:** Login as `visual_user`, inspect layout
- **Expected:** UI elements appear misaligned or styled incorrectly

---

## 16. Accessibility & Visual

### TC-A11Y-001: Login form fields have accessible labels
- **Steps:** Inspect username and password fields
- **Expected:** Fields have associated `<label>` elements or `aria-label` attributes

### TC-A11Y-002: Error messages are readable by screen readers
- **Steps:** Trigger a login error, inspect error element
- **Expected:** Error has `role="alert"` or equivalent ARIA attribute

### TC-A11Y-003: Buttons have descriptive text
- **Steps:** Inspect all button elements
- **Expected:** No buttons with only icon content lacking `aria-label`

### TC-A11Y-004: Page has correct title
- **Steps:** Check browser tab on each page
- **Expected:** `<title>` is set to "Swag Labs" consistently

### TC-A11Y-005: Keyboard navigation — login form is tab-navigable
- **Steps:** Use Tab key to move between Username, Password, Login button
- **Expected:** Focus moves in correct order; Enter submits the form

---

## Summary

| Area | Test Cases |
|---|---|
| Authentication / Login | 10 |
| Logout | 4 |
| Product Inventory | 5 |
| Product Detail Page | 5 |
| Add to Cart | 6 |
| Remove from Cart | 5 |
| Cart Page | 6 |
| Checkout Step 1 | 7 |
| Checkout Step 2 | 6 |
| Checkout Complete | 4 |
| Sorting | 6 |
| Navigation & Header | 4 |
| Burger Menu | 6 |
| Special Users | 6 |
| Accessibility & Visual | 5 |
| **Total** | **85** |

---

*Generated for SauceDemo / Swag Labs — https://www.saucedemo.com*

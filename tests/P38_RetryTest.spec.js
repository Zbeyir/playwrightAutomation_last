
// Retries

// https://playwright.dev/docs/test-retries



import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';  

import{HomePage} from '../pages/HomePage';

import{CartPage} from '../pages/CartPage';

test('test', async ({ page }) => {

  // Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('pavanol', 'test@123');
  await page.waitForTimeout(3000);

  // Home
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6"); 
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductsInCart('Nexus 6'); 
  expect(await status).toBe(true);  



});

// P38_RetryTest.spec.js

// npx playwright test tests/P38_RetryTest.spec.js --project=chromium --headed --retries=1





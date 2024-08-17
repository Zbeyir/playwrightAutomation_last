
// Page object models

// https://playwright.dev/docs/pom


import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';  // bu class 'a import ediyoruz

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
  await home.addProductToCart("Nexus 6"); // hatirlar isen bu method un icne allert  ile ilgilenme de koymus idik
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductsInCart('Nexus 6'); // cünkü bunu assertions olarak ayarladik
  expect(await status).toBe(true);  



});

// P34_PomTest.spec.js

// npx playwright test tests/P34_PomTest.spec.js --project=chromium --headed





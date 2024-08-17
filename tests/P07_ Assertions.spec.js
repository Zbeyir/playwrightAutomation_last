const { test, expect } = require('@playwright/test');

test('Assertions Test', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  //await expect(page).toHaveTitle('nopCommerce demo store. Register'); // bende calismadi

  const logoElement = await page.locator('.header-logo')

  await expect(logoElement).toBeVisible()

  
// problem su ki site de tets yapmiyoruz
  




// page.close();

});

//P07_ Assertions.spec.js

// video pavan 7

// https://playwright.dev/docs/test-assertions

// NORMALDE bu kismi yazmiyor du ==> ama bu sefer yazdi benimde dikkatimi cekti ===>>>  tests/  
// npx playwright test tests/BURAYA TEST PAKETININ ADINI YAZIYORUZ --project=chromium --headed
// npx playwright test tests/P07_ Assertions.spec.js --project=chromium --headed
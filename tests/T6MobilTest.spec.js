import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await page.goto('about:bhttps://demoblaze.com/index.htmll');
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
});

/*

npx playwright codegen -o test/T6MobilTest.spec.js --device "iPhone 13"

npx playwright codegen -o test/T6MobilTest.spec.js --device "iPhone13"  ---> eger bunun gibi yazar isek sana hangi mobil i test edecegini söylüyor

*/
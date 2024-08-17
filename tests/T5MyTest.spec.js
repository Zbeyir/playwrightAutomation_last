import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
});



/*

npx playwright test T5MyTest.spec.js --project=chromium --headed

npx playwright codegen ---> tek tek olusturur  

 -o, --output
npx playwright codegen -o test/T5MyTest.spec.js  ---> bu otamatik olarak test class i olusturur


npx playwright codegen --viewport-size "1280,720"  ---> istersek bu sekilde boyutunu ayarlayabiliyoruz

ve hatta hangi dilli ile kodumuzu yazmak istiyorsak o sekilde yazdirabiliyoruz

birde record 'u durdurup sadece web elemnet i yani webElement i pick edebiliriz allta acilan kisimdan

!!!!!---> Test generator ----> bu basli altinda herseyi bulabilirsin dökümantasyon da


npx playwright codegen --help




*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const page1Promise = page.waitForEvent('popup');

  await expect(page).toHaveTitle("OrangeHRM")

  await page.waitForTimeout(3000)
  await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('link', { name: 'OrangeHRM Logo' })).toBeVisible();

  await expect(page1).toHaveTitle("Human Resources Management Software | OrangeHRM")



  await page1.waitForTimeout(3000);




});



// P35_2HandlingWindows_WithCodgen.spec.js

// npx playwright test tests/P35_2HandlingWindows_WithCodgen.spec.js --project=chromium --headed

// bu claass ben kendimekstra actimve codgen ile yaptim, karsisalstirmak icin
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('pavanol');

  await page.locator('#loginpassword').fill('test@123');

  await page.getByRole('button', { name: 'Log in' }).click();

});

// video pavan 6

// npx playwright codegen -o tests/    ==> ana code bu bundan sonra class'in ismi

// npx playwright codegen -o tests/P06_codegen_Otamatik_power_locator.spec.js  

// npx playwright codegen --help  ==> dan ulastik bu code

/*
 
bu da otamtik olarak testi ayd ediyor tests package' in altina
ama dikkat et bazi gereksiz seyler var ve bazi yerlere ii defa tikliyor
mesela bu test de :
user name i doldurmadan önce oraya tiklayip username yaziyoruz ya
 buda oraya tiklayipda yaziyor gerksiz kod klabaligi
 bu gereksizleri testpit edip sil


 // mobile test e de digerinde test 6 da git bak

*/

// Test generator  => adi bu bu sekilde arat dökümantas yonlar da

// https://playwright.dev/docs/codegen

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});


// video pavan 6



/*

Bu yöntem cok harika bir yöntem 
siteye girip otamatik web elementleri locate edip
sonra copy paste edip class i acip testitine basliyorsun
ama unut ma class i kendin manuel acman cok mantikli

birde pick var ki sadece o web elementi söylüyor sana en bastaki kare icinde mause 

*/



// P05_codegen_power_locator.spec.js



// npx playwright codegen   

// npx playwright codegen --help   ==> birsürü kisa yol ve yardimci code  


// Test generator  => adi bu bu sekilde arat dökümantas yonlar da

// https://playwright.dev/docs/codegen






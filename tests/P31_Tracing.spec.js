
//Trace viewer

//https://playwright.dev/docs/trace-viewer-intro


import {test, expect} from '@playwright/test';

test('test', async ({ page })=>{

    await page.goto ('https://demoblaze.com/index.html');

    
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

   
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect( page.getByRole('link', { name: 'Log out' })).toBeVisible()
});

// P31_Tracing.spec.js

// npx playwright test tests/P31_Tracing.spec.js --project=chromium --headed

// bu altta ki gibi show edebiliyoruz
//npx playwright show-trace --> bunda sonrasi --> copy relatiy path
// npx playwright show-trace test-results/P31_Tracing-test-chromium/trace.zip

/*
otomatik trace yapabilmek icin -->playwright.config.js
--->   trace:"retain-on-failure"  ---> bunu ekledik
vee test-results 'in icinde kayd oluyor tüm trace 'lar

*/


//!!!!!****---> class adinda bosluk olunca zip dosyasi kayd edilmesine ragmen acilmadi
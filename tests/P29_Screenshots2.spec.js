import {test, expect} from '@playwright/test';

test('test', async ({ page })=>{

    await page.goto ('https://demoblaze.com/index.html');

    
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

   
    await page.getByRole('button', { name: 'Log in' }).click();
});

// P29_Screenshots2.spec.js

// npx playwright test tests/P29_Screenshots2.spec.js --project=chromium

/*
otomatik Screenshot yapabilmek icin -->playwright.config.js
--->  screenshot:'on'  ---> bunu ekledik
vee test-results 'in icinde kayd oluyor tüm Screenshot 'lar
birde rapor da en alt ta görüküyor
*/

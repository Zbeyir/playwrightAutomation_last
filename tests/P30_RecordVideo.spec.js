
//Videos
//https://playwright.dev/docs/videos


import {test, expect} from '@playwright/test';

test('test', async ({ page })=>{

    await page.goto ('https://demoblaze.com/index.html');

    
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

   
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect( page.getByRole('link', { name: 'Log out' })).toBeVisible()
});

// P30_RecordVideo.spec.js

// npx playwright test tests/P30_RecordVideo.spec.js --project=chromium --headed

/*
otomatik vieo record yapabilmek icin -->playwright.config.js
--->   video:"on"  ---> bunu ekledik
vee test-results 'in icinde kayd oluyor tüm video 'lar
birde rapor da en alt ta görüküyor
*/

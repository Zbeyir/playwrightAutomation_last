
// Screenshots
// https://playwright.dev/docs/screenshots

const { test, expect } = require('@playwright/test');

    test('Page Screenshot', async ({ page }) =>{
        await page.goto('https://demo.opencart.com/')
        await page.screenshot({ path: 'tests/Screenshots/'+Date.now()+'HomePage.png' })

    });

    test('Full Page Screenshot', async ({ page }) =>{
        await page.goto('https://demo.opencart.com/')
        await page.screenshot({ path: 'tests/Screenshots/'+Date.now()+'FullPage.png', fullPage:true })


    });

    test.only('Element Screenshot', async ({ page }) =>{
        await page.goto('https://demo.opencart.com/')
        await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({ path: 'tests/Screenshots/'+Date.now()+'MacBook.png' })


    });



// P29_Screenshots.spec.js

// npx playwright test tests/P29_Screenshots.spec.js --project=chromium

const { test, expect } = require('@playwright/test');

test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html'); 

    const pageTitle = page.title();

    console.log('Page title is: ', pageTitle);

     await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

     await expect(page).toHaveTitle('STORE');

     const pageUrl = page.url();

     console.log('page url is: ', pageUrl);

     await page.close();

} )

// npx playwright test artik bunu yazmiyoruz hangi test'i calsitirmak istiy isek onu yaziyoruz 
// npx playwright test P01_HomePageTest.spec.js
// npx playwright test P01_HomePageTest.spec.js --project=chromium
// npx playwright test P01_HomePageTest.spec.js --project=chromium --headed
// npx playwright test P01_HomePageTest.spec.js --project=chromium --debug
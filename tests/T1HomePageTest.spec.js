
const {test, expect} = require ('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto ('https://demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log(' Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url();
    console.log('Page URL is:', pageUrl)

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    await page.close;

    

})


/*

HomePageTest.spec.js
npx playwright test                                                      ---> run all tests on all Browser in headless mode 
npx playwright test HomePageTest.spec.js                                 ---> run a spesific test fiele
npx playwright test HomePageTest.spec.js --project=chromium              ---> run on specic browser
npx playwright test HomePageTest.spec.js --project=chromium --headed     ---> 
npx playwright test HomePageTest.spec.js --project=chromium --headed --debug
*/



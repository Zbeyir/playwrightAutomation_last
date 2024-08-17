

const { test, expect } = require ('@playwright/test')

test('Soft assertions', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")

    // Hard assertions

   // await expect (page).toHaveTitle('STORE123');  ---> normalde beklenen=STORE, ama eger bu sekilde yazarsak terminate yapacak ve digerlerini tets etmiyece
   // await expect (page).toHaveURL("https://demoblaze.com/index.html");
   // await expect ( page.locator('.navbar-brand')).toBeVisible();


    // Soft assertions

    // https://playwright.dev/docs/test-assertions#soft-assertions

    await expect.soft (page).toHaveTitle('STORE123');  
    await expect.soft (page).toHaveURL("https://demoblaze.com/index.html");
    await expect.soft (page.locator('.navbar-brand')).toBeVisible();

})


/*
By default, failed assertion will terminate test execution. 
Playwright also supports soft assertions: 
failed soft assertions do not terminate test execution, but mark the test as failed.

npx playwright test test/T8SoftAssertions.spec.js --project chromium  ---> buda tetsi calistirmak icin ayri bir comment

*/

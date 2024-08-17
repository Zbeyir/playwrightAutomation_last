
import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async ({ browser })=>{  //buraya page yazmiyoruz artik browser yaziyoruz

    page = await browser.newPage();

    await page.goto ('https://demoblaze.com/index.html');

    //Login
   // await page.locator('#login2').click 
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

   //  await page.locator('//button[normalize-space()="Log in"]').click()
    await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterEach(async()=>{

    //Logout
   //  await page.locator('#logout').click()
    await page.getByRole('link', { name: 'Log out' }).click();
})



test('Home Page Test', async () => {

    

    //Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9);

});

test('Add Product to cart Test', async () => {

    //Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    // alert ile ilgilendik yine
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept

    })

});

// P27_Hooks1.spec.js
// npx playwright test tests/P27_Hooks1.spec.js --project=chromium --headed

//!!!!****--->Hooks ' kurmadan önce ===> playwright.config.js -->' de iki yerde bazi ayarlamar yapildi git gör

// Web elementi locate etmekden kaynaklanman sorunlar dan ötürü iki defa locate ettim ve test calsidi sonunda
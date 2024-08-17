
const{test, expect} = require('@playwright/test');

test('Mouse Hover', async({page}) => {

    await page.goto('https://www.browserstack.com/')

    const products = await page.locator('//button[@id="products-dd-toggle"]')
    const webTesting = await page.locator('//span[normalize-space()="Web Testing"]')
    const AppTesting = await page.locator('//span[normalize-space()="App Testing"]')



    // mouse hover
        await products.hover()
        await webTesting.hover()

        await page.waitForTimeout(3000);
                
        await AppTesting.hover()


        await page.waitForTimeout(3000);

})

const{test, expect} = require('@playwright/test');

test('Mouse double click', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const button = await page.locator('//button[normalize-space()="Copy Text"]')

    // double click action
    await button.dblclick();

    const f2 = await page.locator('#field2')

    await expect.soft(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);




});  

// Actions
// https://playwright.dev/docs/input 

const{test, expect} =  require('@playwright/test')

test('handle inputbox', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // inputbox - firstname

    await expect.soft (await page.locator('#name')).toBeVisible();

    await expect.soft (await page.locator('#name')).toBeEmpty();

    await expect.soft (await page.locator('#name')).toBeEditable();

    await expect.soft (await page.locator('#name')).toBeEnabled();

    // await page.locator('#name').fill('Jhon')  // one way
    await page.fill('#name','Jhon');  // the another way

    const firstname = await page.locator('#name')

    await expect.soft (firstname).toHaveValue('Jhon')

    await page.waitForTimeout(5000); // pausing code



})

// Actions
// https://playwright.dev/docs/input
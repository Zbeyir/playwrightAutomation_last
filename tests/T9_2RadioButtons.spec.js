
const{test, expect} = require('@playwright/test')

test('handle radio button', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // radio button
   

    await page.locator("//input[@id='male']").click();  // male radio button 

    await expect.soft(await page.locator("//input[@id='male']")).toBeChecked();

    await expect.soft(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();  // yukarida cehck yaptimiz icin bunun true cikmasi lazim
 
    
    await expect.soft(await page.locator("//input[@id='female']").isChecked()).toBeFalsy(); // yukarida cehck yapmadigimiz icin bunun flase cikmasi lazim

    await page.waitForTimeout(5000);




})

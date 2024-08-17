const { test, expect } = require('@playwright/test');


test('Built-inLocators ', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const logo = await page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill("Admin");

    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button', {type: 'submit'}).click();

    const adminName = await page.getByText('Stefania Abe');

    await expect(adminName).toBeVisible();





    

    await page.close();

} ) 





// video pavan 5
// P04_Locators_builtin.spec.js

// https://playwright.dev/docs/locators



// npx playwright codegen   



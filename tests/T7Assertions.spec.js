import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  //1) expect (page) . toHaveURL()  --> Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) expect (page). toHaveTitle()  --> Page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  // 3) expect (locator). toBeVisible()  --> Element is visible

  const logaElement = await page.locator('.header-logo')
  await expect(logaElement).toBeVisible()

  // 4) expect (locator) . toBeEnabled()  -->Control is enabled
  const searchStoreBox = await page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

  // 5) expect(locator). toBeChecked() --> Radio/Checkbox is checked

  // radio buuton
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click() // select radio button
  await expect(maleRadioButton).toBeChecked()

  // check box
  const newsletterChehkBox = await page.locator('#Newsletter')
  await expect(newsletterChehkBox).toBeChecked() 

  // 6) expect(locator). toHaveAttribute()  --> Element has attribute
  const regButton = await page.locator('#register-button')
  await expect(regButton).toHaveAttribute('type','submit')

  // 7) expect (locator) . toHaveText()  -->Element matches text  --->  "div[class='page-title'] h1"  -->  .page-title h1 --->  bu ikisi de ayni ikisinden birini kullanabiliriz
  await expect(await page.locator('.page-title h1')).toHaveText('Register') // full text

  // 8) expect (locator). toContainText()  -->Element contains text
  await expect(await page.locator('.page-title h1')).toContainText('Reg') // partial text

  // 9) expect (locator). toHaveValue (value) -->Input has a value
  const emailInput = await page.locator('#Email')
  await emailInput.fill('test@demo.com');
  await expect(emailInput).toHaveValue('test@demo.com')

  // 10) expect (locator). toHaveCount()  -->List of elements has given length
  const optionMonth = await page.locator('select[name="DateOfBirthMonth"] option')
  await expect(optionMonth).toHaveCount(13)


  
});

// https://playwright.dev/docs/test-assertions



/*
Assertions
Playwright includes test assertions in the form of expect function.
https://playwright.dev/docs/test-assertions


yani burad verify yapiyoruz--dogrulama

1) expect (page) . toHaveURL()  --> Page has URL

!!!--NOT---!!!!---> expect(page).not.toHaveURL() --> hepsinin bu sekilde negatifi vat yani negatif tetsi 

2) expect (page). toHaveTitle()  --> Page has title

3) expect (locator). toBeVisible()  --> Element is visible

4) expect (locator) . toBeEnabled()  -->Control is enabled
expect (locator). toBeDisabled()     --> Element is disabled


5) expect(locator). toBeChecked() --> Radio/Checkbox is checked


6) expect(locator). toHaveAttribute()  --> Element has attribute



7) expect (locator) . toHaveText()  -->Element matches text


8) expect (locator). toContainText()  -->Element contains text


9) expect (locator). toHaveValue (value) -->Input has a value


10) expect (locator). toHaveCount()  -->List of elements has given length

-bunlar hard asserions yani bunlardan yanlsi ise code terminate yapiyor teste devam etmiyor


*/
// import one way
//const {test, expect} = require ('@playwright/test')

// import another way
import {test, expect} from '@playwright/test'

test('Locators', async ({page}) =>{

    // iki tirna isaretinin icinede yazabiliriz buradaki gibi ''=""
await page.goto("https://demoblaze.com/index.html")

// click on login button  ->  property
// await page.locator('id=login2').click

await page.click('id=login2')

// provide username -> CSS
 //await page.locator('#loginusername').fill("pavanol")

await page.fill ("#loginusername", 'pavanol' )


// provide password -> CSS
await page.fill ("input[id='loginpassword']", 'test@123')

// click on login button -> XPath
await page.click ("//button[normalize-space()='Log in']")

// verify logout link pesence -> XPat
const logoutLink = await page.locator("//a[normalize-space()='Log out']")

await expect(logoutLink).toBeVisible();


await page.close;

})

/*

LocatingMultipleElements.spec.js

Locating Elements in Playwright
property
CSS
xpath
-----------------
Locate single element
-----------------

link/button
------------
await page. locator ('locator') .click()
await page. click( 'locator'):

inputbox
---------
await page. locator ('locator') .fill('value')
await page. locator( 'locator'). type('value')


await page. fill( 'locator','value')
await page. type ('locator','value')

==================================

Locate multiple web elements
---------------

const elements = await page.$$(locator)

*/
// one way
//const { test, expect } = require('@playwright/test');

//another way
import{test, expect} from '@playwright/test'

test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html') 

    // id="login2" ==> bu sekilde idi ama --> assagiya bu sekilde yaziyoruz dikkat!!!
    await page.locator('#login2').click  // one way

    // await page.click('id=login2')  // another way

    //await page.locator('#loginusername').fill('pavanol')  // bunlar bende calismadi 
    await page.locator('#loginusername').type('pavanol')


    // await page.locator('#loginpassword').fill('test@123')   // bunlar bende calismadi
     await page.locator('#loginpassword').type('test@123')


    // button[onclick="logIn()"]
     await page.locator("button[onclick='logIn()']")

     // #logout2  // a[id='logout2']   // //*[@id="logout2"]
     const logoutlink = await page.locator('#logout2')



    //await expect(logoutlink).toBeVisible()  // bunlar calismadi bende

  //logoutlink.click();  // bunlar calismadi bende




     await page.close();

} )

// Keyboard
// https://playwright.dev/docs/api/class-keyboard

const{test, expect} = require('@playwright/test');

test('Keyboard actions', async({page}) => {

    await page.goto('https://gotranscript.com/text-compare') 

   
   // await page.type('name="text1"', 'welcome to automation')   // second way  --> bende hala calismiyor
   await page.locator('[name="text1"]').fill("welcome to automation"); // one way


   // burada hedef mouse kullanamdan klayve ile is yapmak
   // önce --> Ctrl + A - selcet the text 
   // Ctrl + C ---> copy the text
   // sonra bir sonraki semeye gecmek icin --> Tab
   //Ctrl + V ---->paste the text


   
   // windows--> ctrl - mac---> Meta

   // Ctrl + A  == Control+A für windows - selcet the text
   await page.keyboard.press('Meta+A')

   //Ctrl + C - copy the text
   await page.keyboard.press('Meta+C')

   //Tab
   await page.keyboard.down('Tab')
   await page.keyboard.up('Tab')

   //Ctrl + V - paste the text
   await page.keyboard.press('Meta+V')


   await page.waitForTimeout(3000);





})

/*
https://playwright.dev/docs/api/class-keyboard

burada cok faydali diger methodlar var 
*/ 


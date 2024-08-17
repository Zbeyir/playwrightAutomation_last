
// Dialogs

//  https://playwright.dev/docs/dialogs

// alert(), confirm(), prompt() dialogs

const{test, expect} = require('@playwright/test');

// buraya yeni birsey koyduk bu test otamatikman calismayacak, skip olacak yani
// yani kocaman tetsi close etmeye gerek yok otamatikman skip ettik 
test.skip('Alert with OK' , async({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/')


    /*
    By default, dialogs are auto-dismissed by Playwright,
     so you don't have to handle them. 
     However, you can register a dialog handler 
     before the action that triggers the dialog 
     to either dialog.accept() or dialog.dismiss() it.
     */


     // Enabling alert handling  //Dialog window hanler
     page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

     })

     // playrigth kendisi alert ile ilgileniyor , bizim öncesinde alert 'a ulasbilmemiz icin yuaridakini yaziyoruz
     await page.locator("//button[normalize-space()='Alert']").click(); 


     

     await page.waitForTimeout(5000);



});


// bu ikinci tetsi olusturunca ayni fiele da hata verdi import tan itibaren ';' naktali vir gül ü koyonca düzeldi
test.skip('Confirmation dialog-Alert with OK and Cancel' , async({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/')


     // Enabling alert handling  //Dialog window hanler
     page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); // close by using OK button
        // await dialog.dismiss(); // close by using Cancel button

     })

     await page.locator("//button[normalize-space()='Confirm Box']").click(); 

     await expect.soft (page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');


     

     await page.waitForTimeout(5000);



});

test('Promt dialog' , async({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/')


     // Enabling alert handling  //Dialog window hanler
     page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('John'); 

     })

     await page.locator("//button[normalize-space()='Prompt']").click(); 

     await expect.soft (page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?');


     

     await page.waitForTimeout(5000);



});

const{test, expect} =require('@playwright/test');
const { log } = require('console');

test('Hnadle multi dropdown', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select multiple optons from multi selcet dropdown
   // await page.selectOption('#colors', ['Yellow','Red', 'Blue']);  // yine Array ile birden fazla select yapiyoruz


    // Assertions
    // 1-) check number of options dropdown
   // const options = await page.locator('#colors option')

    // await expect.soft(options).toHaveCount(5);

    // 2-) check number of options dropdown using JS array--> $$ = Array
    // const options = await page.$$('#colors option')

    // console.log("Number of options: " , options.length)

    // await expect.soft(options.length).toBe(5);

    // 3-) check presence value of in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect.soft(content.includes('Blue')).toBeTruthy();
    await expect.soft(content.includes('Black')).toBeFalsy();


    console.log(content);



   // await page.waitForTimeout(3000);


})
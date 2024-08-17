
const{test,expect} = require('@playwright/test')

test('Autu suggest dropdown', async({page}) => {

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi');

    await page.waitForSelector("//li [contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromCityOptions = await page.$$("//li [contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromCityOptions) {

        const value = await option.textContent();
        console.log(value);

        if(value.includes('GT Karnal Road')) {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);

})

/*
search kismina öncelikle sehir isimin yaziyoruz orayi locate edip
sonra sonra drop down aciliyoe 
orayi da Array ile $$ locate edip
for loop un icinde  textContent() method ile yakalayip
istedigim value neye esit ise   click() yapiyoruz
*/
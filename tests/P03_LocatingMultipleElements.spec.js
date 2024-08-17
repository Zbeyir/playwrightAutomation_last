const { test, expect } = require('@playwright/test');



test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    // bu assagi daki sekilde sayfadaki tüm linkleri yakaladik
    const links = await page.$$('a');

    for(const link of links)
    {

        const linktext = await link.textContent();

        console.log(linktext)

    }

     //  //div[@id='tbodyid']//div//h4/a

     // ama ne yaziki benim buldugumm bazen calsimiyor ve calisinca da adamin ki gibi güzel calismiyor calistir bak gör
    // //*[@id='tbodyid']/div   ==> bunu ben bulduim sadec bir elemanin xpath ini otomatik istedim sile sile geri geldim ve buldumn

    page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); // bu önemli bu link calisasaya kadar bekliyor

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products)
    {

        const producttext = await product.textContent();

        console.log("products lists: ", producttext)

    }


   

    await page.close();

} ) 



//P03_LocatingMultipleElements.spec.js
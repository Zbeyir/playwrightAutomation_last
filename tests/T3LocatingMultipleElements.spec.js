

const {test, expect} = require('@playwright/test')

test('LocateMultipleElements', async({page}) => {

    await page.goto("https://demoblaze.com/index.html")


    const links = await page.$$('a');


    for(const link of links) {

        const linktext = await link.textContent(); 
        console.log(linktext);

    }

    // eger ilk kez testi calsitirinca sonuc alamaz isen testi birkez daha calistir sonra sonucu aliyorsun 

    // bu sorunun cözümü de bu sekilde
    page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");


    for(const product of products) {

        const productName = await product.textContent(); 
        console.log(productName);

    }


     

})



/*

Locate multiple web elements
---------------

const elements = await page.$$(locator)

*/

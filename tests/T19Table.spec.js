
const{test, expect} = require('@playwright/test');

test('handling table', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    /*
    !!!!---->önce table 'i locate ettik sonra table icine girdik ÖNEMLI!!!!
    */
    const table = await page.locator('#productTable') // !!!dikkkat id web element i bu sekilde locate ettik

    // 1-)total number rows and columns
    const columns = await table.locator('thead tr th');  // !! burasi da dikkat burayi da basmak seklinde locate ettik

    console.log('Number of columns: ', await columns.count());

    await expect.soft(await columns.count()).toBe(4);
    

    const rows = await table.locator('tbody tr')

    console.log('Number of rows: ', await rows.count())

    await expect.soft(await rows.count()).toBe(5)

    // 2-)select check box for Product 4 
    // --> ben bildigim basit bir yolla select yaptim ama simdi baska bir yol ögreniyoruz
  //  await page.locator("//*[@id='productTable']/tbody/tr[4]/td[4]/input").check();
  //  await expect.soft(page.locator("//*[@id='productTable']/tbody/tr[4]/td[4]/input").isChecked).toBeTruthy
   



    // 2-)select check box for Product 4 
    /*
    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

      await machedRow.locator('input').check();
      */

    //3-)select multiple Products by re-usable function 

    await selectProduct(rows,page,'Product 1')
    await selectProduct(rows,page,'Product 3')
    await selectProduct(rows,page,'Product 5')

    //4-) print all product details using loop
    /*
    for(let i=0; i < await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td')
        
        for(let j=0; j < await tds.count()-1; j++)  // -1 son daki selct leri istemiyoruz onun icin yazdik, yani price da ostemiyorsak -2 yazariz
        {
            console.log(await tds.nth(j).textContent())
        }
    }
    */

    //5-) read data from all the pages in the table
   const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table: ', await pages.count())

    for(let p=0; p < await pages.count(); p++)
    {
         if(p>0)   // cünkü index=0 --> 1. sayfa bizim 1. sayfayi clik yapmak istemiyoruz
         {
            await pages.nth(p).click()
         }

         for(let i=0; i < await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td')
        
        for(let j=0; j < await tds.count()-1; j++)  
        {
            console.log(await tds.nth(j).textContent())
        }
    }
    await page.waitForTimeout(3000); 
        
    }

    



    await page.waitForTimeout(3000);



})

// class in disina bir method kuruyoruz java da oldugu gibi
    async function selectProduct(rows, page, name)
{
    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

      await machedRow.locator('input').check();
}
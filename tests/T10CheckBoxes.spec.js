
// Checkboxes and radio buttons

//https://playwright.dev/docs/input

const{test, expect} = require('@playwright/test')

test('Check box handel', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // single check box
    await page.locator("//input[ @id='sunday' and @type='checkbox']").check();  // one way---> locater cok önemli

    // await page.check("//input[ @id='sunday' and @type='checkbox']");  // another way

    await expect.soft(await page.locator("//input[ @id='sunday' and @type='checkbox']")).toBeChecked();
    await expect.soft(await page.locator("//input[ @id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();

    await expect.soft(await page.locator("//input[ @id='monday' and @type='checkbox']").isChecked()).toBeFalsy();


    // multiple checkboxes
    // yani birden fazla kutucugu isaretlemek ister isek
    // öncelikle bir Array olusturuyoruz

    const checkBoxLocators = [
        "//input[ @id='tuesday' and @type='checkbox']",
        "//input[ @id='sunday' and @type='checkbox']",
        "//input[ @id='monday' and @type='checkbox']" 

    ]

    // ve for loop ile bunlari ücünü gidip ckeck edecek select yani

    for(const locater of checkBoxLocators) {  //select multiple checkboxes

        await page.locator(locater).check();
    }

    await page.waitForTimeout(3000);

    for(const locater of checkBoxLocators) {  //unselect multiple checkboxes wich are already selected

        if(await page.locator(locater).isChecked()){  // daha önce hangileri check edilmis ise onlari bul ve....uncheck yap

            await page.locator(locater).uncheck();    // ve.... onlari uncheck yap

        }

        // 10. video 20. dakikdan önce anlatti bu if() 'i

        /*
        yani if() öcelikle bunlari select yapilmis mi diye kontrol ediyor, sonra onalri unselect yapiyor
        */
    }




    await page.waitForTimeout(3000);
})


/*

!!!! cok önemli buradaki locate cok hoauma gitti kaliteli untama bunu  7. siradaki

*/
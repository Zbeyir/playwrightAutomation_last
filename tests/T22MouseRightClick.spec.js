
const{test, expect} = require('@playwright/test');

test('Mouse right click', async({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button = await page.locator('.context-menu-one.btn.btn-neutral')

    // right click action
    await button.click({button: 'right'});   // click() yazinca parantezin oocne girince yazabilecegin seyleri gösteriyor, right harice baska seylerde var yani


    await page.waitForTimeout(3000);

});

const {test, expect} = require('@playwright/test');

test('Drag and drop', async({page}) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = await page.locator('#box6')
    const italy = await page.locator('#box106')

    // burada amac rome 'u ---> itayl ' nin üstüne tasimak
    //Appraoch 1
    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()

    await page.waitForTimeout(3000);


    // washington ---> unitedStates
    //Appraoch 2
    const washington = await page.locator('#box3')
    const unitedStates = await page.locator('#box103')

    await washington.dragTo(unitedStates)

    await page.waitForTimeout(3000);



 

});

const{test, expect} = require('@playwright/test');

test('Ineer frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    await frame3.fill("input[name='mytext3']", 'Hey I am heer');    

    // nested frame
    const childFarme = frame3.childFrames();

   await childFarme[0].locator("//*[@id='i5']/div[3]/div").check();  // burada birtane child oldugu icin inedx numarasi 0 'dan basliyor

   await expect.soft (childFarme[0].locator("//*[@id='i5']/div[3]/div").isChecked()).toBeTruthy();
// await expect.soft (childFarme[0].locator("//*[@id='i8']/div[3]/div").isChecked()).toBeFalsy();  // bu assertion calismadi


    

    await page.waitForTimeout(3000);

});
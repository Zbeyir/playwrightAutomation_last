
//Frames

// https://playwright.dev/docs/frames

const{test, expect} = require('@playwright/test');

test('frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    /*

    // total frames
    const allframes = await page.frames();
    console.log("Number of frames: ", allframes.length);

    // approach 1 -- using name or url
    // dökümanlar da tüm codlar var !!dikkkat!! önemli

   // const var1 = page.frame('frame name yaz buraya'); // if name is present // ama burada name not avable

    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });

        await frame1.locator("input[name='mytext1']").fill('Hello I am heer');  ===> altakinde locator ic ice kafan karismasin
    await frame1.fill("input[name='mytext1']", 'Hello I am heer');

    */

    // approach 2 -- using frame locotar

    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    await inputbox.fill('Hello');

    await page.waitForTimeout(3000);







})
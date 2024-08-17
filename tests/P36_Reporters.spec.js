
// Reporters

// https://playwright.dev/docs/test-reporters

const { test, expect } = require('@playwright/test');


test('Test 1', async ({ page })  => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE')
}) 

test('Test 2', async ({ page })  => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store')
}) 

test('Test 3', async ({ page })  => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM')
}) 



// P36_Reporters.spec.js
// npx playwright test tests/P36_Reporters.spec.js --project=chromium --headed --reporter=line

// 1. reportar==> npx playwright test --reporter=list
// npx playwright test tests/P36_Reporters.spec.js --reporter=list

// playwright.config.js --> de --> //reporter: 'list' acmistim
// ama sonra kapattim
// yani istersem konsola cod seklind yazabiliriz
// yada-->playwright.config.js--> ayar yapabilirz bu raporlar icn

// 2. reportar==> npx playwright test --reporter=line
// 3 . reportar==> npx playwright test --reporter=dot
// 4 . reportar==> npx playwright test --reporter=html ==> bu bizim clasic bu zamana kadar kullandigimiz 

// 5 . reportar==> npx playwright test --reporter=json ==> bun da fiele crate etmesini istiyor isek drirekt config field e ayarla yada dökümantasyona git code da biraz ugrasman gerek


// sonra hepsini bir array in iicne config. de kaydettim
//veee  --> npx playwright test tests/P36_Reporters.spec.js --> sadece bunu calsitir














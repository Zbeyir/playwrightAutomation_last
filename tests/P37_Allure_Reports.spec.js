
// Reporters

// https://playwright.dev/docs/test-reporters

// https://www.npmjs.com/package/allure-playwright

// https://www.npmjs.com/package/allure-commandline

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



//  P37_Allure_Reports.spec.js

// önce --> npm i -D allure-playwright --> bunu yükle
// daha sonra --> package.json ' a git son satir a allure report eklenmis oluyor
// daha sonra--> für mac--> sudo npm install -g allure-commandline --save-dev
// daha sonra--> für windows--> npm install -g allure-commandline --save-dev
// ama sifre soruyor 
// sonra config de ayarlama yapiyoruz

//////yani artik bu ayarlamalar bitince bu son 3 nü kullanacagiz////
//veee  --> npx playwright test tests/P37_Allure_Reports.spec.js --> sadece bunu calsitir

// allure generate allure-results -o allure-report --clean

// allure open allure-report
///////buraya kaadr yani////

// normalde adam da --> my-allure-results--> sonuclar
// ama bende ben ayni seyi yapmam ragmen-->allure-results 
// ve bundan dolayi ilk basta raporu alamadim



// buda yeni bir adam github ' a bundan izledim

// https://www.youtube.com/watch?v=zF3ftXEj5Aw&list=PL6flErFppaj0iQG2_Dd72Jz0bfrzZwMZH



// playwrightAutomation_last





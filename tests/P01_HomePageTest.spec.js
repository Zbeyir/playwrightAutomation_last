const { test, expect } = require('@playwright/test');

test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html'); 

    const pageTitle = page.title();

    console.log('Page title is: ', pageTitle);

     await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

     await expect(page).toHaveTitle('STORE');

     const pageUrl = page.url();

     console.log('page url is: ', pageUrl);

     await page.close();

} )

// npx playwright test artik bunu yazmiyoruz hangi test'i calsitirmak istiy isek onu yaziyoruz 
// npx playwright test P01_HomePageTest.spec.js
// npx playwright test P01_HomePageTest.spec.js --project=chromium
// npx playwright test tests/P01_HomePageTest.spec.js --project=chromium --headed
// npx playwright test P01_HomePageTest.spec.js --project=chromium --debug


///////gitHub/////////
/*

// https://www.youtube.com/watch?v=zF3ftXEj5Aw&list=PL6flErFppaj0iQG2_Dd72Jz0bfrzZwMZH

///----steps----///
//önce gitHub ' da repo create ettik bizim projemizin adina
--> sonra Plawright ' da--> .gitignore --> fiele kurduk

hangilerinin gidip gitmeyecegini git status ile kontrol ettik ve istemediklerimiz i  .gitignore 'a yükledik



git init
git status
git add
git add filename or git add .

git commit -m "first code commit"   
git log

git branch
git branch -M main  --> eger master barnch in adini degistirmek istersen

git remote add origin https://github.com/Zbeyir/playwrightAutomation_last.git;  --> bunu github kendisi veriyor

git push -u origin master            
*/



//////////install///////
/*
//--1----> Nodejs---> install

--> https://nodejs.org/en   --> dowload

//--2--> visual studio code download

--> https://code.visualstudio.com/download

Windows'ta Command Prompt --> cmd (yani terminal demek windows da)

buray ---> bunu yaz
--> node -v --> verion u gör hem yüklenip yüklenmedigini kontrol edersin
--> veya ---> node --version
--> npm -v

//--3--> create project folder --> open in VSCode

//--4--> install playwright using terminal

---> https://playwright.dev/docs/intro

--> npm init playwright@latest

-->  npm playwright -v

run the playwright test --> npx playwright test

--------
---> package.json-->node project managment file   ( alle depedincies hier)

---> playwright.config.js--> playwright spesifik configuration file (dann hier configiritet)

---> tests--> ich kann create all tests dies paket

vfdvd
*/

///////jenkins///////
/*
https://www.youtube.com/watch?v=FZ5NlP1hL9A

https://www.youtube.com/watch?v=1_Zs0gQq1Yc&list=PL6flErFppaj35spJjPy41-lruDjw2kRV-

https://www.youtube.com/watch?v=FX322RVNGj4&list=PLEiEAq2VkUUKGrfcoNYRgqam5YBERN8xa


// adini degistirdm
mv /Users/admin/Downloads/jenkins.war ~/jenkins.war
java -jar ~/jenkins.war


*************************************************************

Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

541e4b451dcb4d63a95eee12e6cbe04b

This may also be found at: /Users/admin/.jenkins/secrets/initialAdminPassword

*************************************************************

Zubeyir
451dcb4d63a95e
zubeyirtabanoglu@gmail.com
Zubeyir

*/

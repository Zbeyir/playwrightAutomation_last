
const {test, expect} = require('@playwright/test')
const { log } = require('console')

test('Handels dropdowns', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // multiple ways to select option from the dropdown

   // await page.locator('#country').selectOption({label:'Japan'}); //by using label / visible text --> 1. way // ama en popüler i bu 
   
   // await page.locator('#country').selectOption('Japan'); //by using visible text --> 2. way

   // await page.locator('#country').selectOption({value: 'uk'}); //by using value /  text --> 3. way  (burada value text ile )

  // await page.locator('#country').selectOption({index: 1});  //by using index -->4. way index numarasi 0' dan baslar onun icin 1 yazdik ve 2. sirada canada var onu cagiracak 

  
    //await page.selectOption("#country", 'Canada'); //by using text  5. way --> bu yol da yanitext de 2 ile ayni developer index i degistirse bile text degistirmez herhalde

   
  // await expect.soft (await page.locator('#country')).toHaveValue('japan');
   
  // await expect.soft (await page.locator('#country')).toHaveValue('uk'); 

   //await expect.soft (await page.locator('#country')).toHaveValue('canada');  

   // Assertions

   // 1-) check number ofoptions in dropdown -- Appraoch 1
   //const options = await page.locator('#country option')

   //await expect.soft(options).toHaveCount(10);

   // 2-) check number ofoptions in dropdown -- Appraoch 2 -- burada Array ile yakalidik -- Array format ==> $$('')
   //const options = await page.$$('#country option')

   //console.log ("Number of options:", options.length )

   //await expect.soft(options.length).toBe(10);

   //3-) check presence of value in the dropdown - appraoch 1
   // const content = await page.locator('#country'). ()

  //  await expect.soft(content.includes('India')).toBeTruthy();
  //  await expect.soft(content.includes('india')).toBeFalsy();

  // 4-) check presence of value in the dropdown - appraoch 2 - by using looping

  /*
  const options = await page.$$('#country option')  // ilkk önce yine ARRAY Formatta yakaliyoruz

  let status = false;  // baslarken false

  for(const option of options) {

    console.log(await option.textContent())

    let value = await option.textContent();

    if(value.includes('France')){

      status=true;
      console.log('we have found');
      break;
    }
  }

  await expect.soft(status).toBeTruthy();

  */

  // select option from dropdown using looping
  const options = await page.$$('#country option')

  for(const option of options) {


    let value = await option.textContent();

    if(value.includes('France')){

      await page.selectOption('#country', value);   // yani bu sefer select by value 'yu loop ta kullanyioruz -- by using value-- 3 yol yani yuaridaki

      console.log('we have selected this value:', value)

      break;
    }
  }




    await page.waitForTimeout(3000);



})
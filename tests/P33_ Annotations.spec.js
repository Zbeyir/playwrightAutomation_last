
//Annotations
//https://playwright.dev/docs/test-annotations


import {test, expect} from '@playwright/test';

/*
test.only('test1', async ({ page })=>{
    console.log('This is my tets 1.....')
});
*/

/*
test.only('test2', async ({ page })=>{
    console.log('This is my tets 2.....')
});
*/

// mesela yukarida 2 tane only yaptik 2 si de calisti


//skip

test.skip('test3', async ({ page })=>{
    console.log('This is my tets 3.....')
});

// skip()
test('test4', async ({ page, browserName })=>{
    console.log('This is my tets 4.....')
    if(browserName==='chromium'){
        test.skip()
    }
});

// bu skip olmayacak cünkü bizim codda allta terminal de chromium yaziyor
test('test5', async ({ page, browserName })=>{
    console.log('This is my tets 5.....')
    if(browserName==='firefox'){
        test.skip()
    }
});

// fixme()  ==> bu test execution olmayack cünkü fix olmali 
test('test6', async ({ page })=>{
    test.fixme()
    console.log('This is my tets 6.....')
});

/*
// fail()  ==> bu test fail olacak
test('test7', async ({ page })=>{
    test.fail()  // exp---> beklenen sonuc fail
    console.log('This is my tets 7.....')
    expect(1).toBe(1); //act--> ama aktüel sonuc pass
});
*/

// fail()  ==> bu test pass olacak  --> Negative Test
test('test8', async ({ page })=>{
    test.fail()  // exp---> beklenen sonuc fail
    console.log('This is my tets 8.....')
    expect(1).toBe(21); //act-->  aktüel sonuc da fail
});

// fail()  ==> bu test pass olacak  --> Negative Test
test('test9', async ({ page, browserName })=>{
    console.log('This is my tets 9.....')
    if(browserName==='firefox'){   // conditions 'da fail  // ama burasi-->chromium-->olas idi fail 
        test.fail()  // exp---> beklenen sonuc fail
    }
});

test.only('test10', async ({ page })=>{
   // test.setTimeout(5000)  // another approach
    test.slow();
    await page.goto('https://www.demoblaze.com/index.html'); 
    console.log('This is my tets 10.....')
});

    //P33_ Annotations.spec.js

    // npx playwright test tests/P33_ Annotations.spec.js --project=chromium --headed

    // --> playwright.config.js-->' da --> timeout:1000 --> yaptik
    // ve test fail oldu ve onun icin--> test.slow()  ' u kullandik tets 10 da
    // vee sonra tabiki pass oldu test
    // --> playwright.config.js-->' da --> timeout:5000 --> ama ben daha sonra sikiniti olmasin diye kapttim


    
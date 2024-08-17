
const { test, expect } = require('@playwright/test');

test.beforeAll(async()=>{
    console.log('This is beforeAll Hook.... ')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach Hook.... ')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach Hook.... ')
})

test.afterAll(async()=>{
    console.log('This is afterAll Hook.... ')
})



//test.describe.skip('Group 1', ()=>{       // eger normal olarak bu test grubu da caliscak
//test.describe.only('Group 1', ()=>{       // eger sadec bu test grubunun calismasini ister isek 'only' kullandik
    test.describe.skip('Group 1', ()=>{     // eger bu test grubunun calismamasini ister isek 'skip' kullaniyoruz

    test('Test1', async ({page})=>{

        console.log('This is test 1......')
    
    } )
    
    test('Test2', async ({page})=>{
    
        console.log('This is test 2......')
    
    } )

})


test.describe('Groupe 2', ()=>{

    test('Test3', async ({page})=>{

        console.log('This is test 3......')
    
    } )
    
    test('Test4', async ({page})=>{
    
        console.log('This is test 4......')
    
    } )

})




// P28_Grouping.spec.js
// npx playwright test tests/P28_Grouping.spec.js --project=chromium


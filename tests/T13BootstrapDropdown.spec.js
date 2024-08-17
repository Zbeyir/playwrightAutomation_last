

const{test, expect} = require('@playwright/test')

test('Handle bootstrap dropdown', async({page}) => {

    await page.goto('')


    await page.waitForTimeout(3000);

})

/*
Ben bu sayfayi bulamadim ama
bu acilir dropdown demek
yani öncelikle dropdown 'a ulasmak icn bir kere click() yapiyoruz
sonra dropdown aciliyor
geri kalan tüm islemler ve methodlar 11 ve 12 ile ayni 
*/
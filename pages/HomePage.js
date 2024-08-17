exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
         // //*[@id="tbodyid"]/div[1]/div/div/h4/a  --> normalde bu idi bir ürün icin, ama sayfadaki tüm ürünleri istedigimiz icin -->[1] 'sildik, altta
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';  
        this.addToCardBtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';
    }

    // first method 
    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            if (productName === await product.textContent() ) {
                await product.click()
                break;
            }
        }

        await this.page.on('dialog', async dialog =>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })

        await this.page.locator(this.addToCardBtn).click();
    }


    // second method
    async gotoCart(){
        await this.page.locator(this.cart).click();
    }

}
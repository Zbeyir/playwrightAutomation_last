exports.CartPage = class CartPage {

constructor(page) {
    this.page = page;
    // //*[@id="tbodyid"]/tr[1]/td[2] --> orjinali
    this.noOfProducts = '//*[@id="tbodyid"]/tr/td[2]';
}

async checkProductsInCart (productName) {
    const productsInCart = await this.page.$$(this.noOfProducts)
    for (const product of productsInCart) {
        console.log(await product.textContent())
        if (productName === await product.textContent()) {
            return true;
            break;
        }
    }
}

}
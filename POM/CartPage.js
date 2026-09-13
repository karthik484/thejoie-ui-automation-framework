const { expect } = require('@playwright/test');

class CartPage{

    constructor(page,OGprd){

        this.page = page;

        this.DecreseFstPrd = page.locator('[aria-label="Decrease Magical Milk Chocolate Waffle"]');
        this.DecreseSecPrd = page.locator('[aria-label="Decrease Test 3"]');
        this.EmptyCartText = page.locator('.empty .et');
        this.textVisible = page.locator('.cinfo');
        this.checkOut = page.locator('.checkout-btn');
        //this.waitfor = page.waitForTimeout(6000);
        this.closetheCart = page.locator('.x');
        this.Increseprd = page.locator('[aria-label="Increase Peri Peri Fries Pasta"]');
        this.totalcountIncart = page.locator('.mini-step .q');
        this.cartAmount =  page.locator('.cp');
        
    }

    async AddThePrductTOCart(emptycarttext){

       await this.DecreseFstPrd.click();
       await this.DecreseSecPrd.click();
        await expect(this.EmptyCartText).toHaveText(emptycarttext);

    }

    async AddProductandRemove(Kitkatwaffels,peanutWaffels,chocolateWaffels){
        await expect(this.textVisible.filter({hasText:Kitkatwaffels})).toBeVisible();
        await expect(this.textVisible.filter({hasText:peanutWaffels})).toBeVisible();
        await expect(this.textVisible.filter({hasText:chocolateWaffels})).toBeVisible();

        await this.DecreseFstPrd.click();
        await this.checkOut.click();
        await this.waitfor;
    }
    async closeCart(){
        await this.closetheCart.click();
    }
    async IncreseQTYincartpage(){

        await this.Increseprd.click();
    await expect(this.totalcountIncart).toHaveText('7');
    await this.checkOut.click();
    await this.page.waitForTimeout(6000);
    }

    async VDCartPagecheckout(){
        const cartamount = await this.cartAmount.textContent();
    console.log('cartamount:',cartamount);
    await this.checkOut.click();
    await this.page.waitForTimeout(6000);
    }

    async NameWithSPlcharacter(OGprd){
         this.Cartprdname =  page.getByText(OGprd).nth(1);
      expect(this.Cartprdname).toHaveText(OGprd);
     await this.checkOut.click();

    }


    async OrderwithInvalidPhNo(){
        
        await this.checkOut.click();
    }

    async sheduleorder(){
     await this.OrderwithInvalidPhNo();
    }
}
module.exports={CartPage};
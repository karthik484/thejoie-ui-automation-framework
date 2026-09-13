const { expect } = require('@playwright/test');
class MenuPage{

    constructor(page,OGprd){
 
        this.page = page;

        this.MenuTab = page.locator('div.nav-links').locator('a');
        this.products = page.locator('#cat-waffles article');
        this.cartBtn = page.locator('.lbl');
        this.placBtn = page.locator('.place-btn');
        this.pastaItems = page.locator('.catbar-in .chip');
        this.pastamenu = page.locator('#cat-pasta article');
        this.Addcount = page.locator('[aria-label="Add one Peri Peri Fries Pasta"]')
        this.itemForVDC = page.locator('[aria-label="Add KitKat Crunch Waffle to cart"]')
        this.chochipAddons = page.getByText('Chocochips');
      


    }

    async AddProductFromMenu(Prd1,Prd2){
        
        await this.MenuTab.nth(1).click();
        const count = await this.products.count();

    for (let i = 0; i < count; i++) {
        console.log(i);
        const product = this.products.nth(i);
        const text = await product.textContent();

        console.log(text);

    if (text.includes(Prd1) || text.includes(Prd2)) {

        await product.locator('.add-btn').click();
        await this.placBtn.click();
      
    }
}
await this.cartBtn.click();
    }

    async AddMultipleProduct(Kitkatwaffels,peanutWaffels,chocolateWaffels){

        await this.MenuTab.nth(1).click();
        const count = await this.products.count();

        for(let i = 0; i<count ; i++){

        const product = this.products.nth(i);
        const text = await product.textContent();

        if(text.includes(Kitkatwaffels)
            ||text.includes(peanutWaffels)
        ||text.includes(chocolateWaffels)){
             console.log("Adding:", text);
            await product.locator('.add-btn').click();
            await this.placBtn.click();
             console.log("Adding:", text);
        }

    }
    await this.cartBtn.click();



    }
    async UpdateQuantityMultipleTimes(PastaText){

        await this.MenuTab.nth(1).click();
        await this.pastaItems.filter({hasText:PastaText}).click();
        await this.page.waitForTimeout(6000);
        const totalpastacount = await this.pastamenu.count();
        console.log(totalpastacount);

        for(let i=0;i<totalpastacount;i++){

         const item = this.pastamenu.nth(i);
         const pastaText = await item.textContent();

         if(pastaText.includes("Peri Peri Fries Pasta")){
  
         await item.locator('.add-btn').click();

         break;

       }
    }
this.cartBtn.click();

    }

    async increasecount(){
        
    for(let i=0;i<5;i++){

     await this.Addcount.click();
    }

    await this.cartBtn.click();
    }
    async Prductcharges(){
      await this.MenuTab.click();
    await this.itemForVDC.click();
    await this.chochipAddons.click();
    await this.placBtn.click();
    await this.cartBtn.click();

    }

    async NameWithSplcharacter(OGprd){
         await this.MenuTab.nth(1).click();
         this.PrdName = this.page.getByText(OGprd).nth(1);
    this.addonPrdName = this.page.getByText(OGprd);
         console.log(this.PrdName);
        await this.itemForVDC.click();
          expect(this.PrdName).toHaveText(OGprd);
         await this.chochipAddons.click();
         await this.placBtn.click();
         await this.cartBtn.click();

    }

    async OrderwithInvalidPhNo(){

        await this.MenuTab.nth(1).click();
        await this.itemForVDC.click();
         await this.chochipAddons.click();
         await this.placBtn.click();
          await this.cartBtn.click();


    }

    async sheduleorder(){
     await this.OrderwithInvalidPhNo();
    }

    
}
module.exports={MenuPage};
class HomePage{

    constructor(page){
 
        this.page = page;
        //homepage
        this.offerPopUp = page.locator(".offer-pop-later");
    
    }

    async goto(){

        await this.page.goto("https://www.thejoie.in/");
    }

    async skipoffer(){

       await this.offerPopUp.click();

    }


}
module.exports={HomePage}
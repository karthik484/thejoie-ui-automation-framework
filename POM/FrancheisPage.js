const { expect } = require('@playwright/test');
class FrancheisPage{

    constructor(page){

        this.page = page ;

        this.francheisTab = page.locator('.nav-links [href="/franchise"]');
        this.FranchiesPageMsg = page.getByText(' Franchise with us');
        this.frName = page.locator("#fr-name");
        this.frPhone = page.locator("#fr-phone");
        this.frMail = page.locator("#fr-email");
        this.frstate =  page.locator("#fr-state");
        this.frcity = page.locator("#fr-city");
        this.frformat = page.locator("#fr-format");
        this.frinvestement = page.locator("#fr-invest");
        this.frSpace = page.locator("#fr-space");
        this.frTimeperiod = page.locator("#fr-timeline");
        this.frBusinessExp = page.locator("#fr-exp");
        this.frplaceBtn = page.locator('.place-btn');
        this.frconfirmationMsg = page.getByText("Enquiry received");
        this.phoneErr = page.getByText("Enter a valid 10-digit mobile");
        this.errorEmsg = page.locator('.emsg');

    }

    async FRenquirywithDetails(frname,frPhone,frMail,frstate,frcity,
                                     frformat,frinvestement,frSpace,frTimeperiod,frBusinessExp){
        

        await this.francheisTab.click();
            
            await expect(this.FranchiesPageMsg).toBeVisible();
        
            await this.frName.fill(frname);
            await this.frPhone.fill(frPhone);
            await this.frMail.fill(frMail);
            
            await this.frstate.selectOption(frstate);
            
            await this.frcity.selectOption(frcity);
            
            await this.frformat.selectOption(frformat);
            
            await this.frinvestement.selectOption(frinvestement);
            await this.frSpace.fill(frSpace);
            
            await this.frTimeperiod.selectOption(frTimeperiod);
            
            await this.frBusinessExp.selectOption(frBusinessExp);
        
            await this.frplaceBtn.click();
        
            
            await expect(this.frconfirmationMsg).toBeVisible();
    }

    async FRenquirywithInvalidDetails(frname,invalidfrPhone,frMail,frstate,frcity,
                                     frformat,frinvestement,frSpace,frTimeperiod,frBusinessExp){

         await this.francheisTab.click();
            
            await expect(this.FranchiesPageMsg).toBeVisible();
        
            await this.frName.fill(frname);
            await this.frPhone.fill(invalidfrPhone);
            await this.frMail.fill(frMail);
            
            await this.frstate.selectOption(frstate);
            
            await this.frcity.selectOption(frcity);
            
            await this.frformat.selectOption(frformat);
            
            await this.frinvestement.selectOption(frinvestement);
            await this.frSpace.fill(frSpace);
            
            await this.frTimeperiod.selectOption(frTimeperiod);
            
            await this.frBusinessExp.selectOption(frBusinessExp);
        
            await this.frplaceBtn.click();
        
            
    await expect(this.phoneErr).toBeVisible();

    console.log(await this.phoneErr.textContent());

    }
    async FRenquirywithoutDetails(){

        await this.francheisTab.click();
    
    await expect(this.FranchiesPageMsg).toBeVisible();
    await this.frplaceBtn.click();

    const expectedError = ['Enter a valid name (letters only)',
                           'Enter a valid 10-digit mobile',
                           'Enter a valid email',
                           'Select your state',
                           'Select your city'];

    await expect(this.errorEmsg).toHaveCount(expectedError.length);

    for(const message of expectedError){

        console.log(message);
        await expect(this.page.getByText(message,{exact: true})).toBeVisible();
    }

    
    }
}

module.exports={FrancheisPage};
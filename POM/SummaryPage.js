const { expect } = require('@playwright/test');

class SummaryPage{

    constructor(page){

        this.page = page;

        this.SummarypageText = page.locator('.modal-head h3');
        this.cusName = page.locator('#co-name');
        this.cusPhone = page.locator('#co-phone');
        this.cusEmail = page.locator('#co-email');
        this.CusNote = page.locator('#co-note');
        this.Deliveylocationbutton = page.locator('.loc-select-text');
        this.UseMyLoc = page.locator('.loc-picker-gps');
        this.confirmButton = page.locator('.loc-picker-confirm');
        this.wrongLocation = page.locator('.track-err');
        this.address = page.locator('#co-landmark');
        this.plcbtn = page.locator("//button[@class='place-btn']");
        this.paymentFrame = page.frameLocator('.razorpay-checkout-frame');
        this.cardNumber = this.paymentFrame.locator('[name="card.number"]');
        this.expiry = this.paymentFrame.locator('[name="card.expiry"]');
        this.cvv = this.paymentFrame.locator('[name="card.cvv"]');
        this.continuebtn = this.paymentFrame.getByText('Continue');
        this.cardsoption = this.paymentFrame.getByText('Cards');
        this.totalamount = page.locator('.or',{hasText: 'Cart total'}).locator('b');
        this.FeildError = page.locator('.err .emsg');
        this.sheduleforlater = page.locator("[class='pay-opt']");
        this.selectdate = page.locator("[type='date']");
        this.timefeild = page.locator("div select");
        this.exacttime = page.locator("option");
        this.dummy = page.locator("div select");



    }

    async DeliveryDetails(PageText,ConfirmationErrorText,customerName,customerPhone,customerEmail,customerNote){

        await expect(this.SummarypageText).toContainText(PageText);
        await this.cusName.fill(customerName);
        await this.cusPhone.fill(customerPhone);
        await this.cusEmail.fill(customerEmail);
        await this.CusNote.fill(customerNote);
        await this.Deliveylocationbutton.click();
        await this.page.waitForLoadState('networkidle');
        await this.UseMyLoc.click();
        await this.page.waitForTimeout(20000);
        await this.confirmButton.click();
        await expect(this.wrongLocation)
        .toHaveText(ConfirmationErrorText);
    }
    async ProceedToPayment(PageText,ConfirmationErrorText,cvvnumber,expiryDate,cardNumber,customerName,customerPhone,customerEmail,customerNote,Customeraddress){

        await expect(this.SummarypageText).toContainText(PageText,);
        await this.cusName.fill(customerName);
        await this.cusPhone.fill(customerPhone);
        await this.cusEmail.fill(customerEmail);
        await this.CusNote.fill(customerNote);
        await this.Deliveylocationbutton.click();
        await this.page.waitForLoadState('networkidle');
        await this.UseMyLoc.click();
        await this.page.waitForTimeout(20000);
        await this.confirmButton.click();
        await this.address.fill(Customeraddress);
        await this.plcbtn.click();
        
        await this.cardsoption.click();
        await this.cardNumber.fill(cardNumber);
        await this.expiry.fill(expiryDate);
        await this.cvv.fill(cvvnumber);
        await this.continuebtn.click();


    }

    async VerifytheDeliveryCharges(cartamount){
        const carttotal = await this.totalamount.textContent();
    console.log('carttotal',carttotal);
    await expect(carttotal).toBe(cartamount);
    await expect(page.locator('.modal-head h3')).toContainText('Almost there ');
await page.locator('#co-name').fill('karthik');
await page.locator('#co-phone').fill('7338939102');
await page.locator('#co-email').fill('karthickseerha04@gmail.com');
await page.locator('#co-note').fill('Testing palywright');
await page.locator('.loc-select-text').click();
await page.waitForLoadState('networkidle');
await page.locator('.loc-picker-gps').click();
await page.waitForTimeout(20000);
await page.locator('.loc-picker-confirm').click();
await page.locator('#co-landmark').fill("kamannahalli");
const ActualDeliveryCharges = await page.locator('.or',{hasText:' · Quick'}).locator('b').textContent();

const joieDiscount = await page.locator('.or',{hasText:'Delivery discount (Joie covers)'})
                     .locator('b').textContent();
                     
const customerdeliverycharges = await page.locator('.or',{hasText:'Your delivery charge'}).locator('b').textContent();

const actualDeliveryCharges = Number(
    ActualDeliveryCharges.replace(/[^\d.]/g, '')
);

const JoieDiscount = Number(
    joieDiscount.replace(/[^\d.-]/g, '')
);

const customerDeliveryCharges = Number(
    customerdeliverycharges.replace(/[^\d.]/g, '')
);

console.log("Actual Delivery Charge:", actualDeliveryCharges);
console.log("Joie Discount:", JoieDiscount);
console.log("Customer Delivery Charge:", customerDeliveryCharges);

expect(customerDeliveryCharges).toBeCloseTo(
    actualDeliveryCharges + JoieDiscount,
    2
);

    }

    async NamewithSplcharacter(feilderr,cusName,cusphNO){
        await this.cusName.fill(cusName);
    await this.cusPhone.fill(cusphNO);
    await this.Deliveylocationbutton.click();
    await this.UseMyLoc.click();
    await this.page.waitForTimeout(20000);
    await this.confirmButton.click();
    await this.plcbtn.click();

    expect(this.FeildError).toHaveText(feilderr);

    const errorMessage = await this.FeildError.innerText();

    console.log(errorMessage);
    }

    async OrderwithInvalidPhNo(cusName,cusphNO,phfeilderr){
     
        await this.cusName.fill(cusName);
        await this.cusPhone.fill(cusphNO);
         await this.Deliveylocationbutton.click();
         await this.UseMyLoc.click();
          await this.page.waitForTimeout(20000);
          await this.confirmButton.click();
          await this.plcbtn.click();
          expect(this.FeildError).toHaveText(phfeilderr);


    }

    async shedulelater(date,cusName,cusphNO){
        await this.sheduleforlater.click();
        await this.selectdate.fill(date);
        console.log(date);
        await this.page.waitForTimeout(20000);
        // await this.timefeild.nth(1).click();
        // await this.exacttime.nth(2).click();
        await this.dummy.nth(1).selectOption({ index: 1 });
        await this.cusName.fill(cusName);
        await this.cusPhone.fill(cusphNO);
        await this.Deliveylocationbutton.click();
        await this.UseMyLoc.click();
        await this.page.waitForTimeout(20000);
        await this.confirmButton.click();
        await this.plcbtn.click();
        
        



    }
}
module.exports={SummaryPage};
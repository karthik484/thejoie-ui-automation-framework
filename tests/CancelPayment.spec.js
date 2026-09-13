const{test,expect} = require('@playwright/test');
const CancelPayment = test ;

CancelPayment('Add the product and cancel the payment',async({browser})=>{

     const context = await browser.newContext({
        permissions: ['geolocation'],
        geolocation: {
            latitude: 12.937975079486964,
            longitude: 77.64450073242189

           // 13.06092, 80.25126
        }
    });
    const page = await context.newPage();

    const Churros = "Churros";
const chuItem = "Churros Platter with Triple Chocolate Dip [40 ml]"
const chuItem2 = "Regular Churros with Dark Chocolate Dip [40 ml]"

    // go to the joie.in
await page.goto('https://www.thejoie.in');
 // clpse the offerpopup
await page.locator('.offer-pop-later').click();
//click on menu tab
await page.locator('[href="/menu"]').nth(1).click();
// Select all catogories
const categories = page.locator('.catbar-in .chip');
const categoriesCount = await categories.count();
console.log(categoriesCount)

for(let i=0;i<categoriesCount;i++){

    const catogery = categories.nth(i);
    const text = await catogery.textContent();

    if(text.includes(Churros)){

        await catogery.click();
        break;

    }

}

const items = page.locator('#cat-churros article');
const itemsCount = await items.count();

for(let i = 0;i <itemsCount;i++){

    const myitem = items.nth(i);
    const itemtext = await myitem.textContent();
    //await page.pause();

    if(itemtext.includes(chuItem)){
        console.log("Matched:", itemtext);
        await myitem.locator('.add-btn').click();
        break;

    }

}
//await page.pause();
await page.locator('.cart-btn').click();
await expect(page.locator('.drawer-body'))
.toContainText(chuItem);

await page.locator('.checkout-btn').click();
await page.locator('#co-name').fill("Karthik");
await page.locator('#co-phone').fill("7338939102");
await page.locator('#co-email').fill("karthickseerha04@gmail.com");
await page.locator('#co-note').fill("playWright Testing");
await page.locator('.loc-select-btn').click();
await page.locator('.loc-picker-gps').click();
await page.waitForTimeout(20000);
await page.locator('.loc-picker-confirm').click();
await page.locator('#co-landmark').fill("100 feet road");
await page.locator('.place-btn').click();


//frame payment page 
const paymentframe = page.frameLocator('.razorpay-checkout-frame');
await paymentframe.getByText('Cards').click();
await paymentframe.locator('[name="card.number"]').fill("4748 4688 1536 2007");
await paymentframe.locator('[name="card.expiry"]').fill("12 / 29");
await paymentframe.locator('[name="card.cvv"]').fill("638");
await paymentframe.getByTestId('checkout-close').click();
// const exitMsg = await paymentframe.locator('.text-center').textContent();
// console.log(exitMsg);

await expect(
    paymentframe.getByText("Are you sure you want to exit?")
).toBeVisible();
await paymentframe.getByText('Yes, exit').click();
console.log("payment cancelled sucessfully");
})
const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const {MenuPage} = require('../POM/MenuPage');
const {HomePage} = require('../POM/HomePage');
const {CartPage} = require('../POM/CartPage');
const {SummaryPage} = require('../POM/SummaryPage');

test('Verify delivery charges after location selection',async({browser})=>{



    const context = await browser.newContext({
        permissions: ['geolocation'],
        geolocation: {
            latitude: 12.937975079486964,
            longitude: 77.64450073242189

           // 13.06092, 80.25126
        }
    });
    const page = await context.newPage();


   



    await page.goto('https://www.thejoie.in/');
    await page.locator('.offer-pop-x').click();
    await page.locator('.nav-links [href="/menu"]').click();
    await page.locator('[aria-label="Add KitKat Crunch Waffle to cart"]').click();
    await page.getByText('Chocochips').click();
    await page.locator('.place-btn').click();
    await page.locator('.cart-btn').click();
    const cartamount = await page.locator('.cp').textContent();
    console.log('cartamount:',cartamount);
    await page.locator('.checkout-btn').click();
    await page.waitForTimeout(6000);
    const carttotal = await page.locator('.or',{hasText: 'Cart total'}).locator('b').textContent();
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

    

});
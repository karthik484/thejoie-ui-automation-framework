const { test, expect } = require('@playwright/test');

const CategorySearch = test ;

CategorySearch('Browse categories instead of search and complete search',async({browser})=>{
 const context = await browser.newContext({
        permissions: ['geolocation'],
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

for(let i=1;i<categoriesCount;i++){

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
    console.log("LOOP START:", i);

    const myitem = items.nth(i);
    const itemtext = await myitem.textContent();
    //await page.pause();

    if(itemtext.includes(chuItem)||itemtext.includes(chuItem2)){
        
        console.log("Matched:", itemtext);
        await myitem.locator('.add-btn').click();
        //break;

    }

}
//await page.pause();
await page.locator('.cart-btn').click();
await expect(page.locator('.drawer-body'))
.toContainText(chuItem);

await expect(page.locator('.drawer-body'))
.toContainText(chuItem2);

console.log("Both the items are matching");

await page.locator('.checkout-btn').click();
await page.locator('#co-name').fill("Karthik");
await page.locator('#co-phone').fill("7338939102");
await page.locator('#co-email').fill("karthickseerha04@gmail.com");
await page.locator('#co-note').fill("playWright Testing");
await page.locator('.loc-select-btn').click();
await page.locator('.loc-picker-gps').click();
await page.locator('.loc-picker-confirm').click();
const errorText = await page.locator('.track-err').textContent();
await expect(page.locator('.track-err'))
.toContainText("Sorry, delivery is unavailable at your selected location.");
console.log(errorText);




});

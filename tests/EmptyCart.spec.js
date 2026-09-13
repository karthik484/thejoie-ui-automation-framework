const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const {MenuPage} = require('../POM/MenuPage');
const {HomePage} = require('../POM/HomePage');
const {CartPage} = require('../POM/CartPage');
const { json } = require('node:stream/consumers');
const EmptycardDataSet = JSON.parse(JSON.stringify(require('../Utils/EmptyCartTestData.json')));

test('Add and remove the product from cart',async({page})=>{

    const homepage = new HomePage(page);
    await homepage.goto();
    await homepage.skipoffer();
    const menupage = new MenuPage(page);
    await menupage.AddProductFromMenu(EmptycardDataSet.Prd1,EmptycardDataSet.Prd2);
    const cartpage = new CartPage(page);
    await cartpage.AddThePrductTOCart(EmptycardDataSet.emptycarttext);



    
});
const {MenuPage} = require('../POM/MenuPage');
const {HomePage} = require('../POM/HomePage');
const {CartPage} = require('../POM/CartPage');
const {SummaryPage} = require('../POM/SummaryPage');
const { test, expect } = require('../fixtures/base');
const AddmultipleDataSet = JSON.parse(JSON.stringify(require('../Utils/AddMultipleTestData.json')));


test.use({
    permissions: ['geolocation'],
    geolocation: {
        latitude: 13.06092,
        longitude: 80.25126
    }
});

test('Add multiple product and remove one and checkout',async({homePage, page})=>{

    const menupage = new MenuPage(page);
    await menupage.AddMultipleProduct(AddmultipleDataSet.Kitkatwaffels,
                                      AddmultipleDataSet.peanutWaffels,
                                      AddmultipleDataSet.chocolateWaffels);

    const cartpage = new CartPage(page);
    await cartpage.AddProductandRemove(AddmultipleDataSet.Kitkatwaffels,
                                        AddmultipleDataSet.peanutWaffels,
                                        AddmultipleDataSet.chocolateWaffels);

    const summarypage = new SummaryPage(page);
    await summarypage.DeliveryDetails(AddmultipleDataSet.PageText,
                                 AddmultipleDataSet.ConfirmationErrorText
                                ,AddmultipleDataSet.customerName,AddmultipleDataSet.customerPhone
                                ,AddmultipleDataSet.customerEmail,AddmultipleDataSet.customerNote);

});
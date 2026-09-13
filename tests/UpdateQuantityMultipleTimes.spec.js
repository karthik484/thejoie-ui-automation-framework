const { test, expect } = require('../fixtures/base');
const {CartPage} = require('../POM/CartPage');
const {HomePage} = require('../POM/HomePage');
const {MenuPage} = require('../POM/MenuPage');
const {SummaryPage} = require('../POM/SummaryPage');
const updateQuantityDataSet = JSON.parse(JSON.stringify(require('../Utils/UpdateQuantityTestData.json')));


test.use({
     permissions: ['geolocation'],
        geolocation: {
            latitude: 12.937975079486964,
            longitude: 77.64450073242189
    }
});

test('Update quantity multiple times before checkout',async({homePage, page})=>{


const menupage = new MenuPage(page);
await menupage.UpdateQuantityMultipleTimes(updateQuantityDataSet.PastaText);
const cartpage = new CartPage(page);
await cartpage.closeCart();
await menupage.increasecount();
await cartpage.IncreseQTYincartpage();
const summarypage = new SummaryPage(page);
await summarypage.ProceedToPayment(updateQuantityDataSet.PageText,updateQuantityDataSet.ConfirmationErrorText
                             ,updateQuantityDataSet.cvvnumber,updateQuantityDataSet.expiryDate,updateQuantityDataSet.cardNumber
                             ,updateQuantityDataSet.customerName,updateQuantityDataSet.customerPhone,updateQuantityDataSet.customerEmail
                             ,updateQuantityDataSet.customerNote,updateQuantityDataSet.Customeraddress);

});
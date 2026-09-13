const { test ,expect} = require('../../fixtures/base');
const {MenuPage} = require('../../POM/MenuPage');
const {HomePage} = require('../../POM/HomePage');
const {CartPage} = require('../../POM/CartPage');
const {SummaryPage} = require('../../POM/SummaryPage');
const TDPhNo = JSON.parse(JSON.stringify(require('../../Utils/orderwithinvalidphNo.json')));

test.use({
    permissions: ['geolocation'],
    geolocation: {
       latitude: 12.937975079486964,
            longitude: 77.64450073242189
    }
});
TDPhNo.forEach((dataPH) => {
    

test(`OrderWithInvalidPhNo- ${dataPH.cusphNO}`,async({homePage,page})=>{

   

const menupage = new MenuPage(page);
await menupage.OrderwithInvalidPhNo();

const cartpage = new CartPage(page);
await cartpage.OrderwithInvalidPhNo();

const summarypage = new SummaryPage(page);
await summarypage.OrderwithInvalidPhNo(dataPH.cusName,
    dataPH.cusphNO,
    dataPH.phfeilderr
);

})
});
const { test ,expect} = require('../../fixtures/base');
const {MenuPage} = require('../../POM/MenuPage');
const {HomePage} = require('../../POM/HomePage');
const {CartPage} = require('../../POM/CartPage');
const {SummaryPage} = require('../../POM/SummaryPage');
const TDsplchar = JSON.parse(JSON.stringify(require('../../Utils/NamewithSPLcharTD.json')));

test.use({
    permissions: ['geolocation'],
    geolocation: {
       latitude: 12.937975079486964,
            longitude: 77.64450073242189
    }
});

TDsplchar.forEach((data)=>{
 test(`NameWithSplChar - ${data.cusName}`,async({homePage,page})=>{

   


   

const menupage = new MenuPage(page,data.OGprd);
await menupage.NameWithSplcharacter(data.OGprd);

   
    
    const cartpage = new CartPage(page,data.OGprd)
    await cartpage.NameWithSPlcharacter(data.OGprd);

   

const summarypage = new SummaryPage(page);
await summarypage.NamewithSplcharacter(data.feilderr,data.cusName,data.cusphNO);


});
});
